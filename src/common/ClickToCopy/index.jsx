import React, { useState } from "react";
import PropTypes from "prop-types";
import IconButton from "../IconButton";

const ClickToCopy = ({ text, left, right , bottom }) => {
  const INITIAL = "Click to Copy";
  const COPY = "copy";
  const SUCCESS = "Copied!";
  const [label, setLabel] = useState(INITIAL);

  const changeLabel = () => {
    setLabel(SUCCESS);
    setTimeout(() => {
      setLabel(INITIAL);
    }, 5000);
  };

  function fallbackCopyTextToClipboard() {
    var textArea = document.createElement("textarea");
    textArea.value = text;

    // Avoid scrolling to bottom
    textArea.style.top = "0";
    textArea.style.left = "0";
    textArea.style.position = "fixed";

    document.body.appendChild(textArea);
    textArea.focus();
    textArea.select();

    try {
      document.execCommand("copy");
      changeLabel();
    } catch (err) {
      console.error("Copy: Oops, unable to copy", err);
    }

    document.body.removeChild(textArea);
  }
  function copyTextToClipboard() {
    if (label === INITIAL) {
      if (!navigator.clipboard) {
        fallbackCopyTextToClipboard();
        return;
      }
      navigator.clipboard.writeText(text).then(
        function () {
          console.log("Async: Copying to clipboard was successful!");
          changeLabel();
        },
        function (err) {
          fallbackCopyTextToClipboard();
        }
      );
    }
  }

  return (
    <div className="pt-click-to-copy">
      <IconButton icon={COPY} label={label} onClick={copyTextToClipboard} left={left} right={right} bottom={bottom}  />
      <style jsx="true" global="true">
        {`
          .pt-click-to-copy {
            align-self: flex-start;
          }
        `}
      </style>
    </div>
  );
};

ClickToCopy.propTypes = {
  text: PropTypes.string.isRequired
};

export default ClickToCopy;
