//node modules
import React, { useState } from 'react'
import PropTypes from 'prop-types'
import Button from '@material/react-button'
import Select from '@material/react-select'

import { FormHead, TextEntry, TabPage, closeSpinner, openSpinner } from '../'
import * as BooksHooks from '../../../hooks'
import { formatPhone, validPhone, validEmail } from '../accountUtils'
import { StockTags } from '../../../common/StatusMessage'

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
	district_zipcode: '',
}

const DistrictInfoTab = props => {
	const [state, setState] = useState(INITIAL_STATE)
	const [loaded, setLoaded] = useState(false)
	const onChange = event => {
		event.preventDefault()
		let changed = { ...state }
		changed[event.target.name] =
			event.target.name === 'district_phone' ?
			formatPhone(event.target.value) :
			event.target.value
		setState(changed)
	}

	const setError = message => {
		closeSpinner()
		props.setStatusMessage(
			StockTags.error(message, () => /* istanbul ignore next */ {
				props.setStatusMessage(<div data-testid="status-cleared" />)
			})
		)
	}

	return (
		<BooksHooks.context.district.Consumer>
			{district => {
				if (!loaded && district.districtData) {
					setLoaded(true)
					setState(district.districtData)
				}

				return (
					<TabPage id="district-info-tab" visibility="tab-visible">
						<div
							className="tab-content"
							data-testid="DistrictInfoTab"
						>
							<FormHead text="School Details" />
							<div id="name-nickname" className="tab-row">
								<div className="tab-column">
									<TextEntry
										label="District Name"
										name="district_name"
										value={state.district_name}
										onChange={onChange}
									/>
								</div>
								<div className="tab-column">
									<TextEntry
										label="Nickname"
										name="district_nickname"
										value={state.district_nickname}
										onChange={onChange}
									/>
								</div>
							</div>
							<div id="phone-email" className="tab-row">
								<div className="tab-column">
									<TextEntry
										label="Phone Number"
										name="district_phone"
										value={state.district_phone}
										isValid={Boolean(
											validPhone(state.district_phone)
										)}
										onChange={onChange}
									/>
								</div>
								<div className="tab-column">
									<TextEntry
										label="Email"
										name="district_email"
										value={state.district_email}
										isValid={Boolean(
											validEmail(state.district_email)
										)}
										onChange={onChange}
									/>
								</div>
							</div>
							<div id="website-nces" className="tab-row">
								<div className="tab-column">
									<TextEntry
										label="Website"
										name="district_website"
										value={state.district_website}
										onChange={onChange}
									/>
								</div>
								<div className="tab-column">
									<TextEntry
										label="NCES ID"
										name="district_ncesid"
										value={state.district_ncesid}
										onChange={onChange}
									/>
								</div>
							</div>
							<div id="country-timezone" className="tab-row">
								<div className="tab-column">
									<Select
										id="district_country"
										name="district_country"
										label="Country"
										value={state.district_country}
										onChange={onChange}
										outlined
									>
										<option value="" disabled />
										<option value="US">
											United States of America
										</option>
									</Select>
								</div>
								<div className="tab-column">
									<Select
										id="district_timezone"
										name="district_timezone"
										label="Timezone"
										value={state.district_timezone}
										onChange={onChange}
										outlined
									>
										<option value="" disabled />
										<option value="GMT+5">
											(GMT +5:00) Eastern Time
										</option>
										<option value="GMT+6">
											(GMT +6:00) Central Time
										</option>
										<option value="GMT+7">
											(GMT +7:00) Mountain Time
										</option>
										<option value="GMT+8">
											(GMT +8:00) Pacific Time
										</option>
										<option value="GMT+9">
											(GMT +9:00) Alaska Time
										</option>
										<option value="GMT+10">
											(GMT +10:00) Hawaii Time
										</option>
									</Select>
								</div>
							</div>
							<div id="street-city" className="tab-row">
								<div className="tab-column">
									<TextEntry
										label="Street"
										name="district_street"
										value={state.district_street}
										onChange={onChange}
									/>
								</div>
								<div className="tab-column">
									<TextEntry
										label="City"
										name="district_city"
										value={state.district_city}
										onChange={onChange}
									/>
								</div>
							</div>
							<div id="state-zip" className="tab-row">
								<div className="tab-column">
									<Select
										name="district_state"
										label="State"
										value={state.district_state}
										onChange={onChange}
										outlined
									>
										<option value="" disabled />
										<option value="OH">Ohio</option>
									</Select>
								</div>
								<div className="tab-column">
									<TextEntry
										label="Zip Code"
										name="district_zipcode"
										value={state.district_zipcode}
										onChange={onChange}
									/>
								</div>
							</div>
						</div>
						<hr />
						<div className="tab-content">
							<Button
								className="primary-button"
								data-testid="save-district-button"
								raised
								onClick={e => {
									if (
										validPhone(state.district_phone) &&
										validEmail(state.district_email)
									) {
										props.saveDistrict(state)
									} else if (
										validPhone(state.district_phone)
									) {
										setError('email is not valid')
									} else {
										setError('phone is not valid')
									}
								}}
							>
								Save
							</Button>
						</div>
					</TabPage>
				)
			}}
		</BooksHooks.context.district.Consumer>
	)
}

DistrictInfoTab.propTypes = {
	saveDistrict: PropTypes.func.isRequired,
	setStatusMessage: PropTypes.func.isRequired,
}

export default DistrictInfoTab
