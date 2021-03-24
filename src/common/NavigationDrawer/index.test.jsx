import React from 'react'

import '@testing-library/jest-dom/extend-expect'

import { render } from '@testing-library/react'

import { BrowserRouter as Router } from 'react-router-dom'

import * as BooksHooks from '../../hooks'
import NavigationDrawer from '.'
import { menu, menuStyle } from '../../test-data'
import { NavigationCategory, NavigationItem } from './children'

test('nav drawer with list head renders', async() => {
    delete window.location
    window.location = {
        pathname: '/donations',
    }
    const { queryByTestId, getByText } = render(
        <Router>
            <BooksHooks.Context.Menu.Provider value={menu}>
                <NavigationDrawer style={menuStyle} listHead="header"/>
            </BooksHooks.Context.Menu.Provider>
        </Router>
    )

    expect(queryByTestId('nav-drawer')).toBeTruthy()
    expect(getByText(menu[0].label)).toBeInTheDocument()
})

test('nav drawer renders expanded', async() => {
    delete window.location
    window.location = {
        pathname: '/transactions/sales',
    }
    const { queryByTestId, getByText } = render(
        <Router>
            <BooksHooks.Context.Menu.Provider value={menu}>
                <NavigationDrawer style={menuStyle} />
            </BooksHooks.Context.Menu.Provider>
        </Router>
    )

    expect(queryByTestId('nav-drawer')).toBeTruthy()
    expect(getByText(menu[0].label)).toBeInTheDocument()
})

test('nav drawer empty menu renders', async() => {

    const { queryByTestId, getByText } = render(
        <Router>
            <BooksHooks.Context.Menu.Provider value={undefined}>
                <NavigationDrawer style={menuStyle} />
            </BooksHooks.Context.Menu.Provider>
        </Router>
    )

    expect(queryByTestId('nav-drawer')).toBeTruthy()
    expect(getByText('no menu items provided')).toBeInTheDocument()
})

test('nav item renders', async() => {
    delete window.location
    window.location = {
        pathname: '/donations',
    }
    const item = menu[0]
    const { queryByTestId, queryByText } = render(
        <Router>
            <NavigationItem item={item} className='' />
        </Router>
    )



    expect(queryByTestId(item.tag)).toBeTruthy()
    expect(queryByText(item.label)).toBeInTheDocument()
})

test('nav category renders', async() => {
    delete window.location
    window.location = {
        pathname: '/transactions/sales',
    }
    const item = menu[1]
    const createItem = jest.fn()
    const { queryByTestId, queryByText } = render(
        <NavigationCategory
            item={item}
            detailsOpen={false}
            createItem={createItem}
        />
    )

    expect(queryByTestId(item.tag)).toBeTruthy()
    expect(queryByText(item.label)).toBeInTheDocument()
    expect(createItem).toHaveBeenCalled()
})
