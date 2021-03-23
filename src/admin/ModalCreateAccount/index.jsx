import React, { useState } from 'react'
import PropTypes from 'prop-types'

// components root
import {
    ModalContent,
    TextEntry,
    openSpinner,
    closeSpinner,
    Button
}
from '../../common'
import { validEmail } from '../../common/accountUtils'
import { StockTags } from '../../common/StatusMessage'

const INITIAL_STATE = {
    given_name: '',
    family_name: '',
    email: ''
}

const ModalCreateAccount = (props) => {
    const [state, setState] = useState({
        ...INITIAL_STATE
    })

    const onChange = (event) => {
        const changed = { ...state }
        changed[event.target.name] = event.target.value
        setState(changed)
    }

    const setError = (message) => {
        closeSpinner()
        props.setStatusMessage(
            StockTags.error(message, () => /* istanbul ignore next */ {
                props.setStatusMessage(<div data-testid='status-cleared' />)
            })
        )
    }

    return (
        <ModalContent
            text={`Add New ${props.roleLabel}`}
            data-testid='CreateAccountModal'
        >
            <form
                data-testid='create-account-form'
                onSubmit={(event) => {
                    event.preventDefault()
                    openSpinner()
                    const account = { ...state }

                    account.role = props.role

                    if (props.merchant) {
                        account.merchant = props.merchant
                    }

                    account.email = validEmail(account.email)
                    if (account.email) {
                        return props.createNewMember(account).then(() => {
                            setState({
                                ...INITIAL_STATE
                            })
                        })
                    } else {
                        /* istanbul ignore else */
                        if (!account.email) {
                            return setError('email is invalid')
                        }
                    }
                }}
            >
                <TextEntry
                    label='Given Name'
                    name='given_name'
                    value={state.given_name}
                    required
                    onChange={onChange}
                />
                <TextEntry
                    label='Family Name'
                    name='family_name'
                    value={state.family_name}
                    required
                    onChange={onChange}
                />
                <TextEntry
                    label='Email'
                    name='email'
                    value={state.email}
                    isValid={Boolean(validEmail(state.email))}
                    required
                    onChange={onChange}
                />
                <br />
                <div className='modal-submit'>
                    <Button
                        name='save-button'
                        color='primary'
                        onClick={() => {}}
                        label='Save Account'
                        type='submit'
                    />
                </div>
            </form>
        </ModalContent>
    )
}

ModalCreateAccount.propTypes = {
    roleLabel: PropTypes.string.isRequired,
    role: PropTypes.string.isRequired,
    createNewMember: PropTypes.func.isRequired,
    setStatusMessage: PropTypes.func.isRequired,
    merchant: PropTypes.string
}

export default ModalCreateAccount
