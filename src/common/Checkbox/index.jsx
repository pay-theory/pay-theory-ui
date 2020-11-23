import React, { useRef, useEffect } from 'react'
import PropTypes from 'prop-types'

const Checkbox = ({ id, label, indeterminate, inputProps }) => {
  const checkRef = useRef()

  useEffect(() => {
    checkRef.current.indeterminate = indeterminate ? true : undefined
  }, [indeterminate])

  return (
    <div className='checkbox'>
            <input
                id={id}
                ref={checkRef}
                type='checkbox'
                {...inputProps}
            />
            <label htmlFor={id}>
        {label}
        <i className="fas fa-check" />
        <i className="fas fa-minus" />
      </label>
      <style jsx="true">{`
        .checkbox {
          position: relative;
          height: 1.125em;
          width: 1.125em;
        }

        .checkbox label {
          display: block;
          position: relative;
          margin-bottom: 8px;
          padding: 0 28px;
          font-weight: 400;
          font-size: 16px;
          color: #6b7887;
          line-height: 1;
          cursor: pointer;
          user-select: none;
        }

        .checkbox label i {
          position: absolute;
          left: 1px;
          top: 2px;
          color: white;
          display: none;
        }

        /* Create the Checkbox Frame with a (:before) */

        .checkbox label::before {
          display: block;
          position: absolute;
          box-sizing: border-box;
          top: 0;
          left: 0;
          width: 18px;
          height: 18px;
          border: 1px solid transparent;
          border-radius: 2px;
          background-color: #e8ecef;
          transition: background-color 0.1s, 0.2s ease-out;
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

        /* Hover State */

        input[type="checkbox"]:hover + label::before {
          background-color: #cad3dd;
        }

        /* Focus State */

        input[type="checkbox"]:focus + label::before {
          outline: 0;
        }

        /* 'Checked' Mint Frame (:before) */

        input[type="checkbox"]:checked + label::before {
          background-color: #5BC794;
        }

        /* 'Checked' White Checkmark Icon */

        input[type="checkbox"]:checked + label i.fa-check {
          display: block;
        }

        /* 'Indeterminate' Sunshine Frame (:before) */

        input[type="checkbox"]:indeterminate + label::before {
          background-color: #F5BD42;
        }

        /* 'Indeterminate' White Dash Icon */

        input[type="checkbox"]:indeterminate + label i.fa-minus {
          display: block;
          left: 2px;
        }

        /* 'Disabled' Checkbox Label Text */

        input[type="checkbox"]:disabled + label {
          color: #cad3dd;
          cursor: default;
        }
      `}</style>
    </div>
  );
};

Checkbox.propTypes = {
  id: PropTypes.string,
  label: PropTypes.string,
  inputProps: PropTypes.object,
  indeterminate: PropTypes.any
};

Checkbox.defaultProps = {
  inputProps: {},
  indeterminate: undefined
};

export default Checkbox;
