import React from 'react'
import PropTypes from 'prop-types'

// <Input
//                     id={props.name}
//                     data-testid={props.name}
//                     name={props.name}
//                     value={
//                         isNaN(parseFloat(props.value))
//                             ? props.value
//                             : parseFloat(props.value)
//                     }
//                     required={props.required || false}
//                     autoComplete={props.autoComplete || 'off'}
//                     onChange={props.onChange}
//                     onBlur={props.onBlur}
//                     className='trailing'
//                     type='number'
//                     min='0.01'
//                     step='0.01'
//                 />
const TextEntryPercentage = (props) => {
    return (
        <div className='percentage-text-box'>
            <TextField
                id={`percentage-text-entry-${props.name}`}
                data-testid={`percentage-text-entry-${props.name}`}
                label={props.label}
                className='percentage-text-entry'
                trailingIcon={<i className='fal fa-percentage fa-lg' />}
                outlined
            >

            </TextField>
            <style jsx='true' global='true'>{`
                .percentage-text-box {
                    display: flex;
                    justify-content: stretch;
                }
                .percentage-text-entry {
                    flex-grow: 1;
                }
                .percentage-text-entry input {
                    text-align: right;
                }
                .trailing {
                    padding: 18px 48px 12px 16px !important;
                }
            `}</style>
        </div>
    )
}

TextEntryPercentage.propTypes = {
    name: PropTypes.string.isRequired,
    label: PropTypes.string,
    value: PropTypes.any,
    onChange: PropTypes.func,
    onBlur: PropTypes.func,
    required: PropTypes.bool
}

export default TextEntryPercentage
