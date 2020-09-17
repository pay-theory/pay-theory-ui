import React, { useEffect } from "react";
import PropTypes from "prop-types";

import { arrayToCSV } from '../generalUtils'

const ExportCSV = ({ id, items, fileName }) => {
  useEffect(() => {
    if (items.length > 0) {
      var text = arrayToCSV(items);
      var data = new Blob([text], { type: "text/csv" });

      var url = URL.createObjectURL(data);

      document.getElementById(id).href = url;
    }
    else {
      document.getElementById(id).href = null;
    }
  }, [items]);
  return (
    <a
      className={`export-csv ${items.length ? "active" : ""}`}
      id={id}
      data-testid="export-csv"
      download={fileName}
      href=""
      onClick={(e) => {
        if (items.length === 0) e.preventDefault();
      }}
    >
      <i className="fas fa-file-csv" />
      <p>Export CSV</p>
      <style global="true" jsx="true">
        {`
          .export-csv,
          .export-csv:hover,
          .export-csv:active {
            display: flex;
            align-items: center;
            justify-content: center;
            position: absolute;
            left: 30px;
            text-decoration: none;
            cursor: default;
            color: #666666;
            background-color: #e8ecef;
            padding: 0px 16px;
            height: 35px;
            border-radius: 5px;
            box-shadow: 1px 1px 1px #888888;
          }

          .export-csv i {
            font-size: 20px;
            margin-right: 10px;
          }

          .export-csv.active {
            color: #4098eb;
            cursor: pointer;
            font-family: inherit;
            font-size: 16px;
            box-shadow: 1px 1px 1px #888888;
            border: none;
            color: white;
            background-color: #0199ed;
          }
        `}
      </style>
    </a>
  );
};

ExportCSV.propTypes = {
  id: PropTypes.string.isRequired,
  items: PropTypes.array.isRequired,
  fileName: PropTypes.string.isRequired,
};

export default ExportCSV;