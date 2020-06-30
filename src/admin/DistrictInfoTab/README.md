# DistrictInfoTab

A UI element for displaying a list of districts in a TabPage.

## Hooks

- DistrictConsumer

## Props

- saveDistrict: PropTypes.func.isRequired

  - function to save changes to a district
  - `(district) => {}`

- setStatusMessage: PropTypes.func.isRequired
  - pass a status message as JSX content to be displayed
  - `(JSX) => {}`

## District Object

```
{
    district_name: '',
    district_nickname: '',
    district_phone: '',
    district_email: '',
    district_website: '',
    district_ncesid: '',
    district_country: '',
    district_timezone: '',
    district_street: '',
    district_city: '',
    district_state: '',
    district_zipcode: '',
}
```
