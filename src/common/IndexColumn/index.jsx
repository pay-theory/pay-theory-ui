import React, { useState } from 'react'
import PropTypes from 'prop-types'

const IndexColumn = ({ header, hook }) => {
    const { setSelected, items, getValue, selected } = hook
    const formatted = items.map((item, index) => {
        const value = getValue(item)
        const key = `${value}-row-${index}`
        return (
            <p
                className={`pt-index-column-row ${
                    getValue(selected) === value ? 'selected' : ''
                }`}
                key={key}
                onClick={() => {
                    setSelected(item)
                }}
            >
                {value}
            </p>
        )
    })
    return (
        <div className='pt-index-column'>
            <p className='pt-index-column-header'>{header}</p>
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
                        flex-grow: 1;
                        overflow: auto;
                    }

                    .pt-index-column-header {
                        padding: 8px;
                        background: var(--grey-3);
                        border-radius: 8px;
                    }

                    .pt-index-column-row {
                        padding: 8px;
                        border-radius: 8px;
                        color: var(--pt-purple);
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

                    .pt-index-column-row.selected {
                        background: var(--purple-light);
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
export const useIndexColumn = (items, getValue) => {
    const [selected, setSelected] = useState({})

    return {
        selected,
        clearSelected: () => {
            setSelected({})
        },
        setSelected,
        getValue,
        items
    }
}
