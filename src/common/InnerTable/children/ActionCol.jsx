import React from 'react'
import PropTypes from 'prop-types'
import IconButton from '../../IconButton'

const ActionCol = ({
    className,
    row,
    col,
    label,
    icon,
    action,
    rowObject,
    disabled
}) => {
    return (
        <td
            className={`cell action ${className}`}
            data-testid='unlinked-column'
            key={`${className}-${row}-${col}`}
        >
            <span className='content'>
                <IconButton
                    disabled={disabled}
                    icon={icon}
                    label={disabled ? '' : label}
                    left
                    onClick={() => {
                        action(rowObject)
                    }}
                />
            </span>
        </td>
    )
}

ActionCol.propTypes = {
    className: PropTypes.string.isRequired,
    col: PropTypes.number.isRequired,
    label: PropTypes.string.isRequired,
    icon: PropTypes.string.isRequired,
    action: PropTypes.func.isRequired,
    disabled: PropTypes.bool,
    row: PropTypes.number.isRequired,
    rowObject: PropTypes.object.isRequired
}

export default ActionCol
