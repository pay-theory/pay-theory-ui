// node modules
import React from 'react'
import PropTypes from 'prop-types'
// ui root
import * as BooksHooks from '../../hooks'
import { FormHead, InnerTable, TabPage, openModal, Button } from '../../common'
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
                        <FormHead text='User Accounts' />
                        <InnerTable
                            columns={generateTableColumns()}
                            rows={generateTableRows(
                                accounts,
                                props.deleteAccount
                            )}
                        />
                    </div>
                    <hr />
                    <div className='tab-content'>
                        <Button
                            name='add-account-button'
                            color='primary'
                            label='Create Account'
                            onClick={() => openModal()}
                            leadingIcon='plus-circle'
                            small
                        />
                    </div>
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
