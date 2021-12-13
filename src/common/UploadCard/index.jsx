import React, { useEffect } from "react";
import PropTypes from "prop-types";
import Icon from "../Icon";

const UploadCard = ({ uploadAction, className, fileType, message, name }) => {
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
    e.target.classList.add("active-drag");
  };

  const removeDragStyle = (e) => {
    e.target.classList.remove("active-drag");
  };

  const change = (e) => {
    uploadAction(e.target.files);
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
        }
        .pt-upload-card > *:not(:last-child) {
          margin-bottom: 8px;
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
      `}</style>
      <input
        type="file"
        id={`${name}-pt-dropzone-input`}
        name="filename"
        hidden="hidden"
        onChange={change}
        multiple
      />
      <Icon name="file-alt" tag="h3" />
      <div className="drag-message">
        <p
          className="select-upload-button"
          onClick={click}
        >{`Select a ${fileType}`}</p>
        {isAdvancedUpload ? <p>&nbsp;{`or drag it here to upload`}</p> : null}
      </div>
      <h5 className="grey">{message}</h5>
    </div>
  );
};

UploadCard.propTypes = {
  uploadAction: PropTypes.func.isRequired, 
  className: PropTypes.string, 
  fileType: PropTypes.string, 
  message: PropTypes.string.isRequired, 
  name: PropTypes.string.isRequired
};

UploadCard.defaultProps = {
  fileType: 'file'
}

export default UploadCard;