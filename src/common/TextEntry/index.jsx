import React from 'react'
import PropTypes from 'prop-types'

import TextField, { HelperText, Input } from '@material/react-text-field'

const TextEntry = (props) => {
    return (
        <div className='text-box'>
            <TextField
                id={`text-entry-${props.name}`}
                data-testid={`text-entry-${props.name}`}
                label={props.label}
                className={props.className ? props.className : 'text-entry'}
                leadingIcon={props.leadingIcon}
                helperText={
                    <HelperText {...props.helperProps}>
                        {props.helperText}
                    </HelperText>
                }
                trailingIcon={props.trailingIcon}
                outlined
            >
                <Input
                    id={props.name}
                    data-testid={props.name}
                    isValid={props.isValid}
                    name={props.name}
                    value={props.value === null ? '' : props.value}
                    type={props.type || 'text'}
                    required={props.required || false}
                    disabled={props.disabled || false}
                    autoComplete={props.autoComplete || 'off'}
                    onChange={props.onChange}
                    onClick={props.onClick}
                    onBlur={props.onBlur}
                    onFocus={props.onFocus}
                    pattern={props.pattern}
                    {...props.inputProps}
                />
            </TextField>
            <style jsx='true' global='true'>{`
                .text-box {
                    display: flex;
                    justify-content: stretch;
                    flex-direction: column;
                }
                .text-entry {
                    margin: 16px 0px 4px;
                    flex-grow: 1;
                }
                .helper-entry {
                    margin: 4px 24px 16px;
                    flex-grow: 1;
                }
            `}</style>
        </div>
    )
}

TextEntry.propTypes = {
    name: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    value: PropTypes.string,
    onChange: PropTypes.any,
    leadingIcon: PropTypes.any,
    trailingIcon: PropTypes.any,
    type: PropTypes.string,
    pattern: PropTypes.string,
    required: PropTypes.bool,
    disabled: PropTypes.bool,
    autoComplete: PropTypes.string,
    helperText: PropTypes.string,
    isValid: PropTypes.bool,
    onClick: PropTypes.func,
    onBlur: PropTypes.func,
    onFocus: PropTypes.func
}

export default TextEntry
