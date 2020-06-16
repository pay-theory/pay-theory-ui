import React, { useState } from 'react'
import PropTypes from 'prop-types'
import Button from '@material/react-button'

import CardTable from '../CardTable'
import InnerTable from '../InnerTable'
import * as BooksHooks from '../../../hooks'

const PartnerTable = props => {
	return (
		<BooksHooks.context.partners.Consumer>
			{partners => {
				const generateTableColumns = () => {
					return [{ className: 'partner-name', label: 'partner' }]
				}
				const generateTableRows = partners => {
					return partners.map((item, i) => {
						return {
							columns: [
								{
									className: 'partner-name',
									content: item.data.partner_name,
								},
							],
							key: item.key,
							view: () =>
								props.viewPartner(
									item.key,
									item.data.partner_name
								),
							delete: () =>
								props.deletePartner(
									item.key,
									item.data.partner_name
								),
						}
					})
				}
				return (
					<CardTable>
						<InnerTable
							columns={generateTableColumns()}
							rows={generateTableRows(partners)}
							hasActions
							canDelete
						/>
						<style jsx="true" global="true">{`
							.partner-name {
								min-width: 140px;
								max-width: 140px;
							}
						`}</style>
					</CardTable>
				)
			}}
		</BooksHooks.context.partners.Consumer>
	)
}

PartnerTable.propTypes = {
	viewPartner: PropTypes.func.isRequired,
	deletePartner: PropTypes.func.isRequired,
}

export default PartnerTable
