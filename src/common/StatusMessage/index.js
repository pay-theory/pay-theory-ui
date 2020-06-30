import React from 'react'
import PropTypes from 'prop-types'

/* eslint react/no-multi-comp: 0 */
/* eslint scanjs-rules/call_setTimeout: 0 */
const ErrorMessage = ({ message, removeError }) => {
    setTimeout(() => {
        removeError()
    }, 4000)

    return (
        <div className='error' data-testid='error-content' id='error-status'>
            {`Error: ${message} `}
            <br />
            <br />
            <br />
            {`If you continue to have problems, `}
            <a href='mailto:support@paytheory.com'>{`contact support `}</a>
            <style jsx='true'>
                {`
                    .error {
                        background-color: #feeded;
                        color: #ed454c;
                        border: 1px solid #ed454c;
                        border-radius: 5px;
                        padding: 8px;
                        margin: auto;
                        position: absolute;
                        bottom: 8px;
                        width: 33%;
                        min-width: 20em;
                        left: 33%;
                        text-align: center;
                    }
                    .error a,
                    .error a:link,
                    .error a:visited,
                    .error a:active {
                        color: #ed454c;
                        text-decoration: underline;
                    }
                `}
            </style>
        </div>
    )
}

ErrorMessage.propTypes = {
    message: PropTypes.string.isRequired,
    removeError: PropTypes.func
}
ErrorMessage.defaultProps = {
    removeError: () => {}
}

const WarningMessage = ({ message, removeWarning }) => {
    setTimeout(() => {
        removeWarning()
    }, 4000)
    return (
        <div
            className='warning'
            data-testid='warning-content'
            id='warning-status'
        >
            {message}
            <style jsx='true'>
                {`
                    .warning {
                        background-color: #fcfce8;
                        color: #febf19;
                        border: 1px solid #febf19;
                        border-radius: 5px;
                        padding: 8px;
                        margin: auto;
                        position: absolute;
                        bottom: 8px;
                        width: 33%;
                        left: 33%;
                        text-align: center;
                    }
                    .warning a,
                    .warning a:link,
                    .warning a:visited,
                    .warning a:active {
                        color: #febf19;
                        text-decoration: underline;
                    }
                `}
            </style>
        </div>
    )
}

WarningMessage.propTypes = {
    message: PropTypes.string.isRequired,
    removeWarning: PropTypes.func
}
WarningMessage.defaultProps = {
    removeWarning: () => {}
}

const SuccessMessage = ({ message, removeSuccess }) => {
    setTimeout(() => {
        removeSuccess()
    }, 4000)
    return (
        <div
            className='success'
            data-testid='success-content'
            id='success-status'
        >
            {message}
            <style jsx='true'>
                {`
                    .success {
                        background-color: #e8f9e8;
                        color: #27cb7c;
                        border: 1px solid #27cb7c;
                        border-radius: 5px;
                        padding: 8px;
                        margin: auto;
                        position: absolute;
                        bottom: 8px;
                        width: 33%;
                        left: 33%;
                        text-align: center;
                    }
                    .success a,
                    .success a:link,
                    .success a:visited,
                    .success a:active {
                        color: #27cb7c;
                        text-decoration: underline;
                    }
                `}
            </style>
        </div>
    )
}

SuccessMessage.propTypes = {
    message: PropTypes.string.isRequired,
    removeSuccess: PropTypes.func
}

SuccessMessage.defaultProps = {
    removeSuccess: () => {}
}

const parseMessage = (message, defaulted) => {
    let statusMessage = message || defaulted
    while (typeof statusMessage === 'object' && statusMessage !== null) {
        statusMessage = statusMessage.reason
            ? statusMessage.reason
            : statusMessage.message
            ? statusMessage.message
            : statusMessage[Object.keys(statusMessage)[0]]
    }
    return statusMessage
}

const StockTags = {
    success: function success(message, handler) {
        const defaultHandler = () => {
            const element = document.getElementById('success-status')
            if (element) {
                element.parentNode.removeChild(element)
            }
        }
        return (
            <SuccessMessage
                message={parseMessage(message, 'success')}
                removeSuccess={handler || defaultHandler}
            />
        )
    },
    warn: function warn(message, handler) {
        const defaultHandler = () => {
            const element = document.getElementById('warning-status')
            if (element) {
                element.parentNode.removeChild(element)
            }
        }
        return (
            <WarningMessage
                message={parseMessage(message, 'warning')}
                removeWarning={handler || defaultHandler}
            />
        )
    },
    error: function error(message, handler) {
        const defaultHandler = () => {
            const element = document.getElementById('error-status')
            if (element) {
                element.parentNode.removeChild(element)
            }
        }
        return (
            <ErrorMessage
                message={parseMessage(message, 'error')}
                removeError={handler || defaultHandler}
            />
        )
    }
}

export { ErrorMessage, WarningMessage, SuccessMessage, StockTags }
