import React, { useState } from 'react'
import PropTypes from 'prop-types'

import TextEntry from '../TextEntry'

const getCopyMessage = (readyToCopy, message) => {
    message = message || ''

    let helperText = ''
    if (readyToCopy) {
        helperText = `Click to copy ${message}`
    }
    return helperText
}

const getTrailingIcon = (copied) => {
    let trailingIcon = ''
    if (copied) {
        trailingIcon = (
            <i
                className='fal fa-check-circle fa-lg'
                data-testid='text-copied-icon'
            />
        )
    }
    return trailingIcon
}

const ClickToCopyText = (props) => {
    const [copied, setCopied] = useState(false)

    const clip = (name, callback) => {
        document.getElementById(name).select()
        /* istanbul ignore else */
        if (!document.execCommand) {
        } else {
            document.execCommand('copy')
        }
        setCopied(true)
    }

    const isReady = props.value && props.value.length > 0

    const copyMessage = getCopyMessage(isReady && !copied, props.message)

    const trailingIcon = getTrailingIcon(copied)
    return (
        <TextEntry
            label={props.label}
            name={props.name}
            value={props.value ? props.value : ''}
            helperText={copyMessage}
            trailingIcon={trailingIcon}
            onFocus={(event) => {
                if (copied) {
                    event.target.blur()
                }
            }}
            onClick={() => clip(props.name)}
            inputProps={{
                'data-testid': 'click-to-copy'
            }}
            isValid={!isReady || copied}
        />
    )
}

ClickToCopyText.propTypes = {
    label: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    value: PropTypes.string,
    message: PropTypes.string
}

export default ClickToCopyText
