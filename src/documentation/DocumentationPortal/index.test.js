import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom'

import '@testing-library/jest-dom/extend-expect'

import { render } from '@testing-library/react'

import AdminPortal from './'
import { page, menu } from '../../test-data'
import { Auth0Provider } from '../../hooks/external/auth0'

test('display AdminPortal', async () => {
    const { queryByTestId } = render(
        <Router>
            <Auth0Provider
                audience='https://merchant.dashboard.paytheory.auth'
                client_id={process.env.AUTH0_CLIENT_ID}
                domain='paytheory.auth0.com'
                onRedirectCallback={() => {}}
                redirect_uri={window.location.origin}
            >
                <AdminPortal
                    generateMenu={() => {
                        return menu
                    }}
                    paged={page}
                />
            </Auth0Provider>
        </Router>
    )

    expect(queryByTestId('portal-container')).toBeInTheDocument()
})
