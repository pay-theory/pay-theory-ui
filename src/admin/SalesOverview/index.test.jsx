import React from 'react'

import '@testing-library/jest-dom/extend-expect'

import { render, fireEvent } from '@testing-library/react'

import SalesOverview from './'
import { sales } from '../../test-data'

test('display sales overview with content', async () => {
    const viewItem = jest.fn()
    const { queryAllByTestId, queryByTestId } = render(
        <SalesOverview
            allItems={sales.allItems}
            invoiceItems={sales.invoices}
            donationItems={sales.donations}
            viewItem={viewItem}
        />
    )

    fireEvent.click(queryAllByTestId('view-action')[0])
    expect(viewItem).toHaveBeenCalledTimes(1)

    expect(queryByTestId('all-sales-menu')).toHaveClass('active-tab')
    expect(queryByTestId('donation-sales-menu')).not.toHaveClass('active-tab')
    expect(queryByTestId('invoice-sales-menu')).not.toHaveClass('active-tab')

    fireEvent.click(queryByTestId('donation-sales-menu'))
    expect(queryByTestId('donation-sales-menu')).toHaveClass('active-tab')
    expect(queryByTestId('all-sales-menu')).not.toHaveClass('active-tab')
    expect(queryByTestId('invoice-sales-menu')).not.toHaveClass('active-tab')

    expect(queryByTestId('invoice-sales-menu')).not.toHaveClass('active-tab')
    fireEvent.click(queryByTestId('invoice-sales-menu'))
    expect(queryByTestId('invoice-sales-menu')).toHaveClass('active-tab')
    expect(queryByTestId('donation-sales-menu')).not.toHaveClass('active-tab')

    expect(queryByTestId('all-sales-menu')).not.toHaveClass('active-tab')
    fireEvent.click(queryByTestId('all-sales-menu'))
    expect(queryByTestId('invoice-sales-menu')).not.toHaveClass('active-tab')
    expect(queryByTestId('donation-sales-menu')).not.toHaveClass('active-tab')
    expect(queryByTestId('all-sales-menu')).toHaveClass('active-tab')
})

test('display sales overview without content', async () => {
    const viewItem = jest.fn()
    const { queryAllByTestId } = render(
        <SalesOverview
            allItems={[]}
            invoiceItems={[]}
            donationItems={[]}
            viewItem={viewItem}
        />
    )
    expect(queryAllByTestId('view-action')).toEqual([])
})
