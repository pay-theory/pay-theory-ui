// node modules
import React from 'react'
import PropTypes from 'prop-types'
// ui root
import { TabPage } from '../../common'

const RolesTab = (props) => (
	<TabPage id={props.id} visibility={props.visibility}>
		<div className='tab-content'>{props.children}</div>
		<style jsx='true'>{`
			.tab-content {
				display: flex;
				flex-direction: column;
				justify-content: flex-start;
				align-items: stretch;
			}

			.tab-content {
				display: flex;
				flex-direction: column;
				justify-content: flex-start;
				align-items: stretch;
			}

			.tab-content .text-entry {
				margin: 16px 24px;
			}
			.tab-content .primary-button {
				margin: 16px 24px;
			}
		`}</style>
	</TabPage>
)

RolesTab.propTypes = {
	id: PropTypes.string.isRequired,
	visibility: PropTypes.string
}

export default RolesTab
