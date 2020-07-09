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
