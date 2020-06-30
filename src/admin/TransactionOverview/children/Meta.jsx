import React from 'react'

import { CardRow } from '../../../common'
import * as BooksHooks from '../../../hooks'

const Meta = (props) => {
	return (
		<BooksHooks.context.payment.Consumer>
			{(paymentHook) => {
				const getStatusDate = (dated) => {
					const date = new Date(dated)
					return `${
						date.getMonth() + 1
					}/${date.getDate()}/${date.getFullYear()}`
				}
				const currentState = paymentHook.transaction_history.slice(0).pop()

				const buildBilling = () => {
					return (
						<span>
							{paymentHook.payor.payor_family_name},{' '}
							{paymentHook.payor.payor_given_name}
							<br />
							{paymentHook.payor.payor_donating_company}
							<br />
							{paymentHook.payor.payor_country}
							<br />
							{paymentHook.payor.payor_street}, {paymentHook.payor.payor_city},{' '}
							{paymentHook.payor.payor_state} {paymentHook.payor.payor_zip_code}
						</span>
					)
				}
				return (
					<CardRow>
						<div className='details-card'>
							<div className='cardHead'>
								<h3>Order details</h3>
							</div>
							<div className='cardContent'>
								<div className='row'>
									<div className='col-1'>
										<h5 className='grey'>Approval Code:</h5>
										<div className='navy space-lg'>
											{paymentHook.approval_code}
										</div>
										<h5 className='grey'>Card:</h5>
										<div className='navy space-lg'>
											{currentState.new_payment_instrument
												? currentState.new_payment_instrument.last_four
												: 'NA'}
										</div>
										<h5 className='grey'>Purchase Type:</h5>
										<div className='navy'>{paymentHook.payment_type}</div>
									</div>
									<div className='col-1'>
										<h5 className='grey'>Date Created:</h5>
										<div className='navy space-lg'>
											{getStatusDate(paymentHook.validated_on_date)}
										</div>
										<h5 className='grey'>Email:</h5>
										<div className='space-lg'>
											{paymentHook.payor.is_anonymous
												? 'anonymous'
												: paymentHook.payor.payor_email}
										</div>
										<h5 className='grey'>Phone:</h5>
										<div className='space-lg'>
											{paymentHook.payor.is_anonymous
												? 'anonymous'
												: paymentHook.payor.payor_phone}
										</div>
									</div>
									<div className='col-1'>
										<h5 className='grey'>Billing:</h5>
										<div className='navy space-lg'>
											{paymentHook.payor.is_anonymous
												? 'anonymous'
												: buildBilling()}
										</div>
									</div>
									<div className='col-1'>
										<h5 className='grey'>Shipping:</h5>
										<div className='light-navy space-lg'>
											No Shipping Required
										</div>
									</div>
								</div>
							</div>
						</div>
						<style jsx='true'>{`
							.cardHead {
								margin: 18px 18px 9px;
							}
							.cardContent {
								margin: 9px 0 18px;
							}
							.details-card {
								flex-grow: 1;
							}
							.col-1 div {
								margin: 0 0 16px;
							}
							.navy {
								color: #253243 !important;
							}

							.light-navy {
								color: #cad3dd !important;
							}
						`}</style>
					</CardRow>
				)
			}}
		</BooksHooks.context.payment.Consumer>
	)
}

export default Meta
