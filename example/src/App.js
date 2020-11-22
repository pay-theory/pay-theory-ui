/* eslint-disable no-unused-vars */
import React, {useState} from 'react'
import './index.css'

import {
    PortalHead,
    NavigationDrawer,
    GlobalStyle,
    BooksHooks,
    TransactionsTable,
    BodyHead,
    FilterBar,
    SubsectionHead
} from 'pay-theory-ui'
import { BrowserRouter as Router } from 'react-router-dom'

import { paymentItem, checkout, classicDistrict, transactions, invoiceItems } from './example-data'

export default function App(props) {
    const [selected, setSelected] = useState([])
    const [sort, setSort] = useState({})
    const [page, setPage] = useState(1);
    const [filterList, setFilterList] = useState([])
    const [showFilters, setShowFilters] = useState(false)

    const filterUsed = (type) => {
        return filterList.some((filter) => filter.category === type);
    };
    

    const options = [{
        label: "Transaction ID",
        value: "ft.id",
        disabled: filterUsed("transfer_id")
    },
    {
        label: "Updated Before",
        value: "updated_before",
        disabled: filterUsed("updated_before")
    },
    {
        label: "Updated After",
        value: "updated_after",
        disabled: filterUsed("updated_after")
    },
    {
        label: "First Name",
        value: "first_name",
        disabled: filterUsed("first_name")
    },
    {
        label: "Last Name",
        value: "last_name",
        disabled: filterUsed("last_name")
    },
    {
        label: "Amount",
        value: "ft.amount",
        disabled: filterUsed("amount")
    },
    {
        label: "Status",
        value: "ft.state",
        disabled: filterUsed("state")
    },
    {
        label: "Card Brand",
        value: "fin.brand",
        disabled: filterUsed("fin.brand")
    },
    {
        label: "Settlement",
        value: "fst.batch_id",
        disabled: filterUsed("settlement")
    }
];

const parent = { parent: "Payments", route: "test" }
    const generateDocumentationMenu = () => {
        return {
            listHead: 'Documentation Test',
            menu: [
                {
                    className: 'active',
                    tag: 'install',
                    label: 'Install',
                    isCategory: true,
                    icon: 'usd-square',
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
                    icon: 'exchange-alt',
                    subContent: [
                        {
                            to: 'usage-import',
                            className: 'active',
                            tag: 'usage-import',
                            icon: 'users-cog',
                            label: 'Import'
                        },
                        {
                            to: 'usage-configure',
                            className: 'active',
                            tag: 'usage-configure',
                            icon: 'exchange-alt',
                            label: 'Configure'
                        },
                        {
                            to: 'usage-process-payments',
                            className: 'active',
                            tag: 'usage-process-payments',
                            icon: 'exchange-alt',
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

    const updateSort = sort => {
        setSort(sort)
        setPage(1)
    }

    const updatePage = page => {
        setPage(page)
    }

    const updateFilters = list => {
        setFilterList(list);
        setPage(1)
    }

    const pageMenu = generateDocumentationMenu()

    const tableRows = generateTableRows(itemsArray)

    const demoAccount = {
        nickname: "Demo Account"
      };

    return (
        <div id='app'>
            <Router>
            <BooksHooks.context.parent.Provider value={parent}>
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
                                            <p
                                                className="filter-toggle"
                                                onClick={() => {
                                                    setShowFilters(!showFilters);
                                                }}
                                                >
                                                Add filters{" "}
                                                <i
                                                    className={`fas fa-caret-right show-filter-${
                                                    showFilters ? "open" : "closed"
                                                    }`}
                                                />
                                                </p>
                                                <div className={showFilters ? "show-bar" : "hide-bar"}>
                                            <FilterBar
                                            filterList={filterList}
                                            setFilterList={updateFilters}
                                            filterOptions={options}
                                            />
                                            </div>
                                            <TransactionsTable
                                                transactions={transactions}
                                                handleRefund={() => {}}
                                                viewTransaction={() => {}}
                                                selected={selected}
                                                setSelected={setSelected}
                                                sort={sort}
                                                setSort={updateSort}
                                                page={page}
                                                setPage={updatePage}
                                                total={12}
                                                viewSettlement={() => {}}
                                            />
                                            </div>
                                        </div>
                                    </div>
                                </BooksHooks.context.page.Provider>
                            </BooksHooks.context.menu.Provider>
                        </BooksHooks.context.district.Provider>
                    </BooksHooks.context.checkout.Provider>
                </BooksHooks.context.paymentItem.Provider>
                </BooksHooks.context.account.Provider>
                </BooksHooks.context.parent.Provider>
            </Router>
            <style jsx="true">{`
        .filter-toggle {
          margin: 0px 24px 10px;
          cursor: pointer;
          width: 100px;
        }
        .filter-toggle i {
          margin-left: 5px;
        }
        
        .show-bar {
          height: 127px;
          overflow: hidden;
          transition: height 0.2s;
        }

        .hide-bar {
          height: 0px;
          overflow: hidden;
          transition: height 0.2s;
        }

        .show-filter-open {
          transform: rotate(90deg);
          transition: transform 0.1s;
        }

        .show-filter-closed {
          transform: rotate(0deg);
          transition: transform 0.1s;
        }
      `}</style>
        </div>
    )
}
