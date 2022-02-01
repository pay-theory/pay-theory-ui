import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";

import {
  PortalLogo,
  MenuButton,
  ActionButton,
  ErrorNotification,
  GeneralNotification,
  SuccessNotification
} from "./children";

const PortalHead = ({ menuButtons }) => {
  const buttons = menuButtons.map((item, index) => {
    if (item.type === "menu") {
      return (
        <MenuButton
          menuItems={item.menuItems}
          icon={item.icon}
          header={item.header}
          key={`${item.icon}-${index}`}
        />
      );
    } else if (item.type === "action") {
      return (
        <ActionButton
          icon={item.icon}
          action={item.action}
          key={`${item.icon}-${index}`}
          tooltip={item.tooltip}
        />
      );
    }
  });

  return (
    <React.Fragment>
      <div className="portal-notifications">
        <SuccessNotification />
        <GeneralNotification />
        <ErrorNotification />
      </div>
      <div className="portal-head-header">
        <div className="portal-logo-wrapper">
          <PortalLogo />
        </div>
        <div className="portal-buttons">{buttons.length ? buttons : null}</div>
        <style jsx="true">{`
          .portal-head-header {
            background-image: url(https://books-ui-assets.s3.amazonaws.com/neutral_gradient_2.svg);
            background-size: 100%;
            background-position: bottom;
            display: flex;
            flex-direction: row;
            justify-content: space-between;
            align-items: center;
            padding: 0px 0px 0px 24px;
            line-height: 30px;
            height: 64px;
            min-height: 64px;
            box-shadow: 2px 2px 2px var(--black-opaque-8);
            z-index: 10;
            position: -webkit-sticky;
            position: sticky;
            top: 0px;
          }

          .portal-head-header .portal-logo-wrapper {
            width: 290px;
          }

          .portal-notifications {
            display: flex;
            flex-grow: 1;
            position: relative;
            height: 0px;
            z-index: 500;
          }

          .portal-notifications .notification {
            display: flex;
            height: 40px;
            justify-content: space-between;
            flex-grow: 1;
            align-items: center;
            padding: 0px 8px 0px 16px;
            margin: 0px 320px;
            border-radius: 8px;
            color: var(--black);
            position: absolute;
            top: -50px;
            max-width: calc(100% - 540px);
            transition: top 0.5s ease;
            overflow: hidden;
          }

          .portal-notifications .notification p {
            margin-right: 24px;
            overflow: hidden;
            white-space: nowrap;
            text-overflow: ellipsis;
          }

          .portal-notifications .notification.show {
            top: 12px;
            transition: top 0.5s ease;
          }

          .portal-notifications .notification .close-message {
            cursor: pointer;
            height: 32px;
            width: 32px;
            display: flex;
            align-items: center;
            justify-content: center;
            border-radius: 8px;
          }

          .portal-notifications .notification .close-message:hover {
            background: var(--black-opaque-8);
          }

          .portal-head-header .portal-buttons {
            display: flex;
            justify-content: flex-end;
            align-items: center;
            width: 200px;
            padding-right: 16px;
          }

          .portal-head-header .pt-portal-head-menu-button,
          .portal-head-header .pt-portal-head-action-button {
            height: 40px;
            width: 40px;
            display: flex;
            align-items: center;
            justify-content: center;
            position: relative;
            border-radius: 8px;
          }

          .portal-head-header .pt-portal-head-menu-button:hover,
          .portal-head-header .pt-portal-head-action-button:hover {
            background: var(--grey-1-opaque);
          }

          .portal-head-header .pt-portal-head-action-button {
            cursor: pointer;
          }
        `}</style>
      </div>
    </React.Fragment>
  );
};

PortalHead.propTypes = {
  menuButtons: PropTypes.array
};

PortalHead.defaultProps = {
  menuButtons: []
};

export default PortalHead;

export const usePortalNotification = () => {
    const [currentTimeout, setCurrentTimeout] = useState();
    const [message, setMessage] = useState();
  
    const SUCCESS = "success";
    const GENERAL = "general";
    const ERROR = "error";
  
    const checkForShowing = () => {
      var error = document.getElementById(`pt-${ERROR}-notification`);
      var general = document.getElementById(`pt-${GENERAL}-notification`);
      var success = document.getElementById(`pt-${SUCCESS}-notification`);
      const show = "show";
      if (error.classList.contains(show)) {
        return error;
      } else if (general.classList.contains(show)) {
        return general;
      } else if (success.classList.contains(show)) {
        return success;
      } else {
        return null;
      }
    };
  
    const removeMessage = (element) => {
      element.classList.remove("show");
      setMessage(undefined);
    };
  
    useEffect(() => {
      const addMessage = (type) => (message) => {
        var element = document.getElementById(`pt-${type}-notification`);
        var messageElement = document.getElementById(`pt-${type}-message`);
        messageElement.innerHTML = message;
        element.classList.add("show");
  
        setCurrentTimeout(
          setTimeout(() => {
            removeMessage(element);
            setCurrentTimeout(undefined);
          }, 7000)
        );
      };
  
      const messageResponse = {
        error: addMessage(ERROR),
        success: addMessage(SUCCESS)
      };
      if (message) {
        messageResponse[message.type]
          ? messageResponse[message.type](message.message)
          : addMessage(GENERAL)(message.message);
      }
    }, [message]);
  
    const StatusMessage = (type) => (message) => {
      let showingElement = checkForShowing();
      if (showingElement) {
        removeMessage(showingElement);
        clearTimeout(currentTimeout);
        setTimeout(() => {
          setMessage({ type, message });
        }, 500);
      } else {
        setMessage({ type, message });
      }
    };
  
    return {
      ErrorMessage: StatusMessage(ERROR),
      SuccessMessage: StatusMessage(SUCCESS),
      GeneralMessage: StatusMessage(GENERAL)
    };
  };