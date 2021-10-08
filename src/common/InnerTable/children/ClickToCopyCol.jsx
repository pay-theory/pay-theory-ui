import React, { useState } from 'react'
import PropTypes from 'prop-types'

const ClickToCopyCol = ({ className, row, col, content }) => {
    const INITIAL = 'Click to Copy'
    const SUCCESS = 'Copied!'
    const [label, setLabel] = useState(INITIAL)

    const changeLabel = () => {
        setLabel(SUCCESS)
        setTimeout(() => {
            setLabel(INITIAL)
        }, 5000)
    }

    function fallbackCopyTextToClipboard() {
        const textArea = document.createElement('textarea')
        textArea.value = content

        // Avoid scrolling to bottom
        textArea.style.top = '0'
        textArea.style.left = '0'
        textArea.style.position = 'fixed'

        document.body.appendChild(textArea)
        textArea.focus()
        textArea.select()

        try {
            document.execCommand('copy')
            changeLabel()
        } catch (err) {
            console.error('Copy: Oops, unable to copy', err)
        }

        document.body.removeChild(textArea)
    }
    function copyTextToClipboard() {
        if (label === INITIAL) {
            if (!navigator.clipboard) {
                fallbackCopyTextToClipboard()
                return
            }
            navigator.clipboard.writeText(content).then(
                function () {
                    console.log('Async: Copying to clipboard was successful!')
                    changeLabel()
                },
                function (err) {
                    fallbackCopyTextToClipboard()
                }
            )
        }
    }

    return (
        <td
            className={`cell click-to-copy ${className}`}
            data-testid='unlinked-column'
            key={`${className}-${row}-${col}`}
        >
            <p className='content' onClick={copyTextToClipboard}>
                {content}
            </p>
            <p className='click-to-copy-tooltip'>{label}</p>
            <style jsx='true'>
                {`
                    .click-to-copy-tooltip {
                        visibility: hidden;
                        background-color: var(--grey);
                        color: white;
                        text-align: center;
                        border-radius: 6px;
                        padding: 2px 18px 5px;
                        position: absolute;
                        z-index: 1;
                        white-space: nowrap;
                        box-shadow: 0px 2px 4px var(--black-opaque-32);
                        opacity: 0;
                        transition: opacity 0.15s ease-in-out;
                        will-change: transform;
                    }

                    .click-to-copy-tooltip {
                        bottom: 100%;
                        left: 50%;
                        transform: translateX(-50%);
                    }

                    .cell.click-to-copy:hover
                        .click-to-copy-tooltip:not(:hover) {
                        visibility: visible;
                        opacity: 1;
                        transition: opacity 0.2s ease-in-out;
                    }

                    .click-to-copy-tooltip::after {
                        content: '';
                        position: absolute;
                        top: 100%;
                        left: 50%;
                        margin-left: -7px;
                        border-width: 7px;
                        border-style: solid;
                        border-color: var(--grey) transparent transparent
                            transparent;
                    }
                `}
            </style>
        </td>
    )
}

ClickToCopyCol.propTypes = {
    className: PropTypes.string.isRequired,
    row: PropTypes.number.isRequired,
    col: PropTypes.number.isRequired,
    content: PropTypes.string.isRequired
}

export default ClickToCopyCol
