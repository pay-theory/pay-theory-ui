/* eslint-disable camelcase */
const classicDistrict = {
    district: '4816c1fa-0877-529a-8b43-02bd60fe59f1',
    districtName: 'Bexley Classic',
    districtSlug: 'something-new',
    districtData: {
        district_name: 'Bexley Classic',
        district_street: '2148 Pelham Pl',
        district_zipcode: '43207-5224',
        district_nickname: 'Something New',
        district_state: 'OH',
        district_website: '',
        district_timezone: '',
        district_phone: '614-340-0823',
        district_ncesid: '',
        district_city: 'Obetz',
        district_country: 'US',
        UID: '4816c1fa-0877-529a-8b43-02bd60fe59f1',
        district_email: 'aron@paytheory.com',
        district_slug: 'something-new'
    }
}

export { classicDistrict }

const redesignDistrict = {
    district: 'c550ff4c-8651-5b85-aa84-026dba98ccd7',
    districtName: 'Hamilton Redesign',
    districtSlug: 'something-else',
    districtData: {
        district_name: 'Hamilton Redesign',
        district_street: '2148 Pelham Pl',
        district_zipcode: '43207-5224',
        district_nickname: 'Something else',
        district_state: 'OH',
        district_website: '',
        district_timezone: '',
        district_phone: '614-340-2345',
        district_ncesid: '',
        district_city: 'Obetz',
        district_country: 'US',
        UID: 'c550ff4c-8651-5b85-aa84-026dba98ccd7',
        district_email: 'example@paytheory.com',
        district_slug: 'something-else'
    }
}

export { redesignDistrict }

const accounts = [
    {
        created_at: '2020-04-11T18:14:46.140Z',
        email: 'aron1@paytheory.com',
        email_verified: true,
        identities: [
            {
                connection: 'merchant-dev',
                provider: 'auth0',
                user_id: '5e9209167a61520c61e8d7aa',
                isSocial: false
            }
        ],
        name: 'aron1@paytheory.com',
        nickname: 'aron1',
        given_name: 'Aron',
        family_name: 'Price',
        picture:
            'https://s.gravatar.com/avatar/b5ecfaecf2ebe416c3cf61eb6fb9abc8?s=480&r=pg&d=https%3A%2F%2Fcdn.auth0.com%2Favatars%2Far.png',
        updated_at: '2020-04-19T20:15:35.082Z',
        user_id: 'auth0|5e9209167a61520c61e8d7aa',
        username: 'aron1',
        multifactor: ['guardian'],
        multifactor_last_modified: '2020-04-11T19:44:31.712Z',
        user_metadata: {},
        last_login: '2020-04-19T20:15:35.082Z',
        last_ip: '65.185.46.79',
        logins_count: 35,
        app_metadata: {
            role: 'merchant',
            merchant: 'bc8c4c38-a490-531a-91ae-27f372bc76a7'
        }
    },
    {
        created_at: '2020-04-11T18:14:46.140Z',
        email: 'aron2@paytheory.com',
        email_verified: true,
        identities: [
            {
                connection: 'merchant-dev',
                provider: 'auth0',
                user_id: '5e9209167a61520c61e8d7aa',
                isSocial: false
            }
        ],
        name: 'aron2@paytheory.com',
        nickname: 'aron2',
        given_name: 'Aron',
        family_name: 'Price',
        picture:
            'https://s.gravatar.com/avatar/b5ecfaecf2ebe416c3cf61eb6fb9abc8?s=480&r=pg&d=https%3A%2F%2Fcdn.auth0.com%2Favatars%2Far.png',
        updated_at: '2020-04-19T20:15:35.082Z',
        user_id: 'auth0|5e9209167a61520c61e8d7ab',
        username: 'aron2',
        multifactor: ['guardian'],
        multifactor_last_modified: '2020-04-11T19:44:31.712Z',
        user_metadata: {},
        last_login: '2020-04-19T20:15:35.082Z',
        last_ip: '65.185.46.79',
        logins_count: 35,
        app_metadata: {
            role: 'merchant',
            merchant: 'bc8c4c38-a490-531a-91ae-27f372bc76a7'
        }
    },
    {
        created_at: '2020-04-11T18:14:46.140Z',
        email: 'aron3@paytheory.com',
        email_verified: true,
        identities: [
            {
                connection: 'merchant-dev',
                provider: 'auth0',
                user_id: '5e9209167a61520c61e8d7aa',
                isSocial: false
            }
        ],
        name: 'aron3@paytheory.com',
        nickname: 'aron3',
        given_name: 'Aron',
        family_name: 'Price',
        picture:
            'https://s.gravatar.com/avatar/b5ecfaecf2ebe416c3cf61eb6fb9abc8?s=480&r=pg&d=https%3A%2F%2Fcdn.auth0.com%2Favatars%2Far.png',
        updated_at: '2020-04-19T20:15:35.082Z',
        user_id: 'auth0|5e9209167a61520c61e8d7ac',
        username: 'aron3',
        multifactor: ['guardian'],
        multifactor_last_modified: '2020-04-11T19:44:31.712Z',
        user_metadata: {},
        last_login: '2020-04-19T20:15:35.082Z',
        last_ip: '65.185.46.79',
        logins_count: 35,
        app_metadata: {
            role: 'merchant',
            merchant: 'bc8c4c38-a490-531a-91ae-27f372bc76a7'
        }
    }
]

export { accounts }

const account = {
    nickname: 'test name',
    user: {}
}

const member = {
    created_at: '2020-04-11T18:14:46.140Z',
    email: 'aron@paytheory.com',
    email_verified: true,
    identities: [
        {
            connection: 'merchant-dev',
            provider: 'auth0',
            user_id: '5e9209167a61520c61e8d7aa',
            isSocial: false
        }
    ],
    name: 'aron@paytheory.com',
    nickname: 'aron',
    given_name: 'Aron',
    family_name: 'Price',
    picture:
        'https://s.gravatar.com/avatar/b5ecfaecf2ebe416c3cf61eb6fb9abc8?s=480&r=pg&d=https%3A%2F%2Fcdn.auth0.com%2Favatars%2Far.png',
    updated_at: '2020-04-19T20:15:35.082Z',
    user_id: 'auth0|5e9209167a61520c61e8d7aa',
    username: 'aron',
    multifactor: ['guardian'],
    multifactor_last_modified: '2020-04-11T19:44:31.712Z',
    user_metadata: {},
    last_login: '2020-04-19T20:15:35.082Z',
    last_ip: '65.185.46.79',
    logins_count: 35,
    app_metadata: {
        role: 'merchant',
        merchant: 'bc8c4c38-a490-531a-91ae-27f372bc76a7'
    }
}

export { member, account }

const page = {
    subtitle: 'test-parent-subtitle',
    title: 'test-parent-title'
}

export { page }

const usasConnection = {
    usas_user_name: 'test-name',
    usas_password: 'test-password',
    usas_version: 'Classic',
    usas_district: 'test-district',
    usas_endpoint: 'test-endpoint'
}

const merchantConnection = {
    merchant_user_name: 'test-name',
    merchant_password: 'test-password',
    merchant_id: 'test-merchant-id',
    merchant_processor: 'test-processor'
}

export { usasConnection, merchantConnection }

const paymentItem = {
    item_has_quick_pay_options: false,
    item_max_amount_accepted: '7976931348623157.00',
    item_discontinued: 1568727755766,
    item_organizer: 'Classic District',
    item_published_by: 'aron@democracy.guide',
    item_type: 'donation',
    item_is_indefinite: true,
    item_quick_pay_options: [1, 2, 3],
    item_has_fixed_amount: false,
    item_status: 'active',
    item_slug: 'stop-the-bats',
    UID: '19df7239-4efe-52f9-b8b9-88bd83d3a928',
    item_can_be_anonymous: false,
    item_published: 1568727924389,
    item_account_code: '006-5100-0000-000000-000',
    item_title: 'Stop the Bats',
    item_last_status_change: 1568727924389,
    item_is_public: true,
    item_min_amount_accepted: '0.01',
    item_start_date: '',
    item_end_date: '',
    item_description:
        'We have a serious bat infestation in the cafeteria, they are covering nearly the entire ceiling and it is really starting to make some of the children unsettle. Please donate today to help us get rid of these bats.',
    item_last_edit: 1568727924287
}
export { paymentItem }

const paymentItems = [
    {
        key: '159d0fe3-5970-58e6-99df-891eb7df17e3',
        data: {
            item_start_date: '',
            item_end_date: '',
            item_description: '',
            item_last_edit: '',
            item_has_quick_pay_options: false,
            item_discontinued: '',
            item_organizer: 'Classic District',
            item_type: 'donation',
            item_is_indefinite: true,
            item_quick_pay_options: ['$5.00', '$10.00', '$15.00'],
            item_status: 'draft',
            item_slug: 'test3',
            UID: '159d0fe3-5970-58e6-99df-891eb7df17e3',
            item_published: '',
            item_account_code: '001-1710-0000-000000-020',
            item_title: 'test3',
            item_last_status_change: '',
            item_is_public: true
        }
    },
    {
        key: 'ea389359-4dbd-5d9e-b182-8ce8bb74e36a',
        data: {
            item_discontinued: 1564413128663,
            item_organizer: 'Classic District',
            item_published_by: 'thiemannv11247@stxavier.org',
            item_type: 'donation',
            item_is_indefinite: false,
            item_quick_pay_options: [1, 5, 10],
            item_status: 'active',
            item_slug: 'test-discontinued',
            UID: 'ea389359-4dbd-5d9e-b182-8ce8bb74e36a',
            item_published: 1564413140483,
            item_account_code: '001-1710-0000-000000-896',
            item_title: 'test discontinued',
            item_last_status_change: 1564413140483,
            item_is_public: true,
            item_start_date: '',
            item_end_date: 1564496955271,
            item_publication_key:
                'ea389359-4dbd-5d9e-b182-8ce8bb74e36a-1564413126808',
            item_description: 'hi hi hi hi hi hi hi hi',
            item_last_edit: 1564413138971,
            item_has_quick_pay_options: true
        }
    }
]

export { paymentItems }

const transactions = [
    {
        student_id: 'test-student',
        student_name: 'test-student-name',
        payment_no: 'test-payment-no',
        description: 'test-description',
        account_code: 'test-account-code',
        fee_type: 'test-fee-type',
        fee: '1.00'
    }
]
export { transactions }

const sales = {
    allItems: [
        {
            key: '598ab4c2-29ac-59ae-8d26-7acccda6998b',
            data: {
                items: [
                    {
                        invoice_item_uid:
                            '03307b63-8da8-55ab-b39e-0f0a8d43b112',
                        debtor_id: 'public',
                        amount: '10'
                    }
                ],
                transaction_history: [
                    {
                        amount: 1000,
                        response_code: '00',
                        client_transaction_description: 'donation',
                        completed: '2019-08-22T20:19:00.0425177Z',
                        new_payment_instrument: {
                            last_four: '1662',
                            type: 'CreditCard',
                            updated: '2019-08-22T20:19:00.0186316Z',
                            id: 'card_axNM_ngEU0e85un7nIVRmg',
                            kount_session_id: null,
                            brand: 'Visa',
                            created: '2019-08-22T20:19:00.0186316Z',
                            billing_contact: {
                                email: 'aron@paytheory.com',
                                phone: '614-340-0823',
                                last_name: 'Price',
                                address: {
                                    line_2: null,
                                    city: 'Obetz',
                                    state: 'OH',
                                    postal_code: '43207',
                                    country: 'United States',
                                    line_1: '2148 Pelham Pl'
                                },
                                first_name: 'Aron'
                            },
                            expiration: '0521'
                        },
                        country_code: 'US',
                        cvv_result: 'Y',
                        source: {
                            brand: 'Visa',
                            created: '2019-08-22T20:18:45.044+00:00',
                            billing_contact: {
                                first_name: 'Aron',
                                email: 'aron@paytheory.com',
                                phone: '614-340-0823',
                                last_name: 'Price',
                                address: {
                                    city: 'Obetz',
                                    state: 'OH',
                                    postal_code: '43207',
                                    country: 'United States',
                                    line_1: '2148 Pelham Pl',
                                    line_2: null
                                }
                            },
                            expiration: '0521',
                            last_four: null,
                            type: 'CreditCard',
                            updated: '2019-08-22T20:18:45.044+00:00',
                            id: 'tok_NiHacCfVAkCJu2Rfl7nUqg',
                            kount_session_id: null
                        },
                        message: 'Approved',
                        avs_result: 'Y',
                        billing_info: {
                            first_name: 'Aron',
                            email: 'aron@paytheory.com',
                            phone: '614-340-0823',
                            last_name: 'Price',
                            address: {
                                line_1: '2148 Pelham Pl',
                                line_2: null,
                                city: 'Obetz',
                                state: 'OH',
                                postal_code: '43207',
                                country: 'United States'
                            }
                        },
                        save_payment_instrument: true,
                        id: 'ch_v8rNYPNXJk6lcuC2ey0l7Q',
                        captured: true,
                        client_invoice_id: 'gjdh57',
                        client_id: 1128,
                        currency_code: 'USD',
                        client_transaction_id:
                            '598ab4c2-29ac-59ae-8d26-7acccda6998b',
                        approved: true,
                        recurring: false
                    }
                ],
                idempotency_id: 'rq5cfzz43gAPZdzMzhEg',
                UID: '598ab4c2-29ac-59ae-8d26-7acccda6998b',
                payor: {
                    payor_access_code: 'NA',
                    payor_state: 'OH',
                    is_anonymous: false,
                    payor_street: '2148 Pelham Pl',
                    payor_city: 'Obetz',
                    payor_zip_code: '43207',
                    payor_email: 'aron@paytheory.com',
                    payor_family_name: 'Price',
                    payor_phone: '614-340-0823',
                    payor_account_id: 'public',
                    payor_role: 'public-checkout',
                    payor_country: 'United States',
                    payor_given_name: 'Aron',
                    UID: 'public',
                    payor_assigned_debtors: [],
                    payor_company: ''
                },
                validated_on_date: 1566505103298,
                approved_on_date: 1566505140073,
                order_id: 'gjdh57',
                voided_on_date: '',
                paid_on_date: '',
                payor_uid: 'public',
                tender_type: 'credit',
                payor_type: 'public',
                partner_uid: 'internal-checkout',
                status: 'approved',
                transaction_source: 'internal-checkout',
                payment_type: 'donation'
            }
        },
        {
            key: '3dbf1946-d9a4-5d9b-b6a1-e5146e351c62',
            data: {
                transaction_history: [
                    {
                        approved: true,
                        recurring: false,
                        amount: 2300,
                        response_code: '00',
                        client_transaction_description: 'donation',
                        completed: '2019-08-20T21:09:22.5359408Z',
                        new_payment_instrument: {
                            type: 'CreditCard',
                            updated: '2019-08-20T21:09:22.5151065Z',
                            id: 'card_4hY-6conzkywhNNxw7WJxQ',
                            kount_session_id: null,
                            brand: 'Visa',
                            created: '2019-08-20T21:09:22.5151065Z',
                            billing_contact: {
                                email: 'aron@paytheory.com',
                                phone: '614-340-0823',
                                last_name: 'Price',
                                address: {
                                    line_2: null,
                                    city: 'Obetz',
                                    state: 'OH',
                                    postal_code: '43207',
                                    country: 'United States',
                                    line_1: '2148 Pelham Pl'
                                },
                                first_name: 'Aron'
                            },
                            expiration: '0120',
                            last_four: '3707'
                        },
                        country_code: 'US',
                        cvv_result: 'Y',
                        source: {
                            type: 'CreditCard',
                            updated: '2019-08-20T21:09:03.906+00:00',
                            id: 'tok_uIKn2M1vSEaO-YQXP3tZAA',
                            kount_session_id: null,
                            brand: 'Visa',
                            created: '2019-08-20T21:09:03.906+00:00',
                            billing_contact: {
                                last_name: 'Price',
                                address: {
                                    line_2: null,
                                    city: 'Obetz',
                                    state: 'OH',
                                    postal_code: '43207',
                                    country: 'United States',
                                    line_1: '2148 Pelham Pl'
                                },
                                first_name: 'Aron',
                                email: 'aron@paytheory.com',
                                phone: '614-340-0823'
                            },
                            expiration: '0120',
                            last_four: null
                        },
                        message: 'Approved',
                        avs_result: 'Y',
                        billing_info: {
                            first_name: 'Aron',
                            email: 'aron@paytheory.com',
                            phone: '614-340-0823',
                            last_name: 'Price',
                            address: {
                                city: 'Obetz',
                                state: 'OH',
                                postal_code: '43207',
                                country: 'United States',
                                line_1: '2148 Pelham Pl',
                                line_2: null
                            }
                        },
                        save_payment_instrument: true,
                        id: 'ch_ePaMpnARRk-bAJsHARye1A',
                        captured: true,
                        client_invoice_id: 'gjdh4y',
                        currency_code: 'USD',
                        client_id: 1128,
                        client_transaction_id:
                            '3dbf1946-d9a4-5d9b-b6a1-e5146e351c62'
                    },
                    {
                        success: false,
                        approved: false,
                        message: null,
                        amount: 0,
                        response_code: null,
                        id: null,
                        charge_transaction_id:
                            '00000000-0000-0000-0000-000000000000',
                        completed: '0001-01-01T00:00:00',
                        currency_code: 'USD',
                        client_id: 0
                    },
                    {
                        amount: 0,
                        response_code: null,
                        id: null,
                        charge_transaction_id:
                            '00000000-0000-0000-0000-000000000000',
                        completed: '0001-01-01T00:00:00',
                        currency_code: 'USD',
                        client_id: 0,
                        success: false,
                        approved: false,
                        message: null
                    },
                    {
                        success: false,
                        approved: false,
                        message: null,
                        amount: 0,
                        response_code: null,
                        id: null,
                        charge_transaction_id:
                            '00000000-0000-0000-0000-000000000000',
                        completed: '0001-01-01T00:00:00',
                        client_id: 0,
                        currency_code: 'USD'
                    },
                    {
                        success: false,
                        approved: false,
                        message: null,
                        amount: 0,
                        response_code: null,
                        id: null,
                        charge_transaction_id:
                            '00000000-0000-0000-0000-000000000000',
                        completed: '0001-01-01T00:00:00',
                        client_id: 0,
                        currency_code: 'USD'
                    }
                ],
                idempotency_id: 'ps0siNxdGsHKIe0n39YW',
                UID: '3dbf1946-d9a4-5d9b-b6a1-e5146e351c62',
                payor: {
                    payor_street: '2148 Pelham Pl',
                    payor_city: 'Obetz',
                    payor_zip_code: '43207',
                    payor_email: 'aron@paytheory.com',
                    payor_family_name: 'Price',
                    payor_phone: '614-340-0823',
                    payor_account_id: 'public',
                    payor_role: 'public-checkout',
                    payor_country: 'United States',
                    payor_given_name: 'Aron',
                    UID: 'public',
                    payor_assigned_debtors: [],
                    payor_company: '',
                    payor_access_code: 'NA',
                    payor_state: 'OH',
                    is_anonymous: true
                },
                validated_on_date: 1566335318190,
                approved_on_date: 1566335362567,
                order_id: 'gjdh4y',
                voided_on_date: '',
                paid_on_date: 1566335362567,
                payor_uid: 'public',
                tender_type: 'credit',
                payor_type: 'public',
                partner_uid: 'internal-checkout',
                status: 'paid',
                transaction_source: 'internal-checkout',
                payment_type: 'donation',
                items: [
                    {
                        invoice_item_uid:
                            '146abf45-47d6-5396-92ae-b38f88fa8cd7',
                        debtor_id: 'public',
                        amount: '23'
                    }
                ]
            }
        },
        {
            key: '30b5736f-72e3-59d4-9ab9-32a655d5d5a6',
            data: {
                payor_uid: 'public',
                tender_type: 'credit',
                payor_type: 'public',
                partner_uid: 'internal-checkout',
                status: 'voided',
                transaction_source: 'internal-checkout',
                payment_type: 'donation',
                items: [
                    {
                        invoice_item_uid:
                            '146abf45-47d6-5396-92ae-b38f88fa8cd7',
                        debtor_id: 'public',
                        amount: '23'
                    }
                ],
                transaction_history: [
                    {
                        client_transaction_description: 'donation',
                        completed: '2019-08-20T18:36:50.457466Z',
                        new_payment_instrument: {
                            type: 'CreditCard',
                            updated: '2019-08-20T18:36:50.4315285Z',
                            id: 'card_cHJE0-g5A0OuXjmTY46V2w',
                            kount_session_id: null,
                            brand: 'Visa',
                            created: '2019-08-20T18:36:50.4315285Z',
                            billing_contact: {
                                first_name: 'Aron',
                                email: 'aron@paytheory.com',
                                phone: '614-340-0823',
                                last_name: 'Price',
                                address: {
                                    line_2: null,
                                    city: 'Obetz',
                                    state: 'OH',
                                    postal_code: '43207',
                                    country: 'United States',
                                    line_1: '2148 Pelham Pl'
                                }
                            },
                            expiration: '0220',
                            last_four: '3290'
                        },
                        country_code: 'US',
                        cvv_result: 'Y',
                        source: {
                            billing_contact: {
                                last_name: 'Price',
                                address: {
                                    postal_code: '43207',
                                    country: 'United States',
                                    line_1: '2148 Pelham Pl',
                                    line_2: null,
                                    city: 'Obetz',
                                    state: 'OH'
                                },
                                first_name: 'Aron',
                                email: 'aron@paytheory.com',
                                phone: '614-340-0823'
                            },
                            expiration: '0220',
                            last_four: null,
                            type: 'CreditCard',
                            updated: '2019-08-20T18:36:34.367+00:00',
                            id: 'tok_kQPeujwkmkONEwSQu9nT2w',
                            kount_session_id: null,
                            brand: 'Visa',
                            created: '2019-08-20T18:36:34.367+00:00'
                        },
                        message: 'Approved',
                        avs_result: 'Y',
                        billing_info: {
                            last_name: 'Price',
                            address: {
                                line_2: null,
                                city: 'Obetz',
                                state: 'OH',
                                postal_code: '43207',
                                country: 'United States',
                                line_1: '2148 Pelham Pl'
                            },
                            first_name: 'Aron',
                            email: 'aron@paytheory.com',
                            phone: '614-340-0823'
                        },
                        save_payment_instrument: true,
                        id: 'ch_4G7LI_fUNUu9274a7neS2w',
                        captured: true,
                        client_invoice_id: 'gjdh4x',
                        client_id: 1128,
                        currency_code: 'USD',
                        client_transaction_id:
                            '30b5736f-72e3-59d4-9ab9-32a655d5d5a6',
                        approved: true,
                        recurring: false,
                        amount: 2300,
                        response_code: '00'
                    }
                ],
                idempotency_id: 'KAHSJCiIXA6TOP7t3xzD',
                UID: '30b5736f-72e3-59d4-9ab9-32a655d5d5a6',
                payor: {
                    payor_assigned_debtors: [],
                    payor_company: '',
                    payor_access_code: 'NA',
                    payor_state: 'OH',
                    is_anonymous: true,
                    payor_street: '2148 Pelham Pl',
                    payor_city: 'Obetz',
                    payor_zip_code: '43207',
                    payor_email: 'aron@paytheory.com',
                    payor_family_name: 'Price',
                    payor_phone: '614-340-0823',
                    payor_account_id: 'public',
                    payor_role: 'public-checkout',
                    payor_country: 'United States',
                    payor_given_name: 'Aron',
                    UID: 'public'
                },
                validated_on_date: 1566326108413,
                approved_on_date: 1566326210490,
                order_id: 'gjdh4x',
                voided_on_date: 1566326210490,
                paid_on_date: ''
            }
        },
        {
            key: '0ff6b05c-1f97-5562-b317-f0cb02ba32fb',
            data: {
                status: 'validate',
                transaction_source: 'partner-processing',
                payment_type: 'invoice',
                items: [
                    {
                        debtor_id: 'public',
                        amount: '23',
                        invoice_item_uid: '146abf45-47d6-5396-92ae-b38f88fa8cd7'
                    }
                ],
                transaction_history: [],
                idempotency_id: 'G4EbtloC8kethLMonG1k',
                UID: '0ff6b05c-1f97-5562-b317-f0cb02ba32fb',
                payor: {
                    payor_assigned_debtors: [],
                    payor_company: '',
                    payor_access_code: 'NA',
                    payor_state: 'OH',
                    is_anonymous: true,
                    payor_street: '2148 Pelham Pl',
                    payor_city: 'Obetz',
                    payor_zip_code: '43207',
                    payor_email: 'aron@paytheory.com',
                    payor_family_name: 'Price',
                    payor_phone: '614-340-0823',
                    payor_account_id: 'public',
                    payor_role: 'public-checkout',
                    payor_country: 'United States',
                    payor_given_name: 'Aron',
                    UID: 'public'
                },
                validated_on_date: 1566324297865,
                approved_on_date: '',
                order_id: 'gjdh4w',
                voided_on_date: '',
                paid_on_date: '',
                payor_uid: 'public',
                tender_type: 'credit',
                payor_type: 'public',
                partner_uid: 'internal-checkout'
            }
        }
    ],
    uncaptured: [
        {
            key: '598ab4c2-29ac-59ae-8d26-7acccda6998b',
            data: {
                payor_uid: 'public',
                tender_type: 'credit',
                payor_type: 'public',
                partner_uid: 'internal-checkout',
                status: 'approved',
                transaction_source: 'internal-checkout',
                payment_type: 'donation',
                items: [
                    {
                        debtor_id: 'public',
                        amount: '10',
                        invoice_item_uid: '03307b63-8da8-55ab-b39e-0f0a8d43b112'
                    }
                ],
                transaction_history: [
                    {
                        message: 'Approved',
                        avs_result: 'Y',
                        billing_info: {
                            first_name: 'Aron',
                            email: 'aron@paytheory.com',
                            phone: '614-340-0823',
                            last_name: 'Price',
                            address: {
                                postal_code: '43207',
                                country: 'United States',
                                line_1: '2148 Pelham Pl',
                                line_2: null,
                                city: 'Obetz',
                                state: 'OH'
                            }
                        },
                        save_payment_instrument: true,
                        id: 'ch_v8rNYPNXJk6lcuC2ey0l7Q',
                        captured: true,
                        client_invoice_id: 'gjdh57',
                        client_id: 1128,
                        currency_code: 'USD',
                        client_transaction_id:
                            '598ab4c2-29ac-59ae-8d26-7acccda6998b',
                        approved: true,
                        recurring: false,
                        amount: 1000,
                        response_code: '00',
                        client_transaction_description: 'donation',
                        completed: '2019-08-22T20:19:00.0425177Z',
                        new_payment_instrument: {
                            billing_contact: {
                                last_name: 'Price',
                                address: {
                                    line_2: null,
                                    city: 'Obetz',
                                    state: 'OH',
                                    postal_code: '43207',
                                    country: 'United States',
                                    line_1: '2148 Pelham Pl'
                                },
                                first_name: 'Aron',
                                email: 'aron@paytheory.com',
                                phone: '614-340-0823'
                            },
                            expiration: '0521',
                            last_four: '1662',
                            type: 'CreditCard',
                            updated: '2019-08-22T20:19:00.0186316Z',
                            id: 'card_axNM_ngEU0e85un7nIVRmg',
                            kount_session_id: null,
                            brand: 'Visa',
                            created: '2019-08-22T20:19:00.0186316Z'
                        },
                        country_code: 'US',
                        cvv_result: 'Y',
                        source: {
                            type: 'CreditCard',
                            updated: '2019-08-22T20:18:45.044+00:00',
                            id: 'tok_NiHacCfVAkCJu2Rfl7nUqg',
                            kount_session_id: null,
                            brand: 'Visa',
                            created: '2019-08-22T20:18:45.044+00:00',
                            billing_contact: {
                                first_name: 'Aron',
                                email: 'aron@paytheory.com',
                                phone: '614-340-0823',
                                last_name: 'Price',
                                address: {
                                    line_2: null,
                                    city: 'Obetz',
                                    state: 'OH',
                                    postal_code: '43207',
                                    country: 'United States',
                                    line_1: '2148 Pelham Pl'
                                }
                            },
                            expiration: '0521',
                            last_four: null
                        }
                    }
                ],
                idempotency_id: 'rq5cfzz43gAPZdzMzhEg',
                UID: '598ab4c2-29ac-59ae-8d26-7acccda6998b',
                payor: {
                    payor_access_code: 'NA',
                    payor_state: 'OH',
                    is_anonymous: false,
                    payor_street: '2148 Pelham Pl',
                    payor_city: 'Obetz',
                    payor_zip_code: '43207',
                    payor_email: 'aron@paytheory.com',
                    payor_family_name: 'Price',
                    payor_phone: '614-340-0823',
                    payor_account_id: 'public',
                    payor_role: 'public-checkout',
                    payor_country: 'United States',
                    payor_given_name: 'Aron',
                    UID: 'public',
                    payor_assigned_debtors: [],
                    payor_company: ''
                },
                validated_on_date: 1566505103298,
                approved_on_date: 1566505140073,
                order_id: 'gjdh57',
                voided_on_date: '',
                paid_on_date: ''
            }
        },
        {
            key: '3dbf1946-d9a4-5d9b-b6a1-e5146e351c62',
            data: {
                payor: {
                    UID: 'public',
                    payor_assigned_debtors: [],
                    payor_company: '',
                    payor_access_code: 'NA',
                    payor_state: 'OH',
                    is_anonymous: true,
                    payor_street: '2148 Pelham Pl',
                    payor_city: 'Obetz',
                    payor_zip_code: '43207',
                    payor_email: 'aron@paytheory.com',
                    payor_family_name: 'Price',
                    payor_phone: '614-340-0823',
                    payor_account_id: 'public',
                    payor_role: 'public-checkout',
                    payor_country: 'United States',
                    payor_given_name: 'Aron'
                },
                validated_on_date: 1566335318190,
                approved_on_date: 1566335362567,
                order_id: 'gjdh4y',
                voided_on_date: '',
                paid_on_date: '',
                payor_uid: 'public',
                tender_type: 'credit',
                payor_type: 'public',
                partner_uid: 'internal-checkout',
                status: 'approved',
                transaction_source: 'internal-checkout',
                payment_type: 'donation',
                items: [
                    {
                        debtor_id: 'public',
                        amount: '23',
                        invoice_item_uid: '146abf45-47d6-5396-92ae-b38f88fa8cd7'
                    }
                ],
                transaction_history: [
                    {
                        billing_info: {
                            email: 'aron@paytheory.com',
                            phone: '614-340-0823',
                            last_name: 'Price',
                            address: {
                                line_2: null,
                                city: 'Obetz',
                                state: 'OH',
                                postal_code: '43207',
                                country: 'United States',
                                line_1: '2148 Pelham Pl'
                            },
                            first_name: 'Aron'
                        },
                        save_payment_instrument: true,
                        id: 'ch_ePaMpnARRk-bAJsHARye1A',
                        captured: true,
                        client_invoice_id: 'gjdh4y',
                        currency_code: 'USD',
                        client_id: 1128,
                        client_transaction_id:
                            '3dbf1946-d9a4-5d9b-b6a1-e5146e351c62',
                        approved: true,
                        recurring: false,
                        amount: 2300,
                        response_code: '00',
                        client_transaction_description: 'donation',
                        completed: '2019-08-20T21:09:22.5359408Z',
                        new_payment_instrument: {
                            billing_contact: {
                                last_name: 'Price',
                                address: {
                                    line_2: null,
                                    city: 'Obetz',
                                    state: 'OH',
                                    postal_code: '43207',
                                    country: 'United States',
                                    line_1: '2148 Pelham Pl'
                                },
                                first_name: 'Aron',
                                email: 'aron@paytheory.com',
                                phone: '614-340-0823'
                            },
                            expiration: '0120',
                            last_four: '3707',
                            type: 'CreditCard',
                            updated: '2019-08-20T21:09:22.5151065Z',
                            id: 'card_4hY-6conzkywhNNxw7WJxQ',
                            kount_session_id: null,
                            brand: 'Visa',
                            created: '2019-08-20T21:09:22.5151065Z'
                        },
                        country_code: 'US',
                        cvv_result: 'Y',
                        source: {
                            kount_session_id: null,
                            brand: 'Visa',
                            created: '2019-08-20T21:09:03.906+00:00',
                            billing_contact: {
                                email: 'aron@paytheory.com',
                                phone: '614-340-0823',
                                last_name: 'Price',
                                address: {
                                    line_2: null,
                                    city: 'Obetz',
                                    state: 'OH',
                                    postal_code: '43207',
                                    country: 'United States',
                                    line_1: '2148 Pelham Pl'
                                },
                                first_name: 'Aron'
                            },
                            expiration: '0120',
                            last_four: null,
                            type: 'CreditCard',
                            updated: '2019-08-20T21:09:03.906+00:00',
                            id: 'tok_uIKn2M1vSEaO-YQXP3tZAA'
                        },
                        message: 'Approved',
                        avs_result: 'Y'
                    },
                    {
                        success: false,
                        approved: false,
                        message: null,
                        amount: 0,
                        response_code: null,
                        id: null,
                        charge_transaction_id:
                            '00000000-0000-0000-0000-000000000000',
                        completed: '0001-01-01T00:00:00',
                        currency_code: 'USD',
                        client_id: 0
                    },
                    {
                        success: false,
                        approved: false,
                        message: null,
                        amount: 0,
                        response_code: null,
                        id: null,
                        charge_transaction_id:
                            '00000000-0000-0000-0000-000000000000',
                        completed: '0001-01-01T00:00:00',
                        currency_code: 'USD',
                        client_id: 0
                    },
                    {
                        response_code: null,
                        id: null,
                        charge_transaction_id:
                            '00000000-0000-0000-0000-000000000000',
                        completed: '0001-01-01T00:00:00',
                        client_id: 0,
                        currency_code: 'USD',
                        success: false,
                        approved: false,
                        message: null,
                        amount: 0
                    },
                    {
                        success: false,
                        approved: false,
                        message: null,
                        amount: 0,
                        response_code: null,
                        id: null,
                        charge_transaction_id:
                            '00000000-0000-0000-0000-000000000000',
                        completed: '0001-01-01T00:00:00',
                        client_id: 0,
                        currency_code: 'USD'
                    }
                ],
                idempotency_id: 'ps0siNxdGsHKIe0n39YW',
                UID: '3dbf1946-d9a4-5d9b-b6a1-e5146e351c62'
            }
        },
        {
            key: '30b5736f-72e3-59d4-9ab9-32a655d5d5a6',
            data: {
                paid_on_date: '',
                payor_uid: 'public',
                tender_type: 'credit',
                payor_type: 'public',
                partner_uid: 'internal-checkout',
                status: 'approved',
                transaction_source: 'internal-checkout',
                payment_type: 'donation',
                items: [
                    {
                        debtor_id: 'public',
                        amount: '23',
                        invoice_item_uid: '146abf45-47d6-5396-92ae-b38f88fa8cd7'
                    }
                ],
                transaction_history: [
                    {
                        amount: 2300,
                        response_code: '00',
                        client_transaction_description: 'donation',
                        completed: '2019-08-20T18:36:50.457466Z',
                        new_payment_instrument: {
                            last_four: '3290',
                            type: 'CreditCard',
                            updated: '2019-08-20T18:36:50.4315285Z',
                            id: 'card_cHJE0-g5A0OuXjmTY46V2w',
                            kount_session_id: null,
                            brand: 'Visa',
                            created: '2019-08-20T18:36:50.4315285Z',
                            billing_contact: {
                                first_name: 'Aron',
                                email: 'aron@paytheory.com',
                                phone: '614-340-0823',
                                last_name: 'Price',
                                address: {
                                    line_1: '2148 Pelham Pl',
                                    line_2: null,
                                    city: 'Obetz',
                                    state: 'OH',
                                    postal_code: '43207',
                                    country: 'United States'
                                }
                            },
                            expiration: '0220'
                        },
                        country_code: 'US',
                        cvv_result: 'Y',
                        source: {
                            kount_session_id: null,
                            brand: 'Visa',
                            created: '2019-08-20T18:36:34.367+00:00',
                            billing_contact: {
                                email: 'aron@paytheory.com',
                                phone: '614-340-0823',
                                last_name: 'Price',
                                address: {
                                    line_2: null,
                                    city: 'Obetz',
                                    state: 'OH',
                                    postal_code: '43207',
                                    country: 'United States',
                                    line_1: '2148 Pelham Pl'
                                },
                                first_name: 'Aron'
                            },
                            expiration: '0220',
                            last_four: null,
                            type: 'CreditCard',
                            updated: '2019-08-20T18:36:34.367+00:00',
                            id: 'tok_kQPeujwkmkONEwSQu9nT2w'
                        },
                        message: 'Approved',
                        avs_result: 'Y',
                        billing_info: {
                            email: 'aron@paytheory.com',
                            phone: '614-340-0823',
                            last_name: 'Price',
                            address: {
                                line_1: '2148 Pelham Pl',
                                line_2: null,
                                city: 'Obetz',
                                state: 'OH',
                                postal_code: '43207',
                                country: 'United States'
                            },
                            first_name: 'Aron'
                        },
                        save_payment_instrument: true,
                        id: 'ch_4G7LI_fUNUu9274a7neS2w',
                        captured: true,
                        client_invoice_id: 'gjdh4x',
                        client_id: 1128,
                        currency_code: 'USD',
                        client_transaction_id:
                            '30b5736f-72e3-59d4-9ab9-32a655d5d5a6',
                        approved: true,
                        recurring: false
                    }
                ],
                idempotency_id: 'KAHSJCiIXA6TOP7t3xzD',
                UID: '30b5736f-72e3-59d4-9ab9-32a655d5d5a6',
                payor: {
                    payor_access_code: 'NA',
                    payor_state: 'OH',
                    is_anonymous: true,
                    payor_street: '2148 Pelham Pl',
                    payor_city: 'Obetz',
                    payor_zip_code: '43207',
                    payor_email: 'aron@paytheory.com',
                    payor_family_name: 'Price',
                    payor_phone: '614-340-0823',
                    payor_account_id: 'public',
                    payor_role: 'public-checkout',
                    payor_country: 'United States',
                    payor_given_name: 'Aron',
                    UID: 'public',
                    payor_assigned_debtors: [],
                    payor_company: ''
                },
                validated_on_date: 1566326108413,
                approved_on_date: 1566326210490,
                order_id: 'gjdh4x',
                voided_on_date: ''
            }
        }
    ],
    refunded: [
        {
            key: '0ff6b05c-1f97-5562-b317-f0cb02ba32fb',
            data: {
                paid_on_date: '',
                payor_uid: 'public',
                tender_type: 'credit',
                payor_type: 'public',
                partner_uid: 'internal-checkout',
                status: 'refunded',
                transaction_source: 'partner-processing',
                payment_type: 'invoice',
                items: [
                    {
                        invoice_item_uid:
                            '146abf45-47d6-5396-92ae-b38f88fa8cd7',
                        debtor_id: 'public',
                        amount: '23'
                    }
                ],
                transaction_history: [],
                idempotency_id: 'G4EbtloC8kethLMonG1k',
                UID: '0ff6b05c-1f97-5562-b317-f0cb02ba32fb',
                payor: {
                    payor_phone: '614-340-0823',
                    payor_account_id: 'public',
                    payor_role: 'public-checkout',
                    payor_country: 'United States',
                    payor_given_name: 'Aron',
                    UID: 'public',
                    payor_assigned_debtors: [],
                    payor_company: '',
                    payor_access_code: 'NA',
                    payor_state: 'OH',
                    is_anonymous: true,
                    payor_street: '2148 Pelham Pl',
                    payor_city: 'Obetz',
                    payor_zip_code: '43207',
                    payor_email: 'aron@paytheory.com',
                    payor_family_name: 'Price'
                },
                refunded_on_date: 1566324297865,
                approved_on_date: '',
                order_id: 'gjdh4w',
                voided_on_date: ''
            }
        }
    ],
    succeeded: [
        {
            key: '0ff6b05c-1f97-5562-b317-f0cb02ba32fb',
            data: {
                paid_on_date: '',
                payor_uid: 'public',
                tender_type: 'credit',
                payor_type: 'public',
                partner_uid: 'internal-checkout',
                status: 'validate',
                transaction_source: 'partner-processing',
                payment_type: 'invoice',
                items: [
                    {
                        invoice_item_uid:
                            '146abf45-47d6-5396-92ae-b38f88fa8cd7',
                        debtor_id: 'public',
                        amount: '23'
                    }
                ],
                transaction_history: [],
                idempotency_id: 'G4EbtloC8kethLMonG1k',
                UID: '0ff6b05c-1f97-5562-b317-f0cb02ba32fb',
                payor: {
                    payor_phone: '614-340-0823',
                    payor_account_id: 'public',
                    payor_role: 'public-checkout',
                    payor_country: 'United States',
                    payor_given_name: 'Aron',
                    UID: 'public',
                    payor_assigned_debtors: [],
                    payor_company: '',
                    payor_access_code: 'NA',
                    payor_state: 'OH',
                    is_anonymous: true,
                    payor_street: '2148 Pelham Pl',
                    payor_city: 'Obetz',
                    payor_zip_code: '43207',
                    payor_email: 'aron@paytheory.com',
                    payor_family_name: 'Price'
                },
                validated_on_date: 1566324297865,
                approved_on_date: '',
                order_id: 'gjdh4w',
                voided_on_date: ''
            }
        }
    ]
}

export { sales }

const payment = {
    payor_uid: 'public',
    tender_type: 'credit',
    payor_type: 'public',
    partner_uid: 'internal-checkout',
    status: 'approved',
    transaction_source: 'internal-checkout',
    payment_type: 'donation',
    items: [
        {
            debtor_id: 'public',
            amount: '10',
            invoice_item_uid: '03307b63-8da8-55ab-b39e-0f0a8d43b112'
        },
        {
            debtor_id: 'public',
            amount: '13',
            invoice_item_uid: '03307b63-8da8-55ab-b39e-0f0a8d43b111'
        }
    ],
    transaction_history: [
        {
            message: 'Approved',
            avs_result: 'Y',
            billing_info: {
                first_name: 'Aron',
                email: 'aron@paytheory.com',
                phone: '614-340-0823',
                last_name: 'Price',
                address: {
                    postal_code: '43207',
                    country: 'United States',
                    line_1: '2148 Pelham Pl',
                    line_2: null,
                    city: 'Obetz',
                    state: 'OH'
                }
            },
            save_payment_instrument: true,
            id: 'ch_v8rNYPNXJk6lcuC2ey0l7Q',
            captured: true,
            client_invoice_id: 'gjdh57',
            client_id: 1128,
            currency_code: 'USD',
            client_transaction_id: '598ab4c2-29ac-59ae-8d26-7acccda6998b',
            approved: true,
            recurring: false,
            amount: 1000,
            response_code: '00',
            client_transaction_description: 'donation',
            completed: '2019-08-22T20:19:00.0425177Z',
            new_payment_instrument: {
                billing_contact: {
                    last_name: 'Price',
                    address: {
                        line_2: null,
                        city: 'Obetz',
                        state: 'OH',
                        postal_code: '43207',
                        country: 'United States',
                        line_1: '2148 Pelham Pl'
                    },
                    first_name: 'Aron',
                    email: 'aron@paytheory.com',
                    phone: '614-340-0823'
                },
                expiration: '0521',
                last_four: '1662',
                type: 'CreditCard',
                updated: '2019-08-22T20:19:00.0186316Z',
                id: 'card_axNM_ngEU0e85un7nIVRmg',
                kount_session_id: null,
                brand: 'Visa',
                created: '2019-08-22T20:19:00.0186316Z'
            },
            country_code: 'US',
            cvv_result: 'Y',
            source: {
                type: 'CreditCard',
                updated: '2019-08-22T20:18:45.044+00:00',
                id: 'tok_NiHacCfVAkCJu2Rfl7nUqg',
                kount_session_id: null,
                brand: 'Visa',
                created: '2019-08-22T20:18:45.044+00:00',
                billing_contact: {
                    first_name: 'Aron',
                    email: 'aron@paytheory.com',
                    phone: '614-340-0823',
                    last_name: 'Price',
                    address: {
                        line_2: null,
                        city: 'Obetz',
                        state: 'OH',
                        postal_code: '43207',
                        country: 'United States',
                        line_1: '2148 Pelham Pl'
                    }
                },
                expiration: '0521',
                last_four: null
            }
        }
    ],
    idempotency_id: 'rq5cfzz43gAPZdzMzhEg',
    UID: '598ab4c2-29ac-59ae-8d26-7acccda6998b',
    payor: {
        payor_access_code: 'NA',
        payor_state: 'OH',
        is_anonymous: false,
        payor_street: '2148 Pelham Pl',
        payor_city: 'Obetz',
        payor_zip_code: '43207',
        payor_email: 'aron@paytheory.com',
        payor_family_name: 'Price',
        payor_phone: '614-340-0823',
        payor_account_id: 'public',
        payor_role: 'public-checkout',
        payor_country: 'United States',
        payor_given_name: 'Aron',
        UID: 'public',
        payor_assigned_debtors: [],
        payor_company: ''
    },
    validated_on_date: 1566505103298,
    approved_on_date: 1566505140073,
    order_id: 'gjdh57',
    voided_on_date: '',
    paid_on_date: ''
}

export { payment }

const invoiceItems = [
    {
        key: '03307b63-8da8-55ab-b39e-0f0a8d43b112',
        data: {
            item_discontinued: 1567169951269,
            item_organizer: 'Hamilton Redesign',
            item_published_by: 'aron@democracy.guide',
            item_is_indefinite: true,
            item_type: 'donation',
            item_quick_pay_options: [1, 5, 10],
            item_status: 'discontinued',
            item_slug: 'something-else',
            UID: '03307b63-8da8-55ab-b39e-0f0a8d43b112',
            item_published: 1565192967161,
            item_account_code: '001-1121-0000-000000-000',
            item_title: 'test-item',
            item_is_public: true,
            item_start_date: '',
            item_end_date: '',
            item_publication_key:
                '1e2805cd-dd03-50a8-9ae7-4a444b0d11ff-1565192967161',
            item_description: '',
            item_has_quick_pay_options: true,
            item_parent: '1e2805cd-dd03-50a8-9ae7-4a444b0d11ff'
        }
    }
]

export { invoiceItems }

const menu = [
    {
        to: 'donations',
        className: 'active',
        tag: 'donations',
        icon: 'hand-holding-usd',
        label: 'Donations',
        isCategory: false
    },
    {
        className: 'active',
        tag: 'transactions',
        icon: 'file-invoice-dollar',
        label: 'Transactions',
        isCategory: true,
        subContent: [
            {
                to: 'sales',
                className: 'active',
                tag: 'sales',
                icon: 'usd-square',
                label: 'Sales'
            }
        ]
    }
]

export { menu }

const partner = {
    partner_name: 'Degbugging',
    partner_ip_range: ['99.47.253.73/32', '127.0.0.0/24'],
    partner_apikey:
        '$2b$10$A8CVp3Y4zsKca4ko3yI6fOOz3JcIM/CTNxEqKoeiU7twVmH2L4wsq',
    UID: 'b3416bf7-d164-5f92-8497-179e7bccd382'
}

export { partner }

const partners = [
    {
        key: '05d8bd24-e10d-599f-bab1-878029dc7ad6',
        data: {
            partner_name: 'Maybe Now',
            partner_ip_range: ['127.0.0.1/32', '128.0.0.1/32', '123.0.0.1/32'],
            partner_apikey:
                '$2b$10$vijvgmC/7BAA12iA68DIkegEduFHNO3JatqIRG0DIV3/gvaoCWwji',
            UID: '05d8bd24-e10d-599f-bab1-878029dc7ad6'
        }
    },
    {
        key: 'b3416bf7-d164-5f92-8497-179e7bccd382',
        data: {
            partner_name: 'Degbugging',
            partner_ip_range: ['99.47.253.73/32', '127.0.0.0/24'],
            partner_apikey:
                '$2b$10$A8CVp3Y4zsKca4ko3yI6fOOz3JcIM/CTNxEqKoeiU7twVmH2L4wsq',
            UID: 'b3416bf7-d164-5f92-8497-179e7bccd382'
        }
    }
]

export { partners }

const receipt_csv =
    'RGFpbHkgUGF5bWVudHMgUmVwb3J0LCwsLCwsLCwsDQo0LzUvMjAxOSAxMDo1NnBtLCwsLCwsLCwsDQpQYXltZW50cyBmcm9tIDQvNC8yMDE5IDEwOjU1cG0gdG8gNC81LzIwMTkgMTA6NTVwbSwsLCwsLCwsLA0KLCwsLCwsLCwsDQpTdHVkZW50IElELFN0dWRlbnQgTmFtZSwsUGF5bWVudCBOby4sRGVzY3JpcHRpb24sQWNjb3VudCBDb2RlLE1lYWxzLEZlZXMsQWN0aXZpdHkgRmVlcyxQYXltZW50cyBNYWRlDQosLCwsLCwsLCwNCldZT01JTkcgSElHSCBTQ0hPT0wsLCwsLCwsLCwNCixNRVJSSVRULEJSSUUsMzg4NixGZWU6IENFUkFNSUNTICgyMDE4LTIwMTkpLDAwMS4xNzEwLi4uLjAyMCwsJDI1LjAwICwsNC81LzIwMTkgMTo0MHBtDQosQk9STkhPTERULENPTExJTiwzODg3LEZlZTogQVAgRU5WIFNDSUVOQ0UgRVhBTSBGRUUgKDIwMTgtMjAxOSksMS4xNzksLCQ5NC4wMCAsLDQvNS8yMDE5IDE6NTVwbQ0KLEJPUk5IT0xEVCxDT0xMSU4sMzg4NyxGZWU6IEFQIEhVTUFOIEdFTyBFWEFNIEZFRSAoMjAxOC0yMDE5KSwxLjE3OSwsJDk0LjAwICwsNC81LzIwMTkgMTo1NXBtDQosQk9STkhPTERULENPTExJTiwzODg3LEZlZTogQVAgU1RVRCBBUlQgM0QgRVhBTSBGRUUgKDIwMTgtMjAxOSksMS4xNzksLCQ5NC4wMCAsLDQvNS8yMDE5IDE6NTVwbQ0KLEhBTFNURUQsQkVOSkFNSU4sMzg4OCxGZWU6IEFQIE1BQ1JPIEVDT04gRVhBTSBGRUUgKDIwMTgtMjAxOSksMS4xNzksLCQ5NC4wMCAsLDQvNS8yMDE5IDI6MTlwbQ0KLEhBTFNURUQsQkVOSkFNSU4sMzg4OCxGZWU6IE1BQ1JPIEVDT05PTUlDUyAoMjAxOC0yMDE5KSwwMDEuMTcxMC4uLi4wMjAsLCQyMC4wMCAsLDQvNS8yMDE5IDI6MTlwbQ0KLFJPU0VOQkVSRyxBQklHQUlMLDM4ODksRmVlOiBBUCBCSU9MT0dZIEVYQU0gRkVFICgyMDE4LTIwMTkpLDEuMTc5LCwkOTQuMDAgLCw0LzUvMjAxOSA0OjM4cG0NCixST1NFTkJFUkcsQUJJR0FJTCwzODg5LEZlZTogQVAgRU5HIExBTkcgRVhBTSBGRUUgKDIwMTgtMjAxOSksMS4xNzksLCQ5NC4wMCAsLDQvNS8yMDE5IDQ6MzhwbQ0KLFJPU0VOQkVSRyxBQklHQUlMLDM4ODksRmVlOiBBUCBQSFlTSUNTIEVYQU0gRkVFICgyMDE4LTIwMTkpLDEuMTc5LCwkOTQuMDAgLCw0LzUvMjAxOSA0OjM4cG0NCixST1NFTkJFUkcsQUJJR0FJTCwzODg5LEZlZTogQVAgU1RBVFMgRVhBTSBGRUUgKDIwMTgtMjAxOSksMS4xNzksLCQ5NC4wMCAsLDQvNS8yMDE5IDQ6MzhwbQ0KLFJPU0VOQkVSRyxMT1VJUywzODg5LEZlZTogQVAgQ09NUCBTQ0kgUFJPRyBFWEFNIEZFRSAoMjAxOC0yMDE5KSwxLjE3OSwsJDk0LjAwICwsNC81LzIwMTkgNDozOHBtDQosUk9TRU5CRVJHLExPVUlTLDM4ODksRmVlOiBBUCBTVEFUUyBFWEFNIEZFRSAoMjAxOC0yMDE5KSwxLjE3OSwsJDk0LjAwICwsNC81LzIwMTkgNDozOHBtDQosUk9TRU5CRVJHLExPVUlTLDM4ODksRmVlOiBBUCBTVFVEIEFSVCBEUlcvUFQgRVhBTSBGICgyMDE4LTIwMTkpLDEuMTc5LCwkOTQuMDAgLCw0LzUvMjAxOSA0OjM4cG0NCixQQU5UQUxPTkUsU09QSElBLDM4OTAsRmVlOiBHUkFQSElDIERFU0lHTiAoMjAxOC0yMDE5KSwwMDEuMTcxMC4uLi4wMjAsLCQyNS4wMCAsLDQvNS8yMDE5IDQ6NDRwbQ0KLFZPTkdTQUtIQU1QSE9VWSxNQVlBLDM4OTEsRmVlOiBIRUFMVEggKENQUikgKDIwMTgtMjAxOSksMDAxLjE3MTAuLi4uMDIwLCwkMzAuMDAgLCw0LzUvMjAxOSA1OjEycG0NCixTRVJMUyxUQVRFLDM4OTIsRmVlOiBCQVNJQyBQSE9UTyAoMjAxOC0yMDE5KSwwMDEuMTcxMC4uLi4wMjAsLCQ1MC4wMCAsLDQvNS8yMDE5IDc6MjBwbQ0KLEJBQkIsSkFDS1NPTiwzODkzLEZlZTogRk9SRU5TSUMgU0NJRU5DRSBGRUUgKDIwMTgtMjAxOSksMDAxLjE3MTAuLi4uMDIwLCwkMjAuMDAgLCw0LzUvMjAxOSA4OjA5cG0NCixCQUJCLEpBQ0tTT04sMzg5MyxGZWU6IFNDVUxQVFVSRSAoMjAxOC0yMDE5KSwwMDEuMTcxMC4uLi4wMjAsLCQyNS4wMCAsLDQvNS8yMDE5IDg6MDlwbQ0KLEhFTERNQU4sU1lETkVZLDM4OTQsRmVlOiBCQVNJQyBQSE9UTyAoMjAxOC0yMDE5KSwwMDEuMTcxMC4uLi4wMjAsLCQ1MC4wMCAsLDQvNS8yMDE5IDg6MThwbQ0KLFdBUk1CSUVSLEdSRVRBLDM4OTUsRmVlOiBBUCBNQUNSTyBFQ09OIEVYQU0gRkVFICgyMDE4LTIwMTkpLDEuMTc5LCwkOTQuMDAgLCw0LzUvMjAxOSA5OjE2cG0NCixXQVJNQklFUixHUkVUQSwzODk1LEZlZTogRFJBV0lORy9QQUlOVCAoMjAxOC0yMDE5KSwwMDEuMTcxMC4uLi4wMjAsLCQyNS4wMCAsLDQvNS8yMDE5IDk6MTZwbQ0KLFdBUk1CSUVSLEdSRVRBLDM4OTUsRmVlOiBNQUNSTyBFQ09OT01JQ1MgKDIwMTgtMjAxOSksMDAxLjE3MTAuLi4uMDIwLCwkMjAuMDAgLCw0LzUvMjAxOSA5OjE2cG0NCiwsLCwsLCwsLA0KLCwsLCwsJDAuMDAgLCIkMSw0MTguMDAgIiwkMC4wMCAsIiQxLDQxOC4wMCAiDQosLCwsLCwsLCwNCiwsLCwsLCwsLA0KSElMTFRPUCBTQ0hPT0wsLCwsLCwsLCwNCixTQ0hPRU5JTkcsT0xJVkVSLDM4ODUsRmVlOiBBbGwtRGF5IEtpbmRlcmdhcnRlbiAoMjAxOC0yMDE5KSwxLjEyMTEsLCIkMSw2NzUuMDAgIiwsNC81LzIwMTkgMTE6MTFhbQ0KLCwsLCwsLCwsDQosLCwsLCwkMC4wMCAsIiQxLDY3NS4wMCAiLCQwLjAwICwiJDEsNjc1LjAwICINCiwsLCwsLCwsLA0KLCwsLCwsLCwsDQpHcmFuZCBUb3RhbHMsLCwsLCwkMC4wMCAsIiQzLDA5My4wMCAiLCQwLjAwICwiJDMsMDkzLjAwICINCg=='
const receipt_excel =
    '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'

const receipts = [
    {
        key: 'bcaf19bf-764a-5ca2-9eee-d5068fbb45f6',
        data: {
            uploaded_by: 'aron23@gmail.com',
            UID: 'bcaf19bf-764a-5ca2-9eee-d5068fbb45f6',
            report_name: 'Daily Payments Report',
            report_date: '1554648960',
            report_begin: '1554476100',
            report_submissions: 3,
            district_uid: '4816c1fa-0877-529a-8b43-02bd60fe59f1',
            report_end: '1554648900',
            report_fees: '2626.20',
            report_key:
                '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',
            usas_receipt_no: '967',
            uploaded_on: 1567793852286,
            report_receipts: 58
        }
    },
    {
        key: 'f957be49-0a27-5278-b87e-e19cc91cc6ec',
        data: {
            district_uid: '4816c1fa-0877-529a-8b43-02bd60fe59f1',
            report_end: '1554476100',
            report_fees: '3093.00',
            report_key:
                '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',
            usas_receipt_no: '974',
            uploaded_on: 1568289219806,
            report_receipts: 23,
            uploaded_by: 'aron23@gmail.com',
            UID: 'f957be49-0a27-5278-b87e-e19cc91cc6ec',
            report_name: 'Daily Payments Report',
            report_date: '1554476160',
            report_begin: '1554389700',
            report_submissions: 2
        }
    }
]

export { receipts, receipt_csv, receipt_excel }

const checkout = { domain: 'testing.paytheory.com' }

export { checkout }

const parent = { parent: 'test-parent', route: '/' }

export { parent }

const manageDistrictPermissions = {
    title: 'Manage Districts',
    tag: 'manage-districts',
    enabled: true,
    accessType: 'read-write',
    subpages: [
        {
            tag: 'district-information',
            title: 'District Information',
            checked: true
        },
        {
            tag: 'district-fees',
            title: 'Fees',
            checked: true
        },
        {
            tag: 'district-transactions',
            title: 'Transactions',
            checked: true
        },
        {
            tag: 'district-accounts',
            title: 'User Accounts',
            checked: true
        }
    ]
}

const emptySystemPermissions = [
    {
        title: 'Manage Districts',
        tag: 'manage-districts',
        enabled: false,
        accessType: 'read-only',
        subpages: [
            {
                tag: 'district-information',
                title: 'District Information',
                checked: false
            },
            {
                tag: 'district-fees',
                title: 'Fees',
                checked: false
            },
            {
                tag: 'district-transactions',
                title: 'Transactions',
                checked: false
            },
            {
                tag: 'district-accounts',
                title: 'User Accounts',
                checked: false
            }
        ]
    },
    {
        title: 'Manage Partners',
        tag: 'manage-partners',
        enabled: false,
        accessType: 'read-only',
        subpages: [
            {
                tag: 'partner-information',
                title: 'Partner Information',
                checked: false
            },
            {
                tag: 'partner-accounts',
                title: 'User Accounts',
                checked: false
            }
        ]
    },
    {
        title: 'Manage Administrators',
        tag: 'manage-administrators',
        enabled: false,
        accessType: 'read-only',
        subpages: [
            {
                tag: 'administrator-accounts',
                title: 'User Accounts',
                checked: false
            }
        ]
    }
]

const emptyDistrictPermissions = [
    {
        title: 'Receipts',
        tag: 'manage-receipts',
        enabled: false,
        accessType: 'read-only',
        subpages: [
            {
                tag: 'district-receipts-review',
                title: 'Receipt Review',
                checked: false
            }
        ]
    },
    {
        title: 'Manage Donations',
        tag: 'manage-donations',
        enabled: false,
        accessType: 'read-only',
        subpages: [
            {
                tag: 'donation-detail',
                title: 'Donation Detail',
                checked: false
            }
        ]
    },
    {
        title: 'Account Codes',
        tag: 'account-codes',
        enabled: false,
        accessType: 'read-only',
        subpages: []
    },
    {
        title: 'Connections',
        tag: 'manage-connections',
        enabled: false,
        accessType: 'read-only',
        subpages: []
    },
    {
        title: 'Manage Sales',
        tag: 'manage-sales',
        enabled: false,
        accessType: 'read-only',
        subpages: [
            {
                tag: 'sales-receipt',
                title: 'Sales Receipt',
                checked: false
            }
        ]
    },
    {
        title: 'District Settings',
        tag: 'district-settings',
        enabled: false,
        accessType: 'read-only',
        subpages: []
    }
]

const emptyPartnerPermissions = []

const systemAdmin = {
    UID: 'c6ce0ca1-5478-5fbf-9a81-50dd29ca8c32',
    role_title: 'Pay Theory Administrator',
    role_access: 'full-access',
    role_locked: true,
    role_type: 'System',
    permissions: [manageDistrictPermissions]
}
const systemContrib = {
    UID: 'c6ce0ca1-5fbf-5478-9a81-50dd29ca8c32',
    role_title: 'Pay Theory Contributor',
    role_access: 'limited-access',
    role_locked: false,
    role_type: 'System',
    permissions: emptySystemPermissions
}
const districtAdmin = {
    UID: '57f01798-94f9-5e19-a3d5-7f4d28ef6c93',
    role_title: 'District Administrator',
    role_access: 'full-access',
    role_locked: true,
    role_type: 'District',
    permissions: []
}
const districtContrib = {
    UID: '57f01798-5e19-94f9-a3d5-7f4d28ef6c93',
    role_title: 'District Contributor',
    role_access: 'limited-access',
    role_locked: false,
    role_type: 'District',
    permissions: emptyDistrictPermissions
}
const partnerAdmin = {
    UID: 'e27d983f-10a8-57b3-b51c-4e8211b4bbd7',
    role_title: 'Partner Administrator',
    role_access: 'full-access',
    role_locked: true,
    role_type: 'Partner',
    permissions: []
}
const partnerContrib = {
    UID: 'e27d983f-10a8-57b3-b51c-4e8211b4bbd8',
    role_title: 'Partner Contributor',
    role_access: 'limited-access',
    role_locked: false,
    role_type: 'Partner',
    permissions: emptyPartnerPermissions
}

const systemRoles = [systemAdmin, systemContrib]
const districtRoles = [districtAdmin, districtContrib]
const partnerRoles = [partnerAdmin, partnerContrib]

const roles = {
    systemRoles: systemRoles,
    districtRoles: districtRoles,
    partnerRoles: partnerRoles
}

export { systemRoles, districtRoles, partnerRoles, roles }

const filterBarOptions = [
    {
        label: 'Transaction ID',
        value: 'id'
    },
    {
        label: 'Updated at',
        value: 'updated_at'
    },
    {
        label: 'Customer Name',
        value: 'name'
    },
    {
        label: 'Transaction Type',
        value: 'transactionType'
    },
    {
        label: 'Amount',
        value: 'amount'
    },
    {
        label: 'Status',
        value: 'status'
    }
]

export { filterBarOptions }

const settlements = [
    {
        batch_id: 'pt-settlement-00001a',
        total_amount: -25810,
        updated_at: '2020-08-11T16:03:00.91Z',
        transfer_debit_count: 6
    },
    {
        batch_id: 'pt-settlement-00002a',
        total_amount: 782934,
        updated_at: '2020-08-21T16:03:00.91Z',
        transfer_debit_count: 11
    },
    {
        batch_id: 'pt-settlement-00003a',
        total_amount: 23462,
        updated_at: '2020-08-26T16:03:00.91Z',
        transfer_debit_count: 17
    },
    {
        batch_id: 'pt-settlement-00004a',
        total_amount: 982342,
        updated_at: '2020-08-23T16:03:00.91Z',
        transfer_debit_count: 9
    }
]

export { settlements }

const settlement = {
    settlement: {
        UID: 'ST5e9yuTzfNuirYXXrQeTNyf',
        batch_id: 15,
        id: 'ST5e9yuTzfNuirYXXrQeTNyf',
        application: 'APrPDbJxbZuiRuwN3NjfajpH',
        merchant: '',
        identity: '',
        currency: 'USD',
        adjustment_credit_amount: 0,
        adjustment_credit_count: 0,
        adjustment_debit_amount: 0,
        adjustment_debit_count: 0,
        fee_count: 8,
        reverse_amount: 0,
        reverse_count: 0,
        dispute_credit_amount: 0,
        dispute_credit_count: 0,
        dispute_debit_amount: 0,
        dispute_debit_count: 0,
        total_fee_amount: 119,
        total_amount: 4082,
        transfer_credit_amount: 0,
        transfer_credit_count: 0,
        transfer_debit_amount: 4082,
        transfer_debit_count: 8,
        status: 'AWAITING_APPROVAL',
        created_at: '2020-09-12T16:08:02.05Z',
        updated_at: '2020-09-12T16:09:35.02Z'
    },
    payment_count: 8,
    payments: [
        {
            transfer_id: 'pt-aron-00002q',
            source_id: 'PI2Cs3VB8C5rnMM8huSCsRME',
            name: 'Test8 Suite11',
            amount: 890,
            type: 'DEBIT',
            card_brand: 'DISCOVER',
            last_four: '6630',
            state: 'SETTLED',
            statement_descriptor: 'PAYTHEORY*PT-DEV',
            created_at: '2020-09-12T16:08:02.21Z',
            updated_at: '2020-09-12T16:09:00.96Z',
            settlement: 15
        },
        {
            transfer_id: 'pt-aron-00002m',
            source_id: 'PIiTMTzXmxGpyy1jHfkTez1H',
            name: 'Test4 Suite11',
            amount: 456,
            type: 'DEBIT',
            card_brand: 'DISCOVER',
            last_four: '6630',
            state: 'SETTLED',
            statement_descriptor: 'PAYTHEORY*PT-DEV',
            created_at: '2020-09-12T16:07:48.04Z',
            updated_at: '2020-09-12T16:08:05.88Z',
            settlement: 15
        },
        {
            transfer_id: 'pt-aron-00002j',
            source_id: 'PIwCGWcHdUKiRNknkzRRSagw',
            name: 'Test1 Suite11',
            amount: 123,
            type: 'DEBIT',
            last_four: '-2272',
            state: 'SETTLED',
            statement_descriptor: 'PAYTHEORY*PT-DEV',
            created_at: '2020-09-12T16:07:40.81Z',
            updated_at: '2020-09-12T16:08:05.10Z',
            settlement: 15
        },
        {
            transfer_id: 'pt-aron-00002o',
            source_id: 'PIsCQUjF9UATopbmv6ikHvDg',
            name: 'Test6 Suite11',
            amount: 678,
            type: 'DEBIT',
            card_brand: 'MASTERCARD',
            last_four: '1063',
            state: 'ACCEPTED',
            statement_descriptor: 'PAYTHEORY*PT-DEV',
            created_at: '2020-09-12T16:07:53.92Z',
            updated_at: '2020-09-12T16:08:04.39Z',
            settlement: 15
        },
        {
            transfer_id: 'pt-aron-00002l',
            source_id: 'PIpen4hHJbGfPvkanjxN2Xpt',
            name: 'Test3 Suite11',
            amount: 345,
            type: 'DEBIT',
            card_brand: 'AMERICAN_EXPRESS',
            last_four: '6452',
            state: 'SETTLED',
            statement_descriptor: 'PAYTHEORY*PT-DEV',
            created_at: '2020-09-12T16:07:43.69Z',
            updated_at: '2020-09-12T16:08:03.66Z',
            settlement: 15
        },
        {
            transfer_id: 'pt-aron-00002p',
            source_id: 'PI6rdwYBnZxu2FFP8mk1QUMT',
            name: 'Test7 Suite11',
            amount: 789,
            type: 'DEBIT',
            card_brand: 'AMERICAN_EXPRESS',
            last_four: '6452',
            state: 'SETTLED',
            statement_descriptor: 'PAYTHEORY*PT-DEV',
            created_at: '2020-09-12T16:07:57.60Z',
            updated_at: '2020-09-12T16:08:02.80Z',
            settlement: 15
        },
        {
            transfer_id: 'pt-aron-00002n',
            source_id: 'PI6tygiuX41VLW8j6bQQouRf',
            name: 'Test5 Suite11',
            amount: 567,
            type: 'DEBIT',
            card_brand: 'VISA',
            last_four: '2272',
            state: 'SETTLED',
            statement_descriptor: 'PAYTHEORY*PT-DEV',
            created_at: '2020-09-12T16:07:50.36Z',
            updated_at: '2020-09-12T16:08:02.01Z',
            settlement: 15
        },
        {
            transfer_id: 'pt-aron-00002k',
            source_id: 'PIroTgtEG8TQW6j64YuWdxdT',
            name: 'Test2 Suite11',
            amount: -234,
            type: 'DEBIT',
            card_brand: 'MASTERCARD',
            last_four: '1063',
            state: 'SETTLED',
            statement_descriptor: 'PAYTHEORY*PT-DEV',
            created_at: '2020-09-12T16:07:42.53Z',
            updated_at: '2020-09-12T16:08:01.30Z',
            settlement: 15
        }
    ]
}

const feeModes = [
    {
        id: 95,
        UID: 'MPr7rWi2XfLhJdnEohimPMaM',
        merchant: 3,
        finix_merchant_id: 'MUdjKDkHUB1ty1fpP5U9EwRK',
        finix_identity: 'IDiGfyGRsAcvV2i34tnaWBLm',
        finix_fee_profile: null,
        merchant_profile_name: 'Development Team - Surcharge',
        fee_type: 'combined',
        fee: 290,
        additional_fixed: 30,
        created: '2020-11-22T13:06:42.000Z',
        modified: '2020-11-22T13:06:42.000Z'
    },
    {
        id: 15,
        UID: 'MPg5rDFeQfgfdY3ygDk6zyPL',
        merchant: 3,
        finix_merchant_id: 'MUwbjDR4Db8cw6q9jra8vp89',
        finix_identity: 'IDeKodEH8qK1kKfGf32TEwTM',
        finix_fee_profile: 'FPiWjvA1LaRe44VAWnZYteTc',
        merchant_profile_name: 'Development Team - Fixed',
        fee_type: 'fixed',
        fee: 195,
        additional_fixed: 0,
        created: '2020-11-02T18:08:03.000Z',
        modified: '2020-11-02T18:08:03.000Z'
    },
    {
        id: 13,
        UID: 'MPwvBzTGo7eFCqZdKa31TZcL',
        merchant: 3,
        finix_merchant_id: 'MUmcW7JspHKtwDMuczyZToC3',
        finix_identity: 'ID4CEeyYSetU2e845icF8GjF',
        finix_fee_profile: 'FPcqXfxhfhHoYP8k4ZsUF8Q8',
        merchant_profile_name: 'Development Team - Basis',
        fee_type: 'basis',
        fee: 380,
        additional_fixed: 0,
        created: '2020-11-02T18:08:05.000Z',
        modified: '2020-11-02T18:08:05.000Z'
    }
]

export { settlement, feeModes }
