# Button

A UI component that creates a styled button element

## Hooks

-   None

## Props

### Required

-   **name**: PropTypes.string.isRequired
    -   used for the element id, and test-id
-   **label**: PropTypes.string.isRequired
    -   a label text that appears in the button
-   **onClick**: PropTypes.string.isRequired
    -   function that will be called when the button is clicked

### Optional

-   **color**: PropTypes.string
    -   string that will set the color of the element. Options are primary or light. Primary is the default if no prop is passed.
-   **disabled**: PropTypes.bool
    -   a bool that sets if the button is disabled or not
-   **leadingIcon**: PropTypes.string
    -   a string that will set an icon before the label inside the button. Pull the name from the font-awesome library.
-   **trailingIcon**: PropTypes.string
    -    a string that will set an icon after the label inside the button. Pull the name from the font-awesome library.
-   **type**: PropTypes.string
    -   a string that sets the button type. Default is button but it can also be set to submit or reset.