import React from 'react'
import PropTypes from 'prop-types'

import { Button, TextEntry } from '../../../common'

const Usas = (props) => (
    <form data-testid='merchant-connection-form'>
        <TextEntry
            label='Username'name = 'merchant_user_name'
            value={props.connection.merchant_user_name}
            onChange={props.changeConnectionData}
            required
        />
        <TextEntry
            label='Password'
            name='merchant_password'
            type='password'
            value={props.connection.merchant_password}
            onChange={props.changeConnectionData}
            required
        />
        <TextEntry
            label='Merchant ID'
            name='merchant_id'
            value={props.connection.merchant_id}
            onChange={props.changeConnectionData}
            required
        />
        <TextEntry
            label='Merchant Processor'
            name='merchant_processor'
            value={props.connection.merchant_processor}
            onChange={props.changeConnectionData}
            required
        />
        {props.statusMessage ? props.statusMessage : ''}
        <br />
        <div className='modal-submit'>
            <Button
                name='save-button'
                color='primary'
                label='Save Connection'
                onClick={props.postMerchant}
                type='submit'
            />
        </div>
    </form>
)

Usas.propTypes = {
    connection: PropTypes.object.isRequired,
    postMerchant: PropTypes.func.isRequired,
    changeConnectionData: PropTypes.func.isRequired,
    statusMessage: PropTypes.element
}
export default Usas
