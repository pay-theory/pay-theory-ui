import React, { useEffect, useState, useRef, useCallback } from "react";
import PropTypes from "prop-types";
import Icon from "../Icon";
import Dropdown from "./children/Dropdown";

const ChipDropdown = ({ onChange, value, disabled, options }) => {
  let wrapper = useRef(null);
  let select = useRef(null);
  let dropdown = useRef(null);
  const [focused, setFocused] = useState(false);
  const [selectedLabel, setSelectedLabel] = useState("");

  let focus = useCallback(() => {
    setFocused(true);
    select.current.style = "z-index: 6;";
    dropdown.current.style = "z-index: 5;";
  }, [select, dropdown]);

  let blur = useCallback(() => {
    setFocused(false);
    select.current.style = "z-index: 0;";
    dropdown.current.style = "z-index: 0;";
  }, [select, dropdown]);

  let click = useCallback(() => {
    if (!disabled) {
      if (focused) {
        blur();
      } else {
        focus();
      }
    }
  }, [focus, focused, blur, disabled]);

  useEffect(() => {
    const setLabel = (items) => {
      items.forEach((item) => {
        if (item.value === value) {
          setSelectedLabel(item.label);
        }
      });
    };
    setLabel(options);
  }, [value, options]);

  let selectedValueClassList = `${value ? "" : "empty"} selected-value`;
  let divClassList = `pt-chip-dropdown ${focused ? "focused" : ""} ${
    disabled ? "disabled" : ""
  }`;

  return (
    <div
      onClick={click}
      onBlur={blur}
      className="pt-chip-dropdown-wrapper"
      tabIndex="0"
    >
      <div ref={select} className={divClassList}>
        <p className={selectedValueClassList}>{selectedLabel}</p>
        <Icon name="chevron-right" label="dropdown-chevron" />
        <style jsx="true">
          {`
            .pt-chip-dropdown-wrapper {
              outline: none;
              position: relative;
            }

            .pt-chip-dropdown {
              position: relative;
              // align-self: flex-start;
              font-size: 16px;
              border-radius: 500px;
              height: 32px;
              display: flex;
              align-items: center;
              transition: border 0.3s ease;
              background: var(--grey-2);
              min-width: 144px;
              cursor: pointer;
              outline: none;
              box-shadow: 0px 0px 4px var(--grey-1);
            }

            .pt-chip-dropdown .selected-value {
              border: none;
              font-size: 16px;
              font-family: Europa, Segoe UI, Trebuchet MS, Arial, Helvetica,
                sans-serif;
              flex: 1;
              background: transparent;
              border-radius: 16px;
              border: 1px solid transparent;
              height: 32px;
              display: flex;
              align-items: center;
              justify-content: center;
            }

            .pt-chip-dropdown .chip-dropdownlabel {
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

            .pt-chip-dropdown
              .selected-value:not(.empty)
              + .chip-dropdownlabel {
              top: 6px;
              font-size: 11px;
            }

            /* Disabled Styling */
            .pt-chip-dropdown.disabled {
              background: var(--grey-2);
              cursor: default;
              box-shadow: none;
              color: var(--grey-1);
            }

            .pt-chip-dropdown.disabled .selected-value,
            .pt-chip-dropdown.disabled .pt-icon {
              color: var(--grey-1);
            }

            /* Icon Styling */
            .pt-chip-dropdown .pt-icon {
              height: 32px;
              width: 32px;
              font-size: 13px;
              display: flex;
              justify-content: center;
              align-items: center;
              position: absolute;
              right: 0px;
            }

            .pt-chip-dropdown .dropdown-chevron {
              transition: transform 0.3s ease;
            }

            .pt-chip-dropdown.focused .dropdown-chevron {
              transform: rotate(90deg);
              transition: all 0.3s ease;
            }

            /* Dropdown Styling */
            .pt-chip-dropdown-wrapper
              .pt-chip-dropdown
              + .chip-dropdown-dropdown {
              flex-direction: column;
              position: absolute;
              top: 0px;
              border-radius: 16px;
              width: 100%;
              height: 0px;
              overflow: hidden;
              opacity: 0;
              background: var(--white);
              box-shadow: 0px 0px 4px var(--grey-1);
            }

            .pt-chip-dropdown-wrapper
              .pt-chip-dropdown.focused
              + .chip-dropdown-dropdown {
              opacity: 1;
              height: auto;
              padding: 36px 4px 4px;
              transition: all 0.3s ease;
            }

            .pt-chip-dropdown-wrapper
              .chip-dropdown-dropdown
              .chip-dropdown-item {
              height: 24px;
              border-radius: 12px;
              display: flex;
              align-items: center;
              justify-content: center;
              padding: 0px 16px;
              cursor: pointer;
            }

            .pt-chip-dropdown-wrapper
              .chip-dropdown-dropdown
              .chip-dropdown-item:not(.disabled):hover {
              background: var(--grey-2);
            }

            .pt-chip-dropdown-wrapper
              .chip-dropdown-dropdown
              .chip-dropdown-item.active {
              background: var(--grey-2);
            }

            .pt-chip-dropdown-wrapper
              .chip-dropdown-dropdown
              .chip-dropdown-item.disabled {
              cursor-events: none;
              cursor: default;
              color: var(--grey-1);
            }
          `}
        </style>
      </div>
      <Dropdown
        items={options}
        onClick={onChange}
        reference={dropdown}
        value={value}
      />
    </div>
  );
};

ChipDropdown.propTypes = {
  disabled: PropTypes.bool,
  onChange: PropTypes.func.isRequired,
  value: PropTypes.any.isRequired,
  options: PropTypes.array
};

ChipDropdown.defaultProps = {
  onClick: () => {}
};

export default ChipDropdown;