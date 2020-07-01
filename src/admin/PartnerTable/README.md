# PartnerTable

A UI element for displaying a table with all the partners that it pulls from the Partners Context. Utilizes the [CardTable](https://github.com/pay-theory/pay-theory-ui/tree/master/src/common/CardTable) and [InnerTable](https://github.com/pay-theory/pay-theory-ui/tree/master/src/common/InnerTable) components

## Hooks

-   BookHooks Partners Consumer

## Props

### Required

-   **viewPartner**: PropTypes.func.isRequired

    -   callback function that will tell the [InnerTable](https://github.com/pay-theory/pay-theory-ui/tree/master/src/common/InnerTable) what to do when the view button is clicked

-   **deletePartner**: PropTypes.func.isRequired

    -   callback function that will tell the [InnerTable](https://github.com/pay-theory/pay-theory-ui/tree/master/src/common/InnerTable) what to do when the delete button is clicked
