import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'

import * as BooksHooks from '../../hooks'

import { PortalHead, NavigationDrawer, GlobalStyle } from '../../common'
import { Bouncer } from '../../common/auth'
import { useAuth0 } from '../../hooks/external/auth0'

const AdminPortal = (props) => {
    const { isAuthenticated, logout } = useAuth0()

    const pageMenu = props.generateMenu()

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
                <BooksHooks.context.page.Provider value={props.paged}>
                    <div id='container'>
                        <PortalHead
                            logout={() => {
                                logout()
                            }}
                        />
                        <div className='body-container'>
                            <NavigationDrawer />
                            <div className='body-content'>{props.children}</div>
                        </div>
                        <Bouncer bouncy={bouncy} />
                    </div>
                </BooksHooks.context.page.Provider>
            </BooksHooks.context.account.Provider>
        </BooksHooks.context.menu.Provider>
    )
}

AdminPortal.propTypes = {
    generateMenu: PropTypes.func.isRequired,
    paged: PropTypes.object.isRequired
}

export default AdminPortal
