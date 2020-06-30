import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'

import * as BooksHooks from '../../hooks'

import { PortalHead, NavigationDrawer, GlobalStyle } from '../../common'
import { Bouncer } from '../../common/auth'
import { useAuth0 } from '../../hooks/external/auth0'

const DocumentationPortal = (props) => {
	const docsStyle = {
		background: '#F4F4F4',
		hoverBackground: '#E8ECEF',
		fontColor: '#A3B3C4',
		hoverFontColor: '#6B7887'
	}

	const pageMenu = props.generateMenu()

	const [bouncy, setBouncy] = useState(false)
	const [accounted, setAccounted] = useState(false)

	const { isAuthenticated, logout } = useAuth0()

	useEffect(() => {
		setTimeout(() => {
			setBouncy(true)
		}, Bouncer.timeout)
	}, [])

	useEffect(() => {
		if (isAuthenticated) {
			setAccounted({ display_name: 'authentic' })
		}
	}, [isAuthenticated])

	return (
		<BooksHooks.context.menu.Provider value={pageMenu.menu}>
			<BooksHooks.context.account.Provider value={accounted}>
				<GlobalStyle />
				<BooksHooks.context.page.Provider value={props.paged}>
					<div id='container'>
						<PortalHead logout={logout} />
						<div className='body-container'>
							<NavigationDrawer
								listHead={pageMenu.listHead}
								style={docsStyle}
							/>
							<div className='body-content'>{props.children}</div>
						</div>
						<Bouncer bouncy={bouncy} />
					</div>
				</BooksHooks.context.page.Provider>
			</BooksHooks.context.account.Provider>
		</BooksHooks.context.menu.Provider>
	)
}

DocumentationPortal.propTypes = {
	generateMenu: PropTypes.func.isRequired,
	paged: PropTypes.object.isRequired
}

export default DocumentationPortal
