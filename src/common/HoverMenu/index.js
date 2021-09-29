import React, { useRef, useEffect, useState } from "react";
import Icon from "../Icon";
import PropTypes from "prop-types";

const HoverMenu = ({
  menu,
  header,
  topLeft,
  topRight,
  bottomRight,
  children
}) => {
  const child = useRef(null);
  const menuRef = useRef(null);
  const location = topLeft
    ? "top-left"
    : topRight
    ? "top-right"
    : bottomRight
    ? "bottom-right"
    : "bottom-left";

  const menuItems = menu.map((item, index) => {
    return (
      <div
        className="pt-hover-menu-item"
        onClick={item.onClick}
        key={`${item.label}-${index}`}
      >
        <Icon name={item.icon} />
        <p>{item.label}</p>
      </div>
    );
  });

  useEffect(() => {
    if (menuRef.current && child.current) {
      const width = child.current.getBoundingClientRect().width;
      if (topRight || bottomRight) {
        menuRef.current.style.left = `${width / 2 - 25}px`;
      } else {
        menuRef.current.style.right = `${width / 2 - 32}px`;
      }
    }
  }, [menuRef, child, bottomRight, topLeft, topRight]);

  return (
    <div className="pt-hover-menu" ref={child}>
      <span className="child">{children}</span>
      <div className={`pt-hover-menu-list ${location}`} ref={menuRef}>
        {header ? <p className="pt-hover-menu-header">{header}</p> : null}
        {menuItems}
      </div>
      <style jsx="true">{`
        .pt-hover-menu {
          position: relative;
          display: flex;
          align-self: flex-start;
          flex: 0;
        }

        .pt-hover-menu-list {
          visibility: hidden;
          background-color: var(--white);
          color: black;
          text-align: center;
          border-radius: 16px;
          border: 1px solid var(--black);
          padding: 8px;
          position: absolute;
          z-index: 1;
          white-space: nowrap;
          box-shadow: 0px 2px 4px var(--black-opaque-32);
          opacity: 0;
          transition: opacity 0.15s ease-in-out;
        }

        .pt-hover-menu-header {
          font-weight: var(--black-weight);
          height: 40px;
          display: flex;
          align-items: center;
          justify-content: flex-start;
          padding: 8px;
        }

        .pt-hover-menu-item {
          height: 48px;
          display: flex;
          align-items: center;
          width: 100%;
          border-radius: 16px;
          padding-right: 16px;
          cursor: pointer;
        }

        .pt-hover-menu-item .pt-icon {
          height: 40px;
          width: 40px;
          display: flex;
          justify-content: center;
          align-items: center;
        }

        .pt-hover-menu-item:hover {
          background: var(--grey-1-opaque);
        }

        .pt-hover-menu-list.bottom-right {
          top: 100%;
          left: -18px;
          margin-top: 10px;
        }

        .pt-hover-menu-list.bottom-left {
          top: 100%;
          right: -12px;
          margin-top: 10px;
        }

        .pt-hover-menu-list.top-right {
          bottom: 100%;
          left: -18px;
          margin-bottom: 10px;
        }

        .pt-hover-menu-list.top-left {
          bottom: 100%;
          right: -25px;
          margin-bottom: 10px;
        }

        .pt-hover-menu:hover .pt-hover-menu-list {
          visibility: visible;
          opacity: 1;
          transition: opacity 0.2s ease-in-out;
        }

        .pt-hover-menu-list.top-right::after {
          content: "";
          position: absolute;
          top: 100%;
          left: 25px;
          margin-left: -7px;
          border-width: 7px;
          border-style: solid;
          border-color: var(--black) transparent transparent transparent;
        }

        .pt-hover-menu-list.top-left::after {
          content: "";
          position: absolute;
          top: 100%;
          right: 25px;
          margin-left: -7px;
          border-width: 7px;
          border-style: solid;
          border-color: var(--black) transparent transparent transparent;
        }

        .pt-hover-menu-list.bottom-right::after {
          content: "";
          position: absolute;
          bottom: 100%;
          left: 25px;
          margin-left: -7px;
          border-width: 7px;
          border-style: solid;
          border-color: transparent transparent var(--black) transparent;
        }

        .pt-hover-menu-list.bottom-left::after {
          content: "";
          position: absolute;
          bottom: 100%;
          right: 25px;
          margin-left: -7px;
          border-width: 7px;
          border-style: solid;
          border-color: transparent transparent var(--black) transparent;
        }
      `}</style>
    </div>
  );
};
HoverMenu.propTypes = {
  menu: PropTypes.array.isRequired,
  header: PropTypes.string,
  topLeft: PropTypes.bool,
  topRight: PropTypes.bool,
  bottomRight: PropTypes.bool
};

HoverMenu.defaultProps = {
  topLeft: false,
  topRight: false,
  bottomRight: false
};

export default HoverMenu;
