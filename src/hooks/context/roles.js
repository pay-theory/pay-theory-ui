import React from 'react'

const RolesContext = React.createContext({ Roles: {} })

export const RolesProvider = RolesContext.Provider
export const RolesConsumer = RolesContext.Consumer
export default RolesContext
