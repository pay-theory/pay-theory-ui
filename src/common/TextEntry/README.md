# TextEntry

A UI component that creates a text entry field

## Hooks

- None

## Props

### Required

- **name**: PropTypes.string.isRequired
  - used for the element id, test-id, and className
- **label**: PropTypes.string.isRequired
  - a label text that appears as the floating label or placeholder.

### Optional

- **value**: PropTypes.string
  - value of the input
- **onChange**: PropTypes.any
  - change event handler
- **leadingIcon**: PropTypes.any
  - an icon element that appears as the leading icon
- **trailingIcon**: PropTypes.any
  - an icon element that appears as the trailing ico
- **type**: PropTypes.string
  - string defining the type of input field it is such as password or email. Defaults to text.
- **pattern**: PropTypes.string
  - a regular expression that the input element's value is checked against on form submission
- **required**: PropTypes.bool
  - boolean defining if input is required for the form
- **disabled**: PropTypes.bool
  - boolean that disables the input and the parent text field
- **autoComplete**: PropTypes.string
  - tells browser if the text field should be able to autocomplete
- **helperText**: PropTypes.string
  - String that appears as helper text below the text field
- **isValid**: PropTypes.bool
  - If set, this value will override the native input's validation
- **onClick**: PropTypes.func
  - click event handler
- **onBlur**: PropTypes.func
  - blur event handler
- **onFocus**: PropTypes.func
  - focus event handler
