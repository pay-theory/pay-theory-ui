import React, { useState, useEffect } from 'react'
import Button from '../../Button'
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
                    color='primary'
                    label='Log In'
                    type='submit'
                    name='code-login-link'
                    onClick={() => {}}
                />
                <br />
                <div className='divider grey'>
                    <hr className='left' />
                    or
                    <hr className='right' />
                </div>
                <br />
                <Button
                    color='primary-2'
                    name='password-link'
                    onClick={props.onPassword}
                    label='Sign In With Password'
                />
            </form>
        </div>
    )
}
export default FormLoginCode
