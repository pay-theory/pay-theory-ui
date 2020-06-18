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
                className='account-code-search'
                data-testid='fund'
                label='Fund'
                name='fund'
                inputProps={{
                    minLength: '3',
                    maxLength: '3',
                    size: '3'
                }}
                value={searchState.fund}
                onChange={onChange}
            />
            -
            <TextEntry
                className='account-code-search'
                data-testid='receipt'
                label='Receipt'
                name='receipt'
                inputProps={{
                    minLength: '4',
                    maxLength: '4',
                    size: '5'
                }}
                value={searchState.receipt}
                onChange={onChange}
            />
            -
            <TextEntry
                className='account-code-search'
                data-testid='scc'
                label='SCC'
                name='scc'
                inputProps={{
                    minLength: '4',
                    maxLength: '4',
                    size: '4'
                }}
                value={searchState.scc}
                onChange={onChange}
            />
            -
            <TextEntry
                className='account-code-search'
                data-testid='subject'
                label='Subject'
                name='subject'
                inputProps={{
                    minLength: '6',
                    maxLength: '6',
                    size: '6'
                }}
                value={searchState.subject}
                onChange={onChange}
            />
            -
            <TextEntry
                className='account-code-search'
                data-testid='opu'
                label='OPU'
                name='opu'
                inputProps={{
                    minLength: '3',
                    maxLength: '3',
                    size: '3'
                }}
                value={searchState.opu}
                onChange={onChange}
            />
            <div className='spacer' />
            <TextEntry
                className='account-code-search'
                data-testid='description'
                label='Description'
                name='description'
                value={searchState.description}
                onChange={onChange}
            />
            <div className='spacer' />
            <Button
                raised
                className='primary-button'
                data-testid='searchButton'
                onClick={(e) => {
                    props.searchHandler(searchState)
                }}
            >
                <i className='fal fa-search' />
                Search USAS
            </Button>
            <style jsx='true'>{`
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
            `}</style>
        </div>
    )
}

AccountCodeBar.propTypes = {
    searchHandler: PropTypes.func.isRequired
}

export default AccountCodeBar
