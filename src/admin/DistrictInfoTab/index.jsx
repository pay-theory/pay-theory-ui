// node modules
import React, { useState, useContext, useEffect } from 'react'
import PropTypes from 'prop-types'

import { FormHead, TextEntry, TabPage, closeSpinner, Button, Select } from '../../common'
import * as BooksHooks from '../../hooks'
import { formatPhone, validPhone, validEmail } from '../../common/accountUtils'
import { StockTags } from '../../common/StatusMessage'

const INITIAL_STATE = {
    district_name: '',
    district_nickname: '',
    district_phone: '',
    district_email: '',
    district_website: '',
    district_ncesid: '',
    district_country: '',
    district_timezone: '',
    district_street: '',
    district_city: '',
    district_state: '',
    district_zipcode: ''
}

const options = [{
    disabled: true,
    value: '',
    label: ''
}, {
    value: 'GMT+5',
    label: '(GMT +5:00) Eastern Time'
}, {
    value: 'GMT+6',
    label: '(GMT +6:00) Central Time'
}, {
    value: 'GMT+7',
    label: '(GMT +7:00) Mountain Time'
}, {
    value: 'GMT+8',
    label: '(GMT +8:00) Pacific Time'
}, {
    value: 'GMT+9',
    label: '(GMT +9:00) Alaska Time'
}, {
    value: 'GMT+10',
    label: '(GMT +10:00) Hawaii Time'
}]

const stateOptions = [{
    disabled: true,
    value: '',
    label: ''
}, {
    value: 'OH',
    label: 'Ohio'
}]

const countryOptions = [{
    disabled: true,
    value: '',
    label: ''
}, {
    value: 'US',
    label: 'United States of America'
}]

const DistrictInfoTab = (props) => {
    const district = useContext(BooksHooks.Context.District)

    const [state, setState] = useState(INITIAL_STATE)
    const [loaded, setLoaded] = useState(false)
    const onChange = (event) => {
        event.preventDefault()
        const changed = { ...state }
        changed[event.target.name] =
            event.target.name === 'district_phone' ?
            formatPhone(event.target.value) :
            event.target.value
        setState(changed)
    }

    const setError = (message) => {
        closeSpinner()
        props.setStatusMessage(
            StockTags.error(message, () => /* istanbul ignore next */ {
                props.setStatusMessage(<div data-testid='status-cleared' />)
            })
        )
    }

    useEffect(() => {
        if (!loaded && district.districtData) {
            setLoaded(true)
            setState(district.districtData)
        }
    }, [loaded, district])

    return (
        <TabPage id='district-info-tab' visibility='tab-visible'>
            <div className='tab-content' data-testid='DistrictInfoTab'>
                <FormHead text='School Details' />
                <div className='tab-row' id='name-nickname'>
                    <div className='tab-column'>
                        <TextEntry
                            label='District Name'
                            name='district_name'
                            onChange={onChange}
                            value={state.district_name}
                        />
                    </div>
                    <div className='tab-column'>
                        <TextEntry
                            label='Nickname'
                            name='district_nickname'
                            onChange={onChange}
                            value={state.district_nickname}
                        />
                    </div>
                </div>
                <div className='tab-row' id='phone-email'>
                    <div className='tab-column'>
                        <TextEntry
                            isValid={Boolean(validPhone(state.district_phone))}
                            label='Phone Number'
                            name='district_phone'
                            onChange={onChange}
                            value={state.district_phone}
                        />
                    </div>
                    <div className='tab-column'>
                        <TextEntry
                            isValid={Boolean(validEmail(state.district_email))}
                            label='Email'
                            name='district_email'
                            onChange={onChange}
                            value={state.district_email}
                        />
                    </div>
                </div>
                <div className='tab-row' id='website-nces'>
                    <div className='tab-column'>
                        <TextEntry
                            label='Website'
                            name='district_website'
                            onChange={onChange}
                            value={state.district_website}
                        />
                    </div>
                    <div className='tab-column'>
                        <TextEntry
                            label='NCES ID'
                            name='district_ncesid'
                            onChange={onChange}
                            value={state.district_ncesid}
                        />
                    </div>
                </div>
                <div className='tab-row' id='country-timezone'>
                    <div className='tab-column'>
                        <Select
                            label='Country'
                            name='district_country'
                            onChange={onChange}
                            options={countryOptions}
                            value={state.district_country}
                        />
                    </div>
                    <div className='tab-column'>
                        <Select
                            name='district_timezone'
                            label='Timezone'
                            onChange={onChange}
                            options={options}
                            value={state.district_timezone}
                        />
                    </div>
                </div>
                <div className='tab-row' id='street-city'>
                    <div className='tab-column'>
                        <TextEntry
                            label='Street'
                            name='district_street'
                            onChange={onChange}
                            value={state.district_street}
                        />
                    </div>
                    <div className='tab-column'>
                        <TextEntry
                            label='City'
                            name='district_city'
                            onChange={onChange}
                            value={state.district_city}
                        />
                    </div>
                </div>
                <div className='tab-row' id='state-zip'>
                    <div className='tab-column'>
                        <Select
                            label='State'
                            name='district_state'
                            onChange={onChange}
                            options={stateOptions}
                            value={state.district_state}
                        />
                    </div>
                    <div className='tab-column'>
                        <TextEntry
                            label='Zip Code'
                            name='district_zipcode'
                            onChange={onChange}
                            value={state.district_zipcode}
                        />
                    </div>
                </div>
            </div>
            <hr />
            <div className='tab-content'>
                <Button
                    color='primary'
                    name='save-district-button'
                    onClick={(e) => {
                        if (
                            validPhone(state.district_phone) &&
                            validEmail(state.district_email)
                        ) {
                            props.saveDistrict(state)
                        } else if (validPhone(state.district_phone)) {
                            setError('email is not valid')
                        } else {
                            setError('phone is not valid')
                        }
                    }}
                    label='Save'
                />
            </div>
        </TabPage>
    )
}

DistrictInfoTab.propTypes = {
    saveDistrict: PropTypes.func.isRequired,
    setStatusMessage: PropTypes.func.isRequired
}

export default DistrictInfoTab
