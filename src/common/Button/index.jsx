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
            className={`pt-button ${color || 'primary'} ${disabled ? 'disabled' : ''} ${small ? 'small' : ''}`}
            data-testid={name}
            disabled={disabled}
            id={name}
            onClick={onClick}
            // eslint-disable-next-line react/button-has-type
            type={ type === 'submit' || type === 'reset' ? type : 'button' }
        >
            {leadingIcon ? (
                <i
                    className={`fal fa-${leadingIcon} leading`}
                    data-testid='button-leading'
                />
            ) : null}
            {label}
            {trailingIcon ? (
                <i
                    className={`fal fa-${trailingIcon} trailing`}
                    data-testid='button-trailing'
                />
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

                    .pt-button.primary-gradient {
                        background-image: linear-gradient(
                            to right,
                            #7c2cdd,
                            #db367d
                        );
                        border: none;
                        color: #ffffff;
                    }

                    .pt-button.primary-2 {
                        background-color: #5bc794;
                        border: 1px solid transparent;
                        color: #ffffff;
                    }

                    .pt-button.important {
                        background-color: #8e868f;
                        border: 1px solid transparent;
                        color: #ffffff;
                    }

                    .pt-button.delete {
                        background-color: #ea4141;
                        border: 1px solid transparent;
                        color: #ffffff;
                    }

                    .pt-button.warning {
                        background-color: #f5bd42;
                        border: 1px solid transparent;
                        color: #1f0a28;
                    }

                    .pt-button.default {
                        background-color: #f2f2f2;
                        border: 1px solid transparent;
                        color: #6a606d;
                    }

                    .pt-button.old-primary {
                        background-color: #0199ed;
                        border: none;
                        color: white;
                    }

                    .pt-button.old-secondary {
                        background-color: #ffffff;
                        border: 0.5px solid black;
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
                        color: #cac4ca !important;
                        background-color: #f2f2f2 !important;
                        box-shadow: none !important;
                        background-image: none !important;
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
    onClick: PropTypes.func,
    small: PropTypes.bool,
    trailingIcon: PropTypes.string,
    type: PropTypes.string
}

Button.defaultProps = {
    onClick: () => {}
}

export default Button
