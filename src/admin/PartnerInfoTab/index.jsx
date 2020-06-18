/* eslint-disable camelcase */
// node modules
import React, { useState } from 'react'
import PropTypes from 'prop-types'
import Button from '@material/react-button'
import ipaddr from 'ipaddr.js'
import { v4 as uuidv4 } from 'uuid'

import {
    ClickToCopyText,
    FormHead,
    DynamicList,
    TextEntry,
    TabPage,
    openSpinner,
    closeSpinner
} from '../../common'

import * as BooksHooks from '../../hooks'
import { StockTags } from '../../common/StatusMessage'

const INITIAL_STATE = {
    partner_name: ''
}

const PartnerInfoTab = (props) => {
    const [state, setState] = useState({
        ...INITIAL_STATE
    })
    const [newIP, setNewIP] = useState('')
    const [ipError, setIpError] = useState('')
    const [ipValid, setIpValid] = useState(true)
    const [partner, setPartner] = useState(false)
    const [rawApiKey, setRawApiKey] = useState('')

    const generateApikey = () => {
        /* istanbul ignore else */
        if (
            window.confirm(
                'Are you sure? Clicking OK will revoke any existing API key and create a new one!'
            )
        ) {
            const raw_key = uuidv4()
            setRawApiKey(`${props.apiPrefix}-${raw_key}-4-${state.UID}`)
            const modified = { ...state }
            modified.partner_apikey_raw = rawApiKey
            modified.partner_apikey = raw_key

            openSpinner()
            props.savePartner(modified).then((response) => {
                closeSpinner()
            })
        }
    }

    const setError = (message) => {
        closeSpinner()
        props.setStatusMessage(
            StockTags.error(message, () => /* istanbul ignore next */ {
                props.setStatusMessage(<div />)
            })
        )
    }

    const setSuccess = (message) => {
        closeSpinner()
        props.setStatusMessage(
            StockTags.success(message, () => /* istanbul ignore next */ {
                props.setStatusMessage(<div />)
            })
        )
    }

    const initPartner = (partnerIn) => {
        if (!partner && partnerIn.partner_name) {
            setPartner(true)
            setState(partnerIn)
        }
    }

    return (
        <BooksHooks.context.partner.Consumer>
            {(partnered) => {
                initPartner(partnered)
                const onChange = (event) => {
                    event.preventDefault()
                    const changed = { ...state }
                    changed[event.target.name] = event.target.value
                    setState(changed)
                }
                const onChangeIp = (event) => {
                    try {
                        ipaddr.parseCIDR(event.target.value)
                        setIpError(false)
                        setIpValid(true)
                    } catch (err) {
                        setIpError(err.message.replace('ipaddr: ', ''))
                        setIpValid(false)
                    }
                }
                return (
                    <TabPage id='partner-info-tab' visibility='tab-visible'>
                        <div className='tab-content'>
                            <FormHead text='Partner Details' />
                            <div id='partner-name' className='tab-row'>
                                <div className='tab-column'>
                                    <TextEntry
                                        label='Partner Name'
                                        name='partner_name'
                                        value={state.partner_name}
                                        required
                                        onChange={onChange}
                                    />
                                </div>
                            </div>
                            <div className='tab-row'>
                                <div className='tab-column'>
                                    <ClickToCopyText
                                        label='API Key'
                                        name='partner_apikey'
                                        value={rawApiKey}
                                        message='API key'
                                    />
                                </div>
                                <div className='tab-column validation'>
                                    <Button
                                        className='primary-button buttoned'
                                        raised
                                        data-testid='generate-partner-apikey'
                                        onClick={generateApikey}
                                    >
                                        Generate
                                    </Button>
                                    <div className='helper-space' />
                                </div>
                            </div>
                            <FormHead text='Valid IP Addresses' />
                            <div id='partner-ips' className='tab-row'>
                                <div className='tab-column'>
                                    <TextEntry
                                        label='New Partner IP'
                                        name='partner_ip'
                                        value={newIP}
                                        isValid={ipValid}
                                        onChange={(e) => {
                                            setNewIP(e.target.value)
                                        }}
                                        onBlur={onChangeIp}
                                    />
                                </div>
                                <div className='tab-column validation'>
                                    <Button
                                        className='primary-button buttoned'
                                        raised
                                        onClick={() => {
                                            /* istanbul ignore next */
                                            if (ipValid) {
                                                props.addIp(newIP)
                                                setNewIP('')
                                                setSuccess('IP range added')
                                            } else {
                                                setError(ipError)
                                            }
                                        }}
                                        data-testid='add-partner-ip'
                                    >
                                        Add
                                    </Button>
                                    <div className='helper-space' />
                                </div>
                            </div>
                            <div id='partner-ips' className='tab-row'>
                                <div className='tab-column'>
                                    <DynamicList
                                        items={state.partner_ip_range}
                                        removalCallback={
                                            props.ipRemovalCallback
                                        }
                                    />
                                </div>
                            </div>
                            <hr />
                            <div className='tab-content'>
                                <Button
                                    className='primary-button'
                                    data-testid='save-partner-button'
                                    raised
                                    onClick={() => {
                                        openSpinner()
                                        props
                                            .savePartner(state)
                                            .then((response) => {
                                                closeSpinner()
                                            })
                                    }}
                                >
                                    Save
                                </Button>
                            </div>
                        </div>
                        <style jsx='true' global='true'>{`
                            .buttoned {
                                margin: 16px 24px 4px;
                                flex-grow: 1;
                            }
                            .helper-space {
                                margin: 4px 24px 16px;
                                -webkit-box-flex: 1;
                                -webkit-flex-grow: 1;
                                -ms-flex-positive: 1;
                                flex-grow: 1;
                                height: 16px;
                            }
                            .validation {
                                height: 115px;
                            }
                        `}</style>
                    </TabPage>
                )
            }}
        </BooksHooks.context.partner.Consumer>
    )
}

PartnerInfoTab.propTypes = {
    apiPrefix: PropTypes.string.isRequired,
    addIp: PropTypes.func.isRequired,
    setStatusMessage: PropTypes.func.isRequired,
    ipRemovalCallback: PropTypes.func.isRequired,
    savePartner: PropTypes.func.isRequired
}

export default PartnerInfoTab
