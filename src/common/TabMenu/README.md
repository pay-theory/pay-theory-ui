# TabMenu

A UI component that creates a tabbed menu that trigger a callback function when clicked.

## Hooks

- None

## Props

### Required

- **items**: PropTypes.array.isRequired
  - An array of Objects that create the tabs for the menu with the following values
    - id: String for assigning the ID, Test-ID and Key
    - active: String to tell which tab is active. Inactive should be a blank string. Active should be "active-tab"
    - action: Callback function that tabs will call when clicked.
    - label: String that is displayed inside the tab
