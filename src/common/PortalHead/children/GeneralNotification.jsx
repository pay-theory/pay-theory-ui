import React from "react";
import Icon from "../../Icon";

const GeneralNotifications = () => {
  const hide = () => {
    var element = document.getElementById("pt-general-notification");
    element.classList.remove("show");
  };

  return (
    <div id="pt-general-notification" className="notification">
      <p id="pt-general-message"></p>
      <div className="close-message" onClick={hide}>
        <Icon name="times" />
      </div>
      <style jsx="true">{`
        #pt-general-notification.notification {
          border: 1px solid var(--pt-purple);
          background: var(--purple-light);
        }
      `}</style>
    </div>
  );
};

export default GeneralNotifications;
