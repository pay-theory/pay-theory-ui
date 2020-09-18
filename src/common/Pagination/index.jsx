import React, { useState, useEffect } from "react";
import PropTypes from 'prop-types';

const Pagination = ({ page, setPage, total }) => {
  const [pages, setPages] = useState([]);

  const updatePages = () => {
    if (total < 6) {
      const result = Array.from(Array(total).keys());
      return result.map((i) => ++i);
    }
    else if (page < 4) {
      return [1, 2, 3, 4, 5, "..."];
    }
    else if (page > total - 3) {
      return ["...", total - 4, total - 3, total - 2, total - 1, total];
    }
    else {
      return ["...", page - 2, page - 1, page, page + 1, page + 2, "..."];
    }
  };

  useEffect(() => {
    setPages(updatePages());
  }, [page]);

  return (
    <div className="pagination">
      {page === 1 ? (
        <div className="spacer" />
      ) : (
        <span>
          <i className="fas fa-chevron-double-left" onClick={() => setPage(1)} data-testid="jump-beginning" />
          <i className="fas fa-chevron-left" onClick={() => setPage(--page)} data-testid="previous" />
        </span>
      )}
      {pages.map((item, index) => {
        if (typeof item === "number") {
          return (
            <p
              className={`number ${page === item ? "active" : ""}`}
              data-testid="number"
              onClick={() => setPage(item)}
              key={`${item}-button`}
            >
              {item}
            </p>
          );
        } else {
          return <p className="elipses" key={`${item}-${index}`}>{item}</p>;
        }
      })}
      {page === total ? (
        <div className="spacer" />
      ) : (
        <span>
          <i className="fas fa-chevron-right" onClick={() => setPage(++page)} data-testid="next" />
          <i
            className="fas fa-chevron-double-right"
            onClick={() => setPage(total)}
            data-testid="jump-end"
          />
        </span>
      )}
      <style global="true" jsx="true">
        {`
          .pagination {
            display: flex;
            align-items: center;
            justify-content: center;
            -webkit-touch-callout: none; /* iOS Safari */
            -webkit-user-select: none; /* Safari */
            -khtml-user-select: none; /* Konqueror HTML */
            -moz-user-select: none; /* Old versions of Firefox */
            -ms-user-select: none; /* Internet Explorer/Edge */
            user-select: none;
            height: 30px;
          }
          .pagination i,
          .pagination p {
            padding: 5px 10px;
            cursor: pointer;
            color: #4098eb;
            height: 100%;
            border-radius: 5px;
          }

          .pagination i {
            width: 30px;
            padding: 5px 0px;
            text-align: center;
          }
          .pagination .active {
            color: #1f0a28;
            background-color: #cac4ca !important;
          }

          .pagination .elipses {
            cursor: default;
            color: #8e868f;
          }

          .pagination .number:hover,
          .pagination i:hover {
            background-color: #f2f2f2;
          }

          .pagination .spacer {
            width: 60px;
          }
        `}
      </style>
    </div>
  );
};

Pagination.propTypes = {
  page: PropTypes.number.isRequired,
  setPage: PropTypes.func.isRequired,
  total: PropTypes.number.isRequired
};

export default Pagination;
