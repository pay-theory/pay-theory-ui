import React from 'react'

const DistrictsContext = React.createContext({})

export const DistrictsProvider = DistrictsContext.Provider
export const DistrictsConsumer = DistrictsContext.Consumer
export default DistrictsContext
