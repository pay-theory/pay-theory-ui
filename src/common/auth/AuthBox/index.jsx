// node modules
import React from 'react'
import PropTypes from 'prop-types'

// ui root
import AuthBG from '../AuthBG'
import FormHeader from '../FormHeader'
import LogoHeader from '../LogoHeader'

const AuthBox = (props) => (
    <AuthBG>
        <div className='auth'>
            <LogoHeader />
            <div data-testid='authBox' className='auth-outer'>
                <FormHeader text={props.formHead} />
                <div className='grey centered full-bottom'>
                    {props.formText}
                </div>
                {props.children}
            </div>
            <br />
        </div>
    </AuthBG>
)

AuthBox.propTypes = {
    formHead: PropTypes.string.isRequired,
    formText: PropTypes.string.isRequired
}

export default AuthBox
