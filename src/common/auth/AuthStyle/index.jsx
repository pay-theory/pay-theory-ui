/* istanbul ignore file */
import React from 'react'

const AuthStyle = (props) => {
	return (
		<div data-testid='authStyle' className='appContainer'>
			{props.children}
			<style jsx='true' global='true'>{`
				body {
					font-family: Europa, Segoe UI, Trebuchet MS, Arial, Helvetica,
						sans-serif;
					font-display: swap;
					height: 100%;
					width: 100%;
					margin: 1em auto;
					-webkit-font-smoothing: antialiased;
					-moz-osx-font-smoothing: grayscale;
				}
				.auth-container {
					display: flex;
					align-items: center;
					justify-content: center;
					height: 100%;
					width: 100%;
				}
				.grey {
					color: #6b7887;
				}

				hr {
					color: #cad3dd;
				}

				.primary-auth-button {
					background-color: #00cc99 !important;
					text-transform: none !important;
					height: 46px !important;
					font-size: 1rem !important;
				}

				.secondary-auth-button {
					background-color: #fff !important;
					color: #000 !important;
					text-transform: none !important;
					border: 1px solid #ccc !important;
					height: 46px !important;
					font-size: 1rem !important;
				}

				.opt-button {
					margin-left: 0.5em;
					margin-right: 0.5em;
					flex-grow: 1;
				}
				.centered {
					text-align: center;
					padding: 8px;
				}

				.tight-bottom {
					margin-bottom: 10px;
				}

				.full-bottom {
					margin-bottom: 20px;
				}
				.auth {
					background-color: #fff;
					width: 540px;
					min-height: 420px;
					max-height: 800px;
					height: auto;
					border-radius: 5px;
					display: flex;
					flex-direction: column;
					align-content: center;
					justify-content: flex-start;
				}

				.auth-outer {
					width: 405px;
					background-color: #fff;
					border-radius: 5px;
					display: flex;
					align-self: center;
					flex-direction: column;
					align-content: center;
					justify-content: flex-start;
					padding-bottom: 2em;
				}
				.authentication-logo-header {
					background-color: #330066;
					background-image: url('https://d3i745cguwtt4u.cloudfront.net/paytheory-logo.svg');
					background-repeat: no-repeat;
					background-size: 30%;
					background-position: center;
					height: 58px;
					border-radius: 5px 5px 0 0;
				}
				.authentication-form-head-centered {
					text-align: center;
					padding: 8px;
					margin-bottom: 10px;
				}
				.auth-form {
					display: flex;
					flex-direction: column;
					align-content: center;
					justify-content: center;
					width: 405px;
				}

				.auth-contain {
					display: flex;
					flex-direction: column;
					align-content: center;
					justify-content: center;
					width: 405px;
				}

				.auth-form a {
					color: #09f;
					text-decoration: none;
					font-weight: 600;
				}

				.break {
					display: flex;
					flex-basis: 100%;
					align-items: center;
					color: rgba(0, 0, 0, 0.35);
					margin: 8px 0px;
				}
				.divider {
					width: 405px;
					text-align: center;
					font-size: 16px;
					font-weight: 600;
					display: flex;
				}

				.divider hr {
					margin-left: auto;
					margin-right: auto;
					width: 40%;
				}

				.left {
					float: left;
					margin-top: 10px;
				}

				.right {
					float: right;
					margin-top: 10px;
				}
				.gone {
					visibility: hidden;
				}
				.password-meter {
					display: flex;
					justify-content: stretch;
					height: 0.5em;
					min-width: 30em;
					width: 100 %;
					margin-top: -1.25em;
					margin-left: -0.5em;
					overflow: hidden;
					font-size: small;
				}
				.password-meter div {
					flex-grow: 1;
					height: 0.25em;
				}
			`}</style>
		</div>
	)
}

export default AuthStyle
