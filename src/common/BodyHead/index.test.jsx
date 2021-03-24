import React from 'react'

import '@testing-library/jest-dom/extend-expect'

import { render } from '@testing-library/react'

import BodyHead from '.'
import { BodySubtitle, BodyTitle } from './children'

import * as BooksHooks from '../../hooks'

import { page } from '../../test-data'

test('display body head', async () => {
    const { getByText } = render(
        <BooksHooks.Context.Page.Provider value={page}>
            <BodyHead />
        </BooksHooks.Context.Page.Provider>
    )

    expect(getByText(page.subtitle)).toBeInTheDocument()

    expect(getByText(page.title)).toBeInTheDocument()
})

test('display body subtitle', async () => {
    const { getByText } = render(
        <BooksHooks.Context.Page.Provider value={page}>
            <BodySubtitle />
        </BooksHooks.Context.Page.Provider>
    )

    expect(getByText(page.subtitle)).toBeInTheDocument()
})

test('display body title', async () => {
    const { getByText } = render(
        <BooksHooks.Context.Page.Provider value={page}>
            <BodyTitle />
        </BooksHooks.Context.Page.Provider>
    )

    expect(getByText(page.title)).toBeInTheDocument()
})
