# ExportCSV

A UI element for displaying a button that can export a CSV file for an array of objects passed to it

## Hooks

-   None

## Props

### Required

-   **id**: PropTypes.string.isRequired
    -   the id assigned to the element
-   **items**: PropTypes.array.isRequired
    -   an array of objects that will export as a CSV file
-   **fileName**: PropTypes.string.isRequired
    -   string that will be the name of the file when it is downloaded