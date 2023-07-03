import React, { useState } from "react";
import PropTypes from "prop-types";
import Tooltip from "../../Tooltip";
import Icon from "../../Icon";

const ClickToCopyCol = ({ className, row, col, content, color }) => {
  const INITIAL = "Click to Copy";
  const SUCCESS = "Copied!";
  const [label, setLabel] = useState(INITIAL);

  const changeLabel = () => {
    setLabel(SUCCESS);
    setTimeout(() => {
      setLabel(INITIAL);
    }, 2000);
  };

  function fallbackCopyTextToClipboard() {
    const textArea = document.createElement("textarea");
    textArea.value = content;

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
      navigator.clipboard.writeText(content).then(
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
    <td
      className={`cell click-to-copy ${className}`}
      data-testid="unlinked-column"
      key={`${className}-${row}-${col}`}
    >
      <Tooltip text={label}>
        <div
          className={`content`}
          style={{ color: `var(--${color})` }}
          onClick={(e) => {
            e.stopPropagation();
            copyTextToClipboard();
          }}
        >
          <p>{content}</p>
          <Icon name={"copy"} />
        </div>
      </Tooltip>
      <style jsx="true">
        {`
          .cell.click-to-copy .pt-tooltip .pt-tooltiptext {
            z-index: 10;
          }
        `}
      </style>
    </td>
  );
};

ClickToCopyCol.propTypes = {
  className: PropTypes.string.isRequired,
  row: PropTypes.number.isRequired,
  col: PropTypes.number.isRequired,
  content: PropTypes.string.isRequired
};

export default ClickToCopyCol;
