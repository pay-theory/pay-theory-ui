import React, { useEffect, useState, useRef, useCallback } from 'react'
import PropTypes from 'prop-types'
import Icon from '../Icon'
import Dropdown from './children/Dropdown'

const TextEntry = ({
    label,
    onChange,
    value,
    disabled,
    leadingIcon,
    options
}) => {
    const wrapper = useRef(null)
    const select = useRef(null)
    const dropdown = useRef(null)
    const [focused, setFocused] = useState(false)
    const [selectedLabel, setSelectedLabel] = useState('')

    const focus = useCallback(() => {
        setFocused(true)
        select.current.style = 'z-index: 1300;'
        dropdown.current.style = 'z-index: 1299;'
    }, [select, dropdown])

    const blur = useCallback(() => {
        setFocused(false)
        select.current.style = 'z-index: 0;'
        dropdown.current.style = 'z-index: 0;'
    }, [select, dropdown])

    const click = useCallback(() => {
        if (!disabled) {
            if (focused) {
                blur()
            } else {
                focus()
            }
        }
    }, [focus, focused, blur, disabled])

    useEffect(() => {
        let inputRef

        if (select.current && dropdown.current && wrapper.current) {
            inputRef = wrapper.current
            inputRef.addEventListener('click', click)
            inputRef.addEventListener('blur', blur)
        }

        return () => {
            if (inputRef) {
                inputRef.removeEventListener('click', click)
                inputRef.removeEventListener('blur', blur)
            }
        }
    }, [select, blur, dropdown, wrapper, click])

    useEffect(() => {
        const setLabel = (items) => {
            items.forEach((item) => {
                if (item.value === value) {
                    setSelectedLabel(item.label)
                }
            })
        }
        setLabel(options)
    }, [value, options])

    const selectedValueClassList = `${value ? '' : 'empty'} selected-value`
    const divClassList = `pt-select ${focused ? 'focused' : ''} ${
        disabled ? 'disabled' : ''
    } ${leadingIcon ? 'leading' : ''}`

    return (
        <div className='pt-select-wrapper' ref={wrapper} tabIndex='0'>
            <div className={divClassList} ref={select}>
                {leadingIcon ? (
                    <Icon brand={leadingIcon.brand} name={leadingIcon.name} />
                ) : (
                    ''
                )}
                <p className={selectedValueClassList}>{selectedLabel}</p>
                <span className='select-label'>{label}</span>
                <Icon label='dropdown-chevron' name='chevron-right' />
                <style jsx='true'>
                    {`
                        .pt-select-wrapper {
                            outline: none;
                            align-self: flex-start;
                            position: relative;
                        }

                        .pt-select {
                            position: relative;
                            align-self: flex-start;
                            font-size: 16px;
                            border: 1px solid var(--grey);
                            border-radius: 14px;
                            height: 56px;
                            display: flex;
                            align-items: center;
                            transition: border 0.3s ease;
                            background: var(--white);
                            min-width: 200px;
                            cursor: pointer;
                            outline: none;
                        }

                        .pt-select:hover {
                            border: 1px solid var(--black);
                        }

                        .pt-select.focused {
                            border: 1px solid var(--pt-purple);
                            transition: border 0.3s ease;
                        }

                        .pt-select .selected-value {
                            border: none;
                            font-size: 16px;
                            font-family: Europa, Segoe UI, Trebuchet MS, Arial,
                                Helvetica, sans-serif;
                            flex: 1;
                            height: 56px;
                            background: transparent;
                            padding: 8px 0px 0px 16px;
                            border-radius: 16px;
                            border: 1px solid transparent;
                            height: 54px;
                            display: flex;
                            align-items: center;
                        }

                        .pt-select .select-label {
                            position: absolute;
                            left: 16px;
                            font-size: 16px;
                            font-family: Europa, Segoe UI, Trebuchet MS, Arial,
                                Helvetica, sans-serif;
                            color: var(--grey);
                            transition-property: font, top;
                            transition-duration: 0.5s;
                            transition-timing-function: cubic-bezier(
                                0.165,
                                0.84,
                                0.44,
                                1
                            );
                        }

                        .pt-select .selected-value:not(.empty) + .select-label {
                            top: 6px;
                            font-size: 11px;
                        }

                        /* Disabled Styling */
                        .pt-select.disabled {
                            background: var(--grey-2);
                            border: 1px solid var(--grey-1);
                            cursor: default;
                        }

                        .pt-select.disabled .select-label,
                        .pt-select.disabled .pt-icon {
                            color: var(--grey-1);
                        }

                        /* Icon Styling */
                        .pt-select .pt-icon {
                            height: 48px;
                            width: 48px;
                            display: flex;
                            justify-content: center;
                            align-items: center;
                        }

                        .pt-select.leading .select-label {
                            left: 48px;
                        }

                        .pt-select.leading .selected-value {
                            padding-left: 0px;
                        }

                        .pt-select .dropdown-chevron {
                            transition: transform 0.3s ease;
                        }

                        .pt-select.focused .dropdown-chevron {
                            transform: rotate(90deg);
                            color: var(--pt-purple);
                            transition: all 0.3s ease;
                        }

                        /* Dropdown Styling */
                        .pt-select-wrapper .pt-select + .select-dropdown {
                            flex-direction: column;
                            position: absolute;
                            top: 0px;
                            border: 1px solid var(--pt-purple);
                            border-radius: 16px;
                            width: 100%;
                            height: 0px;
                            overflow: hidden;
                            opacity: 0;
                            background: var(--white);
                        }

                        .pt-select-wrapper
                            .pt-select.focused
                            + .select-dropdown {
                            opacity: 1;
                            height: auto;
                            padding: 60px 4px 4px;
                            transition: all 0.3s ease;
                        }

                        .pt-select-wrapper .select-dropdown .select-item {
                            height: 40px;
                            border-radius: 12px;
                            display: flex;
                            align-items: center;
                            padding: 0px 16px;
                            cursor: pointer;
                        }

                        .pt-select-wrapper
                            .select-dropdown
                            .select-item:not(.disabled):hover {
                            background: var(--grey-2);
                        }

                        .pt-select-wrapper
                            .select-dropdown
                            .select-item.active {
                            background: var(--grey-2);
                            font-weight: var(--black-weight);
                        }

                        .pt-select-wrapper
                            .select-dropdown
                            .select-item.disabled {
                            cursor-events: none;
                            cursor: default;
                            color: var(--grey-1);
                        }
                    `}
                </style>
            </div>
            <Dropdown
                items={options}
                onClick={onChange}
                reference={dropdown}
                value={value}
            />
        </div>
    )
}

TextEntry.propTypes = {
    disabled: PropTypes.bool,
    label: PropTypes.string.isRequired,
    leadingIcon: PropTypes.shape({
        name: PropTypes.string,
        brand: PropTypes.bool
    }),
    onChange: PropTypes.func.isRequired,
    value: PropTypes.string.isRequired,
    inputProps: PropTypes.object,
    options: PropTypes.array
}

TextEntry.defaultProps = {
    onClick: () => {}
}

export default TextEntry
