# SettlementDetails

A UI component that displays all the details from one specific settlement

## Hooks

-   None

## Props

### Required

-   **settlement**: PropTypes.object.isRequired
    -   object typically pulled from API that includes settlement details and an array of the transactions included in the settlement
-   **viewTransaction**: PropTypes.func.isRequired
    -   a function that should allow you to view more details of the specific transaction by loading a page with a [TransactionDetails](https://github.com/pay-theory/pay-theory-ui/tree/master/src/admin/TransactionDetails) component
-   **handleRefund**: PropTypes.func.isRequired
    -   a function called to refund a transaction when the action button is pressed at the end of a row
-   **exportCSV**: PropTypes.func.isRequired
    -   a function called to export a CSV file containing any selected rows of data.
-   **selected**: PropTypes.array.isRequired
    -   should be a blank array passed to the component that can be changed as checkbox at the begining of each row is selected to identify which rows are selected by their index
-   **setSelected**: PropTypes.string.isRequired
    -   a function that allow the selected array to be set whenever a checkbox at the begining of the row is selected
-   **sort**: PropTypes.object.isRequired
    -   Object that will keep track of the column you want to sort by ascending or descinding. You can pass it a blank object and it will then set the ascending and descinding keys on first click of header.
-   **setSort**: PropTypes.func.isRequired
    -   a function that allow the sort object to be set whenever a column head is clicked
-   **page**: PropTypes.number.isRequired
    -   the default page data you want loaded from the API. Should be set to 1 for default.
-   **setPage**: PropTypes.func.isRequired
    -   a function that allow the page nuber to be updated when the pagination component is used
-   **total**: PropTypes.number.isRequired
    -   the number of total pages that can be pagenated through. Data should be passed through from the API.

### Optional

-   None