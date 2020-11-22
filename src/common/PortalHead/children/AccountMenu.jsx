import React from 'react'
const AccountMenu = (props) => {
    return (
        <div className='portal-head-account-menu' data-testid="account-menu">
            {props.children}{' '}
            <style jsx='true' global='true'>{`
                .portal-head-account-menu {
                    margin-right: 23px;
                    position: relative;
                    display: inline-block;
                    border-radius: 3px;
                    cursor: pointer;
                    padding: 5px 0px;
                    -webkit-touch-callout: none;
                    -webkit-user-select: none;
                    -khtml-user-select: none;
                    -moz-user-select: none;
                    -ms-user-select: none;
                    user-select: none;
                }

                .portal-head-account-menu:focus-within
                    .portal-head-account-menu-button,
                .portal-head-account-menu-button:hover,
                .portal-head-account-menu-button:focus {
                    background-color: rgba(255, 255, 255, 0.2);
                }
            `}</style>
        </div>
    )
}

export default AccountMenu
