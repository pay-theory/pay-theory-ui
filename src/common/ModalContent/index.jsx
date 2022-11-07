import React from 'react'
import PropTypes from 'prop-types'
import IconButton from '../IconButton'

const closeModal = (identifier) => {
    const mf =
        typeof identifier === 'string'
            ? `${identifier}-modal-form`
            : 'modal-form'
    const m = typeof identifier === 'string' ? `${identifier}-modal` : 'modal'

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
    const mf =
        typeof identifier === 'string'
            ? `${identifier}-modal-form`
            : 'modal-form'
    const m = typeof identifier === 'string' ? `${identifier}-modal` : 'modal'

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

const ModalContent = ({ identifier, children, closeAction, zPosition }) => {
    const modalForm = identifier ? `${identifier}-modal-form` : 'modal-form'
    const modal = identifier ? `${identifier}-modal` : 'modal'

    const finalZPosition = zPosition ? 99 + zPosition : 99

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
                <div className='modal-content'>
                    <div className='modal-header'>
                        <IconButton
                            icon='times'
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
                    #${modalForm} .modal-content {
                        display: flex;
                        flex-direction: column;
                        width: 100%;
                        min-height: 56px;
                        border-radius: 16px;
                    }

                    #${modalForm} .modal-content .modal-header {
                        width: 100%;
                        display: flex;
                        flex-direction: row-reverse;
                        justify-content: space-between;
                        align-items: center;
                        padding: 4px;
                    }
                    #${modalForm} .modal-content .modal-header i {
                        cursor: pointer;
                        padding: 10px;
                    }
                    #${modalForm} .modal-content .modal-body {
                        margin: 0px 32px 32px;
                        overflow-y: auto;
                        -ms-overflow-style: none;
                        scrollbar-width: none;
                    }
                    #${modalForm} .modal-content .modal-body::-webkit-scrollbar {
                        display: none;
                    }
                    #${modalForm} .modal-wrapper {
                        height: 100%;
                        width: 100%;
                    }
                    #${modal}.modal-on {
                        display: flex;
                        flex-direction: column;
                        visibility: visible;
                        position: fixed;
                        top: 0;
                        left: 0;
                        height: 100%;
                        width: 100%;
                        background: var(--black-opaque-32);
                        backdrop-filter: opacity(50%) blur(2px);
                        z-index: ${finalZPosition} ;
                    }
                    #${modal}.modal-off {
                        visibility: hidden;
                    }
                    #${modal}.modal-gone {
                        display: none;
                    }
                    #${modalForm}.modal-form-on {
                        display: flex;
                        flex-direction: column;
                        visibility: visible;
                        position: fixed;
                        top: 50%;
                        left: 50%;
                        -webkit-transform: translate(-50%, -50%);
                        transform: translate(-50%, -50%);
                        width: 462px;
                        max-height: 100%;
                        max-width: 100%;
                        background: var(--white);
                        overflow-y: auto;
                        overflow-x: hidden;
                        box-shadow: 0px 0px 16px var(--grey);
                        -webkit-transition: box-shadow 0.28s
                            cubic-bezier(0.4, 0, 0.2, 1);
                        transition: box-shadow 0.28s
                            cubic-bezier(0.4, 0, 0.2, 1);
                        border-radius: 16px;
                        z-index: ${finalZPosition} ;
                    }

                    #${modalForm} .modal-content form {
                        display: flex;
                        flex-direction: column;
                        align-content: center;
                    }

                    #${modalForm}.modal-form-off {
                        visibility: hidden;
                    }

                    #${modalForm}.modal-form-gone {
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
    identifier: PropTypes.string.isRequired,
    zPosition: PropTypes.number
}

export default ModalContent
