import React from 'react'
import PropTypes from 'prop-types'

import { FormHead, TextEntry } from '../../../common'

import * as BooksHooks from '../../../hooks'
import {
    formatAccountCode,
    padAccountCode
}
from '../../../common/accountCodeUtils'

const BasicInfo = (props) => {
    return (
        <BooksHooks.context.page.Consumer>
            {(checkoutHook) => {
                return (
                    <BooksHooks.context.district.Consumer>
                        {(districtHook) => {
                            return (
                                <BooksHooks.context.paymentItem.Consumer>
                                    {(paymentHook) => {
                                        const linkPreview = `${checkoutHook.domain}/${districtHook.districtSlug}/donation/${paymentHook.item_slug}`

                                        const onChange = (event) => {
                                            const paymentItem = {
                                                ...paymentHook
                                            }
                                            paymentItem[event.target.name] =
                                                event.target.name ===
                                                'item_account_code'
                                                    ? formatAccountCode(
                                                          event.target.value
                                                      )
                                                    : event.target.value
                                            props.changePayment(paymentItem)
                                        }
                                        const onBlur = (event) => {
                                            const paymentItem = {
                                                ...paymentHook
                                            }
                                            paymentItem[event.target.name] =
                                                /* istanbul ignore next */
                                                event.target.name ===
                                                'item_account_code'
                                                    ? padAccountCode(
                                                          event.target.value
                                                      )
                                                    : event.target.value
                                            props.changePayment(paymentItem)
                                        }
                                        return (
                                            <div className='payment-item-entry card rounded'>
                                                <div className='payment-content'>
                                                    <FormHead text='Basic Info' />
                                                    <TextEntry
                                                        label='Title'
                                                        name='item_title'
                                                        value={
                                                            paymentHook.item_title
                                                        }
                                                        onChange={
                                                            props.titleFocus
                                                        }
                                                        data-testid='item_title'
                                                    />
                                                    <div id='published-link'>
                                                        {linkPreview}
                                                    </div>
                                                    <TextEntry
                                                        outer='text-entry'
                                                        label='Description'
                                                        name='item_description'
                                                        value={paymentHook.item_description}
                                                        onChange={onChange}
                                                        autoComplete='off'
                                                        type='textarea'
                                                    />
                                                    <TextEntry
                                                        label='USAS Account Code'
                                                        name='item_account_code'
                                                        value={
                                                            paymentHook.item_account_code
                                                        }
                                                        onChange={onChange}
                                                        onBlur={onBlur}
                                                    />
                                                </div>
                                                <style jsx='true'>
                                                    {`
                                                        #published-link {
                                                            display: none;
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
                                                    `}
                                                </style>
                                            </div>
                                        )
                                    }}
                                </BooksHooks.context.paymentItem.Consumer>
                            )
                        }}
                    </BooksHooks.context.district.Consumer>
                )
            }}
        </BooksHooks.context.page.Consumer>
    )
}

BasicInfo.propTypes = {
    titleFocus: PropTypes.func.isRequired,
    changePayment: PropTypes.func.isRequired
}

export default BasicInfo
