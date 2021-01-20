import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'

import {
    ModalContent,
    Button,
    closeModal,
    TextEntry,
    Select
}
from '../../common'

const NativeCredentialsModal = ({ action }) => {
    const [platform, setPlatform] = useState('')
    const [bundleId, setBundleId] = useState()
    const [teamId, setTeamId] = useState()
    const [prodDigest, setProdDigest] = useState()
    const [debugDigest, setDebugDigest] = useState()
    const [apkPackage, setApkPackage] = useState()
    const [actionable, setActionable] = useState(false)

    const resetState = () => {
        setBundleId()
        setApkPackage()
        setPlatform('')
        setDebugDigest()
        setProdDigest()
        setTeamId()
    }

    const platforms = [{
            label: 'Android',
            value: 'android'
        },
        {
            label: 'iOS',
            value: 'ios'
        }
    ]
    const identifier = 'native-credentials'

    useEffect(() => {
        if (platform === 'ios') {
            if (teamId && bundleId) setActionable(true)
            else setActionable(false)
        }
        else if (platform === 'android') {
            if (prodDigest && debugDigest && apkPackage) setActionable(true)
            else setActionable(false)
        }
        else {
            setActionable(false)
        }
    }, [platform, teamId, bundleId, prodDigest, debugDigest, apkPackage])

    const formatedData = () => {
        let result
        if (platform === 'ios') {
            result = {
                platform: 'ios',
                data: {
                    cf_bundle_identifier: bundleId,
                    apple_team_id: teamId
                }
            }
        }
        else if (platform === 'android') {
            result = result = {
                platform: 'android',
                data: {
                    apk_digest_debug: debugDigest,
                    apk_digest_prod: prodDigest,
                    apk_package_name: apkPackage
                }
            }
        }

        return result
    }

    return (
        <ModalContent
            closeAction={resetState}
            data-testid='confirm-action'
            identifier={identifier}
            text='Add Native App Credentials'
        >
            <div className='confirm-action-content'>
                <Select
                    label='Platform'
                    name='platforms'
                    onChange={(e) => setPlatform(e.target.value)}
                    options={platforms}
                    value={platform}
                />
                <div className='platform-fields'>
                    {platform === 'ios' ? (
                        <div className='credential-fields'>
                            <TextEntry
                                label='Bundle Identifier'
                                name='bundle-id'
                                onChange={(e) => setBundleId(e.target.value)}
                                value={bundleId}
                            />
                            <TextEntry
                                label='Team ID'
                                name='team-id'
                                onChange={(e) => setTeamId(e.target.value)}
                                value={teamId}
                            />
                        </div>
                    ) : platform === 'android' ? (
                        <div className='credential-fields'>
                            <TextEntry
                                label='Production APK Digest'
                                name='prod-digest'
                                onChange={(e) => setProdDigest(e.target.value)}
                                value={prodDigest}
                            />
                            <TextEntry
                                label='Debug APK Digest'
                                name='debug-digest'
                                onChange={(e) => setDebugDigest(e.target.value)}
                                value={debugDigest}
                            />
                            <TextEntry
                                label='Package Name'
                                name='apk-package'
                                onChange={(e) => setApkPackage(e.target.value)}
                                value={apkPackage}
                            />
                        </div>
                    ) : null}
                </div>
                <div className='buttons'>
                    <Button
                        color='primary'
                        disabled={actionable === false}
                        label='Add'
                        leadingIcon='plus-circle'
                        name='add-button'
                        onClick={() => {
                            action(formatedData())
                        }}
                        small
                    />
                    <Button
                        color='default'
                        label='Cancel'
                        name='cancel-button'
                        onClick={() => {
                            closeModal(identifier)
                            resetState()
                        }}
                        small
                    />
                </div>
            </div>
            <style jsx='true'>
                {`
                    .confirm-action-content {
                        margin: 10px;
                    }
                    .confirm-action-content p {
                        padding: 20px 10px;
                    }

                    .confirm-action-content .buttons {
                        display: flex;
                        width: auto;
                        justify-content: space-around;
                        margin-top: 15px;
                    }

                    .confirm-action-content .buttons button {
                        width: 33%;
                    }

                    .modal-form-on {
                        height: auto !important;
                    }
                    .platform-fields {
                        height: auto;
                        transition: height 0.7s;
                        overflow-y: hidden;
                    }

                    .credential-fields {
                        display: flex;
                        flex-direction: column;
                    }
                `}
            </style>
        </ModalContent>
    )
}

NativeCredentialsModal.propTypes = {
    action: PropTypes.func.isRequired
}

export default NativeCredentialsModal
