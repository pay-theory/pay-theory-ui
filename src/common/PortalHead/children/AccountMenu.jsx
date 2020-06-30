import React from 'react'
const AccountMenu = (props) => {
    return (
        <div className='portal-head-account-menu'>
            {props.children}{' '}
            <style jsx='true' global='true'>{`
                .portal-head-account-menu {
                    margin-right: 23px;
                    position: relative;
                    display: inline-block;
                    border-radius: 3px;
                    cursor: pointer;
                    padding: 5px 0px;
                }

                .portal-head-account-menu:focus-within
                    .portal-head-account-menu-button,
                .portal-head-account-menu-button:hover,
                .portal-head-account-menu-button:focus {
                    background-color: #0199ed;
                }
            `}</style>
        </div>
    )
}

export default AccountMenu
