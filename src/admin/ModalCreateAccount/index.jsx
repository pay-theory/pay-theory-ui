import React, { useState } from 'react'
import PropTypes from 'prop-types'

import Button from '@material/react-button'

// components root
import {
    ModalContent,
    TextEntry,
    openSpinner,
    closeSpinner
} from '../../common'
import { formatPhone, validPhone, validEmail } from '../../common/accountUtils'
import { StockTags } from '../../common/StatusMessage'

const INITIAL_STATE = {
    first_name: '',
    last_name: '',
    email: '',
    phone_number: '',
    title: ''
}

const ModalCreateAccount = (props) => {
    const [state, setState] = useState({
        ...INITIAL_STATE
    })

    const onChange = (event) => {
        const changed = { ...state }
        changed[event.target.name] =
            event.target.name === 'phone_number'
                ? formatPhone(event.target.value)
                : event.target.value
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

                    if (props.district) {
                        account.district = props.district
                    }

                    if (props.partner) {
                        account.partner = props.partner
                    }

                    account.phone_number = validPhone(account.phone_number)
                    account.email = validEmail(account.email)
                    if (account.phone_number && account.email) {
                        return props.createNewMember(state).then(() => {
                            setState({
                                ...INITIAL_STATE
                            })
                        })
                    } else {
                        /* istanbul ignore else */
                        if (!account.phone_number) {
                            return setError('phone is invalid')
                        } else if (!account.email) {
                            return setError('email is invalid')
                        }
                    }
                }}
            >
                <TextEntry
                    label='First Name'
                    name='first_name'
                    value={state.first_name}
                    required
                    onChange={onChange}
                />
                <TextEntry
                    label='Last Name'
                    name='last_name'
                    value={state.last_name}
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
                <TextEntry
                    label='Phone'
                    name='phone_number'
                    value={state.phone_number}
                    isValid={Boolean(validPhone(state.phone_number))}
                    required
                    onChange={onChange}
                />
                <TextEntry
                    label='Title'
                    name='title'
                    value={state.title}
                    required
                    onChange={onChange}
                />
                <br />
                <div className='modal-submit'>
                    <Button
                        data-testid='save-button'
                        className='primary-button'
                        raised
                        type='submit'
                    >
                        Save Account
                    </Button>
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
    partner: PropTypes.string,
    district: PropTypes.string
}

export default ModalCreateAccount
