import React, { useEffect, useState, useRef } from 'react'
import PropTypes from 'prop-types'
import Icon from '../Icon'

const Button = ({
    label,
    primary,
    cta,
    text,
    leadingIcon,
    trailingIcon,
    onClick,
    disabled,
    submit,
    reset,
    name
}) => {
    const [coords, setCoords] = useState({})
    const [isRippling, setIsRippling] = useState(false)
    const [width, setWidth] = useState(0)
    const button = useRef(null)

    // Enables ripple effect for cta button
    useEffect(() => {
        if (isRippling) {
            setTimeout(() => setIsRippling(false), 700)
        }
    }, [isRippling])

    // tracks location for background gradient and ripple effect for cta
    useEffect(() => {
        const setRippleLocation = (e) => {
            const rect = e.target.getBoundingClientRect()
            const x = e.clientX - rect.left
            const y = e.clientY - rect.top
            setCoords({ x: x, y: y })
        }

        let current
        if (button && button.current) {
            current = button.current
            setWidth(current.getBoundingClientRect().width)
            current.addEventListener('mousemove', setRippleLocation)
        }

        return () => {
            if (current) {
                current.removeEventListener('mousemove', setRippleLocation)
            }
        }
    }, [button])

    const styleClass = primary ? 'primary' : cta ? 'cta' : text ? 'text' : ''
    return (
        <button
            className={`pt-button ${styleClass} ${disabled ? 'disabled' : ''}`}
            data-testid={name}
            disabled={disabled}
            id={name}
            onClick={(e) => {
                if (cta) {
                    setIsRippling(true)
                }
                onClick && onClick(e)
            }}
            ref={button}
            // eslint-disable-next-line react/button-has-type
            type={submit ? 'submit' : reset ? 'reset' : 'button'}
        >
            {isRippling ? <span className='ripple' /> : ''}
            <span className='content'>
                {leadingIcon ? (
                    <Icon
                        brand={leadingIcon.brand}
                        label='leading'
                        name={leadingIcon.name}
                    />
                ) : null}
                <span className='text'>{label}</span>
                {trailingIcon ? (
                    <Icon
                        brand={trailingIcon.brand}
                        label='trailing'
                        name={trailingIcon.name}
                    />
                ) : null}
            </span>
            <style jsx='true'>
                {`
                    .pt-button {
                        position: relative;
                        align-self: flex-start;
                        transition: background 400ms;
                        outline: 0;
                        height: 48px;
                        padding: 0px 16px;
                        border-radius: 12px;
                        border: 0px solid transparent;
                        cursor: pointer;
                        font-family: var(--secondary-font);
                        text-transform: uppercase;
                        font-size: 16px;
                        color: var(--black);
                        background-color: var(--grey-2);
                        transition: background 0.15s ease-in-out,
                            border 0.15s ease-in-out, padding 0.15s ease-in-out;
                    }

                    .pt-button .content {
                        display: flex;
                        justify-content: center;
                        align-items: center;
                        height: 18px;
                    }

                    .pt-button .content .text {
                        padding-bottom: 4px;
                    }

                    .pt-button:hover {
                        background-color: var(--grey-3);
                        transition: background 0.15s ease-in-out,
                            padding 0.15s ease-in-out;
                    }

                    .pt-button:not(.text):focus-visible {
                        border: 4px solid var(--pt-purple);
                        padding: 0px 12px;
                        transition: border 0.15s ease-in-out;
                    }

                    .pt-button .pt-icon.leading {
                        margin-right: 8px;
                    }

                    .pt-button .pt-icon.trailing {
                        margin-left: 8px;
                    }

                    /*Disabled Styling*/

                    .pt-button.disabled {
                        cursor: default;
                        color: var(--grey-1);
                        background-color: var(--grey-2);
                        box-shadow: none;
                        background-image: none;
                    }

                    /*Primary Button Styling*/

                    .pt-button.primary:not(.disabled) {
                        background: var(--pt-purple);
                        color: var(--white);
                    }

                    .pt-button.primary:not(.disabled):hover {
                        background: var(--pt-purple-opaque-56);
                    }

                    .pt-button.cta:focus-visible,
                    .pt-button.primary:focus-visible {
                        border: 4px solid var(--pink);
                        padding: 0px 12px;
                        transition: border 0.15s ease-in-out,
                            padding 0.15s ease-in-out;
                    }

                    /*CTA Button Styling*/

                    .pt-button.cta:not(.disabled) {
                        overflow: hidden;
                        background: var(--pt-purple);
                        color: var(--white);
                    }

                    ${name
                        ? `#${name}`
                        : ''}.pt-button.cta:not(.disabled) > .ripple {
                        width: 200px;
                        height: 200px;
                        position: absolute;
                        background: var(--pink);
                        display: block;
                        content: '';
                        border-radius: 9999px;
                        opacity: 1;
                        left: ${coords.x}px;
                        top: ${coords.y}px;
                        animation: 2s ease 1 forwards ripple-effect;
                        pointer-events: none;
                    }

                    @keyframes ripple-effect {
                        0% {
                            transform: scale(1);
                            opacity: 1;
                        }
                        50% {
                            transform: scale(10);
                            opacity: 0.375;
                        }
                        100% {
                            transform: scale(35);
                            opacity: 0;
                        }
                    }

                    .pt-button.cta:not(.disabled) > .content {
                        position: relative;
                        z-index: 1;
                        pointer-events: none;
                    }

                    .pt-button.cta:not(.disabled) > .content .pt-icon {
                        position: relative;
                        z-index: 1;
                        pointer-events: none;
                    }

                    ${name
                        ? `#${name}`
                        : ''}.pt-button.cta:not(.disabled):before {
                        content: '';
                        position: absolute;
                        width: 0px;
                        height: 0px;
                        left: ${coords.x}px;
                        top: ${coords.y}px;
                        background: radial-gradient(
                            circle closest-side,
                            var(--pink),
                            transparent
                        );
                        transform: translate(-50%, -50%);
                        transition: width 0.3s ease, height 0.3s ease;
                    }

                    ${name
                        ? `#${name}`
                        : ''}.pt-button.cta:not(.disabled):hover:before {
                        width: ${width}px;
                        height: ${width}px;
                        left: ${coords.x}px;
                        top: ${coords.y}px;
                        transition: width 0.3s ease, height 0.3s ease;
                    }

                    /*Text Button Styling*/

                    .pt-button.text:not(.disabled) {
                        height: auto;
                        padding: 0px;
                        background: transparent;
                        color: var(--pt-purple);
                        transition: border 0.5s ease;
                    }

                    .pt-button.text:after {
                        content: '';
                        display: block;
                        margin: auto;
                        padding-top: 2px;
                        height: 1px;
                        width: 0px;
                        border-bottom: 1px solid transparent;
                        transition: width 0.5s ease, border 0.5s ease;
                    }
                    .pt-button.text:not(.disabled):hover:after,
                    .pt-button.text:not(.disabled):focus-visible:after {
                        width: 100%;
                        border-bottom: 1px solid var(--pt-purple);
                    }

                    .pt-button.text.disabled {
                        cursor: default;
                        color: var(--grey-1);
                        box-shadow: none;
                        height: auto;
                        padding: 0px;
                        background: transparent;
                    }
                `}
            </style>
        </button>
    )
}

Button.propTypes = {
    style: PropTypes.string,
    disabled: PropTypes.bool,
    label: PropTypes.string.isRequired,
    leadingIcon: PropTypes.shape({
        name: PropTypes.string,
        style: PropTypes.string
    }),
    name: PropTypes.string,
    onClick: PropTypes.func.isRequired,
    trailingIcon: PropTypes.shape({
        name: PropTypes.string,
        brand: PropTypes.bool
    }),
    submit: PropTypes.bool,
    reset: PropTypes.bool
}

export default Button
