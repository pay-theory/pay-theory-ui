import React, { useState } from "react";
import PropTypes from "prop-types";

const PinInput = ({ pinLength, setPin, id }) => {
  const [pinState, setPinState] = useState(Array(pinLength).fill(""));
  const focusSibling = (index) => {
    const element = document.getElementById(`${id}-input-${index}`);
    if (element) {
      element.focus();
    }
  };
  const generateFields = () => {
    return pinState.map((value, index) => {
      return (
        <input
          id={`${id}-input-${index}`}
          className="pin-input-field"
          value={pinState[index]}
          type="tel"
          pattern="[0-9]*"
          inputmode="numeric"
          onChange={(e) => {
            value = e.target.value.replace(/\D/g, "");
            if (value.length === pinLength) {
              setPinState(value.split(""));
              setPin(value);
            } else if (value.length <= 1) {
              let newPin = [...pinState];
              newPin[index] = value;
              if (value) {
                focusSibling(index + 1);
              }
              setPinState(newPin);
              setPin(newPin.join(""));
            }
          }}
          onFocus={(e) => e.target.select()}
          onKeyDown={(e) => {
            const key = e.key;
            if (key === "Backspace" || key === "Delete") {
              if (!pinState[index] && index > 0) {
                focusSibling(index - 1);
                const newPin = [...pinState];
                newPin[index - 1] = "";
                setPinState(newPin);
                setPin(newPin.join(""));
              }
            }
          }}
        />
      );
    });
  };

  return (
    <form className="pt-pin-text-entry" autoComplete="false">
      {generateFields()}
      <style global="true" jsx="true">
        {`
          .pt-pin-text-entry {
            display: flex;
          }

          .pin-input-field {
            -webkit-appearance: none;
            border-radius: 0;
            border: none;
            border-bottom: 2px solid var(--grey);
            margin: 0px 4px;
            font-size: 26px;
            font-family: var(--primary-font);
            background: var(--white);
            height: 37px;
            width: 20px;
          }

          .pin-input-field:focus {
            outline: none;
          }
        `}
      </style>
    </form>
  );
};

PinInput.propTypes = {
  pinLength: PropTypes.number.isRequired,
  setPin: PropTypes.func.isRequired,
  id: PropTypes.id
};

PinInput.defaultProps = {
  id: "pt-pin-input"
};

export default PinInput;
