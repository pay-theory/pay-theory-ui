import React, { useState } from "react";
import PropTypes from "prop-types";
import IconButton from "../IconButton";

const FORWARD = "FORWARD";
const BACK = "BACK";
const FIRST = "FIRST";
const LAST = "LAST";

const Pagination = ({ onPaginate, totalPages, page }) => {
  const setOldest = () => {
    if (page !== totalPages) {
      onPaginate(LAST);
    }
  };

  const setNewest = () => {
    if (page !== 1) {
      onPaginate(FIRST);
    }
  };

  const previousPage = () => {
    onPaginate(BACK);
  };

  const nextPage = () => {
    onPaginate(FORWARD);
  };

  return (
    <div className="pt-pagination">
      <IconButton
        disabled={page === 1}
        icon="chevron-left"
        onClick={previousPage}
      />
      <div
        className={`pagination-number-wrapper ${
          totalPages > 2 ? "" : "disabled"
        }`}
      >
        <p className="pagination-number">{`${page} OF ${totalPages || 1}`}</p>
        <div className="sort-menu">
          <p className={page === 1 ? "disabled" : ""} onClick={setNewest}>
            Newest
          </p>
          <p
            className={page === totalPages ? "disabled" : ""}
            onClick={setOldest}
          >
            Oldest
          </p>
        </div>
      </div>
      <IconButton
        disabled={page === totalPages || totalPages <= 1}
        icon="chevron-right"
        onClick={nextPage}
      />
      <style global="true" jsx="true">
        {`
          .pt-pagination {
            display: flex;
            position: relative;
            align-items: center;
            align-self: flex-start;
            -webkit-touch-callout: none; /* iOS Safari */
            -webkit-user-select: none; /* Safari */
            -khtml-user-select: none; /* Konqueror HTML */
            -moz-user-select: none; /* Old versions of Firefox */
            -ms-user-select: none; /* Internet Explorer/Edge */
            user-select: none;
            height: 40px;
            font-family: var(--secondary-font);
            padding-left: 16px;
          }

          .pt-pagination
            .pagination-number-wrapper:not(.disabled):hover
            .sort-menu,
          .pt-pagination .pagination-number-wrapper .sort-menu:hover {
            display: block;
          }

          .pt-pagination .pagination-number-wrapper {
            padding: 8px 0px;
          }

          .pt-pagination .sort-menu {
            border: 1px solid var(--black);
            border-radius: 16px;
            padding: 8px;
            background: var(--white);
            position: absolute;
            top: 32px;
            left: 50%;
            transform: translateX(-50%);
            z-index: 3;
            overflow: hidden;
            display: none;
          }

          .pt-pagination .sort-menu p {
            padding: 12px 16px;
            border-radius: 16px;
          }

          .pt-pagination .sort-menu p.disabled {
            color: var(--grey-1);
          }

          .pt-pagination .sort-menu p:not(.disabled):hover {
            background: var(--grey-2);
            cursor: pointer;
          }

          .pagination-number-wrapper {
            position: relative;
            margin: 0px 8px;
          }
        `}
      </style>
    </div>
  );
};

Pagination.propTypes = {
  onPaginate: PropTypes.func.isRequired
};

export default Pagination;
