import React from 'react'
import PropTypes from 'prop-types'

import TextEntry from '../TextEntry'

import { formatDateString, validDate } from '../dateUtils'

const TextEntryDate = (props) => {
    return (
        <TextEntry
            helperText='MM / DD / YYYY'
            name={props.name}
            label={props.label}
            isValid={() => validDate(props.value)}
            onChange={(e) => {
                const formatted = formatDateString(props.value)
                props.onChange(formatted)
            }}
        />
    )
}

TextEntryDate.propTypes = {
    name: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    value: PropTypes.string,
    onChange: PropTypes.any
}

export default TextEntryDate
