/* eslint-disable no-unused-vars */
import React from 'react'
import 'pay-theory-ui/dist/index.css'

import {
    PortalHead,
    NavigationDrawer,
    GlobalStyle,
    BooksHooks,
    TransactionsTable,
    BodyHead
} from 'pay-theory-ui'
import { BrowserRouter as Router } from 'react-router-dom'

import { paymentItem, checkout, classicDistrict, payment, invoiceItems } from './example-data'

import transactions from './example-data/transactions.json'

export default function App(props) {
    const generateDocumentationMenu = () => {
        return {
            listHead: 'Documentation Test',
            menu: [
                {
                    className: 'active',
                    tag: 'install',
                    label: 'Install',
                    isCategory: true,
                    subContent: [
                        {
                            to: 'import-install-npm',
                            className: 'active',
                            tag: 'import-install-npm',
                            label: 'Install NPM'
                        }
                    ]
                },
                {
                    className: 'active',
                    tag: 'usage',
                    label: 'Usage',
                    isCategory: true,
                    subContent: [
                        {
                            to: 'usage-import',
                            className: 'active',
                            tag: 'usage-import',
                            label: 'Import'
                        },
                        {
                            to: 'usage-configure',
                            className: 'active',
                            tag: 'usage-configure',
                            label: 'Configure'
                        },
                        {
                            to: 'usage-process-payments',
                            className: 'active',
                            tag: 'usage-process-payments',
                            label: 'Process payments'
                        }
                    ]
                }
            ]
        }
    }

    const generateTableColumns = () => {
        return [
            { className: 'item-name', label: 'name' },
            { className: 'item-description', label: 'description' }
        ]
    }

    const itemsArray = [
        { name: 'test-one', description: 'this is the first test row' },
        { name: 'test-two', description: 'this is the second test row' }
    ]

    const generateTableRows = (items) => {
        return items.map((item, i) => {
            return {
                columns: [
                    {
                        className: 'name',
                        content: item.name
                    },
                    {
                        className: 'description',
                        content: item.description
                    }
                ],
                key: `test-key-${i}`
            }
        })
    }

    const paged = {
        title: 'Pay Theory UI',
        subtitle: 'UI Playground'
    }

    const pageMenu = generateDocumentationMenu()

    const tableRows = generateTableRows(itemsArray)

    const demoAccount = {
        nickname: "Demo Account"
      };

    return (
        <div id='app'>
            <Router>
            <BooksHooks.context.account.Provider value={demoAccount}>
                <BooksHooks.context.paymentItem.Provider value={paymentItem}>
                    <BooksHooks.context.checkout.Provider value={checkout}>
                        <BooksHooks.context.district.Provider
                            value={classicDistrict}
                        >
                            <BooksHooks.context.menu.Provider
                                value={pageMenu.menu}
                            >
                                <GlobalStyle />
                                <BooksHooks.context.page.Provider value={paged}>
                                    <div id='container'>
                                        <PortalHead logout={() => {}}/>
                                        <div className='body-container'>
                                            <NavigationDrawer
                                                listHead={pageMenu.listHead}
                                            />
                                            <div className='body-content'>
                                            <BodyHead />
                                            <TransactionsTable transactions={transactions._embedded.transfers} viewTransaction={() => {}} />
                                            </div>
                                        </div>
                                    </div>
                                </BooksHooks.context.page.Provider>
                            </BooksHooks.context.menu.Provider>
                        </BooksHooks.context.district.Provider>
                    </BooksHooks.context.checkout.Provider>
                </BooksHooks.context.paymentItem.Provider>
                </BooksHooks.context.account.Provider>
            </Router>
        </div>
    )
}
