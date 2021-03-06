# InnerTable

A UI component that builds a table with the ability to include delete or copy actions to each row.

## Hooks

-   None

## Props

### Required

-   **columns** : PropTypes.array.isRequired

    -   Array of objects with the column names and className for each element

-   **rows**: PropTypes.array.isRequired

    -   Array of objects representing each row with the data corosponding to each column and any callback functions for actions the table has

### Optional

-   **visibility**: PropTypes.bool

    -   Boolean that tells if there is a visibility callback in the row objecct

-   **hasActions**: PropTypes.bool

    -   Boolean telling the table if it should have an action column

-   **canDelete**: PropTypes.bool

    -   Boolean that tells if there is a delete callback in the row objects

-   **copyOnly**: PropTypes.bool

    -   Boolean that tells if there is a copy callback in the row object

- **otherActions**: Proptypes.array

    - Array of objects that create custom action button for the table. Obects should contain a label, icon, and corresponding action function.
        ```jsx
        {
            action: {() => {}}
            label: "Email"
            icon: "fa-envelope"
        }
        ```

-   **selected**: PropTypes.array

    -   Empty array that can be passed to allow user to select multiple rows to act upon. Array will include the index of the rows selected

-   **setSelected**: PropTypes.func

    -   Funciton that will allow the selected array to be set as the user makes chnages to the checkboxes at the begining of rows

-   **sort**

    -   Object that will keep track of the column you want to sort by ascending or descinding. You can pass it a blank object and it will then set the ascending and descinding keys on first click of header.