import React from 'react'

const MemberContext = React.createContext({})

export const MemberProvider = MemberContext.Provider
export const MemberConsumer = MemberContext.Consumer
export default MemberContext
