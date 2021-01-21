// node modules
import React, { useState } from 'react'
import PropTypes from 'prop-types'
import {
    FormHead,
    TabPage,
    Button,
    InnerTable,
    openModal,
    closeModal
} from '../../common'
import NativeAppModal from '../NativeAppModal'
import ActionModal from '../ActionModal'

const NativeAppIdTab = ({ android, ios, deleteAction, addAction }) => {
    const [actionable, setActionable] = useState({})

    const ACTION_ID = 'delete-credentials'

    const generateAndroidColumns = () => {
        return [
            { className: 'apk-digest-prod', label: 'production APK digest' },
            { className: 'apk-digest-debug', label: 'debug APK digest' },
            { className: 'apk-package-name', label: 'package name' },
            { className: 'android-delete', label: 'delete' }
        ]
    }
    const generateAndroidRows = (array) => {
        return array.map((item, i) => {
            return {
                columns: [
                    {
                        className: 'apk-digest-prod',
                        content: (
                            <p title={item.apk_digest_prod}>
                                {item.apk_digest_prod}
                            </p>
                        )
                    },
                    {
                        className: 'apk-digest-debug',
                        content: (
                            <p title={item.apk_digest_debug}>
                                {item.apk_digest_debug}
                            </p>
                        )
                    },
                    {
                        className: 'apk-package-name',
                        content: item.apk_package_name
                    },
                    {
                        className: 'android-delete',
                        content: (
                            <span
                                className='action delete'
                                data-testid='delete-action'
                                onClick={() => {
                                    setActionable({
                                        platform: 'android',
                                        data: item
                                    })
                                    openModal(ACTION_ID)
                                }}
                            >
                                <span>
                                    <i className='fal fa-trash-alt' />
                                </span>
                            </span>
                        )
                    }
                ],
                key: `${item.apk_digest}-${item.apk_package_name}`
            }
        })
    }

    const generateAppleColumns = () => {
        return [
            { className: 'cf-bundle-identifier', label: 'bundle identifier' },
            { className: 'apple-team-id', label: 'team id' },
            { className: 'ios-delete', label: 'delete' }
        ]
    }
    const generateAppleRows = (array) => {
        return array.map((item, i) => {
            return {
                columns: [
                    {
                        className: 'cf-bundle-identifier',
                        content: item.cf_bundle_identifier
                    },
                    {
                        className: 'apple-team-id',
                        content: item.apple_team_id
                    },
                    {
                        className: 'ios-delete',
                        content: (
                            <span
                                className='action delete'
                                data-testid='delete-action'
                                onClick={() => {
                                    setActionable({
                                        platform: 'ios',
                                        data: item
                                    })
                                    openModal(ACTION_ID)
                                }}
                            >
                                <span>
                                    <i className='fal fa-trash-alt' />
                                </span>
                            </span>
                        )
                    }
                ],
                key: `${item.cf_bundle_identifier}-${item.apple_team_id}`
            }
        })
    }
    return (
        <TabPage id='native-app-id-tab' visibility='gone'>
            <div className='tab-content' data-testid='native-app-id-tab'>
                <FormHead text='Native App Credentials' />
                <div className='tab-row'>
                    <div className='tab-column'>
                        <div className='platform-header'>
                            <h3>iOS</h3>
                            <Button
                                label='Add Credentials'
                                leadingIcon='plus-circle'
                                name='add-ios'
                                onClick={() => {
                                    openModal('native-credentials')
                                }}
                                small
                            />
                        </div>
                        <InnerTable
                            columns={generateAppleColumns()}
                            rows={generateAppleRows(ios)}
                        />
                    </div>
                </div>
                <div className='tab-row'>
                    <div className='tab-column'>
                        <div className='platform-header'>
                            <h3>Android</h3>
                        </div>
                        <InnerTable
                            columns={generateAndroidColumns()}
                            rows={generateAndroidRows(android)}
                        />
                    </div>
                </div>
            </div>
            <NativeAppModal
                action={(e) => {
                    addAction(e)
                    closeModal('native-credentials')
                }}
            />
            <ActionModal
                action={() => {
                    deleteAction(actionable)
                    closeModal(ACTION_ID)
                }}
                actionName='Delete'
                label='Delete App Credentials'
                message={
                    <div>
                        <p>Are you sure you want to delete credentials with:</p>
                        {actionable.platform === 'ios' ? (
                            <div>
                                <p>{`Bundle Identifier: ${actionable.data.cf_bundle_identifier}`}</p>{' '}
                                <p>{`Team ID: ${actionable.data.apple_team_id}`}</p>
                            </div>
                        ) : actionable.platform === 'android' ? (
                            <div>
                                <p>{`Production APK Digest: ${actionable.data.apk_digest_prod}`}</p>{' '}
                                <p>{`Debug APK Digest: ${actionable.data.apk_digest_debug}`}</p>
                                <p>{`Package Name: ${actionable.data.apk_package_name}`}</p>
                            </div>
                        ) : (
                            ''
                        )}
                    </div>
                }
                type={ACTION_ID}
            />
            <style global='true' jsx='true'>
                {`
                    .platform-header button {
                        margin: 0px 18px;
                    }

                    .platform-header {
                        display: flex;
                        align-items: flex-end;
                        width: 100%;
                        justify-content: space-between;
                    }

                    .apk-digest-prod,
                    .apk-digest-debug,
                    .apk-package-name {
                        width: 200px;
                    }

                    .cf-bundle-identifier,
                    .apple-team-id {
                        width: 300px;
                    }

                    .android-delete,
                    .ios-delete {
                        width: 55px;
                    }

                    .cell.apk-digest-prod p,
                    .cell.apk-digest-debug p {
                        white-space: nowrap;
                        overflow: hidden;
                        text-overflow: ellipsis;
                        padding: 0px 5px 0px 0px;
                        max-width: 250px;
                    }
                `}
            </style>
        </TabPage>
    )
}

NativeAppIdTab.propTypes = {
    addAction: PropTypes.func.isRequired,
    android: PropTypes.array.isRequired,
    deleteAction: PropTypes.func.isRequired,
    ios: PropTypes.array.isRequired
}

export default NativeAppIdTab
