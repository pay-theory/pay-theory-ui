// node modules
import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import { useAuth0 } from '../../../../src/Hooks/external/auth0'

const Bouncer = (props) => {
    const { isAuthenticated, loginWithRedirect, loading } = useAuth0()
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
                loginWithRedirect()
            }
        }
    }, [loading, isAuthenticated, props.bouncy, init])

    return bouncer
}

Bouncer.propTypes = {
    bouncy: PropTypes.bool.isRequired
}

Bouncer.timeout = 2500

export default Bouncer
