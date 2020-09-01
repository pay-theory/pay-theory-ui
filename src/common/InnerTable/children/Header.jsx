import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";

const Header = (props) => {
    const [arrow, setArrow] = useState(null);
    const className = `head ${props.className}`;

    const sortBy = (name) => {
        const newSort = {};
        if (props.sort) {
            if (props.sort.ascending !== name && props.sort.descending !== name) {
                newSort.descending = name;
                newSort.ascending = "";
                props.setSort(newSort)
            }
            else if (props.sort.descending === name) {
                newSort.descending = "";
                newSort.ascending = name;
                props.setSort(newSort)
            }
            else {
                newSort.descending = "";
                newSort.ascending = "";
                props.setSort(newSort)
            }
        }
    };

    useEffect(() => {
        if (props.sort) {
            if (props.sort.ascending === props.className) {
                setArrow(<i className="fas fa-caret-up" />);
            }
            else if (props.sort.descending === props.className) {
                setArrow(<i className="fas fa-caret-down" />);
            }
            else {
                setArrow(null);
            }
        }
    }, [props.sort]);

    return (
        <span
      className={className}
      key={`${props.className}-${props.itemKey}`}
      data-testid={`${props.className}-${props.itemKey}`}
      onClick={() => sortBy(props.className)}
    >
      {props.label}
      {arrow}
      <style jsx="true">{`
        .head {
          font-size: 11pt;
          cursor: pointer;
          user-select: none;
        }

        .head.actions {
          cursor: default;
        }

        .head i {
          margin-left: 7px;
        }
      `}</style>
    </span>
    );
};

Header.propTypes = {
    className: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    itemKey: PropTypes.any,
    setSort: PropTypes.func,
    sort: PropTypes.object
};

export default Header;
