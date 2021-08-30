import React from "react";
import Icon from "../../Icon";

const SuccessNotifications = () => {
  const hide = () => {
    var element = document.getElementById("pt-success-notification");
    element.classList.remove("show");
  };

  return (
    <div id="pt-success-notification" className="notification">
      <p id="pt-success-message"></p>
      <div className="close-message" onClick={hide}>
        <Icon name="times" />
      </div>
      <style jsx="true">{`
        #pt-success-notification.notification {
          border: 1px solid var(--dark-mint);
          background: var(--light-mint);
        }
      `}</style>
    </div>
  );
};

export default SuccessNotifications;
