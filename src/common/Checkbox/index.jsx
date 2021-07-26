import React, { useRef, useEffect } from "react";
import PropTypes from "prop-types";
import Icon from "../Icon";

const Checkbox = ({ id, indeterminate, disabled, inputProps }) => {
  const checkRef = useRef();

  useEffect(() => {
    checkRef.current.indeterminate = indeterminate ? true : undefined;
  }, [indeterminate]);

  return (
    <div className={`checkbox ${disabled ? "disabled" : ""}`}>
      <input
        id={id}
        ref={checkRef}
        disabled={disabled}
        type="checkbox"
        {...inputProps}
      />
      <label htmlFor={id}>
        <Icon name="check" label="check" />
        <Icon name="minus" label="minus" />
      </label>
      <style jsx="true">{`
        .checkbox {
          position: relative;
          height: 40px;
          width: 40px;
          border-radius: 12px;
        }

        .checkbox:hover {
          background-color: var(--grey-3);
        }

        .checkbox label {
          display: block;
          position: relative;
          margin-bottom: 8px;
          padding: 20px;
          font-weight: 400;
          font-size: 16px;
          color: var(--dark-grey);
          line-height: 1;
          cursor: pointer;
          user-select: none;
          border-radius: 16px;
        }

        .checkbox label i {
          position: absolute;
          left: 3px;
          top: 3px;
          color: var(--white);
          display: none;
        }

        /* Create the Checkbox Frame with a (:before) */

        .checkbox label::before {
          display: block;
          position: absolute;
          box-sizing: border-box;
          top: 0;
          left: 0;
          width: 20px;
          height: 20px;
          margin: 10px;
          border: 1px solid var(--black);
          border-radius: 6px;
          transition: all 0.1s, 0.2s ease-out;
          content: "";
        }

        /* Visually Hide Input */

        input[type="checkbox"] {
          position: absolute;
          top: 0;
          left: 0;
          width: 0;
          height: 0;
          opacity: 0;
          pointer-events: none;
        }

        /* Focus State */

        input[type="checkbox"]:focus + label::before {
          outline: 0;
        }

        /* 'Checked' Mint Frame (:before) */

        input[type="checkbox"]:checked + label::before {
          background-color: var(--pt-purple);
          transition: all 0.1s, 0.2s ease-out;
          border: 0px;
        }

        /* 'Checked' White Checkmark Icon */

        input[type="checkbox"]:checked + label .pt-icon.check {
          display: block;
          left: 13px;
          top: 12px;
        }

        /* 'Indeterminate' Sunshine Frame (:before) */

        input[type="checkbox"]:indeterminate + label::before {
          background-color: var(--pt-purple);
          transition: all 0.1s, 0.2s ease-out;
          border: 0px;
        }

        /* 'Indeterminate' White Dash Icon */
        input[type="checkbox"]:indeterminate + label .pt-icon.minus {
          display: block;
          left: 14px;
          top: 12px;
        }

        /* 'Disabled' Checkbox Label Text */

        input[type="checkbox"]:disabled + label::before {
          cursor: default;
          border: 1px solid var(--grey-1);
        }

        .checkbox.disabled label {
          cursor: default;
        }

        .checkbox.disabled:hover {
          background: transparent;
        }
      `}</style>
    </div>
  );
};

Checkbox.propTypes = {
  id: PropTypes.string.isRequired,
  label: PropTypes.string,
  inputProps: PropTypes.object.isRequired,
  indeterminate: PropTypes.any
};

Checkbox.defaultProps = {
  indeterminate: undefined,
  label: undefined
};

export default Checkbox;

