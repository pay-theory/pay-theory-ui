import React from 'react'
import 'pay-theory-ui/dist/index.css'

import {
    authHook,
    PortalHead,
    NavigationDrawer,
    GlobalStyle,
    BooksHooks,
    DocumentationPortal
} from 'pay-theory-ui'

import { BrowserRouter as Router } from 'react-router-dom'

const onRedirectCallback = (appState) => {
    if (appState && appState.targetUrl) {
        window.location.href = appState.targetUrl
    } else {
        window.location.pathname = '/'
    }
}

export default function App(props) {
    const generateDocumentationMenu = () => {
        return {
            listHead: '',
            menu: [
                {
                    className: 'active',
                    tag: 'install',
                    label: 'Install',
                    isCategory: true,
                    subContent: [
                        {
                            to: 'import-install-npm',
                            className: 'active',
                            tag: 'import-install-npm',
                            label: 'Install NPM'
                        }
                    ]
                },
                {
                    className: 'active',
                    tag: 'usage',
                    label: 'Usage',
                    isCategory: true,
                    subContent: [
                        {
                            to: 'usage-import',
                            className: 'active',
                            tag: 'usage-import',
                            label: 'Import'
                        },
                        {
                            to: 'usage-configure',
                            className: 'active',
                            tag: 'usage-configure',
                            label: 'Configure'
                        },
                        {
                            to: 'usage-process-payments',
                            className: 'active',
                            tag: 'usage-process-payments',
                            label: 'Process payments'
                        }
                    ]
                }
            ]
        }
    }

    const docsStyle = {
        background: '#F4F4F4',
        hoverBackground: '#E8ECEF',
        fontColor: '#A3B3C4',
        hoverFontColor: '#6B7887'
    }

    const paged = {
        title: 'Merchant Account Settings',
        subtitle: 'Component Demo'
    }

    const pageMenu = generateDocumentationMenu()

    return (
        <authHook.Auth0Provider
            domain='paytheory.auth0.com'
            client_id='oH8OiU5i9McT793eXgpxOsXaXWRVs7BU'
            redirect_uri={window.location.origin}
            audience='https://system.dashboard.paytheory.auth'
            onRedirectCallback={onRedirectCallback}
        >
            <div id='app'>
                <Router>
                    <DocumentationPortal
                        paged={paged}
                        generateMenu={generateDocumentationMenu}
                    />
                </Router>
            </div>
        </authHook.Auth0Provider>
    )
}
