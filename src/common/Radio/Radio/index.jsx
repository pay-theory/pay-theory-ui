import React, { useContext, useRef } from "react";

import { useFocusRing, VisuallyHidden, useRadio } from "react-aria";

import { RadioContext } from "../RadioGroup";

const Radio = (props) => {
  let { children } = props;
  let state = useContext(RadioContext);
  let ref = useRef(null);
  let { inputProps, isSelected, isDisabled } = useRadio(props, state, ref);
  let { isFocusVisible, focusProps } = useFocusRing();
  let strokeWidth = isSelected ? 5 : 1;

  return (
    <label
      style={{
        display: "flex",
        alignItems: "center",
        opacity: isDisabled ? 0.4 : 1
      }}
    >
      <VisuallyHidden>
        <input {...inputProps} {...focusProps} ref={ref} />
      </VisuallyHidden>
      <svg width={32} height={32} aria-hidden="true" style={{ marginRight: 4 }}>
        <circle
          cx={16}
          cy={16}
          r={10 - strokeWidth / 2}
          fill="none"
          stroke={isSelected ? "var(--pt-purple)" : "var(--black)"}
          strokeWidth={strokeWidth}
        />
        {isFocusVisible && (
          <circle
            cx={16}
            cy={16}
            r={13}
            fill="none"
            stroke="var(--pt-purple)"
            strokeWidth={2}
          />
        )}
      </svg>
      {children}
    </label>
  );
};

export default Radio;
