import React, { useState, useEffect } from 'react'
import {
    CInputGroup,
    CFormInput,
    CInputGroupText,
    CForm,
    CFormSelect,
    CRow,
    CCol,
    CCard,
    CCardTitle,
    CSpinner,
    CCardBody,
    CTable,
    CTableHead,
    CTableRow,
    CTableDataCell,
    CTableBody,
    CTableHeaderCell,
} from '@coreui/react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
import parseTimestamp from '../../../utils/Timestamp'
import { useToast } from '../../../components/AppToastProvider'

const Sentry = () => {
    const { addToast } = useToast()
    const [loading, setLoading] = useState(true)
    const [result, setResult] = useState([])

    const fetchData = async () => {
        axios
            .get(`/sec/management/sentry`)
            .then((response) => setResult(response.data))
            .catch((error) => {
                const message =
                    error.response?.data?.error || 'Server is offline or restarting please wait'
                addToast(message)
            })
            .finally(() => setLoading(false))
    }

    useEffect(() => {
        fetchData()
    }, [])

    if (loading)
        return (
            <div className="loading-overlay">
                <CSpinner color="primary" variant="grow" />
            </div>
        )

    if (result.length === 0)
        return (
            <CRow className="justify-content-center my-5">
                <CCol md={6}>
                    <div className="clearfix">
                        <h1 className="float-start display-3 me-4">OOPS</h1>
                        <h4>There was no issues yet.</h4>
                        <p>Check it out later</p>
                    </div>
                </CCol>
            </CRow>
        )

    return (
        <div>
            <CCard>
                <CCardBody>
                    <CCardTitle>Error Reports</CCardTitle>
                    <CTable hover responsive className="table-even-width">
                        <CTableHead>
                            <CTableRow>
                                <CTableHeaderCell className="text-muted poppins-regular table-header-cell-no-wrap">
                                    Title
                                </CTableHeaderCell>
                                <CTableHeaderCell className="text-muted poppins-regular table-header-cell-no-wrap">
                                    Culprit
                                </CTableHeaderCell>
                                <CTableHeaderCell className="text-muted poppins-regular table-header-cell-no-wrap">
                                    Level
                                </CTableHeaderCell>
                                <CTableHeaderCell className="text-muted poppins-regular table-header-cell-no-wrap">
                                    Status
                                </CTableHeaderCell>
                                <CTableHeaderCell className="text-muted poppins-regular table-header-cell-no-wrap">
                                    Priority
                                </CTableHeaderCell>
                                <CTableHeaderCell className="text-muted poppins-regular table-header-cell-no-wrap">
                                    Count
                                </CTableHeaderCell>
                                <CTableHeaderCell className="text-muted poppins-regular table-header-cell-no-wrap">
                                    Last Updated
                                </CTableHeaderCell>
                            </CTableRow>
                        </CTableHead>
                        <CTableBody>
                            {result.map((issue, index) => (
                                <CTableRow key={index}>
                                    <CTableDataCell>{issue.title}</CTableDataCell>
                                    <CTableDataCell>{issue.culprit}</CTableDataCell>
                                    <CTableDataCell>{issue.level}</CTableDataCell>
                                    <CTableDataCell>{issue.status}</CTableDataCell>
                                    <CTableDataCell>{issue.priority}</CTableDataCell>
                                    <CTableDataCell>{issue.count}</CTableDataCell>
                                    <CTableDataCell>
                                        {parseTimestamp(new Date(issue.updated_at).getTime())}
                                    </CTableDataCell>
                                </CTableRow>
                            ))}
                        </CTableBody>
                    </CTable>
                </CCardBody>
            </CCard>
        </div>
    )
}

export default Sentry
