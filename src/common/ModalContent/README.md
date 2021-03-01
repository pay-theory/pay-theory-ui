# ModalContent

A UI component that allows for a pop up Modal with a header and whatever children components are input.

## Hooks

-   None

## Props

### optional

-   **text**: PropTypes.string
    -   Text to be used as a header for the modal box

-   **identifier**: PropTypes.string
    -   Text be useed to help differentiate between modals if multiple are being used on a single page. This same string should be passed to the openModal and closeModal functions to help identifiy the DOM element to target.

-   **closeAction**: PropTypes.func
    -   Optional function that will run when you close the modal. Helps if you need to do things like reset state of objects inside the modal.
## Additional Exports

-   **openModal**

    -   function that allows the modal to be shown. Optionally accepts a string to tell which modal to open. (see identifier prop in modal)

-   **closeModal**
    -   function that allows the modal to be hidden. Optionally accepts a string to tell which modal to close. (see identifier prop in modal)
