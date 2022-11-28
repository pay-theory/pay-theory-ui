import React from "react";
import PropTypes from "prop-types";
import { QRCodeCanvas } from "qrcode.react";

const QRCode = ({ value, size, id, backgroundColor, color, logo }) => {
  const imageSettings = logo ? {
    src: logo,
    height: 24,
    width: 24,
    excavate: true
  } : null;

  return (
    <QRCodeCanvas
      className="pt-qr-code"
      id={id}
      value={value}
      size={size}
      bgColor={backgroundColor}
      fgColor={color}
      level={"H"}
      includeMargin={false}
      imageSettings={imageSettings}
    />
  );
};

QRCode.propTypes = {
  columns: PropTypes.array.isRequired,
  rows: PropTypes.array.isRequired,
  id: PropTypes.string.isRequired,
  emptyMessage: PropTypes.string,
  selected: PropTypes.object,
  setSelected: PropTypes.func
};

QRCode.defaultProps = {
  emptyMessage: "No Data Available"
};

export default QRCode;

export const downloadQrCode = (id, filename = "qrcode") => {
  const canvas = document.getElementById(id);
  const pngFile = canvas.toDataURL("image/png");
  console.log(pngFile);

  const downloadLink = document.createElement("a");
  downloadLink.download = filename;
  downloadLink.href = `${pngFile}`;
  downloadLink.click();
};

export const copyCanvas = (canvas, handleFailure = () => {}) => {
  const isSafari = /^((?!chrome|android).)*safari/i.test(navigator?.userAgent);
  const isNotFirefox = navigator.userAgent.indexOf("Firefox") < 0;
  if (isNotFirefox) {
    if (isSafari) {
      const blob = new Promise(resolve => canvas.toBlob(resolve));
      navigator.clipboard.write([
        new ClipboardItem({
          "image/png": blob
        })
      ])
        .then(() => {
          // Succeeded to write to clipboard
        })
        .catch((err) => {
          console.error("Error:", err)
          handleFailure();
        });
    } else {
      canvas.toBlob((blob) => {
        const image = new ClipboardItem({ "image/png": blob })
        navigator.clipboard.write([image])
          .then(() => {
            // Succeeded to write to clipboard
          })
          .catch((err) => {
            console.error("Error:", err)
            handleFailure();
          });
      })
    }
  } else {
    handleFailure();
  }
}

export const copyQrCode = (id, handleFailure = () => {}) => {
  const canvas = document.getElementById(id);
  copyCanvas(canvas, handleFailure);
};
