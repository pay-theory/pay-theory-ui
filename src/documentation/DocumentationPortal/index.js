import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'

import * as BooksHooks from '../../hooks'

import { PortalHead, NavigationDrawer, GlobalStyle } from '../../common'
import { useAuth0 } from '../../hooks/external/auth0'

const DocumentationPortal = ({ generateMenu, paged, children }) => {
    const docsStyle = {
        background: '#F4F4F4',
        hoverBackground: '#E8ECEF',
        fontColor: '#A3B3C4',
        hoverFontColor: '#6B7887'
    }

    const pageMenu = generateMenu()

    const [accounted, setAccounted] = useState(false)

    const { isAuthenticated, logout } = useAuth0()

    useEffect(() => {
        if (isAuthenticated) {
            setAccounted({ display_name: 'authentic' })
        }
    }, [isAuthenticated])

    return (
        <BooksHooks.context.menu.Provider value={pageMenu.menu}>
            <BooksHooks.context.account.Provider value={accounted}>
                <GlobalStyle />
                <BooksHooks.context.page.Provider value={paged}>
                    <div data-testid='portal-container' id='container'>
                        <PortalHead logout={logout} />
                        <div className='body-container'>
                            <NavigationDrawer
                                listHead={pageMenu.listHead}
                                style={docsStyle}
                            />
                            <div className='body-content'>{children}</div>
                        </div>
                    </div>
                </BooksHooks.context.page.Provider>
            </BooksHooks.context.account.Provider>
        </BooksHooks.context.menu.Provider>
    )
}

/* eslint react/prop-types: 0 */
DocumentationPortal.propTypes = {
    generateMenu: PropTypes.func.isRequired,
    paged: PropTypes.object.isRequired
}

export default DocumentationPortal
