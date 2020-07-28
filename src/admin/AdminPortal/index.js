import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'

import * as BooksHooks from '../../hooks'

import { PortalHead, NavigationDrawer, GlobalStyle } from '../../common'
import { useAuth0 } from '../../hooks/external/auth0'

/* eslint-disable react/jsx-max-depth */

const AdminPortal = ({ generateMenu, paged, onUnauthenticated, children }) => {
    const { isAuthenticated, logout } = useAuth0()

    const pageMenu = generateMenu()

    const [accounted, setAccounted] = useState(false)

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
                        </div>
                    </div>
                </BooksHooks.context.page.Provider>
            </BooksHooks.context.account.Provider>
        </BooksHooks.context.menu.Provider>
    )
}

/* eslint-enable react/jsx-max-depth */
AdminPortal.propTypes = {
    children: PropTypes.node.isRequired,
    generateMenu: PropTypes.func.isRequired,
    onUnauthenticated: PropTypes.func,
    paged: PropTypes.object.isRequired
}

AdminPortal.defaultProps = {
    onUnauthenticated: () => console.log('no longer authenticated')
}

export default AdminPortal
