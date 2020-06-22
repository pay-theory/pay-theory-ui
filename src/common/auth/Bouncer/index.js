// node modules
import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import { authHook } from '../../../hooks'

const Bouncer = (props) => {
    const { isAuthenticated, loginWithRedirect, loading } = authHook.useAuth0()
    const [bouncer, setBouncer] = useState(
        <div data-testid='unauthenticated' />
    )
    const [init, setInit] = useState(true)

    useEffect(() => {
        if (!loading && props.bouncy && init) {
            console.log(
                'bouncing',
                isAuthenticated,
                loading,
                props.bouncy,
                init
            )
            setInit(false)
            if (isAuthenticated) {
                setBouncer(<div data-testid='authenticated' />)
            } else {
                props.onUnauthenticated
                    ? props.onUnauthenticated()
                    : loginWithRedirect()
            }
        }
    }, [loading, isAuthenticated, props.bouncy, init])

    return bouncer
}

Bouncer.propTypes = {
    bouncy: PropTypes.bool.isRequired,
    onUnauthenticated: PropTypes.func
}

Bouncer.timeout = 2500

export default Bouncer
