import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import { useNavigate } from 'react-router-dom'
import { CForm, CInputGroup, CFormInput, CInputGroupText } from '@coreui/react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'

const AppSearch = ({ className }) => {
    const urlParams = new URLSearchParams(window.location.search)
    const queryUrl = urlParams.get('q') ? urlParams.get('q') : ''
    const [query, setQuery] = useState(queryUrl)
    const navigate = useNavigate()

    const handleSubmit = async (e) => {
        e.preventDefault()
        if (!query || query.trim().length === 0) return null
        if (/^[a-fA-F0-9]{24}$/.test(query)) return navigate(`/track/${query}`)
        navigate(`/search?q=${query}`)
    }

    useEffect(() => {
        setQuery(queryUrl)
    }, [queryUrl])

    return (
        <CForm onSubmit={handleSubmit} className={className}>
            <CInputGroup>
                <CFormInput
                    aria-label="query"
                    name="q"
                    value={query}
                    placeholder="Find & track shipment..."
                    onChange={(e) => setQuery(e.target.value)}
                    aria-describedby="basic-addon"
                    style={{
                        height: '40px',
                        fontSize: '0.9em',
                    }}
                />
                <CInputGroupText id="basic-addon" onClick={handleSubmit} className="px-3">
                    <FontAwesomeIcon icon={faMagnifyingGlass} />
                </CInputGroupText>
            </CInputGroup>
        </CForm>
    )
}

export default React.memo(AppSearch)

AppSearch.propTypes = {
    className: PropTypes.string.isRequired,
}
