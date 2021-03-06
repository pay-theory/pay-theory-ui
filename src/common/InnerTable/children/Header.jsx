import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";

const Header = (props) => {
    const [arrow, setArrow] = useState(null);
    const className = `head ${props.className}`;

    const sortBy = (name) => {
        const newSort = {};
        if (props.sort) {
            if (props.sort.ascending !== name && props.sort.descending !== name) {
                newSort.ascending = name;
                newSort.descending = "";
                props.setSort(newSort)
            }
            else if (props.sort.ascending === name) {
                newSort.ascending = "";
                newSort.descending = name;
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
            if (props.sort.ascending === props.className.split(/\s/)[0]) {
                setArrow(<i className="fas fa-caret-down" />);
            }
            else if (props.sort.descending === props.className.split(/\s/)[0]) {
                setArrow(<i className="fas fa-caret-up" />);
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
      data-testid={`${props.className.split(/\s/)[0]}-${props.itemKey}`}
      onClick={() => sortBy(props.className.split(/\s/)[0])}
    >
      {props.label}
      {arrow}
      <style jsx="true">{`
        .head {
          font-size: 11pt;
          cursor: pointer;
          user-select: none;
        }

         .head:not(.sortable) {
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
