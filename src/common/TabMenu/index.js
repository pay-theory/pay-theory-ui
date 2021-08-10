import React from 'react'
import PropTypes from 'prop-types'
import Icon from '../Icon'
/* eslint react/jsx-handler-names:0 */
const TabMenu = ({ items }) => {
    const menuItems = items.map((item) => {
        return (
            <p
                className={`tab-menu-item ${item.active}`}
                data-testid={item.id}
                id={item.id}
                key={item.id}
                onClick={item.action}
            >
                {item.icon ? <Icon name={item.icon} /> : ''}
                {item.label}
            </p>
        )
    })
    return (
        <div className='tab-menu'>
            {menuItems}
            <style global='true' jsx='true'>
                {`
                    .tab-menu {
                        display: flex;
                        flex-direction: row;
                        justify-content: flex-start;
                    }
                    .tab-menu-item {
                        padding: 14px 16px 12px;
                        margin: 0px 8px 0px 0px;
                        cursor: pointer;
                        border-bottom: 2px solid var(--grey);
                    }

                    .tab-menu-item:not(.active-tab):hover {
                        color: var(--grey);
                        background: var(--grey-3);
                        border-radius: 16px 16px 0px 0px;
                    }

                    .tab-menu-item:focus {
                        color: var(--grey);
                        border-radius: 16px 16px 0px 0px;
                        border-left: 4px solid var(--pt-purple);
                        border-top: 4px solid var(--pt-purple);
                        border-right: 4px solid var(--pt-purple);
                    }

                    .tab-menu-item.active-tab {
                        border-bottom: 2px solid var(--pt-purple);
                    }

                    .tab-menu-item .pt-icon {
                        margin-right: 8px;
                    }
                `}
            </style>
        </div>
    )
}

TabMenu.propTypes = {
    items: PropTypes.array.isRequired
}

export default TabMenu
