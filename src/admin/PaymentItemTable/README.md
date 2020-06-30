# PaymentItemTable

A UI element for displaying a table with all the payment items that it pulls from the PaymentItems Context. Utilizes the [CardTable](https://github.com/pay-theory/pay-theory-ui/tree/master/src/common/CardTable) and [InnerTable](https://github.com/pay-theory/pay-theory-ui/tree/master/src/common/InnerTable) components

## Hooks

-   BookHooks PaymentItems Consumer

## Props

### Required

-   **viewPaymentItem**: PropTypes.func.isRequired
    -   callback function that will tell the [InnerTable](https://github.com/pay-theory/pay-theory-ui/tree/master/src/common/InnerTable) what to do when the view button is clicked
-   **deletePaymentItem**: PropTypes.func.isRequired
    -   callback function that will tell the [InnerTable](https://github.com/pay-theory/pay-theory-ui/tree/master/src/common/InnerTable) what to do when the delete button is clicked
