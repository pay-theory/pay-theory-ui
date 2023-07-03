import React, { useEffect, useState, useRef } from "react";
import PropTypes from "prop-types";
import HelperText from "./children/HelperText";
import Icon from "../Icon";

const TextArea = ({
  label,
  placeholder,
  onChange,
  value,
  valid,
  disabled,
  inputProps,
  helperText,
  leadingIcon,
  trailingIcon
}) => {
  let input = useRef(null);
  const [focused, setFocused] = useState(false);
  const [validity, setValidity] = useState("");

  useEffect(() => {
    let inputRef;
    let focus = () => {
      setFocused(true);
    };

    let blur = () => {
      setFocused(false);
    };

    if (input.current) {
      inputRef = input.current;
      inputRef.addEventListener("focus", focus);
      inputRef.addEventListener("blur", blur);
    }

    return () => {
      if (inputRef) {
        inputRef.removeEventListener("focus", focus);
        inputRef.removeEventListener("blur", blur);
      }
    };
  }, [input]);

  useEffect(() => {
    if (valid) {
      let isValid = valid(value);
      setValidity(isValid ? "" : value ? "invalid" : "");
    }
  }, [value, valid]);

  let inputClassList = `${value ? "" : "empty"} ${focused ? "focused" : ""}`;
  let divClassList = `pt-text-area ${validity} ${focused ? "focused" : ""} ${
    disabled ? "disabled" : ""
  } ${leadingIcon ? "leading" : ""} ${trailingIcon ? "trailing" : ""}`;

  return (
    <div  className="pt-text-area-wrapper">
      <div className={divClassList}>
        {leadingIcon ? (
          <Icon name={leadingIcon.name} brand={leadingIcon.brand} />
        ) : (
          ""
        )}
        <textarea
          ref={input}
          className={inputClassList}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          disabled={disabled}
          {...inputProps}
        />
        <label>{label}</label>
        {trailingIcon ? (
          <Icon name={trailingIcon.name} brand={trailingIcon.brand} />
        ) : (
          ""
        )}
        <style jsx="true">
          {`
            .pt-text-area {
              position: relative;
              font-size: 16px;
              border: 1px solid var(--grey);
              border-radius: 14px;
              height: 86px;
              display: flex;
              align-items: center;
              transition: border 0.3s ease;
              background: var(--white);
              overflow: hidden;
            }

            .pt-text-area.focused {
              border: 1px solid var(--pt-purple);
              transition: border 0.3s ease;
            }

            .pt-text-area textarea::placeholder {
              color: transparent;
              transition: color 0s ease;
            }

            .pt-text-area textarea {
              border: none;
              font-size: 16px;
              font-family: Europa, Segoe UI, Trebuchet MS, Arial, Helvetica,
                sans-serif;
              flex: 1;
              height: 56px;
              background: transparent;
              margin: 16px 0px 0px 16px;
              resize: none;
              border: 1px solid transparent;
              height: 54px;
              width: 100%;
            }

            .pt-text-area textarea:focus {
              outline: none;
            }

            .pt-text-area textarea:-webkit-autofill,
            .pt-text-area textarea:-webkit-autofill:hover,
            .pt-text-area textarea:-webkit-autofill:focus,
            .pt-text-area textarea:-webkit-autofill:active {
              -webkit-box-shadow: 0 0 0px 1000px var(--purple-light) inset;
              border: 1px solid var(--purple-light);
            }

            .pt-text-area label {
              pointer-events: none;
              position: absolute;
              left: 16px;
              top: 16px;
              font-size: 16px;
              font-family: Europa, Segoe UI, Trebuchet MS, Arial, Helvetica,
                sans-serif;
              color: var(--grey);
              transition-property: font, top;
              transition-duration: 0.5s;
              transition-timing-function: cubic-bezier(0.165, 0.84, 0.44, 1);
            }

            .pt-text-area textarea.focused + label,
            .pt-text-area textarea:not(.empty) + label {
              top: 6px;
              font-size: 11px;
            }

            .pt-text-area textarea.focused::placeholder {
              color: grey;
              transition: color 0.3s ease;
            }

            /* Invalid Styling */
            .pt-text-area.invalid {
              border: 1px solid var(--red);
              background: var(--light-red);
              transition: border 0.3s ease, background 0.3s ease;
            }

            .pt-text-area.invalid textarea {
              background: var(--light-red);
              transition: background 0.3s ease;
            }

            .pt-text-area.invalid.focused textarea {
              background: var(--white);
              transition: background 0.3s ease;
            }

            .pt-text-area.invalid.focused {
              background: var(--white);
              transition: background 0.3s ease;
            }

            /* Disabled Styling */
            .pt-text-area.disabled {
              background: var(--grey-2);
              border: 1px solid var(--grey-1);
            }

            .pt-text-area.disabled label {
              color: var(--grey-1);
            }

            /* Icon Styling */
            .pt-text-area .pt-icon {
              height: 48px;
              width: 48px;
              display: flex;
              justify-content: center;
              align-items: center;
            }

            .pt-text-area.leading label {
              left: 48px;
            }

            .pt-text-area.leading textarea {
              margin-left: 0px;
              border-radius: 0px 16px 16px 0px;
            }
          `}
        </style>
      </div>
      {helperText ? (
        <HelperText show={focused} valid={validity}>
          {helperText}
        </HelperText>
      ) : null}
    </div>
  );
};

TextArea.propTypes = {
  disabled: PropTypes.bool,
  label: PropTypes.string.isRequired,
  leadingIcon: PropTypes.shape({
    name: PropTypes.string,
    brand: PropTypes.bool
  }),
  placeholder: PropTypes.string,
  onChange: PropTypes.func.isRequired,
  trailingIcon: PropTypes.shape({
    name: PropTypes.string,
    brand: PropTypes.bool
  }),
  value: PropTypes.string.isRequired,
  valid: PropTypes.func,
  inputProps: PropTypes.object,
  helperText: PropTypes.any
};

TextArea.defaultProps = {
  onClick: () => {}
};

export default TextArea;
