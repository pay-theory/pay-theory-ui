import React, { useRef, useEffect, useState } from "react";
import PropTypes from "prop-types";

const Tooltip = ({ text, left, right, bottom, children }) => {
  const [width, setWidth] = useState(0);
  const [tipHeight, setTipHeight] = useState(0);
  const [childHeight, setChildHeight] = useState(0);
  const tooltip = useRef(null);
  const child = useRef(null);
  const location = left ? "left" : right ? "right" : bottom ? "bottom" : "top";

  useEffect(() => {
    if (tooltip) {
      setWidth(tooltip.current.getBoundingClientRect().width);
      setTipHeight(tooltip.current.getBoundingClientRect().height);
    }
  }, [tooltip]);

  useEffect(() => {
    if (child) {
      setChildHeight(child.current.getBoundingClientRect().height);
    }
  }, [child]);

  return (
    <div className="pt-tooltip" ref={child}>
      {children}
      <span ref={tooltip} className={`pt-tooltiptext ${location}`}>
        {text}
      </span>
      <style jsx="true">{`
        .pt-tooltip {
          position: relative;
          display: flex;
        }

        .pt-tooltiptext {
          visibility: hidden;
          background-color: #8e868f;
          color: white;
          text-align: center;
          border-radius: 6px;
          padding: 2px 18px;
          position: absolute;
          z-index: 1;
          box-shadow: 0px 2px 4px #00000029;
        }

        .pt-tooltiptext.bottom {
          top: 150%;
          left: 50%;
          margin-left: -${width / 2}px;
        }

        .pt-tooltiptext.top {
          bottom: 150%;
          left: 50%;
          margin-left: -${width / 2}px;
        }

        .pt-tooltiptext.left {
          right: 120%;
          top: ${(childHeight - tipHeight) / 2}px;
        }

        .pt-tooltiptext.right {
          left: 120%;
          top: ${(childHeight - tipHeight) / 2}px;
        }

        .pt-tooltip:hover .pt-tooltiptext {
          visibility: visible;
        }

        .pt-tooltiptext.top::after {
          content: "";
          position: absolute;
          top: 100%;
          left: 50%;
          margin-left: -7px;
          border-width: 7px;
          border-style: solid;
          border-color: #8e868f transparent transparent transparent;
        }

        .pt-tooltiptext.bottom::after {
          content: "";
          position: absolute;
          bottom: 100%;
          left: 50%;
          margin-left: -7px;
          border-width: 7px;
          border-style: solid;
          border-color: transparent transparent #8e868f transparent;
        }

        .pt-tooltiptext.left::after {
          content: "";
          position: absolute;
          top: 50%;
          left: 100%; /* To the right of the tooltip */
          margin-top: -5px;
          border-width: 5px;
          border-style: solid;
          border-color: transparent transparent transparent #8e868f;
        }

        .pt-tooltiptext.right::after {
          content: "";
          position: absolute;
          top: 50%;
          right: 100%; /* To the left of the tooltip */
          margin-top: -5px;
          border-width: 5px;
          border-style: solid;
          border-color: transparent #8e868f transparent transparent;
        }
      `}</style>
    </div>
  );
};
Tooltip.propTypes = {
  text: PropTypes.string.isRequired,
  left: PropTypes.bool,
  right: PropTypes.bool,
  bottom: PropTypes.bool
};

Tooltip.defaultProps = {
  left: false,
  right: false,
  bottom: false
};

export default Tooltip;
