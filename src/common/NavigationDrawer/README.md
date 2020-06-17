# Navigation Drawer

A UI component that creates a navigation drawer containing the menu for the current page. 

## Hooks

### Menu Context Hook
Consumes an array value passed to the Menu context and maps it to the NavDrawer

## Props

### Required
* style: contains an object defining certain style atributes such as background and font colors. Object example below.
 ```jsx
 const navStyle = {
        background: '#F4F4F4',
        hoverBackground: '#E8ECEF',
        fontColor: '#A3B3C4',
        hoverFontColor: '#6B7887'
    }
```

### Optional
* listHead: A header for the nav list used primarily in our documentation pages