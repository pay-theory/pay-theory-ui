# PaymentsOverview

A UI element for displaying a tabbed table component with payment items that can be sorted by All, Uncaptured, Succeeded, and Refunded. Utilizes the [CardTable](https://github.com/pay-theory/pay-theory-ui/tree/master/src/common/CardTable), [InnerTable](https://github.com/pay-theory/pay-theory-ui/tree/master/src/common/InnerTable), [TabMenu](https://github.com/pay-theory/pay-theory-ui/tree/master/src/common/TabMenu), and [SalesTab](https://github.com/pay-theory/pay-theory-ui/tree/master/src/admin/SalesTab) components 

## Hooks

* None

## Props

### optional

* **allItems**: PropTypes.array
    * array of payment objects to display in table when clicking on the All tab
* **uncapturedItems**: PropTypes.array
    * array of payment objects to display in table when clicking on the Uncaptured tab
* **refundedItems**: PropTypes.array
    * array of payment objects to display in table when clicking on the Refunded tab
* **succeededItems**: PropTypes.array
    * array of payment objects to display in table when clicking on the Succeeded tab
* **viewItem**: PropTypes.func
    * callback function that will tell the [InnerTable](https://github.com/pay-theory/pay-theory-ui/tree/master/src/common/InnerTable) what to do when the view button is clicked




