import React from 'react'
import PropTypes from 'prop-types'

import Header from './Header'

const HeaderRow = (props) => {
    const columns = props.columns.map((column, col) => {
        return (
            <Header
                className={column.className}
                itemKey={col}
                key={`header-${col}`}
                label={column.label}
            />
        )
    })
    if (props.hasActions) {
        columns.push(
            <Header
                className='actions'
                itemKey='actions'
                key='header-actions'
                label='actions'
            />
        )
    }
    if (props.select) {
        columns.unshift(
            <span className='table-select' />
        )
    }
    return <div className='inner-table-row inner-table-row-head'>{columns}</div>
}

HeaderRow.propTypes = {
    columns: PropTypes.array.isRequired,
    hasActions: PropTypes.bool
}

export default HeaderRow
