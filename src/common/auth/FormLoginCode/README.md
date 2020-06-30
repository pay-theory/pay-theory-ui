# FormLoginCode

A UI element that can be wrapped in an [AuthBox](https://github.com/pay-theory/pay-theory-ui/tree/master/src/common/auth/AuthBox) to create a login that authenticates uisng a code.

## Hooks

-   None

## Props

### Required

-   **onSubmit**: PropTypes.func.isRequired

    -   a callback function that is used to submit the password entry when the Log In button is clicked that takes in the props.user and input value as arguments

-   **onPassword**: PropTypes.func.isRequired

    -   a callback function that is called when someone clicks on the log in with password prompt that should take the customer to a different login window

-   **validate**

    -   a callback function that is used to validate the value of the input field every time it changes

-   **user**
    -   user info needed to be passed in to log in with code

### Optional

-   error: PropTypes.string.isRequired
