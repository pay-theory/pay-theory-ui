import React from 'react'
import PropTypes from 'prop-types'

import Radio, { NativeRadioControl } from '@material/react-radio'

import { TextEntryCurrency, FormHead, Checkbox } from '../../../common'

import * as BooksHooks from '../../../hooks'

const showCheck = (show) => {
	return show ? 'check-visible' : 'gone'
}
const showOptions = (show) => {
	return show ? 'options-visible' : 'gone'
}

const PaymentOptions = (props) => {
	return (
		<BooksHooks.context.paymentItem.Consumer>
			{(paymentHook) => {
				const changeOptions = (event, index, changePayment) => {
					const paymentItem = { ...paymentHook }

					paymentItem.item_quick_pay_options[index] = event.target.value
					props.changePayment(paymentItem)
				}

				const changeFixedAmount = (event) => {
					const paymentItem = { ...paymentHook }
					paymentItem.item_fixed_amount = event.target.value
					props.changePayment(paymentItem)
				}

				const checkChanged = (event) => {
					const paymentItem = { ...paymentHook }
					paymentItem[event.target.name] = event.target.checked
					/* istanbul ignore else */
					if (!event.target.checked) {
						paymentItem.item_quick_pay_options = []
					} else {
						paymentItem.item_quick_pay_options = [1.0, 5.0, 10.0]
					}

					props.changePayment(paymentItem)
				}

				const amountOptionSelected = (event) => {
					const paymentItem = { ...paymentHook }
					paymentItem.item_has_fixed_amount = event.target.value === 'fixed'

					props.changePayment(paymentItem)
				}

				/* istanbul ignore next */
				const optionsArray = paymentHook.item_quick_pay_options
					? paymentHook.item_quick_pay_options
					: []

				/* istanbul ignore next */
				const options =
					optionsArray.length === 3 ? optionsArray : [1.0, 5.0, 10.0]

				return (
					<div className='payment-item-entry card rounded'>
						<div className='payment-content'>
							<FormHead text='Payment Options' />

							<div className='radio-option'>
								<Radio label='Fixed Amount' key='fixed'>
									<NativeRadioControl
										name='pay-option'
										data-testid='fixed-pay-option'
										value='fixed'
										checked={paymentHook.item_has_fixed_amount}
										id='fixed-pay-option'
										onChange={(e) => amountOptionSelected(e)}
									/>
								</Radio>
							</div>

							<div
								className={`options ${showOptions(
									paymentHook.item_has_fixed_amount
								)}`}
							>
								<div className='option-row'>
									<TextEntryCurrency
										name='fixed_amount'
										value={paymentHook.item_fixed_amount}
										onChange={(event) => changeFixedAmount(event)}
									/>
								</div>
							</div>

							<div className='radio-option'>
								<Radio label='Custom Amount' key='custom'>
									<NativeRadioControl
										name='pay-option'
										data-testid='custom-pay-option'
										value='custom'
										checked={!paymentHook.item_has_fixed_amount}
										id='custom-pay-option'
										onChange={(e) => amountOptionSelected(e)}
									/>
								</Radio>
							</div>

							<div
								className={`check-option ${showCheck(
									!paymentHook.item_has_fixed_amount
								)}`}
							>
								<Checkbox
									id='item_has_quick_pay_options'
									name='item_has_quick_pay_options'
									checked={paymentHook.item_has_quick_pay_options}
									onChange={checkChanged}
								/>
								<label htmlFor='item_has_quick_pay_options'>
									<b>Provide Quick Pay Options</b>
								</label>
							</div>

							<div
								className={`options ${showOptions(
									paymentHook.item_has_quick_pay_options &&
										!paymentHook.item_has_fixed_amount
								)}`}
							>
								<div className='option-row'>
									<TextEntryCurrency
										label='Option 1'
										name='payment_option_1'
										value={options[0]}
										onChange={(event) =>
											changeOptions(event, 0, props.changePayment)
										}
									/>

									<TextEntryCurrency
										label='Option 2'
										name='payment_option_2'
										value={options[1]}
										onChange={(event) =>
											changeOptions(event, 1, props.changePayment)
										}
									/>

									<TextEntryCurrency
										label='Option 3'
										name='payment_option_3'
										value={options[2]}
										onChange={(event) =>
											changeOptions(event, 2, props.changePayment)
										}
									/>
								</div>
							</div>
						</div>

						<style jsx='true'>
							{`
								.payment-item-detail {
									display: flex;
									flex-direction: column;
									justify-content: flex-start;
									flex-grow: 1;
								}
								.payment-item-entry {
									max-width: 100%;
									min-width: 600px;
									width: auto;
									padding: 0;
									flex-grow: 1;
									margin: 0 24px 24px;
								}
								.payment-content {
									display: flex;
									flex-direction: column;
									justify-content: flex-start;
									align-items: stretch;
									padding-bottom: 24px;
								}
								.check-option {
									margin: 16px 24px;
									display: flex;
									flex-direction: row;
									justify-content: flex-start;
									align-items: center;
								}
								.options {
									margin: 16px 24px;
								}

								.option-row {
									display: flex;
									flex-direction: row;
									justify-content: flex-start;
									align-items: center;
								}

								.options-visible {
									display: flex;
									flex-direction: column;
									justify-content: flex-start;
									align-items: flex-start;
								}
								.gone {
									display: none;
								}
								.check-visible {
									display: flex;
									flex-direction: row;
									justify-content: flex-start;
									align-items: center;
								}
								.hidden-options {
									visibility: hidden;
								}
								.visible-options {
									visibility: visible;
								}

								.radio-option {
									margin: 0px 24px;
								}
							`}
						</style>
					</div>
				)
			}}
		</BooksHooks.context.paymentItem.Consumer>
	)
}

PaymentOptions.propTypes = {
	domain: PropTypes.string,
	district: PropTypes.string,
	titleFocus: PropTypes.func,
	paymentChanged: PropTypes.func
}

export default PaymentOptions
