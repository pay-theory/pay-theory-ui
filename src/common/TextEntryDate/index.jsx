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
            outer={props.outer}
            value={props.value}
            isValid={(() => validDate(props.value))? true : false}
            onChange={(e) => {
                const formatted = formatDateString(e.target.value)
                props.onChange(formatted)
            }}
        />
    )
}

TextEntryDate.propTypes = {
    name: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    outer: PropTypes.string,
    value: PropTypes.string,
    onChange: PropTypes.any
}

export default TextEntryDate
