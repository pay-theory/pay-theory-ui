import React from 'react'
import PropTypes from 'prop-types'

import {
    PortalTitle,
    PortalLogo,
    PortalLabel,
    AccountMenu,
    AccountMenuButton,
    AccountMenuItems
} from './children'

const PortalHead = (props) => {
    return (
        <header className='portal-head-header'>
            <PortalTitle>
                <PortalLogo />
                <PortalLabel />
            </PortalTitle>
            {props.logout ? (
                <AccountMenu>
                    <AccountMenuButton />
                    <AccountMenuItems logout={props.logout} />
                </AccountMenu>
            ) : null}
            <style jsx='true'>{`
                .portal-head-header {
                    background-image: linear-gradient(to right, #38117F , #7C2CDD, #A62FBA, #DB367D, #EA4141);
                    color: #fff;
                    display: flex;
                    flex-direction: row;
                    justify-content: space-between;
                    align-items: center;
                    flex-grow: 1;
                    padding: 0px 0px 0px 24px;
                    line-height: 30px;
                    max-height: 52px;
                }
            `}</style>
        </header>
    )
}

PortalHead.propTypes = {
    logout: PropTypes.func
}

export default PortalHead
