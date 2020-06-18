import React from 'react'

import '@testing-library/jest-dom/extend-expect'

import { render } from '@testing-library/react'

import PartnerOverviewCard from './'
import * as BooksHooks from '../../hooks'
import { partner } from '../../test-data'

test('display partner overview', async () => {
    // eslint-disable-next-line no-unused-vars
    const { getByText, queryByTestId } = render(
        <BooksHooks.context.partner.Provider value={partner}>
            <PartnerOverviewCard />
        </BooksHooks.context.partner.Provider>
    )
})
