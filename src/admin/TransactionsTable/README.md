# TransactionsTable

A UI component that creates a table to display transactions

## Hooks

-   None

## Props

### Required

-   **transactions**: PropTypes.array.isRequired
    -   array of transactions that will be displayed in the table. Should be retrieved from the API.
-   **viewTransaction**: PropTypes.func.isRequired
    -   a function that should allow you to view more details of the specific transaction by loading a page with a [TransactionDetails](https://github.com/pay-theory/pay-theory-ui/tree/master/src/admin/TransactionDetails) component
-   **handleRefund**: PropTypes.func.isRequired
    -   a function called to refund a transaction when the action button is pressed at the end of a row
-   **handleResendingEmail**: PropTypes.func.isRequired
    -   a function called to resend an email to the end user when the action button is pressed at the end of a row
-   **selected**: PropTypes.array.isRequired
    -   should be a blank array passed to the component that can be changed as checkbox at the begining of each row is selected to identify which rows are selected by their index
-   **setSelected**: PropTypes.string.isRequired
    -   a function that allow the selected array to be set whenever a checkbox at the begining of the row is selected
-   **sort**: PropTypes.object.isRequired
    -   Object that will keep track of the column you want to sort by ascending or descinding. You can pass it a blank object and it will then set the ascending and descinding keys on first click of header.

### Optional

-   None