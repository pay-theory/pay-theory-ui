import React from 'react'

const PartnerContext = React.createContext({})

export const PartnerProvider = PartnerContext.Provider
export const PartnerConsumer = PartnerContext.Consumer
export default PartnerContext
