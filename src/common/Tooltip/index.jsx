import React, { useRef, useEffect, useState } from 'react'
import PropTypes from 'prop-types'

const Tooltip = ({ text, left, right, bottom, children }) => {
    const [width, setWidth] = useState(0)
    const [tipHeight, setTipHeight] = useState(0)
    const [childHeight, setChildHeight] = useState(0)
    const tooltip = useRef(null)
    const child = useRef(null)
    const location = left ? 'left' : right ? 'right' : bottom ? 'bottom' : 'top'

    useEffect(() => {
        if (tooltip && tooltip.current) {
            setWidth(tooltip.current.getBoundingClientRect().width)
            if (bottom || (!left && !right)) {
                tooltip.current.style.marginLeft = `-${width / 2}px`
            }
            setTipHeight(tooltip.current.getBoundingClientRect().height)
        }
    }, [tooltip, bottom, left, right, width])

    useEffect(() => {
        if (child) {
            setChildHeight(child.current.getBoundingClientRect().height)
        }
    }, [child])

    useEffect(() => {
        if (childHeight && tipHeight) {
            if ((left || right) && tooltip.current) {
                tooltip.current.style.top = `${(childHeight - tipHeight) / 2}px`
            }
        }
    }, [childHeight, tipHeight, tooltip, left, right])

    return (
        <div className='pt-tooltip' ref={child}>
            <span className='child'>{children}</span>
            <p className={`pt-tooltiptext ${location}`} ref={tooltip}>
                {text}
            </p>
            <style jsx='true'>
                {`
                    .pt-tooltip {
                        position: relative;
                        display: flex;
                        align-self: flex-start;
                        flex: 0;
                    }

                    .pt-tooltiptext {
                        visibility: hidden;
                        background-color: var(--grey);
                        color: white;
                        text-align: center;
                        border-radius: 6px;
                        padding: 2px 18px 5px;
                        position: absolute;
                        z-index: 1;
                        white-space: nowrap;
                        box-shadow: 0px 2px 4px var(--black-opaque-32);
                        opacity: 0;
                        transition: opacity 0.15s ease-in-out;
                    }

                    .pt-tooltiptext.bottom {
                        top: 100%;
                        left: 50%;
                        margin-top: 10px;
                    }

                    .pt-tooltiptext.top {
                        bottom: 100%;
                        left: 50%;
                        margin-bottom: 10px;
                    }

                    .pt-tooltiptext.left {
                        right: 100%;
                        margin: 0px 10px 0px 0px;
                    }

                    .pt-tooltiptext.right {
                        left: 100%;
                        margin: 0px 0px 0px 10px;
                    }

                    .pt-tooltip .child:hover + .pt-tooltiptext {
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
                        border-color: var(--grey) transparent transparent
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
                        border-color: transparent transparent var(--grey)
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
                            var(--grey);
                    }

                    .pt-tooltiptext.right::after {
                        content: '';
                        position: absolute;
                        top: 50%;
                        right: 100%; /* To the left of the tooltip */
                        margin-top: -5px;
                        border-width: 5px;
                        border-style: solid;
                        border-color: transparent var(--grey) transparent
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
