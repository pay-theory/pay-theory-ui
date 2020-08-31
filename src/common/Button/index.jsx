import React from 'react'
import PropTypes from 'prop-types'

const Button = ({
    label,
    color,
    leadingIcon,
    trailingIcon,
    onClick,
    disabled,
    type,
    name,
    small
}) => {
    return (
        <button
            className={`pt-button ${color || 'primary'}
            ${disabled ? 'disabled' : ''}
            ${small? 'small' : ''}`}
            id={name}
            data-testid={name}
            disabled={disabled}
            onClick={onClick}
            // eslint-disable-next-line react/button-has-type
            type={
                type === 'submit'
                    ? 'submit'
                    : type === 'reset'
                    ? 'reset'
                    : 'button'
            }
        >
            {leadingIcon ? (
                <i className={`fal fa-${leadingIcon} leading`} data-testid='button-leading'/>
            ) : null}
            {label}
            {trailingIcon ? (
                <i className={`fal fa-${trailingIcon} trailing`} data-testid='button-trailing' />
            ) : null}
            <style jsx='true'>
                {`
                    .pt-button {
                        height: 56px;
                        padding: 0px 16px;
                        border-radius: 4px;
                        outline: none;
                        cursor: pointer;
                        font-family: inherit;
                        font-size: 16px;
                        box-shadow: 1px 1px 1px #888888;
                        position: relative;
                        overflow: hidden;
                    }

                    /*Ripple*/
                    .pt-button::after {
                        display: none;
                        content: '';
                        position: absolute;
                        border-radius: 50%;
                        background-color: rgba(0, 0, 0, 0.3);

                        width: 100px;
                        height: 100px;
                        margin-top: -50px;
                        margin-left: -50px;

                        /* Center the ripple */
                        top: 50%;
                        left: 50%;

                        animation: ripple 1s;
                        opacity: 0;
                    }

                    @keyframes ripple {
                        from {
                            opacity: 1;
                            transform: scale(0);
                        }
                        to {
                            opacity: 0;
                            transform: scale(10);
                        }
                    }

                    .pt-button:focus:not(:active)::after {
                        display: block;
                    }

                    .pt-button.primary {
                        background-color: #7c2cdd;
                        border: 1px solid transparent;
                        color: #ffffff;
                    }

                    .pt-button.light {
                        background-color: #ffffff;
                        border: 1px solid #6a606d;
                        color: black;
                    }

                    .pt-button i.leading {
                        margin-right: 4px;
                    }

                    .pt-button i.trailing {
                        margin-left: 4px;
                    }

                    .pt-button.disabled {
                        cursor: default !important;
                        color: white !important;
                        background-color: #8e868f !important;
                        box-shadow: none !important;
                    }

                    .pt-button.small {
                        height: 35px;
                        font-size: 11pt;
                    }
                `}
            </style>
        </button>
    )
}

Button.propTypes = {
    color: PropTypes.string,
    disabled: PropTypes.bool,
    label: PropTypes.string.isRequired,
    leadingIcon: PropTypes.string,
    name: PropTypes.string.isRequired,
    onClick: PropTypes.func.isRequired,
    small: PropTypes.bool,
    trailingIcon: PropTypes.string,
    type: PropTypes.string
}

export default Button
