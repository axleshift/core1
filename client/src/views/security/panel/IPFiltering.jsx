import React, { useEffect, useState } from 'react'
import {
    CFormInput,
    CFormSelect,
    CRow,
    CCol,
    CSpinner,
    CButton,
    CAlert,
    CContainer,
} from '@coreui/react'
import ReCAPTCHA from 'react-google-recaptcha'
import { VITE_APP_RECAPTCHA_SITE_KEY } from '../../../config'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleExclamation } from '@fortawesome/free-solid-svg-icons'
import { useToast } from '../../../components/AppToastProvider'

const IPFiltering = () => {
    const recaptchaRef = React.useRef()
    const { addToast } = useToast()
    const [loading, setLoading] = useState(true)
    const [state, setState] = useState('whitelist')
    const [ipList, setIpList] = useState([])
    const [ipListCopy, setIpListCopy] = useState([])

    const fetchData = async () => {
        axios
            .get(`/sec/management/ip-filtering`)
            .then((response) => {
                setState(response.data.filter_mode)
                setIpList(response.data.ip.map((ip) => ({ ip, checked: false })))
                setIpListCopy(response.data.ip.map((ip) => ({ ip, checked: false })))
            })
            .catch((error) => {
                const message =
                    error.response?.data?.error ||
                    (error.message === 'network error'
                        ? 'Server is offline or restarting please wait'
                        : error.message)
                addToast(message)
            })
            .finally(() => setLoading(false))
    }

    const saveData = async () => {
        const recaptcha = await recaptchaRef.current.executeAsync()
        setLoading(true)
        axios
            .post(`/sec/management/ip-filtering`, {
                recaptcha_ref: recaptcha,
                filter_mode: state,
                ip: ipList,
            })
            .then((response) => {
                if (response.data.error) return addToast(response.data.error)
                addToast('Changes saved successfully', 'Success')
                setIpListCopy(ipList)
            })
            .catch((error) => {
                const message =
                    error.response?.data?.error ||
                    (error.message === 'network error'
                        ? 'Server is offline or restarting please wait'
                        : error.message)
                addToast(message)
            })
            .finally(() => setLoading(false))
    }

    useEffect(() => {
        fetchData()
    }, [])

    const handleAddIp = () => {
        setIpList([...ipList, { ip: '', checked: false }])
    }

    const handleIpChange = (index, value) => {
        const newIpList = [...ipList]
        newIpList[index].ip = value
        setIpList(newIpList)
    }

    const handleCheckboxChange = (index, checked) => {
        const newIpList = [...ipList]
        newIpList[index].checked = checked
        setIpList(newIpList)
    }

    const handleDeleteIp = () => {
        const selectedItems = ipList.filter((item) => item.checked)
        if (selectedItems.length === 0) return addToast('Please select at least one IP to delete.')
        setIpList(ipList.filter((item) => !item.checked))
    }

    if (loading)
        return (
            <div className="loading-overlay">
                <CSpinner color="primary" variant="grow" />
            </div>
        )

    return (
        <div>
            <ReCAPTCHA ref={recaptchaRef} size="invisible" sitekey={VITE_APP_RECAPTCHA_SITE_KEY} />

            <CAlert color="warning" className="small">
                <FontAwesomeIcon icon={faCircleExclamation} className="me-2" /> Block or allow
                specific set of address on who can access this platform.
            </CAlert>

            <CRow className="align-items-center mb-2">
                <CCol>
                    <h4 className="mb-0">IP Filtering</h4>
                </CCol>
                <CCol className="text-right d-flex justify-content-end">
                    <CButton color="primary" onClick={handleAddIp}>
                        New
                    </CButton>
                    <CButton color="danger" onClick={handleDeleteIp} className="ms-2">
                        Delete
                    </CButton>
                </CCol>
            </CRow>
            <CRow className="align-items-center mb-2">
                <CCol className="d-flex align-items-center">
                    <span className="me-3">Filter Mode:</span>
                    <CFormSelect
                        aria-label="Select whitelist or blacklist"
                        onChange={(e) => setState(e.target.value)}
                        value={state}
                        className="w-auto"
                    >
                        <option value="whitelist">Whitelist</option>
                        <option value="blacklist">Blacklist</option>
                    </CFormSelect>
                </CCol>
            </CRow>
            {ipList.length === 0 && ipListCopy.length === 0 && (
                <CContainer className="my-5">
                    <div className="text-center">
                        <div className="text-body-secondary">
                            <h1 className="d-block text-danger">No IP addresses added yet.</h1>
                            <span>Please click &quot;New&quot; to add a IP address.</span>
                        </div>
                    </div>
                </CContainer>
            )}
            {ipList.map((item, index) => (
                <div key={index} className="d-flex mb-2">
                    <input
                        className="me-3"
                        type="checkbox"
                        checked={item.checked}
                        onChange={(e) => handleCheckboxChange(index, e.target.checked)}
                    />
                    <CFormInput
                        type="text"
                        value={item.ip}
                        onChange={(e) => handleIpChange(index, e.target.value)}
                        placeholder="Enter IP address"
                    />
                </div>
            ))}
            <CButton
                color="primary"
                onClick={saveData}
                className="mb-4"
                disabled={ipList.length === 0 && ipListCopy.length === 0}
            >
                Apply all changes
            </CButton>
            <div className="text-muted">
                Examples:
                <ul>
                    <li>Single IP: 192.168.100.1</li>
                    <li>IP Range: 192.168.100.1-192.168.100.200</li>
                </ul>
            </div>
        </div>
    )
}

export default IPFiltering
