# RoleInfoTab

A UI element for displaying a tabbed table component with payment items that can be sorted by All, Uncaptured, Succeeded, and Refunded. Utilizes the [CardTable](https://github.com/pay-theory/pay-theory-ui/tree/master/src/common/CardTable), [InnerTable](https://github.com/pay-theory/pay-theory-ui/tree/master/src/common/InnerTable), [TabMenu](https://github.com/pay-theory/pay-theory-ui/tree/master/src/common/TabMenu), and [FormHead](https://github.com/pay-theory/pay-theory-ui/tree/master/src/common/FormHead) components

## Hooks

-   BookHooks Role Consumer

## Props

### Optional

-   **systemRoles**: PropTypes.array

    -   array of role objects for the system tab

-   **districtRoles**: PropTypes.array

    -   array of role objects for the district tab

-   **partnerRoles**: PropTypes.array

    -   array of role objects for the partner tab

-   **viewRole**: PropTypes.func

    -   callback function that will tell the [InnerTable](https://github.com/pay-theory/pay-theory-ui/tree/master/src/common/InnerTable) what to do when the view button is clicked

-   **deleteRole**: PropTypes.func

    -   callback function that will tell the [InnerTable](https://github.com/pay-theory/pay-theory-ui/tree/master/src/common/InnerTable) what to do when the delete button is clicked

-   **createRole**: PropTypes.func

    -   callback function that will run when the Create Role button is clicked and takes a string input that is the label pulled from the tab menu

-   **roleTypeChanged**: PropTypes.func
