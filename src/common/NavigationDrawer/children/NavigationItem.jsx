import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import Icon from "../../Icon";
import Badge from "../../Badge";

const NavigationItem = (props) => {
  const [className, setClassName] = useState("inactive");

  useEffect(() => {
    if (window.location.pathname.indexOf(props.item.tag) >= 0) {
      setClassName("active");
    } else {
      setClassName("inactive");
    }
  }, [window.location.pathname, props.item.tag]);

  return (
    <li key={props.item.tag} data-testid={props.item.tag}>
      <Link
        to={{
          pathname: props.item.to,
          state: { hash: props.item.tag }
        }}
        className={className}
        id={`${props.item.tag}-link`}
      >
        <div>
          {props.item.icon ? (
            <Icon name={props.item.icon} label="leading" />
          ) : null}
          {props.item.label}
        </div>
        {props.item.badgeNumber ? (
          <Badge number={props.item.badgeNumber} />
        ) : (
          ""
        )}
      </Link>
    </li>
  );
};

NavigationItem.propTypes = {
  item: PropTypes.object.isRequired,
  className: PropTypes.string.isRequired
};

export default NavigationItem;
