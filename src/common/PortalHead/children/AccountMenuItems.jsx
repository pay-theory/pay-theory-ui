import React from 'react'
import PropTypes from 'prop-types'
import * as BooksHooks from '../../../hooks'
const AccountMenuItems = (props) => {
    const handleKeyPress = (e) => {
        props.logout()
    }
    return (
        <BooksHooks.Context.Account.Consumer>
            {(accountHook) => {
                return (
                    <div className='portal-head-account-menu-items'>
                        <span data-testid='account-dropdown-label'>
                            {accountHook.nickname}
                        </span>
                        <div
                            data-testid='account-logout'
                            onClick={props.logout}
                            onKeyPress={handleKeyPress}
                            tabIndex='0'
                        >
                            Logout
                        </div>
                        <style global='true' jsx='true'>
                            {`
                                .portal-head-account-menu-items {
                                    display: none;
                                    opacity: 0;
                                    line-height: 22px;
                                    position: absolute;
                                    top: 40px;
                                    right: 0px;
                                    border-radius: 6px;
                                    padding: 4px 0px;
                                    background-color: #fff;
                                    min-width: 160px;
                                    box-shadow: 0 3px 6px rgba(0, 0, 0, 0.175);
                                }
                                .portal-head-account-menu-items span {
                                    color: #253243;
                                    padding: 5px 12px;
                                    text-decoration: none;
                                    display: block;
                                    font-weight: 600;
                                }
                                .portal-head-account-menu-items div {
                                    color: #6b7887;
                                    padding: 5px 12px;
                                    text-decoration: none;
                                    display: block;
                                }

                                .portal-head-account-menu-items div:hover,
                                .portal-head-account-menu-items div:focus {
                                    display: block;
                                    background-color: rgba(31, 10, 40, .04);
                                }
                            `}
                        </style>
                    </div>
                )
            }}
        </BooksHooks.Context.Account.Consumer>
    )
}

AccountMenuItems.propTypes = {
    logout: PropTypes.func.isRequired
}

export default AccountMenuItems
