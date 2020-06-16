import React, { useState } from 'react'
import PropTypes from 'prop-types'
import Button from '@material/react-button'

import CardTable from '../CardTable'
import InnerTable from '../InnerTable'
import { generateTableColumns, generateTableRows } from '../accountUtils'
import * as BooksHooks from '../../../hooks'
import { StockTags } from '../../../common/StatusMessage'

const AccountTable = props => {
	return (
		<BooksHooks.context.accounts.Consumer>
			{accounts => {
				return (
					<CardTable>
						<InnerTable
							columns={generateTableColumns()}
							rows={generateTableRows(
								accounts,
								props.viewAccount,
								props.deleteAccount
							)}
							hasActions
							canDelete
						/>
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
					</CardTable>
				)
			}}
		</BooksHooks.context.accounts.Consumer>
	)
}

AccountTable.propTypes = {
	viewAccount: PropTypes.func.isRequired,
	deleteAccount: PropTypes.func.isRequired,
}

export default AccountTable
