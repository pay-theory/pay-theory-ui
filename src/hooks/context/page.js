import React from 'react'

const PageContext = React.createContext({ title: '', subtitle: '' })

export const PageProvider = PageContext.Provider
export const PageConsumer = PageContext.Consumer
export default PageContext
