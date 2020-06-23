import React from 'react'
import PropTypes from 'prop-types'
import Button from '@material/react-button'

import { FormHead, TextEntry } from '../../common'
import * as BooksHooks from '../../hooks'

const AccountOverview = (props) => {
    return (
        <BooksHooks.context.member.Consumer>
            {(member) => {
                return (
                    <div id='account-entry' className='card rounded'>
                        <div className='page-contain'>
                            <div className='page-container page-visible'>
                                <div className='page-content'>
                                    <FormHead text='User Account Details' />
                                    <div id='given-name' className='row'>
                                        <div className='column'>
                                            <TextEntry
                                                label='Given Name'
                                                name='given_name'
                                                onChange={props.onChange}
                                                data-testid='given'
                                                value={member.given_name}
                                            />
                                        </div>
                                    </div>
                                    <div id='family-name' className='row'>
                                        <div className='column'>
                                            <TextEntry
                                                label='Family Name'
                                                name='family_name'
                                                onChange={props.onChange}
                                                data-testid='family_name'
                                                value={member.family_name}
                                            />
                                        </div>
                                    </div>
                                    <div id='member-name' className='row'>
                                        <div className='column'>
                                            <TextEntry
                                                label='Username'
                                                name='nickname'
                                                onChange={props.onChange}
                                                data-testid='nickname'
                                                value={member.nickname}
                                            />
                                        </div>
                                    </div>
                                    <div id='email-phone' className='row'>
                                        <div className='column'>
                                            <TextEntry
                                                label='Email'
                                                name='email'
                                                onChange={props.onChange}
                                                data-testid='email'
                                                value={member.email}
                                                disabled
                                            />
                                        </div>
                                    </div>
                                </div>
                                <div className='page-content'>
                                    <Button
                                        className='primary-button save-account-button'
                                        raised
                                        onClick={() =>
                                            props.saveAccount(member)
                                        }
                                        data-testid='submit-account-detail'
                                    >
                                        Save
                                    </Button>
                                </div>
                            </div>
                        </div>
                        <style jsx='true' global='true'>{`
                            #account-entry {
                                max-width: 100%;
                                min-width: 600px;
                                width: auto;
                                padding: 0;
                                flex-grow: 1;
                                margin: 0 24px;
                            }
                            .page-content {
                                display: flex;
                                flex-direction: column;
                                justify-content: flex-start;
                                align-items: stretch;
                            }
                            .save-account-button {
                                margin: 16px 24px;
                            }
                            .row {
                                display: flex;
                                flex-direction: row;
                                justify-content: space-around;
                                align-items: flex-start;
                            }
                            .column {
                                margin: 16px 12px 16px 24px;
                                display: flex;
                                flex-direction: column;
                                width: 100%;
                            }
                            .column .mdc-select {
                                margin: 16px 24px;
                            }
                        `}</style>
                    </div>
                )
            }}
        </BooksHooks.context.member.Consumer>
    )
}

AccountOverview.propTypes = {
    saveAccount: PropTypes.func.isRequired,
    onChange: PropTypes.func.isRequired
}

export default AccountOverview
