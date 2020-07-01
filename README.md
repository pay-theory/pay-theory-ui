# pay-theory-ui

UI component library for use in Pay Theory web apps

[![NPM](https://img.shields.io/npm/v/test.svg)](https://www.npmjs.com/package/test) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install --save pay-theory-ui
```

## Hooks

-   Hooks maintain the application state between pages and components

-   They wrap portions of the application providing context

-   imported via `import { BooksHooks } from "@paytheory/pay-theory-ui"`

-   JSX example

```jsx
<BooksHooks.context.menu.Provider value={generateMenu()}>
	<NavigationDrawer />
</BooksHooks.context.menu.Provider>
```

### Application Hooks

-   checkout - provides base URL for checkout links

-   menu - provides menu items for the navigation drawer

-   page - provides page meta data

-   parent - provides navigation details for child pages

### Application Data Hooks

#### User Accounts

-   account - basic user account detail (used for user menu)

-   member - detailed user account detail (used for user overview)

-   accounts - list of user accounts

#### Districts

-   district - district detail

-   districts - district list

#### Partners

-   partner - partner detail

-   partners - partner list

#### Payment Items

-   payment-item - payment item detail

-   payment-items - payment item list

#### Receipts

-   receipt - receipt detail

-   receipts - receipt list

#### Roles

-   role - role detail

-   roles - role list

## Components

-   Components are custom HTML elements that encapsulate pay theory branding and user experience

-   They are composed into pages by our application to deliver our app

-   each component imported individually via `import { BodyHead } from "@paytheory/pay-theory-ui"`

-   JSX example `<BodyHead />`

## Common

-   [BodyHead](https://github.com/pay-theory/pay-theory-ui/tree/master/src/common/BodyHead)

-   [CardRow](https://github.com/pay-theory/pay-theory-ui/tree/master/src/common/CardRow)

-   [CardTable](https://github.com/pay-theory/pay-theory-ui/tree/master/src/common/CardTable)

-   [ClickToCopyText](https://github.com/pay-theory/pay-theory-ui/tree/master/src/common/ClickToCopyText)

-   [DynamicList](https://github.com/pay-theory/pay-theory-ui/tree/master/src/common/DynamicList)

-   [FormHead](https://github.com/pay-theory/pay-theory-ui/tree/master/src/common/FormHead)

-   [GlobalStyle](https://github.com/pay-theory/pay-theory-ui/tree/master/src/common/components/GlobalStyle)

-   [InnerTable](https://github.com/pay-theory/pay-theory-ui/tree/master/src/common/InnerTable)

-   [ModalContent](https://github.com/pay-theory/pay-theory-ui/tree/master/src/common/ModalContent)

-   [ModalSpinner](https://github.com/pay-theory/pay-theory-ui/tree/master/src/common/ModalSpinner)

-   [NavigationDrawer](https://github.com/pay-theory/pay-theory-ui/tree/master/src/common/NavigationDrawer)

-   [PortalHead](https://github.com/pay-theory/pay-theory-ui/tree/master/src/common/PortalHead)

-   [SubsectionHead](https://github.com/pay-theory/pay-theory-ui/tree/master/src/common/SubsectionHead)

-   [TabMenu](https://github.com/pay-theory/pay-theory-ui/tree/master/src/common/TabMenu)

-   [TabPage](https://github.com/pay-theory/pay-theory-ui/tree/master/src/common/TabPage)

-   [TextEntry](https://github.com/pay-theory/pay-theory-ui/tree/master/src/common/TextEntry)

-   [TextEntryCurrency](https://github.com/pay-theory/pay-theory-ui/tree/master/src/common/TextEntryCurrency)

-   [TextEntryPercentage](https://github.com/pay-theory/pay-theory-ui/tree/master/src/common/TextEntryPercentage)

-   [UtilityBar](https://github.com/pay-theory/pay-theory-ui/tree/master/src/common/UtilityBar)

### Auth

-   [AuthBG](https://github.com/pay-theory/pay-theory-ui/tree/dev/src/common/auth/AuthBg)

-   [AuthBox](https://github.com/pay-theory/pay-theory-ui/tree/dev/src/common/auth/AuthBox)

-   [AuthStyle](https://github.com/pay-theory/pay-theory-ui/tree/dev/src/common/auth/AuthStyle)

-   [Bouncer](https://github.com/pay-theory/pay-theory-ui/tree/dev/src/common/auth/Bouncer)

-   [FormChangePassword](https://github.com/pay-theory/pay-theory-ui/tree/dev/src/common/auth/FormChangePassword)

-   [FormHeader](https://github.com/pay-theory/pay-theory-ui/tree/dev/src/common/auth/FormHeader)

-   [FormLoginAlternative](https://github.com/pay-theory/pay-theory-ui/tree/dev/src/common/auth/FormLoginAlternative)

-   [FormLoginCode](https://github.com/pay-theory/pay-theory-ui/tree/dev/src/common/auth/FormLoginCode)

-   [FormLoginEmail](https://github.com/pay-theory/pay-theory-ui/tree/dev/src/common/auth/FormLoginEmail)

-   [LogoHeader](https://github.com/pay-theory/pay-theory-ui/tree/dev/src/common/auth/LoginHeader)

## Admin

### Admin User Accounts

-   [AccountOverview](https://github.com/pay-theory/pay-theory-ui/tree/master/src/admin/AccountOverview)

-   [AccountOverviewCard](https://github.com/pay-theory/pay-theory-ui/tree/master/src/admin/AccountOverviewCard)

-   [AccountsTab](https://github.com/pay-theory/pay-theory-ui/tree/master/src/admin/AccountsTab)

-   [AccountTable](https://github.com/pay-theory/pay-theory-ui/tree/master/src/admin/AccountTable)

-   [ModalCreateAccount](https://github.com/pay-theory/pay-theory-ui/tree/master/src/admin/ModalCreateAccount)

### User Roles

-   [RoleInfoTab](https://github.com/pay-theory/pay-theory-ui/tree/master/src/admin/RoleInfoTab)

-   [RolesOverview](https://github.com/pay-theory/pay-theory-ui/tree/master/src/admin/RolesOverview)

-   [RolesTab](https://github.com/pay-theory/pay-theory-ui/tree/master/src/admin/RolesTab)

-   [ModalCreateRole](https://github.com/pay-theory/pay-theory-ui/tree/master/src/admin/ModalCreateRole)

### Connections

-   [ConnectionColumn](https://github.com/pay-theory/pay-theory-ui/tree/master/src/admin/ConnectionColumn)

-   [ConnectionEntry](https://github.com/pay-theory/pay-theory-ui/tree/master/src/admin/ConnectionEntry)

### District

-   [DistrictInfoTab](https://github.com/pay-theory/pay-theory-ui/tree/master/src/admin/DistrictInfoTab)

-   [DistrictOverviewCard](https://github.com/pay-theory/pay-theory-ui/tree/master/src/admin/DistrictOverviewCard)

-   [DistrictTable](https://github.com/pay-theory/pay-theory-ui/tree/master/src/admin/DistrictTable)

-   [ModalCreateDistrict](https://github.com/pay-theory/pay-theory-ui/tree/master/src/admin/ModalCreateDistrict)

### Donation / Payment Item

-   [DonationItemEntry](https://github.com/pay-theory/pay-theory-ui/tree/master/src/admin/DonationItemEntry)

-   [PaymentItemPublishCard](https://github.com/pay-theory/pay-theory-ui/tree/master/src/admin/PaymentItemPublishCard)

-   [PaymentItemDiscontinueCard](https://github.com/pay-theory/pay-theory-ui/tree/master/src/admin/PaymentItemDiscontinueCard)

-   [PaymentItemTable](https://github.com/pay-theory/pay-theory-ui/tree/master/src/admin/PaymentItemTable)

-   [ModalCreatePaymentItem](https://github.com/pay-theory/pay-theory-ui/tree/master/src/admin/ModalCreatePaymentItem)

### Partner

-   [PartnerInfoTab](https://github.com/pay-theory/pay-theory-ui/tree/master/src/admin/PartnerInfoTab)

-   [PartnerOverviewCard](https://github.com/pay-theory/pay-theory-ui/tree/master/src/admin/PartnerOverviewCard)

-   [PartnerTable](https://github.com/pay-theory/pay-theory-ui/tree/master/src/admin/PartnerTable)

-   [ModalCreatePartner](https://github.com/pay-theory/pay-theory-ui/tree/master/src/admin/ModalCreatePartner)

### Receipts Components

-   [ReceiptReviewTable](https://github.com/pay-theory/pay-theory-ui/tree/master/src/admin/ReceiptReviewTable)

-   [ReceiptsTable](https://github.com/pay-theory/pay-theory-ui/tree/master/src/admin/ReceiptsTable)

-   [ReceiptUploader](https://github.com/pay-theory/pay-theory-ui/tree/master/src/admin/ReceiptUploader)

-   [ModalReceiptTransactions](https://github.com/pay-theory/pay-theory-ui/tree/master/src/admin/ModalReceiptTransactions)

### Sales

-   [PaymentsOverview](https://github.com/pay-theory/pay-theory-ui/tree/master/src/admin/PaymentsOverview)

-   [SalesTab](https://github.com/pay-theory/pay-theory-ui/tree/master/src/admin/SalesTab)

-   [TransactionItems](https://github.com/pay-theory/pay-theory-ui/tree/master/src/admin/TransactionItems)

-   [TransactionOverview](https://github.com/pay-theory/pay-theory-ui/tree/master/src/admin/TransactionOverview)

### USAS Account Codes

-   [AccountCodeBar](https://github.com/pay-theory/pay-theory-ui/tree/master/src/admin/AccountCodeBar)

## License

MIT © [pay-theory](https://github.com/pay-theory)
