import React, { useState } from "react";
import PropTypes from "prop-types";
import Icon from "../../Icon";
import Badge from "../../Badge";

const NavigationCategory = (props) => {
  const reduceBadgeNumber = (items) => {
    const reducer = (acc, value) => {
      let num = value.badgeNumber ? value.badgeNumber : 0;
      return acc + num;
    };
    return items.reduce(reducer, 0);
  };

  const [badgeNumber] = useState(reduceBadgeNumber(props.item.subContent));

  return (
    <li key={props.item.tag} data-testid={props.item.tag}>
      <details
        data-testid={`${props.item.tag}-details`}
        open={props.detailsOpen}
      >
        <summary>
          <div className="summary">
            <div id={`${props.item.tag}-link`} className="summary-title">
              <Icon name={props.item.icon} label="leading" />
              {props.item.label}
            </div>
            <div className="summary-trailing">
              {badgeNumber ? <Badge number={badgeNumber} /> : ""}
              <Icon name="chevron-right" label="summary-chevron" />
            </div>
          </div>
        </summary>
        <ul className="sub-list">
          {props.item.subContent.map((subMenuItem) => {
            return props.createItem(subMenuItem);
          })}
        </ul>
      </details>
    </li>
  );
};

NavigationCategory.propTypes = {
  item: PropTypes.object.isRequired,
  detailsOpen: PropTypes.bool.isRequired,
  createItem: PropTypes.func.isRequired
};

export default NavigationCategory;