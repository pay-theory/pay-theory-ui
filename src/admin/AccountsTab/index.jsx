// node modules
import React from 'react'
import PropTypes from 'prop-types'
// ui root
import * as BooksHooks from '../../hooks'
import { FormHead, InnerTable, TabPage, openModal, Button, UtilityBar } from '../../common'
import {
    generateTableColumns,
    generateTableRows
}
from '../../common/accountUtils'

const AccountsTab = (props) => (
    <BooksHooks.Context.Accounts.Consumer>
        {(accounts) => {
            return (
                <TabPage id={props.id} visibility={props.visibility}>
                    <div className='tab-content'>
                        <div className='account-tab-header'>
                            <FormHead text='User Accounts' />
                            <Button
                                name='add-account-button'
                                color='primary'
                                label='Create Account'
                                onClick={() => openModal()}
                                leadingIcon='plus-circle'
                                small
                            />
                        </div>
                        <InnerTable
                            columns={generateTableColumns()}
                            rows={generateTableRows(
                                accounts,
                                props.deleteAccount
                            )}
                        />
                    </div>
                    <hr />
                    <style jsx='true' global='true'>{`
                        .account-name {
                            width: 140px;
                        }
                        .account-full-name {
                            width: 140px;
                        }
                        .account-email {
                            width: 140px;
                        }
                        .account-delete {
                            width: 55px;
                        }
                        .account-tab-header {
                            display: flex;
                            justify-content: space-between;
                            align-items: center;
                        }

                        .account-tab-header #add-account-button {
                            min-width: 155px;
                        }
                    `}</style>
                </TabPage>
            )
        }}
    </BooksHooks.Context.Accounts.Consumer>
)

AccountsTab.propTypes = {
    id: PropTypes.string.isRequired,
    visibility: PropTypes.string.isRequired,
    deleteAccount: PropTypes.func.isRequired
}

export default AccountsTab
