import React, { useState } from 'react'
import Button from '../../Button'
import TextEntry from '../../TextEntry'
import { StockTags } from '../../StatusMessage'

const FormLoginAlternative = (props) => {
    const [error] = useState(
        props.error ? StockTags.error(props.error) : <div data-testid="no-error"/>
    )
    const [value, setValue] = useState('')

    return (
        <div data-testid='form-login-alternative' className='auth-contain'>
            <form
                className='auth-form'
                onSubmit={(e) => {
                    e.preventDefault()
                    props.onSubmit(value)
                }}
            >
                <TextEntry
                    label='password'
                    name='login-password'
                    type='password'
                    value={value}
                    data-testid="login-password"
                    onChange={(e) => setValue(e.target.value)}
                    helperText={
                        <a
                            className='helper-link'
                            data-testid='forgot-password'
                            onClick={(e) => props.forgotPassword(e)}
                        >
                            I do not know my password.
                        </a>
                    }
                    helperProps={{ persistent: true }}
                />
                <br />
                {error}
                <Button
                    color='primary'
                    label='Sign In'
                    type='submit'
                    onClick={() => {}}
                    name='password-login-link'
                />
            </form>
            <style jsx='true'>{`
                .helper-link {
                    cursor: pointer;
                }
            `}</style>
        </div>
    )
}
export default FormLoginAlternative
