# Checkbox

A UI component that provides a styled checkbox input

## Hooks

-   None

## Props

### Required

-   **label**

    -   string that provides label for checkbox

-   **id**

    -   string that assigns test-id

-   **inputProps**

    - Object that contains other props that need to be passed to the input. Two you will need are checked and onChange.
```jsx
{
    checked: state,
    onChange: (e) => {
    setState(e.target.checked);
    }
}
```

### Optional

- **indeterminate**

    - boolean value that can tell the checkbox if it is in an indeterminate state
