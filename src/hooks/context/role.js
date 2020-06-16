import React from 'react'

const RoleContext = React.createContext({ Role: {} })

export const RoleProvider = RoleContext.Provider
export const RoleConsumer = RoleContext.Consumer
export default RoleContext
