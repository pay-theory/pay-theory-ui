import React from 'react'

import * as BooksHooks from '../../../../hooks'

const BodySubtitle = props => {
	return (
		<BooksHooks.context.page.Consumer>
			{pageHook => {
				return (
					<div className="body-head-subtitle" data-testid="subtitle">
						{pageHook.subtitle}
						<style jsx="true">{`
							.body-head-subtitle {
								font-size: 16px;
								font-weight: 400;
							}
						`}</style>
					</div>
				)
			}}
		</BooksHooks.context.page.Consumer>
	)
}

export default BodySubtitle
