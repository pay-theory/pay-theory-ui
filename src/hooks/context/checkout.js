import React from 'react'

const CheckoutContext = React.createContext({ Account: {} })

export const CheckoutProvider = CheckoutContext.Provider
export const CheckoutConsumer = CheckoutContext.Consumer
export default CheckoutContext
