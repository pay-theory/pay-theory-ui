import React, { useState } from 'react'
import PropTypes from 'prop-types'
import HelperText from './children/HelperText'

const TextEntry = (props) => {
	const [helper, showHelper] = useState(false)
	const hasHelper = !!props.helperText

	const newProps = { ...props }
	delete newProps.isValid
	delete newProps.helperText
	delete newProps.helperProps
	delete newProps.leadingIcon
	delete newProps.trailingIcon

	return (
		<label className={props.innerClass}>
			<input
				id={props.name}
				data-testid={props.name}
				placeholder=' '
				onFocus={() => showHelper(true)}
				onBlur={() => showHelper(false)}
				value={props.value === null ? '' : props.value}
				type={props.type || 'text'}
				required={props.required || false}
				disabled={props.disabled || false}
				autoComplete={props.autoComplete || 'off'}
				onChange={props.onChange}
				onClick={props.onClick}
				pattern={props.pattern}
				{...newProps}
			/>
			<span>{props.label}</span>
			{hasHelper ? (
				<HelperText show={helper}>{props.helperText}</HelperText>
			) : (
				<div className='helpless' />
			)}
			<style jsx='true'>{`
				label {
					--pay-theory-safari-helper1: rgb(
						var(--pay-theory-primary-rgb, 22, 15, 61)
					);
					--pay-theory-safari-invalid-helper1: rgb(237, 69, 76);
					--pay-theory-safari-valid-helper1: rgb(39, 203, 124);
					position: relative;
					display: inline-block;
					padding-top: 6px;
					font-family: var(
						--pay-theory-font,
						'Roboto',
						'Segoe UI',
						BlinkMacSystemFont,
						system-ui,
						-apple-system
					);
					font-size: 16px;
					line-height: 1.5;
					overflow: hidden;
				}

				/* Input, Textarea */
				label > input,
				label > textarea {
					box-sizing: border-box;
					margin: 0;
					border: solid 1px; /* Safari */
					border-color: rgba(var(--pay-theory-onsurface-rgb, 0, 0, 0), 0.6);
					border-top-color: transparent;
					border-radius: 4px;
					padding: 15px 13px 15px;
					width: 100%;
					height: inherit;
					color: rgba(var(--pay-theory-onsurface-rgb, 0, 0, 0), 0.87);
					background-color: transparent;
					box-shadow: none; /* Firefox */
					font-family: inherit;
					font-size: inherit;
					line-height: inherit;
					caret-color: rgb(var(--pay-theory-primary-rgb, 22, 15, 61));
					transition: border 0.2s, box-shadow 0.2s;
				}

				/* Span */
				label > input + span,
				label > textarea + span {
					position: absolute;
					top: 0;
					left: 0;
					display: flex;
					border-color: rgba(var(--pay-theory-onsurface-rgb, 0, 0, 0), 0.6);
					width: 100%;
					max-height: 100%;
					color: rgba(var(--pay-theory-onsurface-rgb, 0, 0, 0), 0.6);
					font-size: 75%;
					line-height: 15px;
					cursor: text;
					transition: color 0.2s, font-size 0.2s, line-height 0.2s;
				}

				/* Corners */
				label > input + span::before,
				label > input + span::after,
				label > textarea + span::before,
				label > textarea + span::after {
					content: '';
					display: block;
					box-sizing: border-box;
					margin-top: 6px;
					border-top: solid 1px;
					border-top-color: rgba(var(--pay-theory-onsurface-rgb, 0, 0, 0), 0.6);
					min-width: 10px;
					height: 8px;
					pointer-events: none;
					box-shadow: inset 0 1px transparent;
					transition: border-color 0.2s, box-shadow 0.2s;
				}

				label > input + span::before,
				label > textarea + span::before {
					margin-right: 4px;
					border-left: solid 1px transparent;
					border-radius: 4px 0;
				}

				label > input + span::after,
				label > textarea + span::after {
					flex-grow: 1;
					margin-left: 4px;
					border-right: solid 1px transparent;
					border-radius: 0 4px;
				}

				/* Hover */
				label:hover > input,
				label:hover > textarea {
					border-color: rgba(var(--pay-theory-onsurface-rgb, 0, 0, 0), 0.87);
					border-top-color: transparent;
				}

				label:hover > input + span::before,
				label:hover > textarea + span::before,
				label:hover > input + span::after,
				label:hover > textarea + span::after {
					border-top-color: rgba(
						var(--pay-theory-onsurface-rgb, 0, 0, 0),
						0.87
					);
				}

				label:hover > input:not(:focus):placeholder-shown,
				label:hover > textarea:not(:focus):placeholder-shown {
					border-color: rgba(var(--pay-theory-onsurface-rgb, 0, 0, 0), 0.87);
				}

				/* Placeholder-shown */
				label > input:not(:focus):placeholder-shown,
				label > textarea:not(:focus):placeholder-shown {
					border-top-color: rgba(var(--pay-theory-onsurface-rgb, 0, 0, 0), 0.6);
				}

				label > input:not(:focus):placeholder-shown + span,
				label > textarea:not(:focus):placeholder-shown + span {
					font-size: inherit;
					line-height: 68px;
				}

				label > input:not(:focus):placeholder-shown + span::before,
				label > textarea:not(:focus):placeholder-shown + span::before,
				label > input:not(:focus):placeholder-shown + span::after,
				label > textarea:not(:focus):placeholder-shown + span::after {
					border-top-color: transparent;
				}

				/* Valid */
				label > input:valid:not(:placeholder-shown),
				label > textarea:valid:not(:placeholder-shown) {
					border-color: rgb(var(--pay-theory-primary-rgb, 39, 203, 124));
					border-top-color: transparent;
					box-shadow: inset 1px 0 var(--pay-theory-safari-valid-helper1),
						inset -1px 0 var(--pay-theory-safari-valid-helper1),
						inset 0 -1px var(--pay-theory-safari-valid-helper1);
					outline: none;
				}

				label > input:valid:not(:placeholder-shown) + span,
				label > textarea:valid:not(:placeholder-shown) + span {
					color: rgb(var(--pay-theory-primary-rgb, 39, 203, 124));
				}

				label > input:valid:not(:placeholder-shown) + span::before,
				label > input:valid:not(:placeholder-shown) + span::after,
				label > textarea:valid:not(:placeholder-shown) + span::before,
				label > textarea:valid:not(:placeholder-shown) + span::after {
					border-top-color: var(--pay-theory-safari-valid-helper1) !important;
					box-shadow: inset 0 1px var(--pay-theory-safari-valid-helper1);
				}

				/* Invalid */
				label > input:invalid:not(:focus),
				label > textarea:invalid:not(:focus) {
					border-color: rgb(var(--pay-theory-primary-rgb, 237, 69, 76));
					border-top-color: transparent;
					box-shadow: inset 1px 0 var(--pay-theory-safari-invalid-helper1),
						inset -1px 0 var(--pay-theory-safari-invalid-helper1),
						inset 0 -1px var(--pay-theory-safari-invalid-helper1);
					outline: none;
				}

				label > input:invalid:not(:focus) + span,
				label > textarea:invalid:not(:focus) + span {
					color: rgb(var(--pay-theory-primary-rgb, 237, 69, 76));
				}

				label > input:invalid:not(:focus) + span::before,
				label > input:invalid:not(:focus) + span::after,
				label > textarea:invalid:not(:focus) + span::before,
				label > textarea:invalid:not(:focus) + span::after {
					border-top-color: var(--pay-theory-safari-invalid-helper1) !important;
					box-shadow: inset 0 1px var(--pay-theory-safari-invalid-helper1);
				}

				/* Focus */
				label > input:focus,
				label > textarea:focus {
					border-color: rgb(var(--pay-theory-primary-rgb, 22, 15, 61));
					border-top-color: transparent;
					box-shadow: inset 1px 0 var(--pay-theory-safari-helper1),
						inset -1px 0 var(--pay-theory-safari-helper1),
						inset 0 -1px var(--pay-theory-safari-helper1);
					outline: none;
				}

				label > input:focus + span,
				label > textarea:focus + span {
					color: rgb(var(--pay-theory-primary-rgb, 22, 15, 61));
				}

				label > input:focus + span::before,
				label > input:focus + span::after,
				label > textarea:focus + span::before,
				label > textarea:focus + span::after {
					border-top-color: var(--pay-theory-safari-helper1) !important;
					box-shadow: inset 0 1px var(--pay-theory-safari-helper1);
				}

				/* Disabled */
				label > input:disabled,
				label > input:disabled + span,
				label > textarea:disabled,
				label > textarea:disabled + span {
					border-color: rgba(
						var(--pay-theory-onsurface-rgb, 0, 0, 0),
						0.38
					) !important;
					border-top-color: transparent !important;
					color: rgba(var(--pay-theory-onsurface-rgb, 0, 0, 0), 0.38);
					pointer-events: none;
				}

				label > input:disabled + span::before,
				label > input:disabled + span::after,
				label > textarea:disabled + span::before,
				label > textarea:disabled + span::after {
					border-top-color: rgba(
						var(--pay-theory-onsurface-rgb, 0, 0, 0),
						0.38
					) !important;
				}

				label > input:disabled:placeholder-shown,
				label > input:disabled:placeholder-shown + span,
				label > textarea:disabled:placeholder-shown,
				label > textarea:disabled:placeholder-shown + span {
					border-top-color: rgba(
						var(--pay-theory-onsurface-rgb, 0, 0, 0),
						0.38
					) !important;
				}

				label > input:disabled:placeholder-shown + span::before,
				label > input:disabled:placeholder-shown + span::after,
				label > textarea:disabled:placeholder-shown + span::before,
				label > textarea:disabled:placeholder-shown + span::after {
					border-top-color: transparent !important;
				}

				/* Faster transition in Safari for less noticable fractional font-size issue */
				@media not all and (min-resolution: 0.001dpcm) {
					@supports (-webkit-appearance: none) {
						label > input,
						label > input + span,
						label > textarea,
						label > textarea + span,
						label > input + span::before,
						label > input + span::after,
						label > textarea + span::before,
						label > textarea + span::after {
							transition-duration: 0.1s;
						}
					}
				}
			`}</style>
		</label>
	)
}

TextEntry.propTypes = {
	name: PropTypes.string.isRequired,
	label: PropTypes.string.isRequired,
	innerClass: PropTypes.string,
	value: PropTypes.string,
	onChange: PropTypes.any,
	leadingIcon: PropTypes.any,
	trailingIcon: PropTypes.any,
	type: PropTypes.string,
	pattern: PropTypes.string,
	required: PropTypes.bool,
	disabled: PropTypes.bool,
	autoComplete: PropTypes.string,
	helperText: PropTypes.any,
	isValid: PropTypes.bool,
	onClick: PropTypes.func,
	onBlur: PropTypes.func,
	onFocus: PropTypes.func
}

export default TextEntry
