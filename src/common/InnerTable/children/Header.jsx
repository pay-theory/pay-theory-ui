import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";

const Header = (props) => {
    const [arrow, setArrow] = useState(null);
    const { clicked, setClicked } = props;
    const className = `head ${props.className}`;

    const sortBy = (name) => {
        if (props.sort) {
            if (props.sort.ascending !== name && props.sort.descending !== name) {
                props.sort.descending = name;
                props.sort.ascending = "";
                setClicked(true);
            }
            else if (props.sort.descending === name) {
                props.sort.ascending = name;
                props.sort.descending = "";
                setClicked(true);
            }
            else {
                props.sort.ascending = "";
                props.sort.descending = "";
                setClicked(true);
            }
        }
    };

    useEffect(() => {
        if (props.sort && clicked) {
            if (props.sort.ascending === props.className) {
                setArrow(<i className="fas fa-caret-up" />);
                setClicked(false);
            }
            else if (props.sort.descending === props.className) {
                setArrow(<i className="fas fa-caret-down" />);
                setClicked(false);
            }
            else {
                setArrow(null);
                setClicked(false);
            }
        }
    }, [clicked]);

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
    click: PropTypes.bool,
    label: PropTypes.string.isRequired,
    itemKey: PropTypes.any,
    setClicked: PropTypes.func,
    sort: PropTypes.object
};

export default Header;
