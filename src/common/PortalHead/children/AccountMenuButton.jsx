import React from 'react'
import * as BooksHooks from '../../../hooks'

const AccountMenuButton = (props) => {
	return (
		<BooksHooks.context.account.Consumer>
			{(accountHook) => {
				return (
					<div
						className='portal-head-account-menu-button'
						data-testid='account-label'
						tabIndex='0'
					>
						{accountHook.nickname}
						<i className={`fal fa-chevron-down}`} />
						<style jsx='true' global='true'>{`
							.portal-head-account-menu-button {
								color: #fff;
								background: #160f3d;
								display: flex;
								font-weight: 600;
								border: none;
								border-radius: 3px;
								padding: 2px 12px;
								font-size: 11pt;
								flex-direction: row;
								justify-content: flex-start;
								align-items: center;
								height: 33px;
								margin-top: auto;
								margin-bottom: auto;
								line-height: 30px;
							}

							.portal-head-account-menu-button svg {
								margin: 8px;
							}

							.portal-head-account-menu-button:hover
								+ .portal-head-account-menu-items,
							.portal-head-account-menu-button:focus
								+ .portal-head-account-menu-items,
							.portal-head-account-menu-items:focus-within,
							.portal-head-account-menu-items:hover {
								opacity: 100;
							}
						`}</style>
					</div>
				)
			}}
		</BooksHooks.context.account.Consumer>
	)
}

export default AccountMenuButton
