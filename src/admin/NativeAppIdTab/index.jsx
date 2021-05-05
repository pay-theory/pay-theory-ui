// node modules
import React, { useState } from 'react'
import PropTypes from 'prop-types'
import {
    ActionHead,
    TabPage,
    InnerTable,
    openModal,
    closeModal
}
from '../../common'
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
    const generateAndroidRows = (androidApps) => {
        return Object.keys(androidApps).map((packageName, i) => {
            return {
                columns: [{
                        className: 'apk-digest-prod',
                        content: (
                            <span title={androidApps[packageName].productionDigest}>
                                {androidApps[packageName].productionDigest}
                            </span>
                        )
                    },
                    {
                        className: 'apk-digest-debug',
                        content: (
                            <span title={androidApps[packageName].debugDigest}>
                                {androidApps[packageName].debugDigest}
                            </span>
                        )
                    },
                    {
                        className: 'apk-package-name',
                        content: packageName
                    },
                    {
                        className: 'android-delete',
                        content: (
                            <span
                                className='action delete'
                                data-testid='delete-android'
                                onClick={() => {
                                    setActionable({
                                        platform: 'android',
                                        data: {
                                            'apk_package_name': packageName,
                                            'apk_digest_prod': androidApps[packageName]['productionDigest'] ,
                                            'apk_digest_debug': androidApps[packageName]['debugDigest']
                                        }
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
                key: packageName
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
    const generateAppleRows = (iosApps) => {
        return Object.keys(iosApps).map((bundleIdentifier, i) => {
            return {
                columns: [{
                        className: 'cf-bundle-identifier',
                        content: bundleIdentifier
                    },
                    {
                        className: 'apple-team-id',
                        content: iosApps[bundleIdentifier]
                    },
                    {
                        className: 'ios-delete',
                        content: (
                            <span
                                className='action delete'
                                data-testid='delete-ios'
                                onClick={() => {
                                    setActionable({
                                        platform: 'ios',
                                        data: { 'cf_bundle_identifier': bundleIdentifier, 'apple_team_id': iosApps[bundleIdentifier] }
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
                key: bundleIdentifier
            }
        })
    }
    return (
        <TabPage id='native-app-id-tab' visibility='gone'>
            <div className='tab-content' data-testid='native-app-id-tab'>
                <ActionHead
                    header='Native App Credentials'
                    action={() =>  openModal('native-credentials')}
                    label='Add Credentials'
                    actionId='add-ios'
                    icon='plus-circle'
                />
                <div className='tab-row'>
                    <div className='tab-column'>
                        <div className='platform-header'>
                            <h3>iOS</h3>
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
                    <div className='delete-message'>
                        <p>Are you sure you want to delete the native credentials:</p>
                        {actionable.platform === 'ios' ? (
                            <span>
                                <p>{`Bundle Identifier: ${actionable.data.cf_bundle_identifier}`}</p>{' '}
                                <p>{`Team ID: ${actionable.data.apple_team_id}`}</p>
                            </span>
                        ) : actionable.platform === 'android' ? (
                            <span>
                                <p>{`Production APK Digest: ${actionable.data.apk_digest_prod}`}</p>{' '}
                                <p>{`Debug APK Digest: ${actionable.data.apk_digest_debug}`}</p>
                                <p>{`Package Name: ${actionable.data.apk_package_name}`}</p>
                            </span>
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

                    .delete-message p {
                        padding: 10px;
                    }
                `}
            </style>
        </TabPage>
    )
}

NativeAppIdTab.propTypes = {
    addAction: PropTypes.func.isRequired,
    android: PropTypes.object.isRequired,
    deleteAction: PropTypes.func.isRequired,
    ios: PropTypes.object.isRequired
}

export default NativeAppIdTab
