import { ObjectId } from 'mongodb'
import express from 'express'
import { Xendit } from 'xendit-node'
import database from '../../../models/mongodb.js'
import logger from '../../../utils/logger.js'
import auth from '../../../middleware/auth.js'
import freight from '../../../middleware/freight.js'
import invoices from '../../../middleware/invoices.js'
import recaptcha from '../../../middleware/recaptcha.js'
import { NODE_ENV } from '../../../config.js'
import activity from '../../../components/activity.js'
import documents from '../../../middleware/documents.js'
import { upload, uploadToS3 } from '../../../components/s3/documents.js'
import crypto from 'crypto'

const router = express.Router()
const limit = 20

/**
 * Get all documents
 */
router.post('/', auth, async (req, res) => {
    try {
        // if (!req.user) return res.status(401).json({ error: 'Unauthorized' })
        const { page } = req.body
        if (!page) return res.status(400).json({ error: 'Invalid request' })
        const current_page = parseInt(page) || 1
        const skip = (current_page - 1) * limit
        const isUser = req.user ? !['super_admin', 'admin', 'staff'].includes(req.user.role) : null

        let filter = isUser ? { user_id: req.user._id } : {}
        const db = await database()
        const documentsCollection = db.collection('documents')

        const [totalItems, items] = await Promise.all([
            documentsCollection.countDocuments(filter),
            documentsCollection
                .find(filter)
                .sort({ last_accessed: -1 })
                .skip(skip)
                .limit(limit)
                .toArray(),
        ])

        const data = {
            data: items,
            totalPages: Math.ceil(totalItems / limit),
            currentPage: current_page,
        }

        return res.status(200).json(data)
    } catch (e) {
        logger.error(e)
    }
    res.status(500).json({ error: 'Internal server error' })
})

/**
 * Get address by ID
 */
router.get('/:id', [auth, documents], async (req, res) => res.status(200).json(req.documents))

/**
 * Upload a document
 */
router.post(
    '/:id/upload',
    [auth, documents, upload.fields([{ name: 'exportLicense' }, { name: 'certificateOfOrigin' }])],
    async (req, res) => {
        try {
            const { files } = req
            if (!files || !files.exportLicense || !files.certificateOfOrigin)
                return res.status(400).json({ error: 'Invalid request' })

            const exportLicenseFile = files.exportLicense[0]
            const certificateOfOriginFile = files.certificateOfOrigin[0]

            const [exportLicenseUrl, certificateOfOriginUrl] = await Promise.all([
                uploadToS3(
                    exportLicenseFile,
                    req.documents.documents && req.documents.documents[0].file
                        ? req.documents.documents[0].file
                        : crypto.randomBytes(6).toString('hex'),
                ),
                uploadToS3(
                    certificateOfOriginFile,
                    req.documents.documents && req.documents.documents[1].file
                        ? req.documents.documents[1].file
                        : crypto.randomBytes(6).toString('hex'),
                ),
            ])

            const db = await database()
            const documentsCollection = db.collection('documents')
            await documentsCollection.updateOne(
                { _id: new ObjectId(req.documents._id) },
                {
                    $set: {
                        documents: [
                            {
                                name: 'Export License',
                                type: 'Permit & License',
                                status: 'Under Review',
                                file: exportLicenseUrl,
                            },
                            {
                                name: 'Certificate of Origin',
                                type: 'Regulatory Certificate',
                                status: 'Under Review',
                                file: certificateOfOriginUrl,
                            },
                        ],
                        updated_at: Date.now(),
                    },
                },
            )

            return res.status(200).json({
                message: 'Files uploaded successfully',
            })
        } catch (err) {
            logger.error(err)
            res.status(500).json({ error: 'Internal server error' })
        }
    },
)

/**
 * Get file for preview
 */
router.post('/file/:id', [auth, documents], async (req, res) => {
    try {
        const { file } = req.body
        if (!file) return res.status(400).json({ error: 'Invalid request' })

        req.documents.documents.forEach((document) => {
            logger.info(document.file)
            if (document.file && document.file.includes(file)) {
                logger.info(`File requested: ${document.file}`)
                return res.status(200).send()
            }
        })
        return res.status(404).json({ error: 'File not found' })
    } catch (err) {
        logger.error(err)
        res.status(500).json({ error: 'Internal server error' })
    }
})

export default router
