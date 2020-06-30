import React from 'react'
import { Link } from 'react-router-dom'

import * as BooksHooks from '../../../hooks'

const SubsectionParent = (props) => {
	return (
		<BooksHooks.context.parent.Consumer>
			{(parentHook) => {
				/* istanbul ignore next */
				const response = /* istanbul ignore next */ parentHook ? (
					<Link
						data-testid='link'
						className='subsection-nav'
						to={{
							pathname: parentHook.route,
							state: {
								forPartner: parentHook.for_partner,
								partnerName: parentHook.partner_name,
								forDistrict: parentHook.for_district,
								districtName: parentHook.district_name,
								forAccount: parentHook.for_account,
								accountName: parentHook.account_name
							}
						}}
					>
						<i className='fal fa-chevron-left' />
						Back to {parentHook.parent}
						<style jsx='true' global='true'>
							{`
								.subsection-nav,
								a.subsection-nav:link,
								a.subsection-nav:visited,
								a.subsection-nav:active {
									color: #09f;
									display: -webkit-flex;
									display: flex;
									-webkit-flex-direction: row;
									flex-direction: row;
									-webkit-justify-content: flex-start;
									justify-content: flex-start;
									-webkit-align-items: center;
									align-items: center;
									text-decoration: none;
									font-weight: 600;
								}

								.subsection-nav i {
									color: #09f;
									margin-left: 8px;
									margin-right: 8px;
								}
							`}
						</style>
					</Link>
				) : (
					<div />
				)
				return response
			}}
		</BooksHooks.context.parent.Consumer>
	)
}

export default SubsectionParent
