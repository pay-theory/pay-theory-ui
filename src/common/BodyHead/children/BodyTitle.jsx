import React from 'react'

import * as BooksHooks from '../../../hooks'

const BodyTitle = (props) => {
	return (
		<BooksHooks.context.page.Consumer>
			{(parentHook) => {
				return (
					<div className='body-head-title' data-testid='title'>
						{parentHook.title}
						<style jsx='true'>{`
							.body-head-title {
								font-size: 22px;
								font-weight: 600;
							}
						`}</style>
					</div>
				)
			}}
		</BooksHooks.context.page.Consumer>
	)
}

export default BodyTitle
