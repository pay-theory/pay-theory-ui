# DistrictTable

A UI element for displaying a list of districts in a CardTable.

## Hooks

-   DistrictsConsumer

## Props

-   viewDistrict: PropTypes.func.isRequired

    -   view function for underlying InnerTable

    -   `(key, name) => {}`

-   deleteDistrict: PropTypes.func.isRequired

    -   delete function for underlying InnerTable

    -   `(key, name) => {}`
