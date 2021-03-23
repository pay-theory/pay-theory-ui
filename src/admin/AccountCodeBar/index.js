// node modules
import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { Button, TextEntry } from '../../common'

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
                inputprops={{
                    minLength: '3',
                    maxLength: '3',
                    size: '3'
                }}
                label='Fund'
                name='fund'
                onChange={onChange}
                outer='account-code-search'
                value={searchState.fund}
            />
            {` - `}
            <TextEntry
                data-testid='receipt'
                inputprops={{
                    minLength: '4',
                    maxLength: '4',
                    size: '5'
                }}
                label='Receipt'
                name='receipt'
                onChange={onChange}
                outer='account-code-search'
                value={searchState.receipt}
            />
            {` - `}
            <TextEntry
                data-testid='scc'
                inputprops={{
                    minLength: '4',
                    maxLength: '4',
                    size: '4'
                }}
                label='SCC'
                name='scc'
                onChange={onChange}
                outer='account-code-search'
                value={searchState.scc}
            />
            {` - `}
            <TextEntry
                data-testid='subject'
                inputprops={{
                    minLength: '6',
                    maxLength: '6',
                    size: '6'
                }}
                label='Subject'
                name='subject'
                onChange={onChange}
                outer='account-code-search'
                value={searchState.subject}
            />
            {` - `}
            <TextEntry
                data-testid='opu'
                inputprops={{
                    minLength: '3',
                    maxLength: '3',
                    size: '3'
                }}
                label='OPU'
                name='opu'
                onChange={onChange}
                outer='account-code-search'
                value={searchState.opu}
            />
            <div className='spacer' />
            <TextEntry
                data-testid='description'
                label='Description'
                name='description'
                onChange={onChange}
                outer='account-code-search'
                value={searchState.description}
            />
            <div className='spacer' />
            <Button
                name='searchButton'
                color='primary'
                label='Search USAS'
                leadingIcon='search'
                onClick={(e) => {
                    props.searchHandler(searchState)
                }}
            />
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
