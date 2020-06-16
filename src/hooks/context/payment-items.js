import React from 'react'

const PaymentItemsContext = React.createContext([])

export const PaymentItemsProvider = PaymentItemsContext.Provider
export const PaymentItemsConsumer = PaymentItemsContext.Consumer
export default PaymentItemsContext
