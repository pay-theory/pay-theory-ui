# ModalCreateAccount

A UI element for displaying a modal for creating a Pay Theory account. Utilizes the [ModalContent](https://github.com/pay-theory/pay-theory-ui/tree/master/src/common/ModalContent) and [ModalSpinner](https://github.com/pay-theory/pay-theory-ui/tree/master/src/common/ModalSpinner) components

## Hooks

-   None

## Props

### Required

-   **roleLabel**: PropTypes.string.isRequired
    -   string that is displayed in the header of the modal saying the type of account you are creating
-   **role**: PropTypes.string.isRequired
    -   string that will be passed to the state for the role type when creating the account
-   **createNewMember**: PropTypes.func.isRequired
    -   callback function that will handling creating an account being passed an account object as an argument
-   **setStatusMessage**: PropTypes.func.isRequired
    -   callback function that will set an error message being passed a [StockTags.error](https://github.com/pay-theory/pay-theory-ui/tree/master/src/common/StatusMessage) as an argument

### Optional

-   **merchant**: PropTypes.string
    -   string that will set a merchant value on the accoutn before created
