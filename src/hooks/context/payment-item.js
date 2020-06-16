import React from 'react'

const PaymentItemContext = React.createContext([])

export const PaymentItemProvider = PaymentItemContext.Provider
export const PaymentItemConsumer = PaymentItemContext.Consumer
export default PaymentItemContext
