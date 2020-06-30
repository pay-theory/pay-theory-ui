// node modules
import React from 'react'

import * as children from './children'

const TransactionOverview = (props) => {
    return (
        <div className='transaction-container'>
            <div className='transaction-overview card rounded'>
                <children.Meta />
            </div>
            <style jsx='true' global='true'>{`
                :root {
                    --mdc-theme-secondary: #0199ed;
                }

                .transaction-overview {
                    max-width: 100%;
                    min-width: 600px;
                    width: auto;
                    padding: 0;
                    flex-grow: 1;
                    margin: 0 24px 24px;
                }

                .transaction-overview {
                    display: flex;
                    flex-direction: row;
                    justify-content: flex-start;
                    align-items: flex-start;
                }

                .transaction-detail {
                    display: flex;
                    flex-direction: column;
                    justify-content: flex-start;
                    flex-grow: 1;
                }
                .payment-item-controls {
                    display: flex;
                    flex-direction: column;
                    justify-content: center;
                    align-items: center;
                }

                .transaction-card-actions {
                    display: flex;
                    flex-direction: row;
                    align-items: center;
                    justify-content: space-between;
                    margin: 18px 16px;
                }
                .transaction-card-actions div,
                .transaction-card-actions button {
                    min-width: 106px;
                }
                .transaction-controls {
                    justify-content: center;
                    align-items: center;
                    margin: 0px 24px 24px 8px;
                    width: 320px;
                }
                .cardHead {
                    margin: 18px 18px 9px;
                }
                .cardContent {
                    margin: 9px 0 18px;
                }
                .col-1 div {
                    margin: 0 0 16px;
                }
                .details-card {
                    flex-grow: 1;
                }
                .transaction-container {
                    display: flex;
                    flex-direction: row;
                    justify-content: flex-start;
                    align-items: flex-start;
                }
                .row {
                    position: relative;
                    width: 100%;
                    display: flex;
                    flex-direction: row;
                }

                .row:last-child {
                    margin-top: 15px;
                }

                .col-1 {
                    float: left;
                    margin-top: 0%;
                    margin-bottom: 15px;
                    margin-left: 2%;
                    margin-right: 2%;
                    min-height: 0.125rem;
                }

                .row::after {
                    content: '';
                    display: table;
                    clear: both;
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

                .actions {
                    width: 124px;
                    display: flex;
                    justify-content: flex-start;
                    align-items: center;
                }

                .new-item span,
                .new-item a {
                    font-weight: 600;
                }

                .new-item .purchaser-name,
                .new-item .date,
                .new-item .type,
                .new-item .amount {
                    color: #253243;
                }

                .new-item .order-id::before {
                    display: inline-block;
                    position: relative;
                    box-sizing: border-box;
                    top: 0;
                    left: 0;
                    margin-right: 8px;
                    width: 8px;
                    height: 8px;
                    border-radius: 4px;
                    background-color: #f85f0e;
                    content: '';
                }

                .new-item.table-row:nth-child(odd) {
                    background: #f9fafb;
                }

                .new-item.table-row:nth-child(even) {
                    background: #f3f6f7;
                }
                #pricing-table-totals {
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
            `}</style>
        </div>
    )
}

export default TransactionOverview
