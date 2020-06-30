import React from 'react'

const CardRow = (props) => (
	<div className='card-row' data-testid='CardRow'>
		{props.children}
		<style jsx='true'>{`
			.card-row {
				display: flex;
				flex-direction: row;
				justify-content: center;
				height: auto;
				width: 100%;
				overflow: auto;
				flex-wrap: wrap;
			}
		`}</style>
	</div>
)

export default CardRow
