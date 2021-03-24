import React from 'react'
import PropTypes from 'prop-types'

import CardTable from '../../common/CardTable'
import InnerTable from '../../common/InnerTable'
import {
    generateTableColumns,
    generateTableRows
}
from '../../common/accountUtils'
import * as BooksHooks from '../../hooks'

const AccountTable = (props) => {
    return (
        <BooksHooks.Context.Accounts.Consumer>
            {(accounts) => {
                return (
                    <div className='account-table'>
                        <InnerTable
                            columns={generateTableColumns()}
                            rows={generateTableRows(
                                accounts,
                                props.deleteAccount
                            )}
                        />
                        <style global='true' jsx='true'>
                            {`
                                .account-name {
                                    width: 140px;
                                }
                                .account-full-name {
                                    width: 140px;
                                }
                                .account-email {
                                    width: 140px;
                                }
                                .account-title {
                                    width: 140px;
                                }
                                .account-delete {
                                    width: 55px;
                                }
                                .account-table {
                                    margin: 0px 24px;
                                }
                            `}
                        </style>
                    </div>
                )
            }}
        </BooksHooks.Context.Accounts.Consumer>
    )
}

AccountTable.propTypes = {
    deleteAccount: PropTypes.func.isRequired
}

export default AccountTable
