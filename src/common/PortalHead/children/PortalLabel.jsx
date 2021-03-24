import React from 'react'
import * as BooksHooks from '../../../hooks'

const PortalLabel = (props) => {
    return (
        <BooksHooks.Context.Page.Consumer>
            {(pageHook) => {
                return (
                    <div
                        className='portal-head-label'
                        data-testid='portal-label'
                    >
                        {pageHook.title}
                        <style jsx='true'>{`
                            .portal-head-label {
                                height: 52px;
                                line-height: 52px;
                                vertical-align: center;
                                margin-right: 8px;
                                font-size: 18px;
                            }
                        `}</style>
                    </div>
                )
            }}
        </BooksHooks.Context.Page.Consumer>
    )
}

export default PortalLabel
