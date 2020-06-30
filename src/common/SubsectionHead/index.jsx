import React from 'react'

import { SubsectionParent, SubsectionSubtitle } from './children'

const SubsectionHead = (props) => {
	return (
		<div className='body-head card'>
			<SubsectionParent />
			<SubsectionSubtitle />
			<style jsx='true'>{`
				.body-head {
					display: flex;
					flex-direction: row;
					padding: 24px;
					justify-content: space-between;
					align-items: center;
				}
				.card {
					background-color: #fff;
					box-shadow: 0 3px 1px -2px rgba(0, 0, 0, 0.2),
						0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 1px 5px 0 rgba(0, 0, 0, 0.12);
					-webkit-transition: box-shadow 0.28s cubic-bezier(0.4, 0, 0.2, 1);
					transition: box-shadow 0.28s cubic-bezier(0.4, 0, 0.2, 1);
				}
			`}</style>
		</div>
	)
}

export default SubsectionHead
