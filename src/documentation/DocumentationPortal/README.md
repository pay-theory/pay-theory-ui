# Documentation Portal

A UI component that sets up needed components to create a Documentation Page

## Hooks

* none

## Props

### Required
* generateMenu: a function provided that returns an array of menu item objects to provide to the menu context and NavigationDrawer. Menu Item objects should look like below. 

```jsx
{
      to: '/',
      className: "active",
      tag: "connections",
      icon: "plug",
      label: "Connections",
      isCategory: false
    },
    {
      className: "active",
      tag: "transactions",
      icon: "file-invoice-dollar",
      label: "Transactions",
      isCategory: true,
      subContent: [
        {
          to: '/transactions/sales',
          className: "active",
          tag: "sales",
          icon: "usd-square",
          label: "Sales"
        }
      ]
    }
```



* paged: an object that contains the page title and subtitle.

```jsx
{
    title: "Pay Theory UI",
    subtitle: "UI Playground"
  }
```