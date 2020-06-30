import React, { useEffect } from 'react'
import ModalSpinner from '../../ModalSpinner'

import AuthStyle from '../AuthStyle'

function AuthBG(props) {
	useEffect(() => {
		document.body.style.backgroundColor = '#0099ff'
		document.body.style.backgroundImage =
			"url('https://d3i745cguwtt4u.cloudfront.net/school-pattern.svg')"
		document.body.style.backgroundSize = 'cover'
		return function cleanup() {
			// remove authentication background to prevent bleeding into other pages
			document.body.style.backgroundColor = '#f4f4f4'
			document.body.style.backgroundImage = 'none'
		}
	}, [])

	return (
		<div>
			<AuthStyle />
			<div data-testid='authBg' className='spinner-wrapper'>
				<div id='container'>{props.children}</div>
				<ModalSpinner />
			</div>
		</div>
	)
}

export default AuthBG
