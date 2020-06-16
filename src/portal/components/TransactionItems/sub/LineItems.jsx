import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'


import * as BooksHooks from '../../../../hooks'

import { CardRow } from '../../'

import Checkbox from '../../../../common/Checkbox'
const LineItems = props => {
	let prepareditems = {}
	let total = 0
	let subtotal = 0
	let taxPct = 0

	const [selected, setSelected] = useState([])
	const [selectedTotal, setSelectedTotal] = useState('0.0')
	useEffect(() => {
		setSelectedTotal(
			selected.reduce(
				(total, item) => parseFloat(total) + parseFloat(item.amount),
				0
			)
		)
	}, [selected])

	const establishSelection = (event, item) => {
		const selection = selected.slice(0)
		if (event.target.checked) {
			selection.push(item)
		}
		else {
			var toGo = selection.indexOf(item)

			selection.splice(toGo, 1)
		}
		return selection
	}

	const selectionStatus =
		selected.length > 0 ? (
			<div data-testid="selection-active" />
		) : (
			<div data-testid="selection-inactive" />
		)
	return (
		<BooksHooks.context.payment.Consumer>
			{paymentHook => {
				return (
					<BooksHooks.context.paymentItems.Consumer>
						{itemsHook => {
							paymentHook.items.forEach(pItem => {
								prepareditems[pItem.invoice_item_uid] = {}
								prepareditems[pItem.invoice_item_uid][
									'amount'
								] = pItem.amount
								subtotal = subtotal + parseFloat(pItem.amount)
							})
							total = subtotal + subtotal * taxPct
							itemsHook.forEach(fItem => {
								prepareditems[fItem.key]['title'] =
									fItem.data.item_title
								prepareditems[fItem.key]['type'] =
									fItem.data.item_type
							})

							return (
								<CardRow>
									<div className="details-card">
										<div className="cardHead">
											<h3>Items</h3>
										</div>
										<div className="table-row-head">
											<span className="head purchase-item-selector">
												<Checkbox
													id="select-all-items"
													indeterminate={
														selected.length <
															paymentHook.items
																.length &&
														selected.length > 0
													}
													checked={
														selected.length ===
															paymentHook.items
																.length &&
														selected.length > 0
													}
													onChange={e => {
														if (e.target.checked) {
															setSelected(
																paymentHook.items.slice(
																	0
																)
															)
														} else {
															setSelected([])
														}
													}}
												/>
											</span>
											<span className="head purchase-item">
												Item
											</span>
											<span className="head product-type">
												Type
											</span>
											<span className="head quantity">
												Qty
											</span>
											<span className="head right total">
												Total
											</span>
										</div>
										<div className="table inner">
											{paymentHook.items.map(item => {
												return (
													<div
														className="table-row"
														key={
															item.invoice_item_uid
														}
													>
														<span className="cell purchase-item-selector">
															<Checkbox
																data-testid="select-item"
																onChange={e => {
																	setSelected(
																		establishSelection(
																			e,
																			item
																		)
																	)
																}}
																checked={selected.includes(
																	item
																)}
															/>
														</span>
														<span className="cell purchase-item">
															{
																prepareditems[
																	item
																		.invoice_item_uid
																].title
															}
														</span>
														<span className="cell product-type">
															{
																prepareditems[
																	item
																		.invoice_item_uid
																].type
															}
														</span>
														<span className="cell quantity">
															1
														</span>
														<span className="cell right total">{`$${parseFloat(
															prepareditems[
																item
																	.invoice_item_uid
															].amount
														).toFixed(2)}`}</span>
													</div>
												)
											})}
										</div>
										<hr />

										<div className="items-footer-row">
											<div className="items-footer-col">
												<div className="refund-table-totals">
													<p className="font-heavy navy">
														({selected.length})
														Items selected totaling:{' '}
														{`-$${parseFloat(
															selectedTotal
														).toFixed(2)}`}
													</p>
													<div className="space-sm" />
													<button
														data-testid="refund-button"
														className="center"
														disabled={
															selected.length ===
															0
														}
														onClick={e =>
															props.onRefund(
																selected
															)
														}
													>
														<span>
															Refund Items
														</span>
														<i className="far fa-redo" />
													</button>
												</div>
											</div>
											<div className="items-footer-col">
												<div className="pricing-table-totals">
													<p className="right light-navy">
														Subtotal:{' '}
														{`$${subtotal.toFixed(
															2
														)}`}
													</p>
													<p className="right light-navy">
														Tax:{' '}
														{`$${(
															subtotal * taxPct
														).toFixed(2)}`}
													</p>
													<p className="right font-heavy navy">
														Total:{' '}
														{`$${total.toFixed(2)}`}
													</p>
												</div>
											</div>
										</div>
									</div>
									{selectionStatus}
									<style jsx="true">{`
										.cardHead {
											margin: 18px 18px 9px;
										}
										.table {
											color: #6b7887;
											background-color: #fff;
											display: flex;
											flex-direction: column;
											line-height: 36px;
											margin: 24px;
											border-radius: 5px;
										}

										.table-row {
											padding: 0px 24px;
											display: flex;
											flex-direction: row;
											justify-content: space-between;
											align-items: center;
											font-weight: 600;
											min-height: 36px;
											max-height: 50px;
										}

										.table-row-head {
											color: #6b7887;
											padding: 0px 24px;
											display: flex;
											flex-direction: row;
											justify-content: space-between;
											align-items: center;
											font-weight: 600;
											max-height: 50px;
											border-bottom: 1px solid #cad3dd;
											border-radius: 5px 5px 0 0;
											line-height: 36px;
										}

										.inner {
											padding: 0;
											margin: 0;
										}

										.table-row:nth-child(odd) {
											background: #fff;
										}

										.table-row:nth-child(even) {
											background: #f9fafb;
										}

										.table-row:last-child {
											border-bottom-right-radius: 5px;
											border-bottom-left-radius: 5px;
										}

										.cell {
											font-weight: 400;
										}

										.cell,
										.head {
											font-size: 11pt;
										}

										.table a:link,
										.table a:visited {
											color: #0199ed;
										}

										/* Specific to this table */
										.purchase-item {
											width: 280px;
										}

										.purchase-item-selector {
											min-width: 16px;
										}

										.product-type {
											width: 110px;
										}

										.unit-cost {
											width: 120px;
										}

										.quantity {
											width: 60px;
										}

										.total {
											width: 120px;
										}
										.pricing-table-totals {
											margin: 12px 24px 24px 24px;
											border-radius: 6px;
											display: flex;
											flex-direction: column;
											align-content: center;
											justify-content: flex-start;
										}

										.right {
											text-align: right;
										}

										.navy {
											color: #253243 !important;
										}

										.light-navy {
											color: #cad3dd !important;
										}

										.font-heavy {
											font-weight: 600 !important;
										}

										.items-footer-row {
											width: 100%;
											display: block;
										}

										.items-footer-col {
											width: 50%;
											display: inline-block;
										}

										.refund-table-totals {
											margin: 12px 24px 24px;
											border-radius: 6px;
											display: flex;
											flex-direction: column;
											align-content: center;
											justify-content: flex-start;
										}
										button {
											font-size: 16px;
											font-family: 'Europa';
											font-weight: 600;
											text-transform: none;
											letter-spacing: 0;
											height: 36px;
											width: 160px;
											border: 0;
											outline: 0;
											border-radius: 4px;
											background-color: #f85f0e;
											color: white;
											position: relative;
											overflow: hidden;
											margin-top: 16px;
										}

										button span {
											margin: 0 4px;
											line-height: 20px;
										}

										button i {
											margin: 0 4px;
										}

										button:hover {
											cursor: pointer;
										}
									`}</style>
								</CardRow>
							)
						}}
					</BooksHooks.context.paymentItems.Consumer>
				)
			}}
		</BooksHooks.context.payment.Consumer>
	)
}

LineItems.propTypes = {
	onRefund: PropTypes.func,
}

export default LineItems
