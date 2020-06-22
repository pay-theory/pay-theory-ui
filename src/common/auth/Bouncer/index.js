// node modules
import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'

const Bouncer = (props) => {
    const [bouncer, setBouncer] = useState(
        <div data-testid='unauthenticated' />
    )
    const [init, setInit] = useState(true)

    useEffect(() => {
        if (!props.loading && props.bouncy && init) {
            console.log(
                'bouncing',
                props.isAuthenticated,
                props.loading,
                props.bouncy,
                init
            )
            setInit(false)
            if (props.isAuthenticated) {
                setBouncer(<div data-testid='authenticated' />)
            } else {
                props.onUnauthenticated()
            }
        }
    }, [
        props.loading,
        props.isAuthenticated,
        props.onUnauthenticated,
        props.bouncy,
        init
    ])

    return bouncer
}

Bouncer.propTypes = {
    bouncy: PropTypes.bool.isRequired,
    loading: PropTypes.bool.isRequired,
    isAuthenticated: PropTypes.bool.isRequired,
    onUnauthenticated: PropTypes.func.isRequired
}

Bouncer.timeout = 2500

export default Bouncer
