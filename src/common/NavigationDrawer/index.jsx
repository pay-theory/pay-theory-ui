import React, { useContext } from 'react'
import { NavigationCategory, NavigationItem } from './children'
import PropTypes from 'prop-types'

import { BooksHooks } from '../../pt-hooks'

const NavigationDrawer = ({ background, listHead }) => {
    const partner = useContext(BooksHooks.Context.Partner)
    const menuItems = useContext(BooksHooks.Context.Menu)
    const createItem = (item) => {
        return <NavigationItem className='' item={item} key={item.tag} />
    }
    const createCategory = (item) => {
        let detailsOpen = false
        if (window.location.pathname.indexOf(item.tag) >= 0) {
            detailsOpen = true
        }

        return (
            <NavigationCategory
                createItem={createItem}
                detailsOpen={detailsOpen}
                item={item}
                key={item.tag}
            />
        )
    }
    return (
        <div className='nav-drawer' data-testid='nav-drawer' id='drawer'>
            <ul>
                {/* If list head is present it takes priority if not it checks for a merchant name and if none is present nothing is rendered */}
                {listHead ? (
                    <p className='nav-header'>{listHead}</p>
                ) : partner.merchantName ? (
                    <p className='nav-header'>{partner.merchantName}</p>
                ) : null}
                {Array.isArray(menuItems) ? (
                    menuItems.map((item) => {
                        if (item.isCategory) {
                            return createCategory(item)
                        } else {
                            return createItem(item)
                        }
                    })
                ) : (
                    <li>no menu items provided</li>
                )}
            </ul>
            <style global='true' jsx='true'>
                {`
                    .nav-drawer {
                        background: var(--${background});
                        min-width: 290px;
                        max-width: 290px;
                        height: auto;
                        padding-top: 20px;
                        top: 52px;
                        overflow-y: scroll;
                        scrollbar-width: none;
                    }

                    .nav-drawer::-webkit-scrollbar {
                        display: none;
                    }

                    /* List Styling */

                    .nav-drawer ul {
                        list-style-type: none;
                        width: 100%;
                        display: flex;
                        flex-direction: column;
                        align-items: center;
                        -webkit-touch-callout: none; /* iOS Safari */
                        -webkit-user-select: none; /* Safari */
                        -khtml-user-select: none; /* Konqueror HTML */
                        -moz-user-select: none; /* Old versions of Firefox */
                        -ms-user-select: none; /* Internet Explorer/Edge */
                        user-select: none; /* Non-prefixed version, currently
                                        supported by Chrome, Edge, Opera and Firefox */
                    }

                    .nav-drawer a:link,
                    .nav-drawer a:visited,
                    .nav-drawer details summary {
                        color: var(--black);
                        height: 48px;
                        display: flex;
                        flex-direction: row;
                        align-items: center;
                        justify-content: space-between;
                        width: 274px;
                        text-decoration: none;
                        font-weight: var(--regular-weight);
                        position: relative;
                        border-radius: 16px;
                        margin-bottom: 4px;
                    }

                    /* Icon Styling */

                    .nav-drawer .pt-icon {
                        color: var(--grey);
                    }

                    .nav-drawer a:link .pt-icon.leading,
                    .nav-drawer a:visited .pt-icon.leading,
                    .nav-drawer summary .pt-icon.leading {
                        margin: 15px;
                        width: 18px;
                        height: 18px;
                    }

                    /* Hover Styling */

                    .nav-drawer a:hover,
                    .nav-drawer summary:hover {
                        color: var(--black);
                        background: var(--grey-1-opaque);
                        -webkit-transition: all 0.2s ease-in-out;
                        transition: all width 0.2s ease-in-out;
                    }

                    .nav-drawer a.active .pt-icon,
                    .nav-drawer a:hover .pt-icon,
                    .nav-drawer summary:hover .pt-icon {
                        color: var(--pt-purple) !important;
                    }

                    /* Active Styling */

                    .nav-drawer a.active:link,
                    .nav-drawer a.active:visited {
                        color: var(--black);
                        background: var(--grey-1-opaque);
                    }

                    .nav-drawer a.active:link .label,
                    .nav-drawer a.active:visited .label {
                        font-weight: var(--black-weight);
                    }

                    /* Header Styling */

                    .nav-drawer .nav-header {
                        display: flex;
                        height: 46px;
                        padding-left: 24px;
                        margin-top: -20px !important;
                        list-style: none;
                        color: var(--black);
                        align-items: center;
                        text-transform: uppercase;
                        text-align: left;
                        letter-spacing: 0.45px;
                        font-weight: var(--black-weight);
                    }

                    /* Sub-List Styling */

                    .nav-drawer .summary {
                        display: flex;
                        width: 274px;
                        justify-content: space-between;
                        align-items: center;
                        height: 46px;
                        cursor: pointer;
                        outline: none;
                    }

                    .nav-drawer summary {
                        outline: none;
                    }

                    .nav-drawer details summary::-webkit-details-marker {
                        display: none;
                    }

                    .summary-trailing {
                        display: flex;
                        align-items: center;
                        justify-content: center;
                    }

                    .nav-drawer .sub-list a {
                        margin-left: 40px;
                        padding-left: 24px;
                        width: 234px;
                        height: 40px;
                    }

                    /* Sub-List Chevron Styling */

                    .nav-drawer .summary-chevron {
                        height: 48px;
                        width: 48px;
                        display: flex;
                        align-items: center;
                        justify-content: center;
                        transition: transform 0.3s ease;
                    }

                    .nav-drawer details[open] .summary-chevron {
                        transform: rotate(90deg);
                        transition: transform 0.3s ease;
                    }

                    /* Badge Styling */

                    .nav-drawer .pt-badge {
                        height: 32px;
                        width: 32px;
                        margin-right: 48px;
                    }

                    .nav-drawer summary .pt-badge,
                    .nav-drawer .sub-list .pt-badge {
                        margin-right: 0px;
                    }
                `}
            </style>
        </div>
    )
}

NavigationDrawer.propTypes = {
    background: PropTypes.string,
    listHead: PropTypes.string
}

NavigationDrawer.defaultProps = {
    background: 'grey-3',
    listHead: ''
}

export default NavigationDrawer
