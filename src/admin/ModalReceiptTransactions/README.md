# ModalReceiptTransactions

A UI element for displaying a modal with a table of transactions. Utilizes the [ModalContent](https://github.com/pay-theory/pay-theory-ui/tree/master/src/common/ModalContent) and [InnerTable](https://github.com/pay-theory/pay-theory-ui/tree/master/src/common/InnerTable) components

## Hooks

-   None

## Props

### Required

-   **school**: PropTypes.string.isRequired
    -   string that shows up in modal header
-   **account**: PropTypes.string.isRequired
    -   string that shows up in modal header
-   **transactions**: PropTypes.array.isRequired
    -   array of transaction objects that will be displayed in the table
        ```
        {
          student_id: '',
          student_name: ',
          payment_no: '',
          description: '',
          account_code: '',
          fee_type: '',
          fee: ''
        }
        ```
