# ReceiptReviewTable

A UI element for displaying a table component with a review of all reciepts in a district. Utilizes the [InnerTable](https://github.com/pay-theory/pay-theory-ui/tree/master/src/common/InnerTable) and [FormHead](https://github.com/pay-theory/pay-theory-ui/tree/master/src/common/FormHead) components 

## Hooks

* BooksHooks District Consumer
* BooksHooks recieptReview Consumer

## Props

### optional

* **goBackTo**: PropTypes.string
    * string of pathname to add to history if it fails to parse the reciept data properly
* **history**: PropTypes.array
    * array of the router history
* **viewDetails**: PropTypes.func
    * callback function that will tell the [InnerTable](https://github.com/pay-theory/pay-theory-ui/tree/master/src/common/InnerTable) what to do when the view button is clicked
* **isPreview**: PropTypes.bool
    * bool that tells component if it should show the Accept & Send button at the bottom of the table
* **onAccept**: PropTypes.func
    * tells the Accept & Send button what to do when clicked.





