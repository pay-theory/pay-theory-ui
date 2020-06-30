import React from 'react'
const PortalTitle = (props) => {
	return (
		<div className='portal-head-title'>
			{props.children}{' '}
			<style jsx='true'>{`
				.portal-head-title {
					display: flex;
					flex-direction: row;
					justify-content: flex-start;
				}
			`}</style>
		</div>
	)
}

export default PortalTitle
