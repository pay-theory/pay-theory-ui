import React from 'react'
import PropTypes from 'prop-types'

const Toggle = ({ state, changeState, disabled }) => {
    return (
        <div
            className={`pt-toggle ${state || 'false'} ${
                disabled ? 'disabled' : ''
            }`}
            data-testid='pt-toggle'
            onClick={disabled ? () => {} : changeState}
        >
            <div className='pt-toggle-dot' />
            <style global='true' jsx='true'>
                {`
                    .pt-toggle.false {
                        border: 1px solid var(--black);
                        background: var(--white);
                        transition: all 0.3s ease;
                    }

                    .pt-toggle {
                        width: 40px;
                        height: 20px;
                        border-radius: 6px;
                        border: 1px solid var(--pt-purple);
                        background: var(--pt-purple);
                        cursor: pointer;
                        position: relative;
                        transition: all 0.3s ease;
                    }

                    .pt-toggle.false .pt-toggle-dot {
                        background: var(--black);
                        right: 20px;
                        transition: all 0.3s ease;
                    }

                    .pt-toggle .pt-toggle-dot {
                        position: absolute;
                        height: 12px;
                        width: 12px;
                        background: var(--white);
                        margin: 3px;
                        border-radius: 3px;
                        right: 0px;
                        transition: all 0.3s ease;
                    }

                    .pt-toggle.disabled.false {
                        border: 1px solid var(--grey-1) !important;
                        cursor: default;
                    }

                    .pt-toggle.disabled.false .pt-toggle-dot {
                        background: var(--grey-1);
                    }

                    .pt-toggle.disabled.true {
                        border: 1px solid var(--grey-1) !important;
                        background: var(--grey-1);
                        cursor: default;
                    }
                `}
            </style>
        </div>
    )
}

Toggle.propTypes = {
    changeState: PropTypes.func.isRequired,
    disabled: PropTypes.bool,
    state: PropTypes.bool.isRequired
}

export default Toggle
