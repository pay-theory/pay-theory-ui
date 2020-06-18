import React, { useState, useEffect } from 'react'
import Button from '@material/react-button'
import TextEntry from '../../TextEntry'
import { StockTags } from '../../StatusMessage'

const FormChangePassword = (props) => {
    const [verificationCode, setVerificationCode] = useState('')

    const [newPass, setNewPass] = useState('')

    const [passwordValidation, setPasswordValidation] = useState('#ff0000')

    const [confirmPassword, setConfirmPassword] = useState('')

    const [confirmValid, setConfirmValid] = useState(false)

    const [error] = useState(
        props.error ? StockTags.error(props.error) : <div />
    )

    const validatePassword = (password) => {
        let validationsPassed = 0

        validationsPassed = password.match(/.*\d.*/)
            ? validationsPassed + 1
            : validationsPassed

        validationsPassed = password.match(/.*[a-z].*/)
            ? validationsPassed + 1
            : validationsPassed

        validationsPassed = password.match(/.*[A-Z].*/)
            ? validationsPassed + 1
            : validationsPassed

        validationsPassed = password.match(/.*[^a-zA-Z\d\s:].*/)
            ? validationsPassed + 1
            : validationsPassed

        validationsPassed =
            password.length >= 8 ? validationsPassed + 1 : validationsPassed

        validationsPassed =
            password.length >= 9 ? validationsPassed + 1 : validationsPassed

        for (let i = 1; i <= 6; i++) {
            if (i <= validationsPassed) {
                refs[i - 1].current.classList.remove('gone')
            } else {
                refs[i - 1].current.classList.add('gone')
            }
        }
        switch (validationsPassed) {
            case 2: {
                setPasswordValidation('#FF6000')
                break
            }
            case 3: {
                setPasswordValidation('#FFC000')
                break
            }
            case 4: {
                setPasswordValidation('#E0FF00')
                break
            }
            case 5: {
                setPasswordValidation('#80FF00')
                break
            }
            case 6: {
                setPasswordValidation('#20FF00')
                break
            }
            default: {
                setPasswordValidation('#FF0000')
                break
            }
        }
    }

    useEffect(() => {
        console.log(newPass)
        validatePassword(newPass)
    }, [newPass])

    useEffect(() => {
        setConfirmValid(newPass === confirmPassword)
    }, [newPass, confirmPassword])

    const refs = [
        React.createRef(),
        React.createRef(),
        React.createRef(),
        React.createRef(),
        React.createRef(),
        React.createRef()
    ]
    const helper = (
        <div>
            <div className='password-meter'>
                <div ref={refs[0]} className='gone password' />
                <div ref={refs[1]} className='gone password' />
                <div ref={refs[2]} className='gone password' />
                <div ref={refs[3]} className='gone password' />
                <div ref={refs[4]} className='gone password' />
                <div ref={refs[5]} className='gone password' />
            </div>
            must be 8 characters including:
            <br />
            lower & upper case, number & special character <br />
        </div>
    )
    return (
        <div className='auth-contain'>
            <form
                className='auth-form'
                onSubmit={(e) => props.onSubmit(e, verificationCode, newPass)}
            >
                <TextEntry
                    label='verification code'
                    name='password-code'
                    value={verificationCode}
                    pattern='[0-9]{6}'
                    onChange={(e) => setVerificationCode(e.target.value)}
                    required
                />
                <TextEntry
                    label='new password'
                    name='new-password'
                    value={newPass}
                    type='password'
                    helperText={helper}
                    helperProps={{ persistent: true }}
                    onChange={(e) => {
                        setNewPass(e.target.value)
                    }}
                    required
                />
                <br />
                <TextEntry
                    label='confirm new password'
                    name='confirm-password'
                    value={confirmPassword}
                    onChange={(e) => {
                        setConfirmPassword(e.target.value)
                    }}
                    isValid={confirmValid}
                    type='password'
                    required
                />
                <br />
                {error}
                <Button
                    className='primary-auth-button'
                    raised
                    type='submit'
                    data-testid='code-login-link'
                >
                    Set Password
                </Button>
            </form>
            <style jsx='true' global='true'>{`
                .password {
                    background-color: ${passwordValidation};
                }
            `}</style>
        </div>
    )
}

export default FormChangePassword
