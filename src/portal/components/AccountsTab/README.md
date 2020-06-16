# BooksComponents.AccountsTab

A UI element for displaying a list of accounts in a TabPage.

## Hooks

* AccountsConsumer

## Props

* id: PropTypes.string.isRequired
  * the id for the underlying TabPage element to enable tabbing behavior
* visibility: PropTypes.string.isRequired
  * the visibility value for the underlying TabPage element to enable tabbing behavior
  * can be one of the following
    * tab-visible
    * gone
* viewAccount: PropTypes.func.isRequired
   * view function for underlying InnerTable
   * ```(key, name) => {}```
* deleteAccount: PropTypes.func.isRequired
   * delete function for underlying InnerTable
   * ```(key, name) => {}```