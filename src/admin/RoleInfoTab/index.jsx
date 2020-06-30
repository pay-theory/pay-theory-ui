// node modules
import React, { useState } from 'react'
import PropTypes from 'prop-types'
import Button from '@material/react-button'

import { FormHead, TextEntry, TabPage, CardTable } from '../../common'
import * as BooksHooks from '../../hooks'
import { StockTags } from '../../common/StatusMessage'
import { ACCESS } from './const'
import * as sub from './children'

const INITIAL_STATE = {
	UID: false,
	role_title: 'default',
	role_access: '',
	role_locked: false,
	role_type: 'Default',
	key: '',
	permissions: [
		{
			tag: 'test',
			enabled: true,
			title: 'test-page',
			subpages: [],
			accessType: ''
		}
	]
}

const RoleInfoTab = (props) => {
	const [state, setState] = useState(INITIAL_STATE)
	const [loaded, setLoaded] = useState(false)
	const onChange = (event) => {
		event.preventDefault()
		const changed = { ...state }
		changed[event.target.name] = event.target.value
		setState(changed)
	}
	const onAccessCheck = (event) => {
		event.preventDefault()
		const changed = { ...state }
		changed.role_access = event.target.value
		setState(changed)
	}

	const changePermissions = (index, permission) => {
		const stated = { ...state }
		stated.permissions[index] = permission
		if (
			stated.permissions.map((permission) => permission.enabled).indexOf(true) <
			0
		) {
			props.setStatusMessage(
				StockTags.error(
					'at least one page must be enabled',
					() => /* istanbul ignore next */ {
						props.setStatusMessage(<div />)
					}
				)
			)
			return false
		} else {
			setState(stated)
			return true
		}
	}

	return (
		<BooksHooks.context.role.Consumer>
			{(role) => {
				if (!loaded && role.UID) {
					setLoaded(true)
					setState(role)
				}
				const pagesClass =
					state.role_access === ACCESS.FULL ? 'pages-gone' : 'tab-content'

				const pages = state.permissions.map((page, index) => {
					return (
						<div key={`${page.tag}-${index}`}>
							<sub.AccessPageAccordion
								index={index}
								page={page}
								changePermissions={changePermissions}
							/>
							<hr />
						</div>
					)
				})

				const saveClass = state.role_locked ? 'pages-gone' : 'tab-content'
				return (
					<CardTable>
						<TabPage id='role-info-tab' visibility='tab-visible'>
							<div className='tab-content' data-testid='RoleInfoTab'>
								<FormHead
									text={`${state.role_type} Level Role Details`}
									locked={state.role_locked}
								/>
								<div id='role-title' className='tab-row'>
									<div className='tab-column'>
										<TextEntry
											label='Role Title'
											name='role_title'
											value={state.role_title}
											onChange={onChange}
										/>
									</div>
									<div className='tab-column' />
								</div>
								<div id='role-access' className='tab-row'>
									<div className='tab-column'>
										<sub.AccessOptions
											roleAccess={state.role_access}
											setRoleAccess={onAccessCheck}
											locked={state.role_locked}
										/>
									</div>
									<div className='tab-column' />
								</div>
							</div>
							<hr />
							<div data-testid='page-permissions' className={`${pagesClass}`}>
								<FormHead text='Pages' />
								<div className='accordion-frame'>{pages}</div>
							</div>
							<div className={saveClass}>
								<Button
									className='primary-button'
									disabled={state.role_locked}
									data-testid='save-role-button'
									raised
									onClick={(e) => {
										props.saveRole(state)
									}}
								>
									Save
								</Button>
							</div>
							<style jsx='true'>{`
								.pages-gone {
									display: none;
								}
								.accordion-frame {
									color: #6b7887;
									background-color: #fff;
									border: 1px solid #cad3dd;
									line-height: 20px;
									border-radius: 6px;
									margin: 0px 24px 24px;
								}
								hr {
									display: block;
									margin-top: 0;
									margin-bottom: 0;
									margin-left: 0;
									margin-right: 0;
									border-style: none;
									border-top: 1px solid #cad3dd;
									opacity: 1;
								}

								.delete-btn {
									background-color: #fff;
									color: #ed454c;
								}
							`}</style>
						</TabPage>
					</CardTable>
				)
			}}
		</BooksHooks.context.role.Consumer>
	)
}

RoleInfoTab.propTypes = {
	setStatusMessage: PropTypes.func.isRequired,
	saveRole: PropTypes.func
}

export default RoleInfoTab
