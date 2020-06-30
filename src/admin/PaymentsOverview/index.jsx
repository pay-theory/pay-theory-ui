// node modules
import React from 'react'
import PropTypes from 'prop-types'
// ui root
import { TabMenu, InnerTable, CardTable } from '../../common'
import SalesTab from '../SalesTab'

const MENU_ITEMS = {
	SUCCEEDED: {
		menu: 'succeeded-payments-menu',
		tab: 'succeeded-payments-tab',
		table: 'succeeded-payments-table'
	},
	REFUNDED: {
		menu: 'refunded-payments-menu',
		tab: 'refunded-payments-tab',
		table: 'refunded-payments-table'
	},
	UNCAPTURED: {
		menu: 'uncaptured-payments-menu',
		tab: 'uncaptured-payments-tab',
		table: 'uncaptured-payments-table'
	},
	ALL: {
		menu: 'all-payments-menu',
		tab: 'all-payments-tab',
		table: 'all-payments-table'
	}
}

const getStatusDate = (item) => {
	let date
	switch (item.status) {
		case 'approved':
			date = new Date(item.approved_on_date)
			break
		case 'paid':
			date = new Date(item.paid_on_date)
			break
		case 'refunded':
			date = new Date(item.refunded_on_date)
			break
		default:
			date = new Date(item.validated_on_date)
			break
	}
	return `${date.getMonth() + 1}/${date.getDate()}/${date.getFullYear()}`
}
const calculateAmount = (item) => {
	let amount = 0
	item.items.forEach((purchase) => {
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
		{ className: 'order-amount', label: 'Amount' }
	]
}

const selectTab = (selected) => {
	const menu = document.getElementById(selected.menu)
	const tab = document.getElementById(selected.tab)
	tab.classList.remove('gone')
	tab.classList.add('tab-visible')
	menu.classList.add('active-tab')
}
const clearUnselected = (unselected) => {
	unselected.forEach((item) => {
		const menu = document.getElementById(item.menu)
		const tab = document.getElementById(item.tab)
		tab.classList.remove('tab-visible')
		tab.classList.add('gone')
		menu.classList.remove('active-tab')
	})
}

const changeTab = (selected) => {
	/* istanbul ignore next */
	const remaining = { ...MENU_ITEMS }
	switch (selected) {
		case MENU_ITEMS.ALL:
			delete remaining.ALL
			break
		case MENU_ITEMS.UNCAPTURED:
			delete remaining.UNCAPTURED
			break
		case MENU_ITEMS.REFUNDED:
			delete remaining.REFUNDED
			break
		default:
			delete remaining.SUCCEEDED
			break
	}
	console.log(remaining)
	clearUnselected([...Object.values(remaining)])
	selectTab(selected)
}

const menuItems = [
	{
		id: MENU_ITEMS.SUCCEEDED.menu,
		label: 'Succeeded',
		active: '',
		action: () => changeTab(MENU_ITEMS.SUCCEEDED)
	},
	{
		id: MENU_ITEMS.REFUNDED.menu,
		label: 'Refunded',
		active: '',
		action: () => changeTab(MENU_ITEMS.REFUNDED)
	},
	{
		id: MENU_ITEMS.UNCAPTURED.menu,
		label: 'Uncaptured',
		active: '',
		action: () => changeTab(MENU_ITEMS.UNCAPTURED)
	},
	{
		id: MENU_ITEMS.ALL.menu,
		label: 'All',
		active: 'active-tab',
		action: () => changeTab(MENU_ITEMS.ALL)
	}
]

const PaymentsOverview = (props) => {
	const generateRows = (payments) => {
		return payments.map((item, i) => {
			const name = item.data.payor.is_anonymous
				? 'anonymous'
				: `${item.data.payor.payor_family_name}, ${item.data.payor.payor_given_name}`
			return {
				columns: [
					{
						className: 'order-id',
						content: /* istanbul ignore next */ item.data.order_id
							? item.data.order_id
							: item.data.UID
					},
					{ className: 'order-name', content: name },
					{
						className: 'order-date',
						content: getStatusDate(item.data)
					},
					{
						className: 'order-type',
						content: item.data.payment_type
					},
					{
						className: `order-item-status ${item.data.status}`,
						content: item.data.status
					},
					{
						className: 'order-amount',
						content: `$${calculateAmount(item.data)}`
					}
				],
				key: item.key,
				view: () => props.viewItem(item, item.data.payment_type)
			}
		})
	}
	return (
		<CardTable>
			<div className='tab-contain'>
				<TabMenu items={menuItems} />
				<hr />
				<SalesTab id={MENU_ITEMS.ALL.tab} visibility='tab-visible'>
					<InnerTable
						id={MENU_ITEMS.ALL.table}
						rows={generateRows(props.allItems)}
						columns={generateTableColumns()}
						hasActions
					/>
				</SalesTab>
				<SalesTab id={MENU_ITEMS.UNCAPTURED.tab} visibility='gone'>
					<InnerTable
						id={MENU_ITEMS.UNCAPTURED.table}
						rows={generateRows(props.uncapturedItems)}
						columns={generateTableColumns()}
						hasActions
					/>
				</SalesTab>
				<SalesTab id={MENU_ITEMS.REFUNDED.tab} visibility='gone'>
					<InnerTable
						id={MENU_ITEMS.REFUNDED.table}
						rows={generateRows(props.refundedItems)}
						columns={generateTableColumns()}
						hasActions
					/>
				</SalesTab>
				<SalesTab id={MENU_ITEMS.SUCCEEDED.tab} visibility='gone'>
					<InnerTable
						id={MENU_ITEMS.SUCCEEDED.table}
						rows={generateRows(props.succeededItems)}
						columns={generateTableColumns()}
						hasActions
					/>
				</SalesTab>
			</div>
			<style jsx='true' global='true'>{`
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

PaymentsOverview.propTypes = {
	allItems: PropTypes.array,
	uncapturedItems: PropTypes.array,
	refundedItems: PropTypes.array,
	succeededItems: PropTypes.array,
	viewItem: PropTypes.func
}

export default PaymentsOverview
