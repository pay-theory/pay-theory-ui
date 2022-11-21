import React from 'react'
import PropTypes from 'prop-types'

import TextEntry from '../TextEntry'

import { formatDollarAmountString } from '../generalUtils'

const TextEntryDollar = ({
    label,
    onChange,
    value,
    disabled,
    inputProps,
    helperText,
    trailingIcon,
    valid,
    className
}) => {

    return (
        <TextEntry
            disabled={disabled}
            helperText={helperText}
            inputProps={inputProps}
            label={label}
            leadingIcon={{name: "dollar-sign"}}
            onChange={(e) => {
                const formatted = formatDollarAmountString(e.target.value)
                onChange(formatted)
            }}
            placeholder="0.00"
            trailingIcon={trailingIcon}
            valid={valid}
            value={value}
            className={className}
        />
    )
}

TextEntryDollar.propTypes = {
    disabled: PropTypes.bool,
    label: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
    trailingIcon: PropTypes.shape({
        name: PropTypes.string,
        brand: PropTypes.bool
    }),
    value: PropTypes.string.isRequired,
    inputProps: PropTypes.object,
    helperText: PropTypes.any,
    valid: PropTypes.func,
    className: PropTypes.string
}

TextEntryDollar.defaultProps = {
    valid: () => {
        return true
    }
}

export default TextEntryDollar
