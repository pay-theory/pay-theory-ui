import React, { useState, useEffect } from 'react'
import Button from '../../Button'
import TextEntry from '../../TextEntry'
import { StockTags } from '../../StatusMessage'

const FormLoginEmail = (props) => {
    const [error] = useState(
        props.error ? StockTags.error(props.error) : <div data-testid="no-error"/>
    )
    const [value, setValue] = useState('')
    const [valid, setValid] = useState(false)

    useEffect(() => {
        setValid(props.validate(value))
    }, [value])

    return (
        <div data-testid='form-login-email' className='auth-contain'>
            <form
                className='auth-form'
                onSubmit={(e) => {
                    e.preventDefault()
                    props.onSubmit(value)
                }}
            >
                <TextEntry
                    label='email'
                    name='login-email'
                    data-testid='email-field'
                    value={value}
                    isValid={valid}
                    onChange={(e) => setValue(e.target.value)}
                />
                <br />
                {error}
                <Button
                    color='primary'
                    label='Email Me A Sign In Code'
                    type='submit'
                    name='email-login-link'
                    disabled={!valid}
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
                    onClick={(e) => {
                        props.onPassword(value)
                    }}
                    label='Sign In With Password'
                    disabled={!valid}
                />
            </form>
            <style jsx='true'>{`
                .divider hr {
                    width: 40%;
                }
            `}</style>
        </div>
    )
}
export default FormLoginEmail
