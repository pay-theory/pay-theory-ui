import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'

import {
    PortalLogo,
    MenuButton,
    ActionButton,
    ErrorNotification,
    GeneralNotification,
    SuccessNotification
} from './children'

const PortalHead = ({ menuButtons }) => {
    const buttons = menuButtons.map((item, index) => {
        if (item.type === 'menu') {
            return (
                <MenuButton
                    header={item.header}
                    icon={item.icon}
                    key={`${item.icon}-${index}`}
                    menuItems={item.menuItems}
                />
            )
        } else if (item.type === 'action') {
            return (
                <ActionButton
                    action={item.action}
                    icon={item.icon}
                    key={`${item.icon}-${index}`}
                />
            )
        }
    })

    return (
        <div className='portal-head-header'>
            <div className='portal-logo-wrapper'>
                <PortalLogo />
            </div>
            <div className='portal-notifications'>
                <SuccessNotification />
                <GeneralNotification />
                <ErrorNotification />
            </div>
            <div className='portal-buttons'>
                {buttons.length ? buttons : null}
            </div>
            <style jsx='true'>
                {`
                    .portal-head-header {
                        background-image: url(https://books-ui-assets.s3.amazonaws.com/neutral_gradient_2.svg);
                        background-size: 100%;
                        background-position: bottom;
                        display: flex;
                        flex-direction: row;
                        justify-content: space-between;
                        align-items: center;
                        padding: 0px 0px 0px 24px;
                        line-height: 30px;
                        height: 64px;
                        box-shadow: 2px 2px 2px var(--black-opaque-8);
                        z-index: 10;
                        position: -webkit-sticky;
                        position: sticky;
                        top: 0px;
                    }

                    .portal-head-header .portal-logo-wrapper {
                        width: 290px;
                    }

                    .portal-head-header .portal-notifications {
                        display: flex;
                        flex-grow: 1;
                        position: relative;
                        height: 100%;
                    }

                    .portal-head-header .notification {
                        display: flex;
                        height: 40px;
                        justify-content: space-between;
                        flex-grow: 1;
                        align-items: center;
                        padding: 0px 8px 0px 16px;
                        border-radius: 8px;
                        color: var(--black);
                        position: absolute;
                        width: 100%;
                        top: -50px;
                        transition: top 0.5s ease;
                    }

                    .portal-head-header .notification.show {
                        top: 12px;
                        transition: top 0.5s ease;
                    }

                    .portal-head-header .notification .close-message {
                        cursor: pointer;
                        height: 32px;
                        width: 32px;
                        display: flex;
                        align-items: center;
                        justify-content: center;
                        border-radius: 8px;
                    }

                    .portal-head-header .notification .close-message:hover {
                        background: var(--black-opaque-8);
                    }

                    .portal-head-header .portal-buttons {
                        display: flex;
                        justify-content: flex-end;
                        align-items: center;
                        width: 200px;
                        padding-right: 16px;
                    }

                    .portal-head-header .pt-portal-head-menu-button,
                    .portal-head-header .pt-portal-head-action-button {
                        height: 40px;
                        width: 40px;
                        display: flex;
                        align-items: center;
                        justify-content: center;
                        position: relative;
                        border-radius: 8px;
                    }

                    .portal-head-header .pt-portal-head-menu-button:hover,
                    .portal-head-header .pt-portal-head-action-button:hover {
                        background: var(--grey-1-opaque);
                    }

                    .portal-head-header .pt-portal-head-action-button {
                        cursor: pointer;
                    }
                `}
            </style>
        </div>
    )
}

PortalHead.propTypes = {
    menuButtons: PropTypes.array
}

PortalHead.defaultProps = {
    menuButtons: []
}

export default PortalHead

export const usePortalNotification = () => {
    const [showing, setShowing] = useState('')
    const [currentTimeout, setCurrentTimeout] = useState()
    const [message, setMessage] = useState()

    const SUCCESS = 'success'
    const GENERAL = 'general'
    const ERROR = 'error'

    const checkForShowing = () => {
        const error = document.getElementById(`pt-${ERROR}-notification`)
        const general = document.getElementById(`pt-${GENERAL}-notification`)
        const success = document.getElementById(`pt-${SUCCESS}-notification`)
        const show = 'show'

        return (
            error.classList.contains(show) ||
            general.classList.contains(show) ||
            success.classList.contains(show)
        )
    }

    const removeMessage = (type) => {
        const element = document.getElementById(`pt-${type}-notification`)
        if (element) element.classList.remove('show')
        setMessage(undefined)
    }

    useEffect(() => {
        const addMessage = (type) => (message) => {
            setShowing(type)
            const element = document.getElementById(`pt-${type}-notification`)
            const messageElement = document.getElementById(`pt-${type}-message`)
            messageElement.innerHTML = message
            element.classList.add('show')

            setCurrentTimeout(
                setTimeout(() => {
                    removeMessage(type)
                    setCurrentTimeout(undefined)
                    setShowing('')
                }, 7000)
            )
        }

        const messageResponse = {
            error: addMessage(ERROR),
            success: addMessage(SUCCESS)
        }
        if (message) {
            messageResponse[message.type]
                ? messageResponse[message.type](message.message)
                : addMessage(GENERAL)(message.message)
        }
    }, [message])

    const StatusMessage = (type) => (message) => {
        if (checkForShowing()) {
            removeMessage(showing)
            clearTimeout(currentTimeout)
            setTimeout(() => {
                setMessage({ type, message })
            }, 500)
        } else {
            setMessage({ type, message })
        }
    }

    return {
        ErrorMessage: StatusMessage(ERROR),
        SuccessMessage: StatusMessage(SUCCESS),
        GeneralMessage: StatusMessage(GENERAL)
    }
}
