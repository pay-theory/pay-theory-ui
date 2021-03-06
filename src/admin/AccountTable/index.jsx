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
        <BooksHooks.context.accounts.Consumer>
            {(accounts) => {
                return (
                    <CardTable>
                        <InnerTable
                            canDelete
                            columns={generateTableColumns()}
                            hasActions
                            rows={generateTableRows(
                                accounts,
                                props.viewAccount,
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
                            `}
                        </style>
                    </CardTable>
                )
            }}
        </BooksHooks.context.accounts.Consumer>
    )
}

AccountTable.propTypes = {
    deleteAccount: PropTypes.func.isRequired,
    viewAccount: PropTypes.func.isRequired
}

export default AccountTable
