import React from "react";
import PropTypes from "prop-types";

import { ModalContent, Button, closeModal, actionName } from "../../common";

const ActionModal = ({ label, message, action }) => {
  return (
    <ModalContent text={label} data-testid="confirm-action">
      <div className="confirm-action-content">
        <p>{message}</p>
        <div className="buttons">
          <Button small label={actionName} onClick={action} name="refund-button" />
          <Button
            small
            label="Cancel"
            onClick={() => closeModal()}
            name="cancel-button"
            color="light"
          />
        </div>
      </div>
      <style jsx="true">{`
        .confirm-action-content {
          margin: 10px;
        }
        .confirm-action-content .buttons {
          display: flex;
          width: auto;
          justify-content: space-around;
          margin-top: 15px;
        }

        .confirm-action-content .buttons button {
          width: 33%;
        }

        .modal-form-on {
          height: auto !important;
        }
      `}</style>
    </ModalContent>
  );
};

ActionModal.propTypes = {
  action: PropTypes.func.isRequired,
  actionName: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  message: PropTypes.string.isRequired
};

export default ActionModal;
