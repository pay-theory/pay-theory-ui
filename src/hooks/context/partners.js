import React from 'react'

const PartnersContext = React.createContext({})

export const PartnersProvider = PartnersContext.Provider
export const PartnersConsumer = PartnersContext.Consumer
export default PartnersContext
