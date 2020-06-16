import React from 'react'

import * as BooksHooks from '../../../../hooks'

const SubsectionSubtitle = props => {
	return (
		<BooksHooks.context.page.Consumer>
			{pageHook => {
				return (
					<div className="subtitle" data-testid="subtitle">
						{pageHook.subtitle}
						<style jsx="true">{``}</style>
					</div>
				)
			}}
		</BooksHooks.context.page.Consumer>
	)
}

export default SubsectionSubtitle
