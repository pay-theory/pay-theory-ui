/* eslint-disable no-unused-vars */
import React, {useState} from 'react'
import './index.css'

import {
    PortalHead,
    NavigationDrawer,
    GlobalStyle,
    BooksHooks,
    UtilityBar,
    PartnerOverviewCard,
    TabMenu,
    PartnerInfoTab,
    AccountsTab,
    SubsectionHead,
    FeeModeTab,
    NativeAppIdTab
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

    const merchant = {
          "id": 79,
          "UID": "88118123-f959-52d5-8ab2-cfe8d8ce139f",
          "sandbox_api_key_ref": "pdyjsvadk8",
          "sandbox_api_key": "pt-sandbox-dev-126e46f25dffb17e48b1319ab0a622dd",
          "production_api_key_ref": null,
          "production_api_key": null,
          "merchant_name": "Eighth Default Example",
          "merchant_id": "",
          "identity": "",
          "created": "2020-11-18T21:07:07.000Z",
          "modified": "2020-11-18T21:07:07.000Z"
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

    const MENU_ITEMS = {
        MERCHANT_INFO: {
            menu: 'merchant-info-menu',
            tab: 'merchant-info-tab',
        },
        USER_ACCOUNTS: {
            menu: 'merchant-accounts-menu',
            tab: 'merchant-accounts-tab',
        },
        FEE_MODE: {
            menu: 'fee-mode-menu',
            tab: 'fee-mode-tab',
        },
        NATIVE_ID: {
            menu: 'native-app-id-menu',
            tab: 'native-app-id-tab',
        },
    }

    const selectTab = selected => {
        const menu = document.getElementById(selected.menu)
        const tab = document.getElementById(selected.tab)

        tab.classList.remove('gone')
        tab.classList.add('tab-visible')
        menu.classList.add('active-tab')
    }
    const clearUnselected = unselected => {
        unselected.forEach(item => {
            const menu = document.getElementById(item.menu)
            const tab = document.getElementById(item.tab)
            tab.classList.remove('tab-visible')
            tab.classList.add('gone')
            menu.classList.remove('active-tab')
        })
    }
    const changeTab = selected => {
        /* istanbul ignore next */
        switch (selected) {
        case MENU_ITEMS.USER_ACCOUNTS:
            clearUnselected([MENU_ITEMS.MERCHANT_INFO, MENU_ITEMS.FEE_MODE, MENU_ITEMS.NATIVE_ID])
            break
        case MENU_ITEMS.FEE_MODE:
            clearUnselected([MENU_ITEMS.MERCHANT_INFO, MENU_ITEMS.USER_ACCOUNTS, MENU_ITEMS.NATIVE_ID])
            break
        case MENU_ITEMS.NATIVE_ID:
            clearUnselected([MENU_ITEMS.MERCHANT_INFO, MENU_ITEMS.USER_ACCOUNTS, MENU_ITEMS.FEE_MODE])
            break
        default:
            clearUnselected([MENU_ITEMS.USER_ACCOUNTS, MENU_ITEMS.FEE_MODE, MENU_ITEMS.NATIVE_ID])
        }
        selectTab(selected)
    }

    const feeModes = [{"id":95,"UID":"MPr7rWi2XfLhJdnEohimPMaM","merchant":3,"finix_merchant_id":"MUdjKDkHUB1ty1fpP5U9EwRK","finix_identity":"IDiGfyGRsAcvV2i34tnaWBLm","finix_fee_profile":null,"merchant_profile_name":"Development Team - Surcharge","fee_type":"combined","fee":290,"additional_fixed":30,"created":"2020-11-22T13:06:42.000Z","modified":"2020-11-22T13:06:42.000Z"},{"id":15,"UID":"MPg5rDFeQfgfdY3ygDk6zyPL","merchant":3,"finix_merchant_id":"MUwbjDR4Db8cw6q9jra8vp89","finix_identity":"IDeKodEH8qK1kKfGf32TEwTM","finix_fee_profile":"FPiWjvA1LaRe44VAWnZYteTc","merchant_profile_name":"Development Team - Fixed","fee_type":"fixed","fee":195,"additional_fixed":0,"created":"2020-11-02T18:08:03.000Z","modified":"2020-11-02T18:08:03.000Z"},{"id":13,"UID":"MPwvBzTGo7eFCqZdKa31TZcL","merchant":3,"finix_merchant_id":"MUmcW7JspHKtwDMuczyZToC3","finix_identity":"ID4CEeyYSetU2e845icF8GjF","finix_fee_profile":"FPcqXfxhfhHoYP8k4ZsUF8Q8","merchant_profile_name":"Development Team - Basis","fee_type":"basis","fee":380,"additional_fixed":0,"created":"2020-11-02T18:08:05.000Z","modified":"2020-11-02T18:08:05.000Z"}]

    const menuItems = [{
        id: MENU_ITEMS.MERCHANT_INFO.menu,
        label: 'Merchant Information',
        active: 'active-tab',
        action: () => changeTab(MENU_ITEMS.MERCHANT_INFO),
    },
    {
        id: MENU_ITEMS.USER_ACCOUNTS.menu,
        label: 'User Accounts',
        active: '',
        action: () => changeTab(MENU_ITEMS.USER_ACCOUNTS),
    },
    {
        id: MENU_ITEMS.FEE_MODE.menu,
        label: 'Fee Modes',
        active: '',
        action: () => changeTab(MENU_ITEMS.FEE_MODE),
    },
    {
        id: MENU_ITEMS.NATIVE_ID.menu,
        label: 'Native Credentials',
        active: '',
        action: () => changeTab(MENU_ITEMS.NATIVE_ID),
    }
]

    const pageMenu = generateDocumentationMenu()

    const tableRows = generateTableRows(itemsArray)

    const demoAccount = {
        nickname: "Demo Account"
      };

      const appIds = {
        ios: [
            {
                cf_bundle_identifier: "com.paytheory.app",
                apple_team_id: "paytheory"
            },
            {
                cf_bundle_identifier: "com.test.app",
                apple_team_id: "Test"
            },
        ],
        android: [
            {
              apk_digest_prod: "B2:7E:E6:53:91:3A:47:2D:82:DA:F5:7A:DE:86:96:DF:9D:01:DA:96:90:5B:1B:93:58:5E:23:F1:CA:D7:FB:47",
              apk_digest_debug: "B2:7E:E6:53:91:3A:47:2D:82:DA:F5:7A:DE:86:96:DF:9D:01:DA:96:90:5B:1B:93:58:5E:23:F1:CA:D7:FB:47",
              apk_package_name: "paytheory"
            },
            {
                apk_digest_prod: "com.test.app",
                apk_digest_debug: "com.paytheory.app",
                apk_package_name: "Test"
            },
        ],          
      }

    return (
        <div id='app' className='modal-wrapper'>
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
                                            <SubsectionHead />
                        <UtilityBar />
                        <BooksHooks.context.partner.Provider
                          value={merchant ? merchant : {}}
                        >
                          <div className="overview-detail-container">
                            <PartnerOverviewCard />
                            <div className="school-entry card rounded">
                              <div className="tab-contain">
                                <TabMenu
                                  items={menuItems}
                                />
                                <hr />
                                <PartnerInfoTab
                                  apiPrefix="paytheory-dev"
                                  savePartner={() => {}}
                                  setStatusMessage={
                                    () => {}
                                  }
                                  onGenerateApiKey={() => {}}
                                />

                                <BooksHooks.context.accounts.Provider
                                  value={[]}
                                >
                                  <AccountsTab
                                    id={
                                      MENU_ITEMS.USER_ACCOUNTS.tab
                                    }
                                    visibility="gone"
                                    viewAccount={() => {}}
                                    deleteAccount={() => {}}
                                  />
                                </BooksHooks.context.accounts.Provider>
                                <FeeModeTab feeModes={feeModes} />
                                <NativeAppIdTab 
                                addAction={e => {console.log(e)}}
                                android={appIds.android} 
                                deleteAction={e => {console.log(e)}}
                                ios={appIds.ios}
                                />
                              </div>
                            </div>
                          </div>
                        </BooksHooks.context.partner.Provider>
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
