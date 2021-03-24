import React, { useContext } from 'react'
import { NavigationCategory, NavigationItem } from './children'
import PropTypes from 'prop-types'

import * as BooksHooks from '../../hooks'

const NavigationDrawer = ({ navStyle, listHead }) => {
    const partner = useContext(BooksHooks.Context.Partner);
    const menuItems = useContext(BooksHooks.Context.Menu);
    const createItem = (item) => {
        return <NavigationItem item={item} className='' key={item.tag} />
    }
    const createCategory = (item) => {
        let detailsOpen = false
        if (window.location.pathname.indexOf(item.tag) >= 0) {
            detailsOpen = true
        }

        return (
            <NavigationCategory
                item={item}
                detailsOpen={detailsOpen}
                createItem={createItem}
                key={item.tag}
            />
        )
    }
    return (
        <div
            id='drawer'
            data-testid='nav-drawer'
            className='nav-drawer'
        >
            <ul>
                {/* If list head is present it take priority if not it checks for a merchant name and if none is present nothing is rendered */}
                {listHead ? (
                  <p className="nav-header">{listHead}</p>): partner.merchant_name ? (
                      <p className="nav-header">{partner.merchant_name}</p>
                  ) : null
                  }
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
            <style jsx='true' global='true'>{`
                .nav-drawer {
                    background: ${navStyle.background};
                    color: ${navStyle.hoverFontColor};
                    min-width: 290px;
                    max-width: 290px;
                    overflow: hidden;
                    height: auto;
                    padding-top: 20px;
                    top: 52px;
                    overflow-y: scroll;
                }

                .nav-drawer::-webkit-scrollbar {
                    display: none;
                }

                .nav-drawer::-webkit-scrollbar {
                    display: none;
                }

                .nav-drawer ul {
                    list-style-type: none;
                    -webkit-padding-start: 0;
                    padding-inline-start: 0;
                    width: 100%;
                }

                .nav-drawer ul li {
                    min-height: 46px;
                }

                .nav-drawer a:link,
                .nav-drawer a:visited,
                .nav-drawer details summary {
                    color: ${navStyle.fontColor};
                    margin-top: auto;
                    margin-bottom: auto;
                    height: 46px;
                    display: flex;
                    flex-direction: row;
                    align-items: center;
                    width: 100%;
                    text-decoration: none;
                    font-weight: 400;
                    position: relative;
                }

                .nav-drawer a:link i,
                .nav-drawer a:visited i {
                    color: #8E868F;
                    margin-left: 24px;
                    margin-right: 16px;
                }

                .nav-drawer summary i {
                    color: ${navStyle.fontColor};
                    margin-left: 24px;
                    margin-right: 16px;
                }

                .nav-drawer a:hover,
                .nav-drawer a:hover i,
                .nav-drawer summary:hover,
                .nav-drawer summary:hover i {
                    color: ${navStyle.hoverFontColor};
                    background: ${navStyle.hoverBackground};
                    -webkit-transition: all 0.2s ease-in-out;
                    transition: all width 0.2s ease-in-out;
                }

                
                .nav-drawer a:hover:not(.active),
                .nav-drawer summary:hover:not(.active) {
                    color: ${navStyle.hoverFontColor};
                    border-left: 4px solid #7C2CDD;
                    margin-top: auto;
                    margin-bottom: auto;
                    height: 46px;
                    display: flex;
                    flex-direction: row;
                    align-items: center;
                    width: 100%;
                    text-decoration: none;
                    font-weight: 600;
                    position: relative;
                }

                .nav-drawer li i {
                    color: #8E868F;
                }

                .nav-drawer a.active i {
                    color: #7C2CDD !important;
                }

                .nav-drawer a:hover i {
                    color: ${navStyle.hoverFontColor};
                }

                .nav-drawer a.active:link,
                .nav-drawer a.active:visited {
                    color: ${navStyle.hoverFontColor};
                    margin-top: auto;
                    margin-bottom: auto;
                    height: 46px;
                    display: flex;
                    flex-direction: row;
                    justify-content: flex-start;
                    align-items: center;
                    width: 100%;
                    text-decoration: none;
                    font-weight: 600;
                    position: relative;
                    background: #FFFFFF;
                }

                .nav-drawer a.active::before {
                    background: #7C2CDD;
                    content: '';
                    height: 100%;
                    left: 0;
                    top: 0;
                    width: 4px;
                    position: absolute;
                    box-sizing: border-box;
                }

                .nav-drawer details summary::-webkit-details-marker {
                    display: none;
                }

                .nav-drawer .far.fa-angle-down {
                    display: none;
                }

                .nav-drawer details[open] .fa-angle-down {
                    display: flex;
                    color: #7C2CDD !important;
                    margin-right: 25px !important;
                }

                .nav-drawer details[open] .fa-angle-right {
                    display: none;
                }

                .nav-drawer .far.fa-angle-right {
                    color: #7C2CDD !important;
                    margin-right: 25px !important;
                }

                .nav-drawer .nav-header {
                    display: flex;
                    height: 46px;
                    padding-left: 24px;
                    margin-top: -20px !important;
                    list-style: none;
                    color: #1F0A28;
                    margin-top: auto;
                    margin-bottom: auto;
                    align-items: center;
                    text-transform: uppercase;
                    text-align: left;
                    letter-spacing: 0.45px;
                    font-weight: 700;
                }
                .nav-drawer .summary {
                    display: flex;
                    width: 100%;
                    justify-content: space-between;
                    align-items: center;
                    height: 46px;
                }
                .nav-drawer .sub-list {
                    margin-left: 24px;
                }
            `}</style>
        </div>
    )
}

NavigationDrawer.propTypes = {
    navStyle: PropTypes.shape({
        background: PropTypes.string,
        hoverBackground: PropTypes.string,
        fontColor: PropTypes.string,
        hoverFontColor: PropTypes.string
    }),
    listHead: PropTypes.string
}

NavigationDrawer.defaultProps = {
    navStyle: {
        background: '#F2F2F2',
        hoverBackground: 'rgba(255, 255, 255, 0.3)',
        fontColor: '#1F0A28',
        hoverFontColor: '#1F0A28'
    }
}

export default NavigationDrawer
