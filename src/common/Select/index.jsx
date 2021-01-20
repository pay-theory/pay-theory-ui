import React, { useRef, useEffect } from 'react'
import PropTypes from 'prop-types'

const Select = (props) => {
    const select = useRef()
    const { options, label, value, onChange, className, name } = props

    useEffect(() => {
        if (!value) {
            select.current.selectedIndex = null
        }
    }, [value])

    return (
        <div className={`pt-select ${className || ''} ${value ? '' : 'empty'}`}>
            <select
                className={value ? '' : 'empty'}
                data-testid={name}
                id={name}
                onChange={onChange}
                ref={select}
            >
                <option className='filler-option' value='' />
                {options.map((option) => {
                    return (
                        <option
                            disabled={!!option.disabled}
                            key={option.value}
                            value={option.value}
                        >
                            {option.label}
                        </option>
                    )
                })}
            </select>
            <label htmlFor={name}>{label}</label>
            <i className='fas fa-caret-down' />
            <i className='fas fa-caret-up' />
            <style jsx='true'>
                {`
                    .pt-select {
                        box-sizing: border-box;
                        position: relative;
                        font-size: 16px;
                        width: auto;
                        padding-top: 6px;
                        display: flex;
                        align-items: center;
                        line-height: 1.5;
                        max-height: 62px;
                    }

                    /* SELECT ELEMENT */
                    .pt-select select:hover,
                    .pt-select select:not(.empty) {
                        border: 1px solid black;
                    }

                    .pt-select select:focus,
                    .pt-select select:not(.empty) {
                        border-top-color: transparent !important;
                        border: 1px solid black;
                        box-shadow: inset 0 -1px black, inset 1px 0 black,
                            inset -1px 0 black;
                    }

                    .pt-select select {
                        width: 100%;
                        height: 100%;
                        line-height: inherit;
                        border: none;
                        padding: 15px 30px 15px 13px;
                        background-color: transparent;
                        border: 1px solid #626262;
                        border-radius: 4px;
                        outline: none;
                        font-size: 16px;
                        color: black;
                        font-family: var(
                            --pay-theory-font,
                            'Roboto',
                            'Segoe UI',
                            BlinkMacSystemFont,
                            system-ui,
                            -apple-system
                        );
                        -webkit-appearance: none;
                        -moz-appearance: none;
                        appearance: none;
                        -ms-appearance: none;
                        transition: border-color 0.2s, border 0.2s;
                    }

                    .pt-select.empty select {
                        color: #7a7b7a;
                    }

                    .pt-select option {
                        color: black !important;
                    }

                    .filler-option {
                        display: none;
                    }

                    /* Label */
                    .pt-select label,
                    .pt-select.empty:focus-within > select + label {
                        position: absolute;
                        top: 0;
                        left: 0;
                        display: flex;
                        align-items: center;
                        pointer-events: none;
                        width: 100%;
                        padding: 0px;
                        max-height: 100%;
                        font-size: 75%;
                        font-family: var(
                            --pay-theory-font,
                            'Roboto',
                            'Segoe UI',
                            BlinkMacSystemFont,
                            system-ui,
                            -apple-system
                        );
                        line-height: 15px;
                        transition: color 0.2s, font-size 0.2s, line-height 0.2s;
                    }

                    /* Temporary fix for 1px border diff */
                    .pt-select:not(.empty) label {
                        margin-top: -1px;
                    }

                    .pt-select label::before,
                    .pt-select.empty:focus-within > select + label::before {
                        content: '';
                        width: 16px;
                        height: 15px;
                        margin-right: 4px;
                        border-left: solid 1px transparent;
                        border-radius: 4px 0;
                        border-top: 1px solid black;
                        box-shadow: inset 0 1px black;
                    }

                    .pt-select label::after,
                    .pt-select.empty:focus-within > select + label::after {
                        content: '';
                        width: auto;
                        height: 15px;
                        margin-left: 4px;
                        border-right: solid 1px transparent;
                        border-radius: 0 4px;
                        border-top: 1px solid black;
                        box-shadow: inset 0 1px black;
                    }

                    /* Corners */
                    .pt-select > select + label::before,
                    .pt-select > select + label::after {
                        content: '';
                        display: block;
                        box-sizing: border-box;
                        margin-top: 6px;
                        border-top: solid 1px black;
                        box-shadow: inset 0 1px black;
                        min-width: 10px;
                        height: 8px;
                        pointer-events: none;
                        transition: border-color 0.2s, border 0.2s;
                    }

                    .pt-select > select + label::before {
                        margin-right: 4px;
                        border-left: solid 1px transparent;
                        border-radius: 4px 0;
                    }

                    .pt-select > select + label::after {
                        flex-grow: 1;
                        margin-left: 4px;
                        border-right: solid 1px transparent;
                        border-radius: 0 4px;
                    }

                    /*Not Selected*/
                    .pt-select.empty select + label {
                        font-size: inherit;
                        line-height: 62px;
                        margin: 0;
                        padding-top: 6px;
                    }
                    .pt-select.empty select + label::before {
                        border-color: transparent;
                        box-shadow: inset 0 1px transparent;
                        height: 56px;
                    }
                    .pt-select.empty select + label::after {
                        border-color: transparent;
                        box-shadow: inset 0 1px transparent;
                        height: 56px;
                    }

                    /*Arrow Icons*/
                    .pt-select i {
                        position: absolute;
                        right: 10px;
                        pointer-events: none;
                    }

                    .pt-select:focus-within .fa-caret-down {
                        display: none;
                    }

                    .pt-select .fa-caret-up {
                        display: none;
                    }

                    .pt-select:focus-within .fa-caret-up {
                        display: flex;
                    }
                `}
            </style>
        </div>
    )
}

Select.propTypes = {
    className: PropTypes.string,
    label: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
    options: PropTypes.array.isRequired,
    value: PropTypes.string.isRequired
}

export default Select
