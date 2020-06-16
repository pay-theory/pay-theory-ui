import React from 'react'
import PropTypes from 'prop-types'

import {
	PortalTitle,
	PortalLogo,
	PortalLabel,
	AccountMenu,
	AccountMenuButton,
	AccountMenuItems,
} from './sub'

const PortalHead = props => {
	return (
		<header className="portal-head-header">
			<PortalTitle>
				<PortalLogo />
				<PortalLabel />
			</PortalTitle>
			<AccountMenu>
				<AccountMenuButton />
				<AccountMenuItems logout={props.logout} />
			</AccountMenu>
			<style jsx="true">{`
				.portal-head-header {
					background: #31187f;
					color: #fff;
					display: flex;
					flex-direction: row;
					justify-content: space-between;
					align-items: center;
					flex-grow: 1;
					padding: 0px 0px 0px 24px;
					line-height: 30px;
					max-height: 52px;
				}
			`}</style>
		</header>
	)
}

PortalHead.propTypes = {
	logout: PropTypes.func.isRequired,
}

export default PortalHead
