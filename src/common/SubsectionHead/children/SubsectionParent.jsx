import React from 'react'
import { Link, useHistory } from 'react-router-dom'

import * as BooksHooks from '../../../hooks'

const SubsectionParent = (props) => {
    const history = useHistory();

    return (
        <BooksHooks.Context.Parent.Consumer>
            {(parentHook) => {
                /* istanbul ignore next */
                const response = /* istanbul ignore next */ parentHook ? (
                    <a
                        data-testid='link'
                        className='subsection-nav'
                        onClick={(e) => {
                        e.preventDefault()
                        if(history.location.state){
                        history.goBack()
                        } else {
                        history.push({
                            pathname: parentHook.route
                        })
                        }

                        }}
                    >
                        <i className='fal fa-chevron-left' />
                        Back to {parentHook.parent}
                        <style jsx='true' global='true'>
                            {`
                                .subsection-nav,
                                a.subsection-nav:link,
                                a.subsection-nav:visited,
                                a.subsection-nav:active {
                                    color: #7C2CDD;
                                    display: -webkit-flex;
                                    display: flex;
                                    -webkit-flex-direction: row;
                                    flex-direction: row;
                                    -webkit-justify-content: flex-start;
                                    justify-content: flex-start;
                                    -webkit-align-items: center;
                                    align-items: center;
                                    text-decoration: none;
                                    font-weight: 600;
                                    cursor: pointer;
                                }

                                .subsection-nav i {
                                    color: #7C2CDD;
                                    margin-left: 8px;
                                    margin-right: 8px;
                                }
                            `}
                        </style>
                    </a>
                ) : (
                    <div />
                )
                return response
            }}
        </BooksHooks.Context.Parent.Consumer>
    )
}

export default SubsectionParent
