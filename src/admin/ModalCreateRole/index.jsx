import React, { useState } from 'react'
import PropTypes from 'prop-types'

// components root
import { ModalContent, TextEntry, openSpinner, Button, Select } from '../../common'

import { ACCESS } from '../RoleInfoTab/const'

const options = [{
    label: 'Limited Access',
    value: ACCESS.LIMITED
}, {
    label: 'Full Access',
    value: ACCESS.FULL
}]

const ModalCreateRole = (props) => {
    const [state, setState] = useState({
        role_title: '',
        role_access: ACCESS.LIMITED
    })

    const onChange = (event) => {
        const changed = { ...state }
        changed[event.target.name] = event.target.value
        setState(changed)
    }

    return (
        <ModalContent text='Add New Role' data-testid='CreateRoleModal'>
            <form
                data-testid='create-role-form'
                onSubmit={(event) => {
                    event.preventDefault()
                    openSpinner()
                    props
                        .createNewRole({ role_type: props.roleType, ...state })
                        .then(() => {
                            setState({
                                role_title: '',
                                role_access: ACCESS.LIMITED
                            })
                        })
                }}
            >
                <TextEntry
                    label='Role Name'
                    name='role_title'
                    value={state.role_title}
                    required
                    onChange={onChange}
                />
                <Select
                    name='role_access'
                    label='Access Level'
                    value={state.role_access}
                    onChange={onChange}
                    options={options}
                />
                <input
                    id='role_type'
                    name='role_type'
                    type='hidden'
                    value={props.roleType}
                />
                <br />
                <div className='modal-submit'>
                    <Button
                        name='save-button'
                        color='primary'
                        label='Save Role'
                        onClick={() => {}}
                        type='submit'
                    />
                </div>
            </form>
        </ModalContent>
    )
}

ModalCreateRole.propTypes = {
    createNewRole: PropTypes.func.isRequired,
    roleType: PropTypes.string.isRequired
}

export default ModalCreateRole
