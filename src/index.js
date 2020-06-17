import React from 'react'
import styles from './styles.module.css'

export const TestComponent = ({ text }) => {
	return <div className={styles.test}>Test: {text}</div>
}

export * as BooksHooks from './hooks'

export * as authHook from './hooks/external/auth0'

export * from './common'

export * from './documentation'
