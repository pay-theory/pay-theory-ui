# ModalCreateRole

A UI element for displaying a modal for creating a new role. Utilizes the [ModalContent](https://github.com/pay-theory/pay-theory-ui/tree/master/src/common/ModalContent) and [ModalSpinner](https://github.com/pay-theory/pay-theory-ui/tree/master/src/common/ModalSpinner) components

## Hooks

* None

## Props

### Required

* **roleType**: PropTypes.string.isRequired
  * string that will be passed to the state for the role type when creating the account
* **createNewRole**: PropTypes.func.isRequired
  * callback function that will handling creating an account being passed an account object as an argument