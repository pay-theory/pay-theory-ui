import React from 'react'
import PropTypes from 'prop-types'

const DynamicList = (props) => {
	const items = props.items ? props.items : []
	return (
		<div className='dynamic-list' data-testid='dynamic-list'>
			{items.map((item, index) => (
				<div
					className='dynamic-list-item'
					key={`${item}-${index}`}
					data-testid='dynamic-list-item-text'
				>
					{item}
					<i
						className='fal fa-times'
						data-testid='dynamic-list-item-removal'
						onClick={() => props.removalCallback(index)}
					/>
				</div>
			))}
			<style jsx='true'>{`
				.dynamic-list {
					display: flex;
					flex-wrap: wrap;
					justify-content: flex-start;
					align-items: flex-start;
				}
				.dynamic-list-item {
					background-color: #09f;
					color: #fff;
					border-radius: 50px;
					max-width: 160px;
					min-width: 160px;
					display: flex;
					justify-content: space-between;
					align-items: center;
					padding: 8px 16px;
					margin: 4px;
				}
				.dynamic-list-item i {
					color: #fff;
					cursor: pointer;
				}
			`}</style>
		</div>
	)
}

DynamicList.propTypes = {
	removalCallback: PropTypes.func,
	items: PropTypes.array
}

export default DynamicList
