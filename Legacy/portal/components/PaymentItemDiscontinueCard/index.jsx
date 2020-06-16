import React from 'react'
import PropTypes from 'prop-types'
import moment from 'moment'

import Button from '@material/react-button'

import { PaymentItem } from '../../../common/Model'
import * as BooksHooks from '../../../hooks'

const formatDate = stamp => {
	return moment(stamp).format('MMM D, YYYY @ H:mm')
}

const PaymentItemDiscontinueCard = props => {
	return (
		<BooksHooks.context.paymentItem.Consumer>
			{paymentHook => {
				if (paymentHook.item_published > 0) {
					return (
						<div
							data-testid="paymentHookDiscontinueCard"
							className="discontinue-overview card rounded"
						>
							<div className="discontinue-card-status-date">
								<i className={`fal fa-calendar-day`} />
								Published:{' '}
								<b>
									{/* istanbul ignore next */ paymentHook.item_published
										? formatDate(paymentHook.item_published)
										: '-'}
								</b>
							</div>
							<div className="discontinue-card-actions">
								<Button
									className="negative-button"
									data-testid="discontinue-payment-publication"
									onClick={props.onDiscontinue}
								>
									Discontinue
								</Button>
								<Button
									className="secondary-button"
									onClick={props.copyLink}
									data-testid="copy-published-link"
								>
									Copy Link
								</Button>
							</div>
							<style jsx="true">{`
								:root {
									--mdc-theme-secondary: #0199ed;
								}

								.discontinue-card-actions {
									display: flex;
									flex-direction: row;
									align-items: center;
									justify-content: space-between;
									margin: 18px 16px;
								}
								.discontinue-card-actions div,
								.discontinue-card-actions button {
									min-width: 106px;
								}
								.discontinue-card-status-date {
									display: flex;
									flex-direction: row;
									align-items: center;
									justify-content: flex-start;
									margin: 18px 24px;
								}

								.discontinue-card-status-date i {
									margin: 0 6px 0 0;
								}

								.discontinue-card-status-date b {
									margin: 0 0 0 4px;
									color: #101822;
								}
								.discontinue-overview {
									justify-content: center;
									align-items: center;
									margin: 0px 24px 24px 8px;
									width: 320px;
								}
							`}</style>
						</div>
					)
				} else {
					return <div />
				}
			}}
		</BooksHooks.context.paymentItem.Consumer>
	)
}

PaymentItemDiscontinueCard.propTypes = {
	onDiscontinue: PropTypes.func.isRequired,
	copyLink: PropTypes.func.isRequired,
}

export default PaymentItemDiscontinueCard
