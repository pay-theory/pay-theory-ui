import React, { useState, useEffect } from 'react'
import Button from '@material/react-button'
import TextEntry from '../../TextEntry'
import { StockTags } from '../../StatusMessage'

const FormLoginEmail = (props) => {
	const [error] = useState(props.error ? StockTags.error(props.error) : <div />)
	const [value, setValue] = useState('')
	const [valid, setValid] = useState(false)

	useEffect(() => {
		setValid(props.validate(value))
	}, [value])

	useEffect(() => {
		console.log('valid', valid)
	}, [valid])

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
					className='primary-auth-button'
					raised
					type='submit'
					data-testid='email-login-link'
					disabled={!valid}
				>
					Email Me A Sign In Code
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
					onClick={(e) => {
						props.onPassword(value)
					}}
					disabled={!valid}
				>
					Sign In With Password
				</Button>
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
