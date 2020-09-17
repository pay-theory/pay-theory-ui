import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'

import { TextEntry, TextEntryDate, Select, Button, StockTags } from '../../common'

import { formatDate, validDate } from '../../common/dateUtils'
import { validCurrency } from '../../common/accountUtils'

const FilterBar = ({ filterOptions, filterList, setFilterList }) => {
    const [filterCategory, setFilterCategory] = useState('')
    const [filterText, setFilterText] = useState('')
    const [updating, setUpdating] = useState(false)
    const [statusMessage, setStatusMessage] = useState(<div />);

    const resetFilters = () => {
        setFilterCategory('')
        setFilterText('')
    }

    const addFilter = () => {
        const newList = filterList;
        const newFilter = {};
        newFilter.category = filterCategory;
        if (filterCategory.includes("updated")) {
            if (validDate(filterText))
                newFilter.text = new Date(filterText).toISOString();
        }
        else if (filterCategory.includes("amount")) {
            if (validCurrency(filterText)) newFilter.text = validCurrency(filterText);
        }
        else {
            newFilter.text = filterText;
        }
        if (newFilter.text) {
            newList.push(newFilter);
            setFilterList(newList);
        }
        else {
            setStatusMessage(
                StockTags.warn("Not a valid filter", () => {
                    setStatusMessage(<div />);
                })
            );
        }
        resetFilters();
    };

    const deleteFilter = async(index) => {
        setUpdating(true)
        const newList = filterList
        newList.splice(index, 1)
        await setFilterList(newList)
        setUpdating(false)
    }

    const findLabel = (value) => {
        let result = ""
        filterOptions.forEach((filter) => {
            if (filter.value === value) {
                result = filter.label
            }
        })
        return result
    }

    const handleKeyUp = (event) => {
        switch (event.key) {
        case "Enter":
            if (filterCategory && filterText) {
                addFilter();
            }
            break;
        default:
            break;
        }
    };

    useEffect(() => {
        window.addEventListener("keyup", handleKeyUp);
        return () => window.removeEventListener("keyup", handleKeyUp);
    });

    const clearAll = () => {
        setFilterList([])
        resetFilters()
    }

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
                {filterCategory.includes("updated") ? (
                  <TextEntryDate
                    name="fb-search"
                    label="Search"
                    outer="search-bar"
                    value={filterText}
                    onChange={(e) => setFilterText(e)}
                  />
                ) : (
                  <TextEntry
                  helperText={<div className="fb-helper" />}
                    name="fb-search"
                    label="Search"
                    outer="search-bar"
                    value={filterText}
                    onChange={(e) => setFilterText(e.target.value)}
                  />
                )}
                <Button
                    disabled={!filterCategory || !filterText}
                    label='Add Filter'
                    leadingIcon='plus-circle'
                    onClick={addFilter}
                    name='fb-add'
                    color="old-primary"
                />
                <Button
                    color='old-secondary'
                    label='Clear All'
                    onClick={clearAll}
                    name='fb-clear-all'
                />
            </div>
            <div className='filter-list' data-testid='filter-list'>
                <h4>Filters:</h4>
                {filterList.map((filter, index) => {
                    const label = findLabel(filter.category)
                    return (
                        <div
                            className='filter'
                            key={`${index}-${filter.category}`}
                            data-testid='filter-tag'
                        >
                            {`${label}: ${
                                label.includes("Updated")
                                ? formatDate(filter.text)
                                : label.includes("Amount")
                                ? `$${(filter.text / 100).toFixed(2)}`
                                : filter.text
                                }`}
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
            {statusMessage}
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

                    .filter-bar #fb-search {
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
                        margin: 0px 0px 15px;
                        min-height: 35px;
                        align-items: center;
                    }

                    .filter-list h4 {
                        padding: 0px 10px 0px 2px;
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
                    .fb-helper {
                        height: 15px;
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
