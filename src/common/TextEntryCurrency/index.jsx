import React from 'react'
import PropTypes from 'prop-types'
// < Input
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
//                     className='leading'
//                     type='number'
//                     min='0.01'
//                     step='0.01'
//                 />
const TextEntryCurrency = (props) => {
    return (
        <div className='text-box'>
            <TextField
                id={`text-entry-${props.name}`}
                data-testid={`text-entry-${props.name}`}
                label={props.label}
                className='text-entry'
                leadingIcon={<i className='fal fa-dollar-sign fa-lg' />}
                outlined
            >

            </TextField>
            <style jsx='true' global='true'>{`
                .text-box {
                    display: flex;
                    justify-content: stretch;
                }
                .text-entry {
                    margin: 16px 24px;
                    flex-grow: 1;
                }
                .leading {
                    padding: 18px 16px 12px 48px !important;
                }
            `}</style>
        </div>
    )
}

TextEntryCurrency.propTypes = {
    name: PropTypes.string.isRequired,
    label: PropTypes.string,
    value: PropTypes.any,
    onChange: PropTypes.func,
    onBlur: PropTypes.func,
    required: PropTypes.bool
}

export default TextEntryCurrency
