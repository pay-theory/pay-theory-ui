import React, { useState, useEffect } from 'react'
import Button from '@material/react-button'
import TextEntry from '../../TextEntry'
import { StockTags } from '../../StatusMessage'

const FormLoginCode = (props) => {
    const [error] = useState(
        props.error ? StockTags.error(props.error) : <div data-testid="no-error"/>
    )
    const [value, setValue] = useState('')

    useEffect(() => {
        props.validate(value)
    }, [value])

    return (
        <div data-testid='form-login-code' className='auth-contain'>
            <form
                className='auth-form'
                onSubmit={(e) => {
                    e.preventDefault()
                    props.onSubmit(props.user, value)
                }}
            >
                <TextEntry
                    label='authorization code'
                    name='login-code'
                    value={value}
                    data-testid="auth-code"
                    pattern='[0-9]{6}'
                    onChange={(e) => setValue(e.target.value)}
                />
                <br />
                {error}
                <Button
                    className='primary-auth-button'
                    raised
                    type='submit'
                    data-testid='code-login-link'
                >
                    Log In
                </Button>
                <br />
                <div className='divider grey'>
                    <hr className='left' />
                    or
                    <hr className='right' />
                </div>
                <br />
                <Button
                    className='secondary-auth-button'
                    data-testid='password-link'
                    onClick={props.onPassword}
                >
                    Sign In With Password
                </Button>
            </form>
        </div>
    )
}
export default FormLoginCode
