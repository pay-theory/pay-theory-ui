# ModalCreatePaymentItem

A UI element for displaying a modal for creating a payment item. Utilizes the [ModalContent](https://github.com/pay-theory/pay-theory-ui/tree/master/src/common/ModalContent) component

## Hooks

- None

## Props

### Required

- **itemType**: PropTypes.string.isRequired
  - string that is displayed in the header of the modal saying the type of account you are creating
- **createPaymentItem**: PropTypes.func.isRequired
  - callback function that will handling creating a payment item being passed a payment item object as an argument
