import React from 'react'

const DistrictContext = React.createContext({})

export const DistrictProvider = DistrictContext.Provider
export const DistrictConsumer = DistrictContext.Consumer
export default DistrictContext
