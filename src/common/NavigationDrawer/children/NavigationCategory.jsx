import React, { useState, useEffect } from "react";
import { NavLink, useLocation } from "react-router-dom";
import PropTypes from "prop-types";
import Icon from "../../Icon";
import Badge from "../../Badge";

const NavigationCategory = ({ item, createItem }) => {
  const reduceBadgeNumber = (items) => {
    const reducer = (acc, value) => {
      let num = value.badgeNumber ? value.badgeNumber : 0;
      return acc + num;
    };
    return items.reduce(reducer, 0);
  };

  let location = useLocation();
  const [badgeNumber] = useState(
    reduceBadgeNumber(item.subContent) + (item.badgeNumber || 0)
  );
  const [detailsOpen, setDetailsOpen] = useState(false);

  useEffect(() => {
    let allLocations = item.subContent.map((item) => item.to);
    allLocations.push(item.to);
    if (allLocations.includes(location.pathname)) {
      setDetailsOpen(true);
    } else {
      setDetailsOpen(false);
    }
  }, [location, item]);

  return (
    <li key={item.tag} data-testid={item.tag}>
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
        {badgeNumber ? <Badge number={`${badgeNumber}`} /> : ""}
      </NavLink>
      <ul className={`sub-list ${detailsOpen ? "details-open" : ""}`}>
        {item.subContent.map((subMenuItem) => {
          return createItem(subMenuItem);
        })}
      </ul>
    </li>
  );
};

NavigationCategory.propTypes = {
  item: PropTypes.object.isRequired,
  createItem: PropTypes.func.isRequired
};

export default NavigationCategory;
