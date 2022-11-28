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

export const copyQrCode = (id) => {
  const canvas = document.getElementById(id);
  canvas.toBlob((blob) =>
    navigator.clipboard.write([new ClipboardItem({ "image/png": blob })])
  );
};

export const copyCanvas = canvas => {
  canvas.toBlob(blob => navigator.clipboard.write([new ClipboardItem({'image/png': blob})]))
}
