import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom'

import '@testing-library/jest-dom/extend-expect'

import { render } from '@testing-library/react'

import SubsectionHead from '.'
import * as BooksHooks from '../../hooks'
import { parent, page } from '../../test-data'

test('display subsection head', async () => {
    const { getByText } = render(
        <Router>
            <BooksHooks.Context.Page.Provider value={page}>
                <BooksHooks.Context.Parent.Provider value={parent}>
                    <SubsectionHead />
                </BooksHooks.Context.Parent.Provider>
            </BooksHooks.Context.Page.Provider>
        </Router>
    )

    expect(getByText(page.subtitle)).toBeInTheDocument()
    expect(getByText('Back to test-parent')).toBeInTheDocument()
})
