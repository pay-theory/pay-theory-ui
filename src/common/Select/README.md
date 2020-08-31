# Select

A UI component that creates a styled select element for forms

## Hooks

-   None

## Props

### Required

-   **label**: PropTypes.string.isRequired
    -   a label text that appears as the label and moves to the border when select is focused or a value is selected.
-   **onChange**: PropTypes.func.isRequired
    -   function that triggers on chnage event and should set the value to what the user selected
-   **options**: PropTypes.array.isRequired
    -   array of objects that will be included in the select element. Objects should includ the value and label and optionally can include disable if you want to disable certain options.
-   **value**: PropTypes.string.isRequired
    -   the value that should reflect what is selected in the element. Allows the component to know if it is empty or not to move the label when needed.

### Optional

-   **className**: PropTypes.string
    -   string that allows you to set an additional class name on the outer wrapper of the element