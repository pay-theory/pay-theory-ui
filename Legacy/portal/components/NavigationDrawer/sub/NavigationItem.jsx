import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

import * as BooksHooks from '../../../../hooks'

const NavigationItem = props => {
	return (
		<BooksHooks.context.district.Consumer>
			{districtHook => {
				return (
					<li key={props.item.tag} data-testid={props.item.tag}>
						<Link
							to={{
								pathname: props.item.to,
								state: {
									forDistrict: districtHook.district,
									districtName: districtHook.districtName,
								},
							}}
							className={props.className}
						>
							<i className={`fal fa-${props.item.icon} fa-lg`} />
							{props.item.label}
						</Link>
					</li>
				)
			}}
		</BooksHooks.context.district.Consumer>
	)
}

NavigationItem.propTypes = {
	item: PropTypes.object.isRequired,
	className: PropTypes.string.isRequired,
}

export default NavigationItem
