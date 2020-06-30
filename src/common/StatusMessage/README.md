# StatusMessage

A set of components that generate messages for Error, Warning, and Success responses. Also includes a StockTags export with stock functions for each StatusMessage.

## Components

-   **ErrorMessage**
-   **SuccessMessage**
-   **WarningMessage**

## Hooks

-   None

## Props

### Required

-   **message**: PropTypes.string.isRequired
    -   The status message that is going to be displayed.

### optional

-   **removeWarning**, **removeError**, **removeSucess**: PropTypes.function
    -   Function to handle removing the message after a 4 second timeout

## Additional Exports

-   **StockTags**
    -   Set of three functions that return a corresponding Message Component **(StockTags.success, StockTags.error, and StockTags.warn)**. They accept optional arguments of a message object and a callback function to handle removing the message. If no arguments are passed it has a default message and handler.
