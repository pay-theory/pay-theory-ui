# FormLoginAlternative

A UI element that can be wrapped in an [AuthBox](https://github.com/pay-theory/pay-theory-ui/tree/master/src/common/auth/AuthBox) to create a login field uisng a password.

## Hooks

-   None

## Props

### Required

-   **onSubmit**: PropTypes.func.isRequired

    -   a callback function that is used to submit the password entry when the Log In button is clicked

-   **forgotPassword**: PropTypes.func.isRequired
    -   a callback function that is called when someone clicks on the forgot password prompt that should take the customer to a change password form

### Optional

-   error: PropTypes.string.isRequired
