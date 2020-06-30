import React, { useState, useEffect, useContext } from 'react'
import createAuth0Client from '@auth0/auth0-spa-js'
import { Route } from 'react-router-dom'
import PropTypes from 'prop-types'

const DEFAULT_REDIRECT_CALLBACK = () =>
    window.history.replaceState({}, document.title, window.location.pathname)

const Auth0Context = React.createContext()
const useAuth0 = () => useContext(Auth0Context)
/* eslint react/no-multi-comp: 0 */
/* eslint react/prop-types: 0 */
/* eslint react/require-default-props: 0 */
const PrivateRoute = ({ component: Component, path, ...rest }) => {
    const { loading, isAuthenticated, loginWithRedirect } = useAuth0()

    useEffect(() => {
        if (loading || isAuthenticated) {
            return
        }
        const fn = async () => {
            await loginWithRedirect({
                appState: { targetUrl: window.location.pathname }
            })
        }
        fn()
    }, [loading, isAuthenticated, loginWithRedirect, path])

    const render = (props) =>
        isAuthenticated === true ? <Component {...props} /> : null

    return <Route path={path} render={render} {...rest} />
}

PrivateRoute.propTypes = {
    component: PropTypes.elementType.isRequired,
    path: PropTypes.string.isRequired
}

const Auth0Provider = ({
    children,
    onRedirectCallback = DEFAULT_REDIRECT_CALLBACK,
    ...initOptions
}) => {
    const [isAuthenticated, setIsAuthenticated] = useState()
    const [user, setUser] = useState()
    const [auth0Client, setAuth0] = useState()
    const [loading, setLoading] = useState(true)
    const [popupOpen, setPopupOpen] = useState(false)

    useEffect(() => {
        const initAuth0 = async () => {
            const auth0FromHook = await createAuth0Client(initOptions)
            setAuth0(auth0FromHook)

            if (
                window.location.search.includes('code=') &&
                window.location.search.includes('state=')
            ) {
                const {
                    appState
                } = await auth0FromHook.handleRedirectCallback()
                onRedirectCallback(appState)
            }

            const isAuthenticated = await auth0FromHook.isAuthenticated()

            setIsAuthenticated(isAuthenticated)

            if (isAuthenticated) {
                const user = await auth0FromHook.getUser()
                setUser(user)
            }

            setLoading(false)
        }
        initAuth0()
        // eslint-disable-next-line
    }, [])

    const loginWithPopup = async (params = {}) => {
        setPopupOpen(true)
        try {
            await auth0Client.loginWithPopup(params)
        } catch (error) {
            console.error(error)
        } finally {
            setPopupOpen(false)
        }
        const user = await auth0Client.getUser()
        setUser(user)
        setIsAuthenticated(true)
    }

    const handleRedirectCallback = async () => {
        setLoading(true)
        await auth0Client.handleRedirectCallback()
        const user = await auth0Client.getUser()
        setLoading(false)
        setIsAuthenticated(true)
        setUser(user)
    }
    return (
        <Auth0Context.Provider
            value={{
                isAuthenticated,
                user,
                loading,
                popupOpen,
                loginWithPopup,
                handleRedirectCallback,
                getIdTokenClaims: (...p) => auth0Client.getIdTokenClaims(...p),
                loginWithRedirect: (...p) =>
                    auth0Client.loginWithRedirect(...p),
                getTokenSilently: (...p) => auth0Client.getTokenSilently(...p),
                getTokenWithPopup: (...p) =>
                    auth0Client.getTokenWithPopup(...p),
                logout: (...p) => auth0Client.logout(...p)
            }}
        >
            {children}
        </Auth0Context.Provider>
    )
}

Auth0Provider.propTypes = {
    onRedirectCallback: PropTypes.func
}

export { Auth0Context, useAuth0, Auth0Provider }
