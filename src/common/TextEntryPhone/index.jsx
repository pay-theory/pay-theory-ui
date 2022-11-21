import React from 'react'
import PropTypes from 'prop-types'

import TextEntry from '../TextEntry'

import { validPhone, formatPhone } from '../accountUtils'

const TextEntryPhone = (props) => {
    return (
        <TextEntry
            helperText='1-234-456-9101'
            name={props.name}
            label={props.label}
            isValid={(() => validPhone(props.value.replace(/\D/, '')))()}
            onChange={(e) => {
                const formatted = formatPhone(e.target.value)
                props.onChange(formatted)
            }}
            className={props.className}
        />
    )
}

TextEntryPhone.propTypes = {
    name: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    value: PropTypes.string,
    onChange: PropTypes.any,
    className: PropTypes.string
}

export default TextEntryPhone
