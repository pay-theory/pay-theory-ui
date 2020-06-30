import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import WebFont from 'webfontloader'

const Font = ({ typekit }) => {
	const WebFontConfig = {
		typekit: {
			id: typekit
		}
	}
	const [fontState, setFontState] = useState('font-init')
	useEffect(() => {
		;(async () => {
			WebFont.load(WebFontConfig)
			setFontState('font-ready')
		})()
	}, [])

	return <div className={fontState} />
}

Font.propTypes = {
	typekit: PropTypes.string.isRequired
}

export default Font
