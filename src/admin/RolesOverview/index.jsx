// node modules
import React from 'react'
import PropTypes from 'prop-types'
// ui root
import { TabMenu, InnerTable, CardTable, FormHead, Button } from '../../common'
import RolesTab from '../RolesTab'

const MENU_ITEMS = {
    SYSTEM: {
        menu: 'system-roles-menu',
        tab: 'system-roles-tab',
        table: 'system-roles-table',
        label: 'System'
    },
    DISTRICT: {
        menu: 'district-roles-menu',
        tab: 'district-roles-tab',
        table: 'district-roles-table',
        label: 'District'
    },
    PARTNER: {
        menu: 'partner-roles-menu',
        tab: 'partner-roles-tab',
        table: 'partner-roles-table',
        label: 'Partner'
    }
}

const generateTableColumns = () => {
    return [
        { className: 'role-title', label: 'Role Title' },
        { className: 'role-access', label: 'Access' }
    ]
}

const selectTab = (selected) => {
    const menu = document.getElementById(selected.menu)
    const tab = document.getElementById(selected.tab)
    tab.classList.remove('gone')
    tab.classList.add('tab-visible')
    menu.classList.add('active-tab')
}
const clearUnselected = (unselected) => {
    unselected.forEach((item) => {
        const menu = document.getElementById(item.menu)
        const tab = document.getElementById(item.tab)
        tab.classList.remove('tab-visible')
        tab.classList.add('gone')
        menu.classList.remove('active-tab')
    })
}

const RolesOverview = (props) => {
    const changeTab = (selected) => {
        /* istanbul ignore next */
        switch (selected) {
        case MENU_ITEMS.SYSTEM:
            props.roleTypeChanged(MENU_ITEMS.SYSTEM.label.toLowerCase())
            clearUnselected([MENU_ITEMS.DISTRICT, MENU_ITEMS.PARTNER])
            break
        case MENU_ITEMS.PARTNER:
            props.roleTypeChanged(MENU_ITEMS.PARTNER.label.toLowerCase())
            clearUnselected([MENU_ITEMS.DISTRICT, MENU_ITEMS.SYSTEM])
            break
        default:
            props.roleTypeChanged(MENU_ITEMS.DISTRICT.label.toLowerCase())
            clearUnselected([MENU_ITEMS.SYSTEM, MENU_ITEMS.PARTNER])
        }
        selectTab(selected)
    }

    const menuItems = [{
            id: MENU_ITEMS.SYSTEM.menu,
            label: 'System',
            active: 'active-tab',
            action: () => changeTab(MENU_ITEMS.SYSTEM)
        },
        {
            id: MENU_ITEMS.DISTRICT.menu,
            label: 'District',
            active: '',
            action: () => changeTab(MENU_ITEMS.DISTRICT)
        },
        {
            id: MENU_ITEMS.PARTNER.menu,
            label: 'Partner',
            active: '',
            action: () => changeTab(MENU_ITEMS.PARTNER)
        }
    ]

    const generateRows = (roles) => {
        return roles.map((item, i) => {
            return {
                columns: [
                    { className: 'role-title', content: item.role_title },
                    {
                        className: 'role-access',
                        content: item.role_access
                    }
                ],
                key: item.UID,
                view: () => props.viewRole(item),
                delete: () => props.deleteRole(item),
                locked: item.role_locked
            }
        })
    }
    return (
        <CardTable>
            <div className='tab-contain'>
                <TabMenu items={menuItems} />
                <hr />
                <RolesTab id={MENU_ITEMS.SYSTEM.tab} visibility='tab-visible'>
                    <FormHead text={`${MENU_ITEMS.SYSTEM.label} Level Roles`} />
                    <InnerTable
                        id={MENU_ITEMS.SYSTEM.table}
                        rows={generateRows(props.systemRoles)}
                        columns={generateTableColumns()}
                        hasActions
                        canDelete
                    />
                    <hr />
                    <br />
                    <Button
                        color='primary'
                        name='create-system-role-button'
                        label='Create Role'
                        onClick={() =>
                            props.createRole(MENU_ITEMS.SYSTEM.label)
                        }
                        leadingIcon='plus-circle'
                    />
                </RolesTab>
                <RolesTab id={MENU_ITEMS.DISTRICT.tab} visibility='gone'>
                    <FormHead
                        text={`${MENU_ITEMS.DISTRICT.label} Level Roles`}
                    />
                    <InnerTable
                        id={MENU_ITEMS.DISTRICT.table}
                        rows={generateRows(props.districtRoles)}
                        columns={generateTableColumns()}
                        hasActions
                        canDelete
                    />
                    <hr />
                    <br />
                    <Button
                        color='primary'
                        name='create-district-role-button'
                        label='Create Role'
                        onClick={() =>
                            props.createRole(MENU_ITEMS.DISTRICT.label)
                        }
                        leadingIcon='plus-circle'
                    />
                </RolesTab>
                <RolesTab id={MENU_ITEMS.PARTNER.tab} visibility='gone'>
                    <FormHead
                        text={`${MENU_ITEMS.PARTNER.label} Level Roles`}
                    />
                    <InnerTable
                        id={MENU_ITEMS.PARTNER.table}
                        rows={generateRows(props.partnerRoles)}
                        columns={generateTableColumns()}
                        hasActions
                        canDelete
                    />
                    <hr />
                    <br />
                    <Button
                        color='primary'
                        name='create-partner-role-button'
                        label='Create Role'
                        onClick={() =>
                            props.createRole(MENU_ITEMS.PARTNER.label)
                        }
                        leadingIcon='plus-circle'
                    />
                </RolesTab>
            </div>
            <style jsx='true' global='true'>{`
                .overview-detail-container {
                    display: flex;
                    flex-direction: row;
                    justify-content: flex-start;
                    align-items: flex-start;
                }

                .overview-detail-container hr {
                    background-color: #cad3dd;
                    width: 100%;
                    opacity: 0.5;
                    border: 0;
                    clear: both;
                    display: block;
                    height: 1px;
                }

                .role-title {
                    width: 240px;
                }
                .role-access {
                    width: 160px;
                }
            `}</style>
        </CardTable>
    )
}

RolesOverview.propTypes = {
    systemRoles: PropTypes.array,
    districtRoles: PropTypes.array,
    partnerRoles: PropTypes.array,
    viewRole: PropTypes.func,
    deleteRole: PropTypes.func,
    createRole: PropTypes.func,
    roleTypeChanged: PropTypes.func
}

export default RolesOverview
