import React from 'react'

import * as BooksHooks from '../../../hooks'

const SubsectionSubtitle = (props) => {
    return (
        <BooksHooks.Context.Page.Consumer>
            {(pageHook) => {
                return (
                    <div className='subtitle' data-testid='subtitle'>
                        {pageHook.subtitle}
                        <style jsx='true' />
                    </div>
                )
            }}
        </BooksHooks.Context.Page.Consumer>
    )
}

export default SubsectionSubtitle
