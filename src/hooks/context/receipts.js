import React from 'react'

const ReceiptsContext = React.createContext({})

export const ReceiptsProvider = ReceiptsContext.Provider
export const ReceiptsConsumer = ReceiptsContext.Consumer
export default ReceiptsContext
