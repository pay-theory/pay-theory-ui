# FormChangePassword

A UI element that can be wrapped in an [AuthBox](https://github.com/pay-theory/pay-theory-ui/tree/master/src/common/auth/AuthBox) to create a change password field. Includes three [TextEntry](https://github.com/pay-theory/pay-theory-ui/tree/master/src/common/TextEntry) fields and a submit button.

## Hooks

- None

## Props

### Required

- **onSubmit**: PropTypes.func.isRequired
  - a callback function that is used to submit the password change when the Set Password button is clicked

### Optional

- error: PropTypes.string.isRequired
