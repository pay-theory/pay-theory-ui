import React, { useEffect } from "react";
import PropTypes from "prop-types";
import Icon from "../Icon";

const UploadCard = ({
  uploadAction,
  className,
  fileType,
  message,
  name,
  errorMessages,
  acceptedTypes
}) => {
  const click = () => {
    let realButton = document.getElementById(`${name}-pt-dropzone-input`);
    realButton.click();
  };

  useEffect(() => {
    const preventDefault = (e) => {
      e.preventDefault();
    };
    window.addEventListener("dragover", preventDefault);
    window.addEventListener("drop", preventDefault);

    return () => {
      window.removeEventListener("drop", preventDefault);
      window.removeEventListener("dragover", preventDefault);
    };
  }, []);

  var isAdvancedUpload = (function () {
    var div = document.createElement("div");
    return (
      ("draggable" in div || ("ondragstart" in div && "ondrop" in div)) &&
      "FormData" in window &&
      "FileReader" in window
    );
  })();

  const addDragStyle = (e) => {
    document.getElementById(`${name}-pt-dropzone`).classList.add("active-drag");
  };

  const removeDragStyle = (e) => {
    document
      .getElementById(`${name}-pt-dropzone`)
      .classList.remove("active-drag");
  };

  const change = (e) => {
    uploadAction(e.target.files);
    e.target.value = "";
  };

  const drop = (e) => {
    uploadAction(e.dataTransfer.files);
    removeDragStyle(e);
  };

  return (
    <div
      className={`pt-upload-card ${className} ${
        isAdvancedUpload ? "droppable" : ""
      }`}
      onDrop={drop}
      onDragOver={addDragStyle}
      onDragEnter={addDragStyle}
      onDragLeave={removeDragStyle}
      onDragEnd={removeDragStyle}
      data-testid="CardRow"
      id={`${name}-pt-dropzone`}
    >
      <style jsx="true">{`
        .pt-upload-card {
          display: flex;
          flex-direction: column;
          align-items: center;
          background-color: var(--white);
          border-radius: 8px;
          padding: 24px;
          border: 1px dashed var(--grey-1);
          flex-wrap: wrap;
          background-size: cover;
          width: 100%;
          text-align: center;
        }
        .pt-upload-card > *:not(:last-child) {
          margin-bottom: 8px;
        }

        .pt-upload-card > *:not(.drag-message) {
          pointer-events: none;
        }

        .drag-message {
          display: flex;
        }
        .drag-message .select-upload-button {
          color: var(--pt-purple);
          cursor: pointer;
        }
        .pt-upload-card.active-drag {
          background: var(--grey-1-opaque);
        }
        .pt-upload-card .error-messages > *:not(:last-child) {
          margin-bottom: 8px;
        }
        .pt-upload-card .error-messages .message {
          color: var(--raspberry);
        }
        .pt-upload-card .error-messages {
          overflow: hidden;
          transition: height 0.5s;
        }
      `}</style>
      <input
        type="file"
        id={`${name}-pt-dropzone-input`}
        name="filename"
        hidden="hidden"
        onChange={change}
        multiple
        accept={acceptedTypes ? acceptedTypes.join(", ") : ""}
      />
      <Icon name="file-alt" tag="h3" />
      <div
        className="drag-message"
        onDragOver={addDragStyle}
        onDragEnter={addDragStyle}
        onDragLeave={removeDragStyle}
        onDragEnd={removeDragStyle}
        onDrop={removeDragStyle}
      >
        <p
          className="select-upload-button"
          onClick={click}
        >{`Select a ${fileType}`}</p>
        {isAdvancedUpload ? <p>&nbsp;{`or drag it here to upload`}</p> : null}
      </div>
      <h5 className="grey">{message}</h5>
      <div
        className="error-messages"
        style={{ height: `${errorMessages ? errorMessages.length * 25 : 0}px` }}
      >
        {errorMessages?.map((error) => {
          return <h5 className="red message">{error}</h5>;
        })}
      </div>
    </div>
  );
};

UploadCard.propTypes = {
  uploadAction: PropTypes.func.isRequired,
  className: PropTypes.string,
  fileType: PropTypes.string,
  message: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  errorMessages: PropTypes.arrayOf(PropTypes.string)
};

UploadCard.defaultProps = {
  fileType: "file"
};

export default UploadCard;

