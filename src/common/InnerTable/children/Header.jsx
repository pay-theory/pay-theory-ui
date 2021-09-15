import React, {
  useEffect,
  useState,
  useRef,
  useCallback,
  useContext
} from "react";
import PropTypes from "prop-types";
import { TableContext } from "../index";

const Header = ({
  className,
  itemKey,
  label,
  type,
  width,
  minWidth,
  final
}) => {
  const { updateWidth, rowWidth, parentWidth } = useContext(TableContext);
  const header = useRef();
  const [widthState, setWidthState] = useState(
    width ? width : type === "action" ? 48 : 150
  );
  const [start, setStart] = useState(null);
  const [resizing, isResizing] = useState(false);
  const [minWidthState] = useState(
    minWidth ? minWidth : type === "action" ? 48 : 100
  );
  const name = `head ${className} no-select`;

  const mouseDown = (e) => {
    isResizing(widthState);
    setStart(e.screenX);
  };

  const mouseUp = (e) => {
    isResizing(false);
    setStart(null);
  };

  const mouseMove = useCallback(
    (e) => {
      if (start && resizing) {
        const newLocation = e.screenX;
        const diff = newLocation - start;
        const newWidth = resizing + diff;
        setWidthState(newWidth > minWidthState ? newWidth : minWidthState);
      }
    },
    [start, resizing, minWidthState]
  );

  useEffect(() => {
    document.addEventListener("mousemove", mouseMove);
    document.addEventListener("mouseup", mouseUp);
    return () => {
      document.removeEventListener("mousemove", mouseMove);
      document.removeEventListener("mouseup", mouseUp);
    };
  }, [mouseMove, resizing]);

  useEffect(() => {
    updateWidth(className, widthState);
  }, [widthState, className]);

  return (
    <th
      className={name}
      ref={header}
      key={`${className}-${itemKey}`}
      data-testid={`${className.split(/\s/)[0]}-${itemKey}`}
      style={{
        width: final
          ? parentWidth > rowWidth
            ? "auto"
            : `${widthState}px`
          : `${widthState}px`
      }}
    >
      <p className="content">{label}</p>
      <span
        className="header-divider"
        onMouseDown={mouseDown}
        onMouseUp={mouseUp}
      />
    </th>
  );
};

Header.propTypes = {
  type: PropTypes.string.isRequired,
  width: PropTypes.number,
  minWidth: PropTypes.number,
  className: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  itemKey: PropTypes.any,
  final: PropTypes.bool
};

export default Header;
