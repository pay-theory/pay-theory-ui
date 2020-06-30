import React from 'react'
import { NavigationCategory, NavigationItem } from './children'
import PropTypes from 'prop-types'

import * as BooksHooks from '../../hooks'

const NavigationDrawer = (props) => {
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
		<BooksHooks.context.menu.Consumer>
			{(menuItems) => {
				console.log('menuItems', menuItems)
				return (
					<div id='drawer' data-testid='nav-drawer' className='nav-drawer'>
						<ul>
							{/* Added so we could show a list header if we want on the nav bar */}
							{props.listHead ? (
								<p className='nav-header'>{props.listHead}</p>
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
						<style jsx='true' global='true'>{`
							.nav-drawer {
								background: ${props.style.background};
								color: ${props.style.hoverFontColor};
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
								color: ${props.style.fontColor};
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
								color: ${props.style.fontColor};
								margin-left: 24px;
								margin-right: 16px;
							}

							.nav-drawer summary i {
								color: ${props.style.fontColor};
								margin-left: 24px;
								margin-right: 16px;
							}

							.nav-drawer a:hover,
							.nav-drawer a:hover i,
							.nav-drawer summary:hover,
							.nav-drawer summary:hover i {
								color: ${props.style.hoverFontColor};
								background: ${props.style.hoverBackground};
								-webkit-transition: all 0.2s ease-in-out;
								transition: all width 0.2s ease-in-out;
							}

							.nav-drawer a:active,
							.nav-drawer a:hover,
							.nav-drawer summary:hover {
								color: ${props.style.hoverFontColor};
								border-left: 4px solid #0bd8aa;
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

							.nav-drawer a:active i,
							.nav-drawer a:hover i {
								color: ${props.style.hoverFontColor};
							}

							.nav-drawer a.active:link,
							.nav-drawer a.active:visited {
								color: ${props.style.hoverFontColor};
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

							details summary::-webkit-details-marker {
								display: none;
							}

							.fa-angle-down {
								display: none;
							}

							details[open] .fa-angle-down {
								display: flex;
								color: #0bd8aa !important;
								margin-right: 25px !important;
							}

							details[open] .fa-angle-right {
								display: none;
							}

							.fa-angle-right {
								color: #0bd8aa !important;
								margin-right: 25px !important;
							}

							.nav-header {
								display: flex;
								height: 46px;
								padding-left: 24px;
								margin-top: -20px !important;
								list-style: none;
								color: #a3b3c4;
								margin-top: auto;
								margin-bottom: auto;
								align-items: center;
								text-transform: uppercase;
								text-align: left;
								letter-spacing: 0.45px;
								color: #8795a6;
								font-weight: 700;
							}
							.summary {
								display: flex;
								width: 100%;
								justify-content: space-between;
								align-items: center;
								height: 46px;
							}
							.sub-list {
								margin-left: 24px;
							}
						`}</style>
					</div>
				)
			}}
		</BooksHooks.context.menu.Consumer>
	)
}

NavigationDrawer.propTypes = {
	style: PropTypes.shape({
		background: PropTypes.string,
		hoverBackground: PropTypes.string,
		fontColor: PropTypes.string,
		hoverFontColor: PropTypes.string
	}),
	listHead: PropTypes.string
}

NavigationDrawer.defaultProps = {
	style: {
		background: '#160f3d',
		hoverBackground: '#100a31',
		fontColor: 'rgba(255, 255, 255, 0.5)',
		hoverFontColor: '#fff'
	}
}

export default NavigationDrawer
