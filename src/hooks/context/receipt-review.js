import React from 'react'

const ReceiptReviewContext = React.createContext([])

export const ReceiptReviewProvider = ReceiptReviewContext.Provider
export const ReceiptReviewConsumer = ReceiptReviewContext.Consumer
export default ReceiptReviewContext
