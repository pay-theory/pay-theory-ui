import React from 'react'
import PropTypes from 'prop-types'

import { TextEntry, Button, Select } from '../../../common'

const options = [{
    disabled: true,
    value: '',
    label: ''
}, {
    value: 'Classic',
    label: 'Classic'
}, {
    value: 'Redesign',
    label: 'Redesign'
}]

const Usas = (props) => (
    <form data-testid='usas-connection-form'>
        <TextEntry
            label='User Name'
            name='usas_user_name'
            value={props.connection.usas_user_name}
            onChange={props.changeConnectionData}
            required
        />
        <TextEntry
            label='Password'
            name='usas_password'
            type='password'
            value={props.connection.usas_password}
            onChange={props.changeConnectionData}
            required
        />
        <Select
            name='usas_version'
            label='Version'
            className='connection-control'
            value={props.connection.usas_version}
            onChange={props.changeConnectionData}
            options={options}
        >
            <option value='' disabled />
            <option value='Classic'>Classic</option>
            <option value='Redesign'>Redesign</option>
        </Select>
        <TextEntry
            label='District Code'
            name='usas_district'
            value={props.connection.usas_district}
            onChange={props.changeConnectionData}
            required
        />
        <TextEntry
            label='Endpoint'
            name='usas_endpoint'
            value={props.connection.usas_endpoint}
            onChange={props.changeConnectionData}
            required
        />
        {props.statusMessage ? props.statusMessage : ''}
        <br />
        <div className='modal-submit'>
            <Button
                name='save-button'
                color='primary connection-control'
                label='Save Connection'
                onClick={props.postUSAS}
                type='submit'
            />
        </div>
        <style jsx='true' global='true'>{`
            .connection-control {
                margin: 16px 24px;
            }
            form {
                display: flex;
                flex-direction: column;
            }
        `}</style>
    </form>
)

Usas.propTypes = {
    connection: PropTypes.object.isRequired,
    postUSAS: PropTypes.func.isRequired,
    changeConnectionData: PropTypes.func.isRequired,
    statusMessage: PropTypes.element
}
export default Usas
