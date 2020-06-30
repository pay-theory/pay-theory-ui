# ReceiptsTable

A UI element for displaying a table with all the receipts that it pulls from the Receipts Context. Utilizes the [CardTable](https://github.com/pay-theory/pay-theory-ui/tree/master/src/common/CardTable) and [InnerTable](https://github.com/pay-theory/pay-theory-ui/tree/master/src/common/InnerTable) components

## Hooks

- BookHooks Receipts Consumer

## Props

### Required

- **viewUpload**: PropTypes.func.isRequired
  - callback function that will be tell the [InnerTable](https://github.com/pay-theory/pay-theory-ui/tree/master/src/common/InnerTable) what to do when the view button is clicked
