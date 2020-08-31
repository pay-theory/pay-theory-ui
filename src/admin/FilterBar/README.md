# FilterBar

A UI component that creates a search bar to add filters to an array specifically designed for [InnerTable](https://github.com/pay-theory/pay-theory-ui/tree/master/src/common/InnerTable) or [TransactionsTable](https://github.com/pay-theory/pay-theory-ui/tree/master/src/admin/TransactionsTable)

## Hooks

-   None

## Props

### Required

-   **filterList**: PropTypes.array.isRequired
    -   the array that you wish to apply filters to
-   **setFilterList**: PropTypes.func.isRequired
    -   the function that allows you to set the array supplied in filterList
-   **filterOptions**: PropTypes.array.isRequired
    -   an array of objects that will set the select element with the available filters you can apply to the filterList

### Optional

-  None