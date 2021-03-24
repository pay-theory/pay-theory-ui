/* eslint-disable no-unused-vars */
import React from 'react'
import PropTypes from 'prop-types'

import moment from 'moment'

import { FormHead, Checkbox } from '../../../common'

import * as BooksHooks from '../../../hooks'

const showOptions = (show) => {
    return show ? 'options-visible' : 'options-gone'
}

const PublicationOptions = (props) => {
    return (
        <BooksHooks.Context.PaymentItem.Consumer>
            {(paymentHook) => {
                const startDate = paymentHook.item_start_date
                    ? moment(paymentHook.item_start_date)
                    : moment()

                const endDate = paymentHook.item_end_date
                    ? moment(paymentHook.item_end_date)
                    : moment()

                const checkChanged = (event) => {
                    const paymentItem = { ...paymentHook }
                    paymentItem[event.target.name] = event.target.checked
                    if (
                        event.target.name === 'item_is_indefinite' &&
                        event.target.checked
                    ) {
                        paymentItem.item_start_date = ''
                        paymentItem.item_end_date = ''
                    }
                    props.changePayment(paymentItem)
                }

                // const dateChanged = (moment, dateType) => {
                //     const target = `item_${dateType}_date`
                //     const paymentItem = { ...paymentHook }
                //     paymentItem[target] = moment.toDate().getTime()
                //     props.changePayment(paymentItem)
                // }

                /*
                                            <DatePicker
                                                id="item_start_date_picker"
                                                name="item_start_date"
                                                selected={startDate.toDate()}
                                                onChange={dated =>
                                                    dateChanged(
                                                        moment(dated),
                                                        'start'
                                                    )
                                                }
                                                showTimeSelect
                                                timeFormat="HH:mm"
                                                timeIntervals={15}
                                                dateFormat="MMMM d, yyyy h:mm aa"
                                                timeCaption="time"
                                                minDate={new Date()}
                                                maxDate={endDate.toDate()}
                                                customInput={
                                                    <TextEntry
                                                        label="Begin Date"
                                                        name="item_begin_date"
                                                    />
                                                }
                                            />
                                        <DatePicker
                                                id="item_end_date_picker"
                                                name="item_end_date"
                                                selected={endDate.toDate()}
                                                onChange={dated =>
                                                    dateChanged(
                                                        moment(dated),
                                                        'end'
                                                    )
                                                }
                                                showTimeSelect
                                                timeFormat="HH:mm"
                                                timeIntervals={15}
                                                dateFormat="MMMM d, yyyy h:mm aa"
                                                timeCaption="time"
                                                minDate={startDate.toDate()}
                                                customInput={
                                                    <TextEntry
                                                        label="End Date"
                                                        name="item_end_date"
                                                    />
                                                }
                                            />
*/

                return (
                    <div className={`payment-item-entry card rounded `}>
                        <div className='payment-content'>
                            <FormHead text='Publication Options' />

                            <div className='check-option'>
                                <Checkbox
                                    id='item_can_be_anonymous'
                                    label='Allow Anonymous Payments'
                                    inputProps={{
                                        name:'item_can_be_anonymous',
                                        checked:paymentHook.item_can_be_anonymous,
                                        onChange:checkChanged
                                    }}
                                />
                            </div>

                            <div className='check-option'>
                                <Checkbox
                                    id='item_is_public'
                                    label='Publicly Available'
                                    inputProps={{
                                        name:'item_is_public',
                                        checked:paymentHook.item_is_public,
                                        onChange:checkChanged
                                    }}
                                />
                            </div>
                            <div
                                className={`options ${showOptions(
                                    !paymentHook.item_is_public
                                )}`}
                            >
                                Here are options for private donations
                            </div>

                            <div className='check-option'>
                                <Checkbox
                                    id='item_is_indefinite'
                                    label='Publish Indefintely'
                                    inputProps={{
                                        name:'item_is_indefinite',
                                        checked:paymentHook.item_is_indefinite,
                                        onChange:checkChanged
                                    }}
                                />
                            </div>
                            <div
                                className={`options ${showOptions(
                                    !paymentHook.item_is_indefinite
                                )}`}
                            >
                                <FormHead text='Choose a date range for accepting donations' />
                                <div className='payment-item-date-range'>
                                    <div className='payment-item-date-selection'>
                                        <div className='payment-item-date'>
                                            <div id='date-picker-placeholder-item-start-date' />
                                        </div>
                                    </div>
                                    <div className='payment-item-date-selection'>
                                        <div className='payment-item-date'>
                                            <div id='date-picker-placeholder-item-end-date' />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <style jsx='true' global='true'>
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
                                .options-gone {
                                    display: none;
                                }
                                .hidden-options {
                                    visibility: hidden;
                                }
                                .visible-options {
                                    visibility: visible;
                                }
                                .payment-item-date-range {
                                    display: flex;
                                    flex-direction: row;
                                    justify-content: flex-start;
                                    align-items: center;
                                    width: 100%;
                                }
                                .payment-item-date-selection {
                                    display: flex;
                                    flex-direction: column;
                                    justify-content: center;
                                    align-items: center;
                                    width: auto;
                                }
                                .payment-item-date {
                                    width: 350px;
                                }
                            `}
                        </style>
                    </div>
                )
            }}
        </BooksHooks.Context.PaymentItem.Consumer>
    )
}

PublicationOptions.propTypes = {
    domain: PropTypes.string,
    district: PropTypes.string,
    titleFocus: PropTypes.func,
    paymentChanged: PropTypes.func
}

export default PublicationOptions
