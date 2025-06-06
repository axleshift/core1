import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import {
    CForm,
    CRow,
    CCol,
    CFormSwitch,
    CFormCheck,
    CFormSelect,
    CTabs,
    CTabList,
    CTab,
    CTabContent,
    CTabPanel,
    CButton,
    CFormInput,
} from '@coreui/react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import PropTypes from 'prop-types'
import Shipment from './shipment'
import countries from './countries'

const Form = ({ shipment, setShipment, data, type, shipmentRef }) => {
    const { form, setForm, loading, setLoading } = data
    const formRef = React.useRef(null)

    const handleSwitchChange = (e) => {
        setForm({ ...form, is_import: e.target.checked })
    }

    const handleInputChange = (e, field) => {
        const [prefix, index, key] = field.split('.')
        const updatedField = [...form[prefix]]
        updatedField[index] = { ...updatedField[index], [key]: e.target.value }
        setForm({ ...form, [prefix]: updatedField })
    }

    const renderLocationFields = (prefix) => (
        <>
            <CRow xs={{ gutter: 2 }}>
                <CCol md>
                    <CFormInput
                        type="text"
                        floatingLabel="Country"
                        list={`${prefix}-country-list`}
                        value={form[prefix][0].country}
                        onChange={(e) => handleInputChange(e, `${prefix}.0.country`)}
                        required
                        disabled={form.status !== 'to_pay'}
                    />
                    <datalist id={`${prefix}-country-list`}>
                        {countries.map((country, index) => (
                            <option key={index} value={country.name} />
                        ))}
                    </datalist>
                </CCol>
                <CCol md>
                    <CFormInput
                        type="text"
                        floatingLabel={type === 'business' ? 'City' : 'City (Optional)'}
                        className="mb-2"
                        value={form[prefix][0].city}
                        onChange={(e) => handleInputChange(e, `${prefix}.0.city`)}
                        required={type === 'business'}
                        disabled={form.status !== 'to_pay'}
                    />
                    <CFormInput
                        type="number"
                        floatingLabel={type === 'business' ? 'Zip Code' : 'Zip Code (Optional)'}
                        value={form[prefix][0].zip_code}
                        onChange={(e) => handleInputChange(e, `${prefix}.0.zip_code`)}
                        required={type === 'business'}
                        disabled={form.status !== 'to_pay'}
                    />
                </CCol>
            </CRow>
            {prefix === 'to' && (
                <CFormCheck
                    label="Residential Address"
                    checked={form.isResidentialAddress}
                    onChange={(e) => setForm({ ...form, isResidentialAddress: e.target.checked })}
                    disabled={form.status !== 'to_pay'}
                />
            )}
        </>
    )

    return (
        <>
            <CForm ref={formRef}>
                <div className="d-flex justify-content-end">
                    <CFormSwitch
                        label="Import Statement"
                        checked={form.is_import}
                        onChange={handleSwitchChange}
                        disabled={form.status !== 'to_pay'}
                    />
                </div>
                {form.is_import ? (
                    <>
                        <span className="fw-bold">To</span>
                        {renderLocationFields('to')}
                        <span className="fw-bold">From</span>
                        {renderLocationFields('from')}
                    </>
                ) : (
                    <>
                        <span className="fw-bold">From</span>
                        {renderLocationFields('from')}
                        <span className="fw-bold">To</span>
                        {renderLocationFields('to')}
                    </>
                )}

                {!shipment && (
                    <div className="d-flex justify-content-center mb-4 mt-3">
                        <CButton
                            className="btn btn-primary px-5"
                            onClick={() => {
                                if (formRef.current.checkValidity()) {
                                    setShipment(true)
                                    setTimeout(() => {
                                        const element = document.getElementById('shipment')
                                        if (element) {
                                            element.scrollIntoView({ behavior: 'smooth' })
                                        }
                                    }, 0)
                                } else {
                                    formRef.current.reportValidity()
                                }
                            }}
                        >
                            Continue
                        </CButton>
                    </div>
                )}
            </CForm>

            {shipment && <Shipment data={data} shipmentRef={shipmentRef} />}
        </>
    )
}

const ShippingAs = ({ data }) => {
    const { form, setForm, loading, setLoading } = data
    const [shipment, setShipment] = useState(form.internal)
    const shipmentRef = React.useRef()

    return (
        <div ref={shipmentRef}>
            <CTabs
                activeItemKey={form.internal ? (form.type === 'private' ? 1 : 2) : 1}
                className="mb-2"
            >
                <CTabList variant="underline-border">
                    <CTab
                        aria-controls="private-tab-pane"
                        itemKey={1}
                        disabled={form.internal}
                        onClick={(e) => {
                            if (form.items.length > 1) {
                                const confirmSwitch = window.confirm(
                                    'Switching tabs will clear the shipment items. Do you want to continue?',
                                )
                                if (!confirmSwitch) {
                                    e.preventDefault()
                                    return
                                }
                            }
                            setForm({ ...form, type: 'private', items: [] })
                            setShipment(false)
                        }}
                    >
                        Private Person
                    </CTab>
                    <CTab
                        aria-controls="business-tab-pane"
                        itemKey={2}
                        disabled={form.internal}
                        onClick={(e) => {
                            if (form.items.length > 1) {
                                const confirmSwitch = window.confirm(
                                    'Switching tabs will clear the shipment items. Do you want to continue?',
                                )
                                if (!confirmSwitch) {
                                    e.preventDefault()
                                    return
                                }
                            }
                            setForm({ ...form, type: 'business', items: [] })
                            setShipment(false)
                        }}
                    >
                        Business
                    </CTab>
                </CTabList>
                <CTabContent>
                    <CTabPanel className="p-2" aria-labelledby="private-tab-pane" itemKey={1}>
                        <Form
                            shipment={shipment}
                            setShipment={setShipment}
                            data={data}
                            shipmentRef={shipmentRef}
                            type="private"
                        />
                    </CTabPanel>
                    <CTabPanel className="p-2" aria-labelledby="business-tab-pane" itemKey={2}>
                        <Form
                            shipment={shipment}
                            setShipment={setShipment}
                            data={data}
                            shipmentRef={shipmentRef}
                            type="business"
                        />
                    </CTabPanel>
                </CTabContent>
            </CTabs>
        </div>
    )
}

export default ShippingAs

ShippingAs.propTypes = {
    data: PropTypes.object.isRequired,
}

Form.propTypes = {
    shipment: PropTypes.bool.isRequired,
    setShipment: PropTypes.func.isRequired,
    data: PropTypes.object.isRequired,
    type: PropTypes.string.isRequired,
    shipmentRef: PropTypes.object.isRequired,
}
