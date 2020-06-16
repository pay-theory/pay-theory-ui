import React from 'react'
import PropTypes from 'prop-types'

const NavigationCategory = props => {
	return (
		<li key={props.item.tag} data-testid={props.item.tag}>
			<details
				data-testid={`${props.item.tag}-details`}
				open={props.detailsOpen}
			>
				<summary>
					<i className={`fal fa-${props.item.icon} fa-lg`} />
					{props.item.label}
				</summary>
				<ul>
					{props.item.subContent.map(subMenuItem => {
						return props.createItem(subMenuItem)
					})}
				</ul>
			</details>
		</li>
	)
}

NavigationCategory.propTypes = {
	item: PropTypes.object.isRequired,
	detailsOpen: PropTypes.bool.isRequired,
	createItem: PropTypes.func.isRequired,
}

export default NavigationCategory
