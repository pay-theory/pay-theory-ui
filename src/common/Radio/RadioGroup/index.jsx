import React, { createContext } from "react";
import {useRadioGroupState} from 'react-stately';

import {useRadioGroup} from 'react-aria';

export const RadioContext = createContext(null);

function RadioGroup(props) {
  let { children, label, description, errorMessage, validationState } = props;
  let state = useRadioGroupState(props);
  let { radioGroupProps, labelProps, descriptionProps, errorMessageProps } =
    useRadioGroup(props, state);

  return (
    <div {...radioGroupProps}>
      <span {...labelProps}>{label}</span>
      <RadioContext.Provider value={state}>
        {children}
      </RadioContext.Provider>
      {description &&
        <div {...descriptionProps} style={{ fontSize: 12 }}>{description}</div>}
      {errorMessage && validationState === 'invalid' &&
        (
          <div {...errorMessageProps} style={{ color: 'red', fontSize: 12 }}>
            {errorMessage}
          </div>
        )}
    </div>
  );
}

export default RadioGroup
