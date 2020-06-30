import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'

import * as BooksHooks from '../../hooks'

import { PortalHead, NavigationDrawer, GlobalStyle } from '../../common'
import { Bouncer } from '../../common/auth'
import { useAuth0 } from '../../hooks/external/auth0'

/* eslint scanjs-rules/call_setTimeout: 0 */
const AdminPortal = ({ generateMenu, paged, onUnauthenticated, children }) => {
	const { isAuthenticated, logout } = useAuth0()

	const pageMenu = generateMenu()

	const [bouncy, setBouncy] = useState(false)
	const [accounted, setAccounted] = useState(false)

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
		<BooksHooks.context.menu.Provider value={pageMenu}>
			<BooksHooks.context.account.Provider value={accounted}>
				<GlobalStyle />
				<BooksHooks.context.page.Provider value={paged}>
					<div id='container'>
						<PortalHead
							logout={() => {
								logout()
							}}
						/>
						<div className='body-container'>
							<NavigationDrawer />
							<div className='body-content'>{children}</div>
							<Bouncer bouncy={bouncy} onUnauthenticated={onUnauthenticated} />
						</div>
					</div>
				</BooksHooks.context.page.Provider>
			</BooksHooks.context.account.Provider>
		</BooksHooks.context.menu.Provider>
	)
}

/* eslint react/prop-types: 0 */
AdminPortal.propTypes = {
	generateMenu: PropTypes.func.isRequired,
	onUnauthenticated: PropTypes.func,
	paged: PropTypes.object.isRequired
}

AdminPortal.defaultProps = {
	onUnauthenticated: () => console.log('no longer authenticated')
}

export default AdminPortal
