import React from "react";
import Icon from "../../Icon";
import HoverMenu from "../../HoverMenu";

const ActionButton = ({ menuItems, icon }) => {
  return (
    <HoverMenu menu={menuItems}>
      <div className="pt-portal-head-action-button">
        <Icon name={icon} />
      </div>
    </HoverMenu>
  );
};

export default ActionButton;
