import React from 'react'
import styles from './styles.module.css'

export const TestComponent = ({ text }) => {
    return <div className={styles.test}>Test: {text}</div>
}

export { context as BooksHooks } from './hooks'

export { Auth0Context, useAuth0, Auth0Provider } from './hooks/external/auth0'
