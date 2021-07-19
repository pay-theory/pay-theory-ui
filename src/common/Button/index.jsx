import React, { useEffect, useState, useRef } from "react";
import PropTypes from "prop-types";
import Icon from "../Icon";

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
  const [coords, setCoords] = useState({});
  const [rippleCoords, setRippleCoords] = useState({});
  const [isRippling, setIsRippling] = useState(false);
  const [width, setWidth] = useState(0);
  const button = useRef(null);

  useEffect(() => {
    if (isRippling) {
      setTimeout(() => setIsRippling(false), 700);
    }
  }, [isRippling]);

  useEffect(() => {
    let setRippleLocation = (e) => {
      let rect = e.target.getBoundingClientRect();
      let x = e.clientX - rect.left;
      let y = e.clientY - rect.top;
      setCoords({ x: x, y: y });
    };

    let current;
    if (button && button.current) {
      current = button.current;
      setWidth(current.getBoundingClientRect().width);
      current.addEventListener("mousemove", setRippleLocation);
    }

    return () => {
      if (current) {
        current.removeEventListener("mousemove", setRippleLocation);
      }
    };
  }, [button]);

  const styleClass = primary ? "primary" : cta ? "cta" : text ? "text" : "";
  return (
    <button
      className={`pt-button ${styleClass} ${disabled ? "disabled" : ""}`}
      data-testid={name}
      disabled={disabled}
      id={name}
      onClick={(e) => {
        if (cta) {
          setIsRippling(true);
          setRippleCoords(coords);
        }
        onClick && onClick(e);
      }}
      ref={button}
      // eslint-disable-next-line react/button-has-type
      type={submit ? "submit" : reset ? "reset" : "button"}
    >
      {isRippling ? (
        <span
          className="ripple"
          style={{
            left: rippleCoords.x,
            top: rippleCoords.y
          }}
        />
      ) : (
        ""
      )}
      <span className="content">
        {leadingIcon ? (
          <Icon
            name={leadingIcon.name}
            brand={leadingIcon.brand}
            label="leading"
          />
        ) : null}
        {label}
        {trailingIcon ? (
          <Icon
            name={trailingIcon.name}
            brand={trailingIcon.brand}
            label="trailing"
          />
        ) : null}
      </span>
      <style jsx="true">
        {`
          .pt-button {
            position: relative;
            overflow: hidden;
            transition: background 400ms;
            outline: 0;
            height: 40px;
            padding: 0px 16px;
            border-radius: 12px;
            border: 0px solid #8643cb;
            cursor: pointer;
            font-family: inherit;
            font-size: 16px;
            transition: opacity 0.1s ease-in-out;
          }

          // .pt-button:hover {
          //   background-color: #00000029;
          // }

          .pt-button .pt-icon.leading {
            margin-right: 8px;
          }

          .pt-button .pt-icon.trailing {
            margin-left: 8px;
          }

          /*Disabled Styling*/

          .pt-button.disabled {
            cursor: default !important;
            color: #cac4ca !important;
            background-color: #f2f2f2 !important;
            box-shadow: none !important;
            background-image: none !important;
          }

          /*Primary Button Styling*/

          .pt-button.primary {
            background: var(--pt-purple);
            color: var(--white);
            opacity: var(--no-opacity);
          }

          .pt-button.primary:hover {
            opacity: var(--hover-opacity);
          }

          /*CTA Button Styling*/

          .pt-button.cta {
            background: var(--pt-purple);
            color: var(--white);
          }

          .pt-button.cta > .ripple {
            width: 20px;
            height: 20px;
            position: absolute;
            background: var(--pt-pink);
            display: block;
            content: "";
            border-radius: 9999px;
            opacity: 1;
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

          .pt-button.cta > .content {
            position: relative;
            z-index: 1;
            pointer-events: none;
          }

          .pt-button.cta > .content .pt-icon {
            position: relative;
            z-index: 1;
            pointer-events: none;
          }

          .pt-button.cta:before {
            --size: ${width}px;
            content: "";
            position: absolute;
            left: ${width / 2}px;
            top: 20px;
            width: var(--size);
            height: var(--size);
            background: radial-gradient(
              circle closest-side,
              var(--pt-pink),
              transparent
            );
            transform: translate(-50%, -50%);
            transition: left 0.3s ease, top 0.3s ease;
          }

          .pt-button.cta:hover:before {
            left: ${coords.x}px;
            top: ${coords.y}px;
            transition: left 0s ease, top 0s ease;
          }

          /*Text Button Styling*/

          .pt-button.text {
            display: block;
            position: relative;
            height: auto;
            padding: 0px;
            background: transparent;
            color: var(--pt-purple);
            overflow: hidden;
          }
        `}
      </style>
    </button>
  );
};

Button.propTypes = {
  style: PropTypes.string,
  disabled: PropTypes.bool,
  label: PropTypes.string.isRequired,
  leadingIcon: PropTypes.shape({
    name: PropTypes.string,
    style: PropTypes.string
  }),
  name: PropTypes.string.isRequired,
  onClick: PropTypes.func,
  trailingIcon: PropTypes.shape({
    name: PropTypes.string,
    brand: PropTypes.bool
  }),
  submit: PropTypes.bool,
  reset: PropTypes.bool
};

Button.defaultProps = {
  onClick: () => {}
};

export default Button;
