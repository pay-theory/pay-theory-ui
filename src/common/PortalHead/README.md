# Portal Head

A UI component that creates a header for the page with an optional logout button on the right side.

## Hooks

### Page Context Consumer

The page context provides the page name to the PortalLabel child component

### Account Context Consumer

The account context provides the user_name to the AccountMenuButton/Items child components

## Props

### optional

- logout: a function that should come from the useAuth0 context. If not included it will not show the AccountMenu.
