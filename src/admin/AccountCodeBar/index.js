// node modules
import React, { useState } from 'react'
import PropTypes from 'prop-types'
import Button from '@material/react-button'

import TextEntry from '../../common/TextEntry'

const INITIAL_STATE = {
	fund: '',
	receipt: '',
	subject: '',
	opu: '',
	scc: '',
	description: ''
}

const AccountCodeBar = (props) => {
	const [searchState, setSearchState] = useState(INITIAL_STATE)
	const onChange = (event) => {
		const stated = { ...searchState }
		stated[event.target.name] = event.target.value
		setSearchState(stated)
	}
	return (
		<div className='search-account-codes'>
			<TextEntry
				data-testid='fund'
				innerClass='account-code-search'
				inputProps={{
					minLength: '3',
					maxLength: '3',
					size: '3'
				}}
				label='Fund'
				name='fund'
				onChange={onChange}
				value={searchState.fund}
			/>
			{` - `}
			<TextEntry
				data-testid='receipt'
				innerClass='account-code-search'
				inputProps={{
					minLength: '4',
					maxLength: '4',
					size: '5'
				}}
				label='Receipt'
				name='receipt'
				onChange={onChange}
				value={searchState.receipt}
			/>
			{` - `}
			<TextEntry
				data-testid='scc'
				innerClass='account-code-search'
				inputProps={{
					minLength: '4',
					maxLength: '4',
					size: '4'
				}}
				label='SCC'
				name='scc'
				onChange={onChange}
				value={searchState.scc}
			/>
			{` - `}
			<TextEntry
				data-testid='subject'
				innerClass='account-code-search'
				inputProps={{
					minLength: '6',
					maxLength: '6',
					size: '6'
				}}
				label='Subject'
				name='subject'
				onChange={onChange}
				value={searchState.subject}
			/>
			{` - `}
			<TextEntry
				data-testid='opu'
				innerClass='account-code-search'
				inputProps={{
					minLength: '3',
					maxLength: '3',
					size: '3'
				}}
				label='OPU'
				name='opu'
				onChange={onChange}
				value={searchState.opu}
			/>
			<div className='spacer' />
			<TextEntry
				data-testid='description'
				innerClass='account-code-search'
				label='Description'
				name='description'
				onChange={onChange}
				value={searchState.description}
			/>
			<div className='spacer' />
			<Button
				data-testid='searchButton'
				innerClass='primary-button'
				onClick={(e) => {
					props.searchHandler(searchState)
				}}
				raised
			>
				<i className='fal fa-search' />
				{`Search USAS `}
			</Button>
			<style jsx='true'>
				{`
					.search-account-codes {
						flex-grow: 1;
						display: flex;
						flex-direction: row;
						justify-content: flex-start;
						align-items: baseline;
					}

					.search-account-codes .spacer {
						margin: 8px;
					}
				`}
			</style>
		</div>
	)
}

AccountCodeBar.propTypes = {
	searchHandler: PropTypes.func.isRequired
}

export default AccountCodeBar
