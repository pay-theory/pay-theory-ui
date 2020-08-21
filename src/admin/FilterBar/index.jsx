import React, { useState } from 'react'
import PropTypes from 'prop-types'

import { TextEntry, Select, Button } from '../../common'

const FilterBar = ({ filterOptions, filterList, setFilterList }) => {
    const [filterCategory, setFilterCategory] = useState('')
    const [filterText, setFilterText] = useState('')
    const [updating, setUpdating] = useState(false)

    const resetFilters = () => {
        setFilterCategory('')
        setFilterText('')
    }

    const addFilter = () => {
        const newList = filterList
        const newFilter = {}
        newFilter.category = filterCategory
        newFilter.text = filterText
        newList.push(newFilter)
        setFilterList(newList)
        resetFilters()
    }

    const deleteFilter = async(index) => {
        setUpdating(true)
        const newList = filterList
        newList.splice(index, 1)
        await setFilterList(newList)
        setUpdating(false)
    }

    const findLabel = (value) => {
        let result
        filterOptions.forEach((filter) => {
            if (filter.value === value) {
                result = filter.label
            }
        })
        return result
    }

    const clearAll = () => setFilterList([])

    return (
        <div className="outer-filter-bar" >
            <div className='filter-bar' data-testid='filter-bar'>
                <Select
                    className='select'
                    label='Filter By'
                    onChange={(e) => setFilterCategory(e.target.value)}
                    options={filterOptions}
                    value={filterCategory}
                    name='fb-select'
                />
                <TextEntry
                    outer='search-bar'
                    label='Search'
                    name='fb-search'
                    onChange={(e) => setFilterText(e.target.value)}
                    value={filterText}
                />
                <Button
                    disabled={!filterCategory || !filterText}
                    label='Add Filter'
                    leadingIcon='plus-circle'
                    onClick={addFilter}
                    name='fb-add'
                />
                <Button
                    color='light'
                    label='Clear All'
                    onClick={clearAll}
                    name='fb-clear-all'
                />
            </div>
            <div className='filter-list' data-testid='filter-list'>
                {filterList.map((filter, index) => {
                    const label = findLabel(filter.category)
                    return (
                        <div
                            className='filter'
                            key={`${index}-${filter.category}`}
                            data-testid='filter-tag'
                        >
                            {`${label}: ${filter.text}  `}
                            <i
                                className='fal fa-times'
                                onClick={() => {
                                    deleteFilter(index)
                                }}
                                data-testid='delete-filter'
                            />
                        </div>
                    )
                })}
            </div>
            <style jsx='true'>
                {`
                    .outer-filter-bar {
                        margin: 0px 24px;
                    }

                    .filter-bar {
                        display: flex;
                        width: auto;
                    }

                    .search-bar {
                        flex-grow: 1;
                    }

                    .filter-bar #search {
                        background-color: #FFFFFF;
                    }

                    .filter-bar select {
                         background-color: #FFFFFF;
                    }

                    .filter-bar > button {
                        margin-top: 6px;
                    }

                    .filter-bar > * {
                        margin-right: 10px;
                    }

                    .filter-bar button + button {
                        margin-right: 0px;
                    }
                    .filter-list {
                        display: flex;
                        margin: 10px 0px;
                        min-height: 35px;
                    }

                    .filter-list .filter {
                        padding: 8px 16px;
                        border-radius: 50px;
                        background-color: #5bc794;
                        font-size: inherit;
                        font-family: inherit;
                        color: white;
                        margin-right: 10px;
                    }

                    .filter-list .filter i {
                        cursor: pointer;
                        margin-left: 5px;
                    }
                `}
            </style>
        </div>
    )
}

FilterBar.propTypes = {
    filterList: PropTypes.array.isRequired,
    filterOptions: PropTypes.array.isRequired,
    setFilterList: PropTypes.func.isRequired
}

export default FilterBar
