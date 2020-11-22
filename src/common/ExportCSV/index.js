import React, { useEffect } from 'react'
import PropTypes from 'prop-types'

import { arrayToCSV } from '../generalUtils'

const LABEL = `Export CSV`

/* global Blob URL */
const ExportCSV = ({ id, items, fileName }) => {
    useEffect(() => {
        if (items.length > 0) {
            const text = arrayToCSV(items)
            const data = new Blob([text], { type: 'text/csv' })

            const url = URL.createObjectURL(data)

            document.getElementById(id).href = url
        } else {
            document.getElementById(id).href = null
        }
    }, [items])
    return (
        <a
            className={`export-csv ${items.length ? 'active' : ''}`}
            data-testid='export-csv'
            download={fileName}
            href=''
            id={id}
            onClick={(e) => {
                if (items.length === 0) e.preventDefault()
            }}
        >
            <i className='fas fa-file-csv' />
            <p>{LABEL}</p>
            <style global='true' jsx='true'>
                {`
                    .export-csv,
                    .export-csv:hover,
                    .export-csv:active {
                        display: flex;
                        align-items: center;
                        justify-content: center;
                        text-decoration: none;
                        cursor: default;
                        color: #CAC4CA;
                        background-color: #F2F2F2;
                        padding: 0px 16px;
                        height: 35px;
                        border-radius: 5px;
                    }

                    .export-csv i {
                        font-size: 20px;
                        margin-right: 10px;
                    }

                    .export-csv.active {
                        color: #FFFFFF;
                        cursor: pointer;
                        font-family: inherit;
                        font-size: 16px;
                        border: none;
                        background-color: #7C2CDD;
                    }
                `}
            </style>
        </a>
    )
}

ExportCSV.propTypes = {
    fileName: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
    items: PropTypes.array.isRequired
}

export default ExportCSV
