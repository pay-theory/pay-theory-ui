import React from 'react'

import * as BooksHooks from '../../../hooks'

const BodySubtitle = (props) => {
    return (
        <BooksHooks.Context.Page.Consumer>
            {(pageHook) => {
                return (
                    <div className='body-head-subtitle' data-testid='subtitle'>
                        {pageHook.subtitle}
                        <style jsx='true'>{`
                            .body-head-subtitle {
                                font-size: 16px;
                                font-weight: 400;
                                color: #6A606D;
                            }
                        `}</style>
                    </div>
                )
            }}
        </BooksHooks.Context.Page.Consumer>
    )
}

export default BodySubtitle
