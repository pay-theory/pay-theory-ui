// node modules
import React from 'react'
import PropTypes from 'prop-types'
import Radio, { NativeRadioControl } from '@material/react-radio'
import { ACCESS } from '../const'

const AccessOptions = (props) => {
	return (
		<div>
			<div className='subsection-title'>
				<h5 className='navy'>Access level</h5>
			</div>
			<div className='access-options'>
				<div className='radio-option'>
					<Radio key='full-access-option'>
						<NativeRadioControl
							name='access-option'
							value='full-access'
							id='full-access-radio'
							data-testid='full-access-radio'
							checked={props.roleAccess === ACCESS.FULL}
							onChange={(e) => props.setRoleAccess(e)}
							disabled={props.locked}
						/>
					</Radio>
					<label htmlFor='full-access-radio'>Full portal access</label>
				</div>
				<div className='radio-option'>
					<Radio key='limited-access-option'>
						<NativeRadioControl
							name='access-option'
							value='limited-access'
							id='limited-access-radio'
							data-testid='limited-access-radio'
							checked={props.roleAccess === ACCESS.LIMITED}
							onChange={(e) => props.setRoleAccess(e)}
							disabled={props.locked}
						/>
					</Radio>
					<label htmlFor='limited-access-radio'>Limited portal access</label>
				</div>
			</div>
			<style jsx='true'>{`
				:root {
					--mdc-theme-secondary: #0199ed;
				}
				.navy {
					color: #253243;
				}

				.access-options {
					margin-top: 0px;
					margin-bottom: 24px;
				}
				.radio-option {
					margin: 0px 24px;
				}
			`}</style>
		</div>
	)
}

AccessOptions.propTypes = {
	roleAccess: PropTypes.string.isRequired,
	setRoleAccess: PropTypes.func.isRequired,
	locked: PropTypes.bool
}

export default AccessOptions
