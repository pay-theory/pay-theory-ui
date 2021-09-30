import React from 'react'
import PropTypes from 'prop-types'

import TextEntry from '../TextEntry'

import { formatDateString, validDate } from '../dateUtils'

const TextEntryDate = ({
    label,
    placeholder,
    onChange,
    value,
    disabled,
    inputProps,
    helperText,
    leadingIcon,
    trailingIcon
}) => {
    return (
        <TextEntry
            disabled={disabled}
            helperText={helperText}
            inputProps={inputProps}
            label={label}
            leadingIcon={leadingIcon}
            onChange={(e) => {
                const formatted = formatDateString(e.target.value, value)
                onChange(formatted)
            }}
            placeholder={placeholder}
            trailingIcon={trailingIcon}
            valid={validDate}
            value={value}
        />
    )
}

TextEntryDate.propTypes = {
    disabled: PropTypes.bool,
    label: PropTypes.string.isRequired,
    leadingIcon: PropTypes.shape({
        name: PropTypes.string,
        brand: PropTypes.bool
    }),
    placeholder: PropTypes.string,
    onChange: PropTypes.func.isRequired,
    trailingIcon: PropTypes.shape({
        name: PropTypes.string,
        brand: PropTypes.bool
    }),
    value: PropTypes.string.isRequired,
    inputProps: PropTypes.object,
    helperText: PropTypes.any
}

export default TextEntryDate
