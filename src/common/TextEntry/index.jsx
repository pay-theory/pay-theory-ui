import React, { useEffect, useState, useRef } from "react";
import PropTypes from "prop-types";
import HelperText from "./children/HelperText";
import Icon from "../Icon";

const TextEntry = ({
                     label,
                     placeholder,
                     onChange,
                     value,
                     valid,
                     disabled,
                     inputProps,
                     helperText,
                     leadingIcon,
                     trailingIcon,
                     thin,
                     className
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

  let inputClassList = `${!value && "empty"} ${focused && "focused"} ${className && `${className}-input`}`;
  let divClassList = `pt-text-field ${validity} ${thin && "thin"} ${focused && "focused"}
    ${disabled && "disabled"} ${leadingIcon && "leading"} ${trailingIcon && "trailing"}`;

  return (
    <div  className={`pt-text-field-wrapper ${className && className}`}>
      <div className={divClassList}>
        {leadingIcon ? (
          <Icon name={leadingIcon.name} brand={leadingIcon.brand} />
        ) : (
          ""
        )}
        <input
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
            .pt-text-field {
              position: relative;
              font-size: 16px;
              border: 1px solid var(--grey);
              border-radius: 14px;
              height: 56px;
              display: flex;
              align-items: center;
              transition: border 0.3s ease;
              background: var(--white);
            }

            .pt-text-field.focused {
              border: 1px solid var(--pt-purple);
              transition: border 0.3s ease;
            }

            .pt-text-field input::placeholder {
              color: transparent;
              transition: color 0s ease;
            }

            .pt-text-field input {
              border: none;
              font-size: 16px;
              font-family: Europa, Segoe UI, Trebuchet MS, Arial, Helvetica,
                sans-serif;
              flex: 1;
              height: 56px;
              background: var(--white);
              padding: 8px 0px 0px 16px;
              border-radius: 16px;
              border: 1px solid transparent;
              height: 54px;
              width: 100%;
            }

            .pt-text-field input:focus {
              outline: none;
            }

            .pt-text-field input:-webkit-autofill,
            .pt-text-field input:-webkit-autofill:hover,
            .pt-text-field input:-webkit-autofill:focus,
            .pt-text-field input:-webkit-autofill:active {
              -webkit-box-shadow: 0 0 0px 1000px var(--purple-light) inset;
              border: 1px solid var(--purple-light);
            }

            .pt-text-field label {
              pointer-events: none;
              position: absolute;
              left: 16px;
              font-size: 16px;
              font-family: Europa, Segoe UI, Trebuchet MS, Arial, Helvetica,
                sans-serif;
              color: var(--grey);
              transition-property: font, top;
              transition-duration: 0.5s;
              transition-timing-function: cubic-bezier(0.165, 0.84, 0.44, 1);
            }

            .pt-text-field input.focused + label,
            .pt-text-field input:not(.empty) + label {
              top: 6px;
              font-size: 11px;
            }

            .pt-text-field input.focused::placeholder {
              color: grey;
              transition: color 0.3s ease;
            }

            /* Invalid Styling */
            .pt-text-field.invalid {
              border: 1px solid var(--red);
              background: var(--light-red);
              transition: border 0.3s ease, background 0.3s ease;
            }

            .pt-text-field.invalid input {
              background: var(--light-red);
              transition: background 0.3s ease;
            }

            .pt-text-field.invalid.focused input {
              background: var(--white);
              transition: background 0.3s ease;
            }

            .pt-text-field.invalid.focused {
              background: var(--white);
              transition: background 0.3s ease;
            }

            /* Disabled Styling */
            .pt-text-field.disabled {
              background: var(--grey-2);
              border: 1px solid var(--grey-1);
            }

            .pt-text-field.disabled label {
              color: var(--grey-1);
            }

            .pt-text-field.disabled input {
              background-color: var(--grey-2);
            }

            /* Icon Styling */
            .pt-text-field .pt-icon {
              height: 48px;
              width: 48px;
              display: flex;
              justify-content: center;
              align-items: center;
            }

            .pt-text-field.leading label {
              left: 48px;
            }

            .pt-text-field.leading input {
              padding-left: 0px;
              border-radius: 0px 16px 16px 0px;
            }

            /* Styling Thin Variant*/
            .pt-text-field.thin {
              height: 40px;
            }

            .pt-text-field.thin input {
              height: 38px;
              font-size: 16px;
              padding: 8px 0px 0px 16px;
            }

            .pt-text-field.thin .pt-icon {
              height: 40px;
              width: 40px;
            }

            .pt-text-field.thin.leading label {
              left: 40px;
            }

            .pt-text-field.thin.leading input {
              padding: 8px 0px 0px 0px;
              border-radius: 0px 16px 16px 0px;
            }

            .pt-text-field.thin input.focused + label,
            .pt-text-field.thin input:not(.empty) + label {
              top: 2px;
              font-size: 10px;
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

TextEntry.propTypes = {
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
  helperText: PropTypes.any,
  className: PropTypes.string,
  thin: PropTypes.bool
};

TextEntry.defaultProps = {
  onClick: () => {}
};

export default TextEntry;
