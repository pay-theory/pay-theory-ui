import React from "react";
import Icon from "../../Icon";

const ErrorNotifications = () => {
  const hide = () => {
    var element = document.getElementById("pt-error-notification");
    element.classList.remove("show");
  };

  return (
    <div id="pt-error-notification" className="notification">
      <p id="pt-error-message"></p>
      <div className="close-message" onClick={hide}>
        <Icon name="times" />
      </div>
      <style jsx="true">{`
        #pt-error-notification.notification {
          border: 1px solid var(--red);
          background: var(--light-red);
        }
      `}</style>
    </div>
  );
};

export default ErrorNotifications;
