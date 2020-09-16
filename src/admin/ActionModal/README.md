# ActionModal

A UI element for displaying a modal that can be used to confirm an action before running it.

## Hooks

-   None

## Props

### Required

-   **action**: PropTypes.func.isRequired

    -   action that will be triggered when the action button is clicked

-   **actionName**: PropTypes.string.isRequired

    -   string that will be displayed as the label for the action button

-   **label**: PropTypes.string.isRequired

    -   The header that will be displayed at the top of the modal

-   **message**: PropTypes.string.isRequired

    -   the message that will be displayed between the header and the action and cancel button
