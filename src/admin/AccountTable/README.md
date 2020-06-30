# AccountTable

A UI element for displaying a list of accounts in a CardTable.

## Hooks

- AccountsConsumer

## Props

### Required

- viewAccount: PropTypes.func.isRequired
  - view function for underlying InnerTable
  - `(key, name) => {}`
- deleteAccount: PropTypes.func.isRequired
  - delete function for underlying InnerTable
  - `(key, name) => {}`
