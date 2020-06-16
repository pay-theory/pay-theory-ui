import React from 'react'

const ParentContext = React.createContext({ parent: {} })

export const ParentProvider = ParentContext.Provider
export const ParentConsumer = ParentContext.Consumer
export default ParentContext
