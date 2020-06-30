import React, { useState } from 'react'
import Button from '@material/react-button'
import TextEntry from '../../TextEntry'
import { StockTags } from '../../StatusMessage'

const FormLoginAlternative = (props) => {
	const [error] = useState(props.error ? StockTags.error(props.error) : <div />)
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
					className='primary-auth-button'
					raised
					type='submit'
					data-testid='password-login-link'
				>
					Sign In
				</Button>
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
