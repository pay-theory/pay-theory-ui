import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import Icon from "../../Icon";
import Badge from "../../Badge";

const NavigationItem = ({ item }) => {
  const [className, setClassName] = useState("inactive");

  useEffect(() => {
    if (window.location.pathname.indexOf(item.tag) >= 0) {
      setClassName("active");
    } else {
      setClassName("inactive");
    }
  }, [window.location.pathname, item.tag]);

  return (
    <li data-testid={item.tag} key={item.tag}>
      <Link
        className={className}
        id={`${item.tag}-link`}
        to={{
          pathname: item.to,
          state: { hash: item.tag }
        }}
      >
        <p className="label">
          {item.icon ? <Icon label="leading" name={item.icon} brand={item.iconBrand} /> : null}
          {item.label}
        </p>
        {item.badgeNumber ? <Badge number={`${item.badgeNumber}`} /> : ""}
      </Link>
    </li>
  );
};

NavigationItem.propTypes = {
  item: PropTypes.object.isRequired
};

export default NavigationItem;
