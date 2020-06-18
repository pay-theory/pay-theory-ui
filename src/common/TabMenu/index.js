import React from 'react'
import PropTypes from 'prop-types'

const TabMenu = props => {
	const menuItems = props.items.map(item => {
		return (
			<div
				id={item.id}
				key={item.id}
				data-testid={item.id}
				className={`tab-menu-item ${item.active}`}
				onClick={item.action}
			>
				{item.label}
			</div>
		)
	})
	return (
		<div className="tab-menu">
			{menuItems}
			<style jsx="true" global="true">{`
				.tab-menu {
					display: flex;
					flex-direction: row;
					justify-content: flex-start;
					align-items: center;
					margin: 16px 0 0 0;
				}
				.tab-menu-item {
					color: #6b7887;
					margin: 0 16px;
					font-weight: 500;
					cursor: pointer;
				}

				.active-tab {
					border-bottom: 4px solid #66cccc;
				}
			`}</style>
		</div>
	)
}

TabMenu.propTypes = {
	items: PropTypes.array.isRequired,
}

export default TabMenu
