import React, { useContext } from 'react'
import { useHistory } from 'react-router-dom'
import Icon from '../../Icon'

import * as BooksHooks from '../../../hooks'

const SubsectionParent = (props) => {
    const history = useHistory()
    const parentHook = useContext(BooksHooks.Context.Parent)

    return (
        <span
            className='subsection-nav'
            data-testid='link'
            onClick={() => {
                if (history.location.state) {
                    history.goBack()
                } else {
                    history.push({
                        pathname: parentHook.route
                    })
                }
            }}
        >
            <Icon name='chevron-left' />
            <p className='all-caps alt-text'>{parentHook.parent}</p>
            <style global='true' jsx='true'>
                {`
                    .subsection-nav {
                        display: -webkit-flex;
                        display: flex;
                        -webkit-flex-direction: row;
                        flex-direction: row;
                        -webkit-justify-content: flex-start;
                        justify-content: flex-start;
                        -webkit-align-items: center;
                        align-items: center;
                        text-decoration: none;
                        cursor: pointer;
                    }

                    .subsection-nav i {
                        margin: 0px 8px;
                    }
                `}
            </style>
        </span>
    )
}

export default SubsectionParent
