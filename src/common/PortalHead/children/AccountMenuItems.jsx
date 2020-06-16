import React from 'react'
import PropTypes from 'prop-types'
import * as BooksHooks from '../../../hooks'
const AccountMenuItems = (props) => {
    const handleKeyPress = (e) => {
        props.logout()
    }
    return (
        <BooksHooks.context.account.Consumer>
            {(accountHook) => {
                return (
                    <div className='portal-head-account-menu-items'>
                        <span data-testid='account-dropdown-label'>
                            {accountHook.display_name}
                        </span>
                        <div
                            onClick={props.logout}
                            onKeyPress={handleKeyPress}
                            tabIndex='0'
                            data-testid='account-logout'
                        >
                            Logout
                        </div>
                        <style jsx='true' global='true'>{`
                            .portal-head-account-menu-items {
                                opacity: 0;
                                text-align: right;
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
                                background-color: #0199ed;
                                color: #fff;
                            }
                        `}</style>
                    </div>
                )
            }}
        </BooksHooks.context.account.Consumer>
    )
}

AccountMenuItems.propTypes = {
    logout: PropTypes.func.isRequired
}

export default AccountMenuItems
