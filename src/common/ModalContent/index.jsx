import React from 'react'
import PropTypes from 'prop-types'

const closeModal = (identifier) => {
    const mf = identifier ? `${identifier}-modal-form` : 'modal-form'
    const m = identifier ? `${identifier}-modal` : 'modal'

    const container = document.getElementById('container')
    container.classList.remove('blurred')

    const modalForm = document.getElementById(mf)
    modalForm.classList.add('modal-form-off')
    modalForm.classList.remove('modal-form-on')

    const modal = document.getElementById(m)
    modal.classList.add('modal-off')
    modal.classList.remove('modal-on')
}

const openModal = (identifier) => {
    const mf = identifier ? `${identifier}-modal-form` : 'modal-form'
    const m = identifier ? `${identifier}-modal` : 'modal'

    const container = document.getElementById('container')
    container.classList.add('blurred')

    const modal = document.getElementById(m)
    modal.classList.remove('modal-off')
    modal.classList.add('modal-on')

    const modalForm = document.getElementById(mf)
    modalForm.classList.remove('modal-form-off')
    modalForm.classList.add('modal-form-on')
}

export { closeModal, openModal }

const ModalContent = ({ text, identifier, children, closeAction }) => {
    const modalForm = identifier ? `${identifier}-modal-form` : 'modal-form'
    const modal = identifier ? `${identifier}-modal` : 'modal'

    return (
        <div className='hide-modal'>
            <div
                className='modal-off'
                data-testid='modal-close'
                id={modal}
                onClick={() => {
                    closeModal(identifier)
                    if (closeAction) {
                        closeAction()
                    }
                }}
            />
            <div
                className='modal-form-off'
                data-testid='modal-form'
                id={modalForm}
            >
                <div id='modal-content'>
                    <div className='modal-header'>
                        <div className='title' data-testid='modal-title'>
                            {text}
                        </div>
                        <i
                            className='fal fa-times'
                            onClick={() => {
                                closeModal(identifier)
                                if (closeAction) {
                                    closeAction()
                                }
                            }}
                        />
                    </div>
                    <div className='modal-body'>{children}</div>
                </div>
            </div>
            <style global='true' jsx='true'>
                {`
                    #modal-content {
                        display: flex;
                        flex-direction: column;
                        width: 100%;
                        min-height: 56px;
                        color: #666666;
                    }
                    #modal-content .title {
                        width: 100%;
                        text-align: left;
                        padding: 8px;
                        text-transform: capitalize;
                    }
                    #modal-content .modal-header {
                        color: #ffffff;
                        width: 100%;
                        display: flex;
                        flex-direction: row;
                        justify-content: space-between;
                        align-items: center;
                        background-image: linear-gradient(
                            to right,
                            #38117f,
                            #7c2cdd,
                            #a62fba,
                            #db367d,
                            #ea4141
                        );
                        padding: 5px;
                    }
                    #modal-content .modal-header i {
                        cursor: pointer;
                        padding: 10px;
                    }
                    #modal-content .modal-body {
                        margin: 8px;
                    }
                    .modal-wrapper {
                        height: 100%;
                        width: 100%;
                    }
                    .modal-on {
                        display: flex;
                        flex-direction: column;
                        visibility: visible;
                        position: fixed;
                        top: 0;
                        left: 0;
                        height: 100%;
                        width: 100%;
                        backdrop-filter: opacity(75%) blur(1px);
                    }
                    .modal-off {
                        visibility: hidden;
                    }
                    .modal-gone {
                        display: none;
                    }
                    .modal-form-on {
                        display: flex;
                        flex-direction: column;
                        visibility: visible;
                        position: fixed;
                        top: 50%;
                        left: 50%;
                        -webkit-transform: translate(-50%, -50%);
                        transform: translate(-50%, -50%);
                        min-width: 450px;
                        width: auto;
                        height: 600px;
                        max-height: 100%;
                        max-width: 100%;
                        background: #ffffff;
                        overflow-y: auto;
                        overflow-x: hidden;
                        box-shadow: 0 3px 1px -2px rgba(0, 0, 0, 0.2),
                            0 2px 2px 0 rgba(0, 0, 0, 0.14),
                            0 1px 5px 0 rgba(0, 0, 0, 0.12);
                        -webkit-transition: box-shadow 0.28s
                            cubic-bezier(0.4, 0, 0.2, 1);
                        transition: box-shadow 0.28s
                            cubic-bezier(0.4, 0, 0.2, 1);
                        border-radius: 5px;
                    }

                    #modal-content form {
                        display: flex;
                        flex-direction: column;
                        align-content: center;
                        max-height: 100%;
                    }

                    #modal-content form .mdc-text-field,
                    #modal-content form .mdc-select,
                    #modal-content form .error,
                    #modal-content form .success,
                    #modal-content form .warn {
                        margin: 8px;
                    }

                    #modal-content form .modal-submit {
                        display: flex;
                        flex-direction: column;
                        align-content: center;
                        justify-content: flex-end;
                    }

                    #modal-content form .modal-submit .primary-button {
                        margin: 16px 8px;
                    }

                    .modal-form-off {
                        visibility: hidden;
                    }

                    .modal-form-gone {
                        display: none;
                    }

                    .hide-modal {
                        height: 0;
                        overflow: hidden;
                    }
                `}
            </style>
        </div>
    )
}

ModalContent.propTypes = {
    closeAction: PropTypes.func,
    identifier: PropTypes.string,
    text: PropTypes.string.isRequired
}

export default ModalContent
