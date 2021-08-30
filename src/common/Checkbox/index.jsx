import React, { useRef, useEffect } from 'react'
import PropTypes from 'prop-types'
import Icon from '../Icon'

const Checkbox = ({
    id,
    indeterminate,
    disabled,
    inputProps,
    label,
    top,
    bottom,
    left
}) => {
    const checkRef = useRef()

    useEffect(() => {
        checkRef.current.indeterminate = indeterminate ? true : undefined
    }, [indeterminate])

    const location = top ? 'top' : bottom ? 'bottom' : left ? 'left' : 'right'

    return (
        <label
            className={`pt-checkbox ${disabled ? 'disabled' : ''} ${location}`}
            htmlFor={id}
        >
            <span className={`pt-checkbox-box ${disabled ? 'disabled' : ''}`}>
                <input
                    aria-label={label || id}
                    className='input-box'
                    disabled={disabled}
                    id={id}
                    ref={checkRef}
                    type='checkbox'
                    {...inputProps}
                />
                <span className='icons'>
                    <Icon label='check' name='check' />
                    <Icon label='minus' name='minus' />
                </span>
            </span>
            <p>{label}</p>
            <style jsx='true'>
                {`
                    .pt-checkbox {
                        cursor: pointer;
                        display: inline-flex;
                        align-items: center;
                        align-self: flex-start;
                    }

                    .pt-checkbox .pt-icon {
                        display: none;
                        color: var(--white);
                    }

                    .pt-checkbox-box {
                        height: 40px;
                        width: 40px;
                        border-radius: 12px;
                        display: flex;
                        justify-content: center;
                        align-items: center;
                        transition: background 0.2s ease;
                    }

                    .pt-checkbox-box:not(.disabled):hover {
                        background: var(--grey-1-opaque);
                        transition: background 0.2s ease;
                    }
                    /* Visually Hide Input */
                    .pt-checkbox input[type='checkbox'] {
                        display: none;
                    }

                    .pt-checkbox-box .icons {
                        border: 1px solid var(--black);
                        height: 20px;
                        width: 20px;
                        border-radius: 6px;
                        display: flex;
                        justify-content: center;
                        align-items: center;
                        transition: border 0.2s ease, background 0.2s ease;
                    }

                    .pt-checkbox-box .input-box:checked + .icons,
                    .pt-checkbox-box .input-box:indeterminate + .icons {
                        background: var(--pt-purple);
                        border: 1px solid var(--pt-purple);
                        transition: border 0.2s ease, background 0.2s ease;
                    }

                    .pt-checkbox-box .input-box:checked + .icons .check {
                        display: block;
                        transition: border 0.2s ease, background 0.2s ease;
                    }

                    .pt-checkbox-box .input-box:indeterminate + .icons .minus {
                        display: block;
                        transition: border 0.2s ease, background 0.2s ease;
                    }

                    .pt-checkbox.left {
                        flex-direction: row-reverse;
                    }
                    .pt-checkbox.top {
                        flex-direction: column-reverse;
                    }
                    .pt-checkbox.bottom {
                        flex-direction: column;
                    }
                    .pt-checkbox.left p {
                        padding-right: 4px;
                    }
                    .pt-checkbox.right p {
                        padding-left: 4px;
                    }
                    .pt-checkbox p {
                        -webkit-touch-callout: none; /* iOS Safari */
                        -webkit-user-select: none; /* Safari */
                        -khtml-user-select: none; /* Konqueror HTML */
                        -moz-user-select: none; /* Old versions of Firefox */
                        -ms-user-select: none; /* Internet Explorer/Edge */
                        user-select: none; /* Non-prefixed version, currently
                                        supported by Chrome, Edge, Opera and Firefox */
                    }

                    /* Disabled Styling */
                    .pt-checkbox.disabled {
                        cursor: auto;
                    }

                    .pt-checkbox.disabled p {
                        color: var(--grey-1);
                    }

                    .pt-checkbox-box.disabled .icons {
                        border: 1px solid var(--grey-1);
                    }

                    .pt-checkbox-box.disabled .input-box:checked + .icons,
                    .pt-checkbox-box.disabled
                        .input-box:indeterminate
                        + .icons {
                        background: var(--grey-1);
                        border: 1px solid var(--grey-1);
                        transition: border 0.2s ease, background 0.2s ease;
                    }
                `}
            </style>
        </label>
    )
}

Checkbox.propTypes = {
    id: PropTypes.string.isRequired,
    label: PropTypes.string,
    inputProps: PropTypes.object.isRequired,
    indeterminate: PropTypes.any,
    top: PropTypes.bool,
    bottom: PropTypes.bool,
    left: PropTypes.bool,
    disabled: PropTypes.bool
}

Checkbox.defaultProps = {
    indeterminate: undefined,
    label: undefined,
    top: false,
    bottom: false,
    left: false
}

export default Checkbox
