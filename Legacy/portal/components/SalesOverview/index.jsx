//node modules
import React from 'react'
import PropTypes from 'prop-types'
//ui root
import { TabMenu, SalesTab, InnerTable, CardTable } from '../'

const MENU_ITEMS = {
	ALL: {
		menu: 'all-sales-menu',
		tab: 'all-sales-tab',
		table: 'all-sales-table',
	},
	DONATIONS: {
		menu: 'donation-sales-menu',
		tab: 'donation-sales-tab',
		table: 'donation-sales-table',
	},
	INVOICES: {
		menu: 'invoice-sales-menu',
		tab: 'invoice-sales-tab',
		table: 'invoice-sales-table',
	},
}

const getStatusDate = item => {
	let date = undefined
	switch (item.status) {
		case 'approved':
			date = new Date(item.approved_on_date)
			break
		case 'paid':
			date = new Date(item.paid_on_date)
			break
		case 'voided':
			date = new Date(item.voided_on_date)
			break
		default:
			date = new Date(item.validated_on_date)
			break
	}
	return `${date.getMonth() + 1}/${date.getDate()}/${date.getFullYear()}`
}
const calculateAmount = item => {
	let amount = 0
	item.items.forEach(purchase => {
		amount = amount + parseFloat(purchase.amount)
	})
	return amount.toFixed(2)
}

const generateTableColumns = () => {
	return [
		{ className: 'order-id', label: 'Order ID' },
		{ className: 'order-name', label: 'Name' },
		{ className: 'order-date', label: 'Date' },
		{ className: 'order-type', label: 'Type' },
		{ className: 'order-status', label: 'Status' },
		{ className: 'order-amount', label: 'Amount' },
	]
}

const selectTab = selected => {
	const menu = document.getElementById(selected.menu)
	const tab = document.getElementById(selected.tab)
	tab.classList.remove('gone')
	tab.classList.add('tab-visible')
	menu.classList.add('active-tab')
}
const clearUnselected = unselected => {
	unselected.forEach(item => {
		const menu = document.getElementById(item.menu)
		const tab = document.getElementById(item.tab)
		tab.classList.remove('tab-visible')
		tab.classList.add('gone')
		menu.classList.remove('active-tab')
	})
}

const changeTab = selected => {
	/* istanbul ignore next */
	switch (selected) {
		case MENU_ITEMS.ALL:
			clearUnselected([MENU_ITEMS.DONATIONS, MENU_ITEMS.INVOICES])
			break
		case MENU_ITEMS.INVOICES:
			clearUnselected([MENU_ITEMS.DONATIONS, MENU_ITEMS.ALL])
			break
		default:
			clearUnselected([MENU_ITEMS.ALL, MENU_ITEMS.INVOICES])
	}
	selectTab(selected)
}

const menuItems = [
	{
		id: MENU_ITEMS.ALL.menu,
		label: 'All Sales',
		active: 'active-tab',
		action: () => changeTab(MENU_ITEMS.ALL),
	},
	{
		id: MENU_ITEMS.DONATIONS.menu,
		label: 'Donations',
		active: '',
		action: () => changeTab(MENU_ITEMS.DONATIONS),
	},
	{
		id: MENU_ITEMS.INVOICES.menu,
		label: 'Invoices',
		active: '',
		action: () => changeTab(MENU_ITEMS.INVOICES),
	},
]

const SalesOverview = props => {
	const generateRows = sales => {
		return sales.map((item, i) => {
			const name = item.data.payor.is_anonymous
				? 'anonymous'
				: `${item.data.payor.payor_family_name}, ${
						item.data.payor.payor_given_name
				  }`
			return {
				columns: [
					{
						className: 'order-id',
						content: /* istanbul ignore next */ item.data.order_id
							? item.data.order_id
							: item.data.UID,
					},
					{ className: 'order-name', content: name },
					{
						className: 'order-date',
						content: getStatusDate(item.data),
					},
					{
						className: 'order-type',
						content: item.data.payment_type,
					},
					{
						className: `order-item-status ${item.data.status}`,
						content: item.data.status,
					},
					{
						className: 'order-amount',
						content: `$${calculateAmount(item.data)}`,
					},
				],
				key: item.key,
				view: () => props.viewItem(item, item.data.payment_type),
			}
		})
	}
	return (
		<CardTable>
			<div className="tab-contain">
				<TabMenu items={menuItems} />
				<hr />
				<SalesTab id={MENU_ITEMS.ALL.tab} visibility="tab-visible">
					<InnerTable
						id={MENU_ITEMS.ALL.table}
						rows={generateRows(props.allItems)}
						columns={generateTableColumns()}
						hasActions
					/>
				</SalesTab>
				<SalesTab id={MENU_ITEMS.DONATIONS.tab} visibility="gone">
					<InnerTable
						id={MENU_ITEMS.DONATIONS.table}
						rows={generateRows(props.donationItems)}
						columns={generateTableColumns()}
						hasActions
					/>
				</SalesTab>
				<SalesTab id={MENU_ITEMS.INVOICES.tab} visibility="gone">
					<InnerTable
						id={MENU_ITEMS.INVOICES.table}
						rows={generateRows(props.invoiceItems)}
						columns={generateTableColumns()}
						hasActions
					/>
				</SalesTab>
			</div>
			<style jsx="true" global="true">{`
				#school-entry {
					max-width: 100%;
					min-width: 762px;
					width: auto;
					padding: 0;
					flex-grow: 1;
					margin: 0 8px;
				}
				.overview-detail-container {
					display: flex;
					flex-direction: row;
					justify-content: flex-start;
					align-items: flex-start;
				}

				.overview-detail-container hr {
					background-color: #cad3dd;
					width: 100%;
					opacity: 0.5;
					border: 0;
					clear: both;
					display: block;
					height: 1px;
				}

				.order-id {
					width: 140px;
				}
				.order-name {
					width: 140px;
				}
				.order-date {
					width: 100px;
				}
				.order-type {
					width: 100px;
				}
				.order-status {
					width: 150px;
					text-align: center;
				}
				.order-item-status {
					width: 150px;
				}
				.order-amount {
					width: 140px;
					text-align: right;
					padding-right: 16px;
				}
				.order-actions {
					width: 140px;
				}
				.order-item-status {
					min-width: 150px;
					max-width: 150px;
					text-align: center;
					display: inline-block;
					max-height: 28px;
					border-radius: 14px;
					font-size: 16px;
					line-height: 20px;
					font-weight: 400;
					letter-spacing: 0;
					padding: 4px 14px;
					margin: 2px;
				}
				.order-item-status.validate {
					background-color: #0199ed;
					border-radius: 50px;
					color: white;
				}

				.order-item-status.approved {
					background-color: #0bd8aa;
					border-radius: 50px;
					color: white;
				}

				.order-item-status.declined {
					background-color: #ed454c;
					border-radius: 50px;
					color: white;
				}
			`}</style>
		</CardTable>
	)
}

SalesOverview.propTypes = {
	allItems: PropTypes.array,
	donationItems: PropTypes.array,
	invoiceItems: PropTypes.array,
	viewItem: PropTypes.func,
}

export default SalesOverview
