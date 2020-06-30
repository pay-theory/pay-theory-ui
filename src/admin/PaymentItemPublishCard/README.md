# PaymentItemPublishCard

A UI element that displays a a card for a Pay Theory payment item and allows you to save it as a draft, preview the payment item or publish it.

## Hooks

-   BookHooks PaymentItem Consumer

## Props

### Required

-   **onSave**: PropTypes.func.isRequired
    -   callback function that would save a draft of the payment item when button clicked
-   **onPreview**: PropTypes.func.isRequired
    -   callback function that would display a preview of the payment item when button clicked
-   **onPublish**: PropTypes.func.isRequired
    -   callback function that would publish the payment item when button clicked
