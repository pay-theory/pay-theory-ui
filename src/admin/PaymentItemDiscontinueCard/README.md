# PaymentItemDiscontinueCard

A UI element that displays a a card for a Pay Theory payment item and allows you to copy a link to this item or discontinue it.

## Hooks

-   BookHooks PaymentItem Consumer

## Props

### Required

-   **onDiscontinue**: PropTypes.func.isRequired
    -   callback function that would discontinue the payment item when button clicked
-   **copyLink**: PropTypes.func.isRequired
    -   callback function that would copy a link to the payment item when button clicked
