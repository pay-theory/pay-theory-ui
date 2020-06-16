import React from 'react'

const AccountsContext = React.createContext([])

export const AccountsProvider = AccountsContext.Provider
export const AccountsConsumer = AccountsContext.Consumer
export default AccountsContext
