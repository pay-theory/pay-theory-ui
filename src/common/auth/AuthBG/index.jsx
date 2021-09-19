import React, { useEffect } from 'react'
import ModalSpinner from '../../ModalSpinner'
import GlobalStyle from '../../GlobalStyle'

import AuthStyle from '../AuthStyle'

function AuthBG(props) {
    useEffect(() => {
        document.body.style.backgroundColor = 'var(--grey-3)'
        document.body.style.backgroundSize = 'cover'
        return function cleanup() {
            // remove authentication background to prevent bleeding into other pages
            document.body.style.backgroundColor = 'var(--grey-3)'
            document.body.style.backgroundImage = 'none'
        }
    }, [])

    return (
        <div>
            <AuthStyle />
            <GlobalStyle />
            <div data-testid='authBg' className='spinner-wrapper'>
                <div id='container'>{props.children}</div>
                <ModalSpinner />
            </div>
        </div>
    )
}

export default AuthBG
