import React, { useState, useRef, useEffect } from "react";
import PropTypes from "prop-types";
import Icon from "../../Icon";

const DynamicHeader = ({
                         className,
                         itemKey,
                         label,
                         type,
                         width,
                         minWidth,
                         last,
                         options,
                         selected,
                         onSelect
                       }) => {
  const [focus, setFocus] = useState(false);
  const content = useRef(null);

  const createMenu = () => {
    return (
      <div className={`dynamic-header-menu ${focus ? "visible" : ""}`}>
        {options?.map((option) => {
          return (
            <p
              className={`dynamic-header-menu-option ${
                option.value === selected.value ? "selected" : ""
              }`}
              onClick={() => {
                onSelect(option);
                setFocus(false);
              }}
              key={option.value}
            >
              {option.label}
            </p>
          );
        })}
      </div>
    );
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (content.current && !content.current.contains(event.target)) {
        setFocus(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [content]);

  const name = `head dynamic ${className} no-select`;
  const setStyle = () => {
    const style = {
      width: ["action", "actionMenu"].includes(type)
        ? "48px"
        : width
          ? `${width}px`
          : "",
      minWidth: ["action", "actionMenu"].includes(type) ? "48px" : "96px"
    };
    if (minWidth)
      style.minWidth = ["action", "actionMenu"].includes(type)
        ? "48px"
        : `${minWidth}px`;
    if (["action", "actionMenu"].includes(type)) style.maxWidth = "48px";
    return style;
  };
  return (
    <th
      className={name}
      data-testid={`${className.split(/\s/)[0]}-${itemKey}`}
      key={`${className}-${itemKey}`}
      style={setStyle()}
    >
      <span
        className="content"
        ref={content}
        onClick={() => {
          setFocus(!focus);
        }}
      >
        <p>{label}</p>
        <Icon name={"cog"} solid />
        {createMenu()}
      </span>
      {!last && <span className={`header-divider`} />}
      <style jsx="true">{`
        .dynamic-header-menu {
          position: absolute;
          top: 40px;
          background-color: var(--white);
          padding: 2px;
          border-radius: 8px;
          width: 90%;
          box-shadow: 0px 2px 4px var(--black-opaque-32);
          display: none;
        }

        .dynamic-header-menu.visible {
          display: inline-block;
        }

        .dynamic-header-menu .dynamic-header-menu-option {
          height: 24px;
          text-align: center;
          border-radius: 8px;
          width: 100%;
          color: var(--grey);
        }

        .dynamic-header-menu .dynamic-header-menu-option:hover {
          background-color: var(--purple-light);
          color: var(--black);
        }

        .dynamic-header-menu .dynamic-header-menu-option.selected {
          background-color: var(--grey-2);
          color: var(--black);
        }
      `}</style>
    </th>
  );
};

DynamicHeader.propTypes = {
  type: PropTypes.string.isRequired,
  width: PropTypes.number,
  minWidth: PropTypes.number,
  className: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  itemKey: PropTypes.any,
  auto: PropTypes.bool,
  resizable: PropTypes.bool
};

export default DynamicHeader;
