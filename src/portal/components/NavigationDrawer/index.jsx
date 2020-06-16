import React from 'react'
import { BrowserRouter as Router } from "react-router-dom";
import { NavigationCategory, NavigationItem } from './sub'

import * as BooksHooks from '../../../hooks'

const NavigationDrawer = props => {
	const createItem = item => {
		let className = ''
		if (window.location.pathname.indexOf(item.tag) >= 0) {
			className = 'active'
		}
		else {
			className = 'inactive'
		}
		return (
			<NavigationItem item={item} className={className} key={item.tag} />
		)
	}
	const createCategory = item => {
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
		<BooksHooks.context.menu.Consumer>
			{menuItems => {
				console.log('menuItems',menuItems)
				return (
					<div id="drawer" className="nav-drawer">
						<Router>
						<ul>
							{Array.isArray(menuItems) ? menuItems.map(item => {
								if (item.isCategory) {
									return createCategory(item)
								} else {
									return createItem(item)
								}
							}) : <li>no menu items provided</li>}
						</ul>
						</Router>
						<style jsx="true" global="true">{`
							.nav-drawer {
								background: #160f3d;
								color: #fff;
								min-width: 290px;
								max-width: 290px;
								overflow-x: hidden;
								height: auto;
								padding-top: 20px;
								flex-grow: 1;
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
								color: rgba(255, 255, 255, 0.5);
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
							}

							.nav-drawer a:link i,
							.nav-drawer a:visited i {
								color: rgba(255, 255, 255, 0.5);
								margin-left: 24px;
								margin-right: 16px;
							}

							.nav-drawer summary i {
								color: rgba(255, 255, 255, 0.5);
								margin-left: 24px;
								margin-right: 16px;
							}

							.nav-drawer a:hover,
							.nav-drawer a:hover i,
							.nav-drawer summary:hover,
							.nav-drawer summary:hover i {
								color: #fff;
								background: #100a31;
								-webkit-transition: all 0.2s ease-in-out;
								transition: all width 0.2s ease-in-out;
							}

							.nav-drawer a:active,
							.nav-drawer a:hover,
							.nav-drawer summary:hover {
								color: #fff;
								border-left: 4px solid #66cccc;
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
							}

							.nav-drawer a:active i,
							.nav-drawer a:hover i {
								color: #fff;
							}

							.nav-drawer a.active:link,
							.nav-drawer a.active:visited {
								color: #fff;
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
							}

							.nav-drawer a.active:link i,
							.nav-drawer a.active:visited i,
							.nav-drawer a.active:active i {
								color: #0199ed;
							}

							.nav-drawer a.active::before {
								background: #6ae4c9;
								content: '';
								height: 100%;
								left: 0;
								top: 0;
								width: 4px;
								position: absolute;
								box-sizing: border-box;
							}

							.nav-drawer details ul li a i {
								margin-left: 48px !important;
							}

							details summary::-webkit-details-marker {
								position: absolute;
								right: 8px;
								color: #6cc;
							}
						`}</style>
					</div>
				)
			}}
		</BooksHooks.context.menu.Consumer>
	)
}

export default NavigationDrawer
