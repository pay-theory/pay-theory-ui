import React, { useState } from 'react'
import PropTypes from 'prop-types'

import Button from '@material/react-button'
import Select from '@material/react-select'

// components root
import { ModalContent, TextEntry, openSpinner } from '../../common'

import { ACCESS } from '../RoleInfoTab/const'

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
                    id='role_access'
                    name='role_access'
                    label='Access Level'
                    value={state.role_access}
                    onChange={onChange}
                    outlined
                >
                    <option value={ACCESS.LIMITED}>Limited Access</option>
                    <option value={ACCESS.FULL}>Full Access</option>
                </Select>
                <input
                    id='role_type'
                    name='role_type'
                    type='hidden'
                    value={props.roleType}
                />
                <br />
                <div className='modal-submit'>
                    <Button
                        data-testid='save-button'
                        className='primary-button'
                        raised
                        type='submit'
                    >
                        Save Role
                    </Button>
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
