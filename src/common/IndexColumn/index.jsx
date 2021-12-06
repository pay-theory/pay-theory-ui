import React, { useState } from 'react'
import PropTypes from 'prop-types'

const IndexColumn = ({ header, hook }) => {
    const { verifiedSelect, items, getValue, selected } = hook
    const formatted = items.map((item, index) => {
        const value = getValue(item)
        const key = `${value}-row-${index}`
        const formattedClass = `pt-index-column-row ${
            getValue(selected).text === value.text ? 'selected' : ''
        } ${value.secondary ? 'secondary' : ''}`
        return (
            <p
                className={formattedClass}
                key={key}
                onClick={() => {
                    verifiedSelect(item)
                }}
            >
                {value.text}
            </p>
        )
    })
    return (
        <div className='pt-index-column'>
            <h4 className='strong pt-index-column-header'>{header}</h4>
            {formatted.length > 0 ? (
                formatted
            ) : (
                <p className='no-data'>No Data</p>
            )}
            <style global='true' jsx='true'>
                {`
                    .pt-index-column {
                        display: flex;
                        flex-direction: column;
                        width: 100%;
                        max-height: 100%;
                        overflow-y: scroll;
                        -ms-overflow-style: none;
                        scrollbar-width: none;
                    }

                    .pt-index-column::-webkit-scrollbar {
                        display: none;
                    }

                    .pt-index-column-header {
                        padding: 8px;
                        border-bottom: 1px solid var(--grey-1);
                        position: -webkit-sticky;
                        position: sticky;
                        top: 0;
                        background: var(--white);
                    }

                    .pt-index-column-row {
                        padding: 8px;
                        border-radius: 8px;
                        cursor: default;
                    }

                    .no-data {
                        padding: 8px;
                        width: 100%;
                        display: flex;
                        justify-content: center;
                    }

                    .pt-index-column-row:hover {
                        background: var(--grey-3);
                    }

                    .pt-index-column-row.secondary {
                        color: var(--grey-1);
                    }

                    .pt-index-column-row.selected {
                        background: var(--grey-3);
                        padding-left: 16px;
                        font-weight: var(--black);
                        color: var(--black);
                    }

                    .pt-index-column-row.selected.secondary {
                        color: var(--grey);
                    }
                `}
            </style>
        </div>
    )
}

IndexColumn.propTypes = {
    hook: PropTypes.object.isRequired,
    header: PropTypes.string.isRequired
}

export default IndexColumn

// Hook Used to manage state for the IndexColumn component
// while allowing parent to still have access to the state inside
//
// items: array of objects wanted to list in the index column
// getValue: function that helps the IndexColumn get the unique value from each object in the items array
export const useIndexColumn = (items, getValue, confirmSelect) => {
    const [selected, setSelected] = useState({})

    const select = (set) => {
        if (confirmSelect) {
            return confirmSelect(set)
        } else {
            return set
        }
    }

    return {
        selected,
        clearSelected: () => {
            setSelected({})
        },
        setSelected,
        verifiedSelect: setSelected,
        getValue,
        items
    }
}
