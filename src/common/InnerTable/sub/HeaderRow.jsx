import React from 'react'
import PropTypes from 'prop-types'

import Header from './Header'

const HeaderRow = (props) => {
    const columns = props.columns.map((column, col) => {
        return (
            <Header
                key={`header-${col}`}
                className={column.className}
                itemKey={col}
                label={column.label}
            />
        )
    })
    if (props.hasActions) {
        columns.push(
            <Header
                key='header-actions'
                className='actions'
                itemKey='actions'
                label='actions'
            />
        )
    }
    return <div className='inner-table-row inner-table-row-head'>{columns}</div>
}

HeaderRow.propTypes = {
    columns: PropTypes.array.isRequired,
    hasActions: PropTypes.bool
}

export default HeaderRow
