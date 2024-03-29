import React from 'react'
import PropTypes from 'prop-types'

import { ModalContent, Button, closeModal } from '../../common'

const ActionModal = ({ label, message, action, actionName, type }) => {
    return (
        <ModalContent
            data-testid='confirm-action'
            identifier={type}
            text={label}
        >
            <div className='confirm-action-content'>
                <span>{message}</span>
                <div className='buttons'>
                    <Button
                        color='primary'
                        label={actionName}
                        name={`${type}-button`}
                        onClick={action}
                        small
                    />
                    <Button
                        color='default'
                        label='Cancel'
                        name='cancel-button'
                        onClick={() => closeModal(type)}
                        small
                    />
                </div>
            </div>
            <style jsx='true'>
                {`
                    .confirm-action-content {
                        margin: 10px;
                    }
                    .confirm-action-content p {
                        padding: 20px 10px;
                    }

                    .confirm-action-content .buttons {
                        display: flex;
                        width: auto;
                        justify-content: space-around;
                        margin-top: 15px;
                    }

                    .confirm-action-content .buttons button {
                        width: 33%;
                    }

                    .modal-form-on {
                        height: auto !important;
                    }
                `}
            </style>
        </ModalContent>
    )
}

ActionModal.defaultProps = {
    type: ''
}

ActionModal.propTypes = {
    action: PropTypes.func.isRequired,
    actionName: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    message: PropTypes.any.isRequired,
    type: PropTypes.string
}

export default ActionModal
