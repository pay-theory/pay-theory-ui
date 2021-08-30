import React from "react";
import Icon from "../../Icon";

const ActionButton = ({ icon, action }) => {
  return (
    <div className="pt-portal-head-action-button" onClick={action}>
      <Icon name={icon} />
    </div>
  );
};

export default ActionButton;
