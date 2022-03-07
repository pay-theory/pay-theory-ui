import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { NavLink } from "react-router-dom";
import Icon from "../../Icon";
import Badge from "../../Badge";

const NavigationItem = ({ item }) => {
  return (
    <li data-testid={item.tag} key={item.tag}>
      <NavLink
        className={({ isActive }) => (isActive ? "active" : "inactive")}
        id={`${item.tag}-link`}
        to={{
          pathname: item.to,
          state: { hash: item.tag }
        }}
      >
        <p className="label">
          {item.icon ? (
            <Icon label="leading" name={item.icon} brand={item.iconBrand} />
          ) : null}
          {item.label}
        </p>
        {item.badgeNumber ? <Badge number={`${item.badgeNumber}`} /> : ""}
      </NavLink>
    </li>
  );
};

NavigationItem.propTypes = {
  item: PropTypes.object.isRequired
};

export default NavigationItem;
