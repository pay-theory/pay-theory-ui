//node modules
import React from 'react'
import PropTypes from 'prop-types'
import Button from '@material/react-button'
//ui root
import * as BooksHooks from '../../../hooks'
import { FormHead, InnerTable, TabPage, openModal } from '../'
import { generateTableColumns, generateTableRows } from '../accountUtils'

const AccountsTab = props => (
	<BooksHooks.context.accounts.Consumer>
		{accounts => {
			return (
				<TabPage id={props.id} visibility={props.visibility}>
					<div className="tab-content">
						<FormHead text="User Accounts" />
						<InnerTable
							columns={generateTableColumns()}
							rows={generateTableRows(
								accounts,
								props.viewAccount,
								props.deleteAccount
							)}
							canDelete
							hasActions
						/>
					</div>
					<hr />
					<div className="tab-content">
						<Button
							data-testid="add-account-button"
							className="primary-button"
							raised
							onClick={openModal}
						>
							<i className={`fal fa-plus-circle`} />
							Create Account
						</Button>
					</div>
					<style jsx="true" global="true">{`
						.account-name {
							width: 140px;
						}
						.account-phone {
							width: 140px;
						}
						.account-email {
							width: 140px;
						}
						.account-title {
							width: 140px;
						}
					`}</style>
				</TabPage>
			)
		}}
	</BooksHooks.context.accounts.Consumer>
)

AccountsTab.propTypes = {
	id: PropTypes.string.isRequired,
	visibility: PropTypes.string.isRequired,
	viewAccount: PropTypes.func.isRequired,
	deleteAccount: PropTypes.func.isRequired,
}

export default AccountsTab
