# NativeAppIdTab

A UI element for displaying a list of the merchants Native App Credentials and Adding new ones.

## Hooks

-   None

## Props

- **android**: PropTypes.array.isRequired
    - Array of android native credential objects that will be displayed in the table

- **ios**: PropTypes.array.isRequired
    - Array of iOS native credential objects that will be displayed in the table

- **deleteAction**: PropTypes.func.isRequired
    - function that will be called when you confirm a deletion of a native credential. Passed an object with platform and data.

- **addAction**: PropTypes.func.isRequired
    - function called when you try and add a set of credentials from the pop up modal. Passed an object with platform and data.
