import React from 'react'
import PropTypes from 'prop-types'

const Tooltip = ({ text, left, right, bottom, children }) => {
    const location = left ? 'left' : right ? 'right' : bottom ? 'bottom' : 'top'

    return (
        <div className='pt-tooltip'>
            <span className='child'>
                {children}
                <p className={`pt-tooltiptext ${location}`}>{text}</p>
            </span>
            <style jsx='true'>
                {`
                    .pt-tooltip {
                        position: relative;
                        display: flex;
                        align-self: flex-start;
                        flex: 0;
                    }

                    .pt-tooltip .child {
                        position: relative;
                        display: inline-block;
                        float: left;
                    }

                    .pt-tooltiptext {
                        visibility: hidden;
                        background-color: var(--white);
                        border: 1px solid var(--black);
                        color: var(--black);
                        text-align: center;
                        border-radius: 6px;
                        padding: 2px 18px 5px;
                        position: absolute;
                        z-index: 1;
                        white-space: nowrap;
                        box-shadow: 0px 2px 4px var(--black-opaque-32);
                        opacity: 0;
                        transition: opacity 0.15s ease-in-out;
                        will-change: transform;
                    }

                    .pt-tooltiptext.bottom {
                        top: 100%;
                        left: 50%;
                        transform: translateX(-50%);
                        margin-top: 10px;
                    }

                    .pt-tooltiptext.top {
                        bottom: 100%;
                        left: 50%;
                        transform: translateX(-50%);
                        margin-bottom: 10px;
                    }

                    .pt-tooltiptext.left {
                        right: 100%;
                        top: 50%;
                        transform: translateY(-50%);
                        margin: 0px 10px 0px 0px;
                    }

                    .pt-tooltiptext.right {
                        left: 100%;
                        top: 50%;
                        transform: translateY(-50%);
                        margin: 0px 0px 0px 10px;
                    }

                    .pt-tooltip .child:hover .pt-tooltiptext:not(:hover) {
                        visibility: visible;
                        opacity: 1;
                        transition: opacity 0.2s ease-in-out;
                    }

                    .pt-tooltiptext.top::after {
                        content: '';
                        position: absolute;
                        top: 100%;
                        left: 50%;
                        margin-left: -7px;
                        border-width: 7px;
                        border-style: solid;
                        border-color: var(--black) transparent transparent
                            transparent;
                    }

                    .pt-tooltiptext.bottom::after {
                        content: '';
                        position: absolute;
                        bottom: 100%;
                        left: 50%;
                        margin-left: -7px;
                        border-width: 7px;
                        border-style: solid;
                        border-color: transparent transparent var(--black)
                            transparent;
                    }

                    .pt-tooltiptext.left::after {
                        content: '';
                        position: absolute;
                        top: 50%;
                        left: 100%; /* To the right of the tooltip */
                        margin-top: -5px;
                        border-width: 5px;
                        border-style: solid;
                        border-color: transparent transparent transparent
                            var(--black);
                    }

                    .pt-tooltiptext.right::after {
                        content: '';
                        position: absolute;
                        top: 50%;
                        right: 100%; /* To the left of the tooltip */
                        margin-top: -5px;
                        border-width: 5px;
                        border-style: solid;
                        border-color: transparent var(--black) transparent
                            transparent;
                    }
                `}
            </style>
        </div>
    )
}
Tooltip.propTypes = {
    text: PropTypes.string.isRequired,
    left: PropTypes.bool,
    right: PropTypes.bool,
    bottom: PropTypes.bool
}

Tooltip.defaultProps = {
    left: false,
    right: false,
    bottom: false
}

export default Tooltip
