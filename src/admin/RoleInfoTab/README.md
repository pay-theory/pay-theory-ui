# RoleInfoTab

A UI element that shows the details of a specific role and allows you to change access if it is unlocked

## Hooks

- BookHooks Role Consumer

## Props

### Required

- **setStatusMessage**: PropTypes.func.isRequired
  - callback function that sets and error message and takes a StockTags.error as an argument from [StatusMessage](https://github.com/pay-theory/pay-theory-ui/tree/master/src/common/StatusMessage)

### Optional

- **saveRole**: PropTypes.func
  - function to save a role after changes have been made
