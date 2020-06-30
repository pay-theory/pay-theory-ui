/* eslint-disable camelcase */
// node modules
import React, { useState } from 'react'
import PropTypes from 'prop-types'
import Button from '@material/react-button'

import { ClickToCopyText, FormHead, TabPage } from '../../common'

import * as BooksHooks from '../../hooks'

const INITIAL_STATE = {}

const PartnerInfoTab = (props) => {
	const [state, setState] = useState({
		...INITIAL_STATE
	})

	const initPartner = (partnerIn) => {
		if (partnerIn.identity) {
			setState(partnerIn)
		}
	}

	return (
		<BooksHooks.context.partner.Consumer>
			{(partnered) => {
				initPartner(partnered)
				return (
					<TabPage id='merchant-info-tab' visibility='tab-visible'>
						<div className='tab-content'>
							<FormHead text='Merchant Details' />
							<div className='tab-row'>
								<div className='tab-column'>
									<div className='api-generator'>
										<ClickToCopyText
											label='API Key'
											name='apiKey'
											value={state.sandbox_api_key}
											message='API key'
										/>
										<Button
											className='primary-button buttoned'
											raised
											data-testid='generate-partner-apikey'
											onClick={() => props.onGenerateApiKey()}
										>
											Generate
										</Button>
									</div>
								</div>
							</div>
							<div className='tab-row'>
								<div className='tab-column'>
									<ClickToCopyText
										label='Client ID'
										name='client'
										value={state.identity}
										message='Client ID'
									/>
								</div>
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
							.same-check {
								display: flex;
								flex-direction: row;
								justify-content: flex-start;
								align-items: center;
							}
							.api-generator {
								display: flex;
								flex-direction: row;
								justify-content: flex-start;
								align-items: baseline;
							}
							.api-generator .text-box {
								flex-grow: 1;
							}
							.api-generator .primary-button {
								flex-shrink: 1;
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
	setStatusMessage: PropTypes.func.isRequired,
	savePartner: PropTypes.func.isRequired,
	onGenerateApiKey: PropTypes.func.isRequired
}

export default PartnerInfoTab
