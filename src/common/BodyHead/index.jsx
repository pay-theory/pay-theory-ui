import React from 'react'

import { BodyTitle, BodySubtitle } from './children'

const BodyHead = () => {
	return (
		<div className='body-head'>
			<BodyTitle />
			<BodySubtitle />
			<style jsx='true'>{`
				.body-head {
					display: flex;
					flex-direction: row;
					padding: 24px;
					justify-content: space-between;
					align-items: center;
				}
			`}</style>
		</div>
	)
}

export default BodyHead
