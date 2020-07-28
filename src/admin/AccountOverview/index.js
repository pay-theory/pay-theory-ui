import React from 'react'
import PropTypes from 'prop-types'
import Button from '@material/react-button'

import { FormHead, TextEntry } from '../../common'
import * as BooksHooks from '../../hooks'

/* eslint-disable react/jsx-max-depth */

const AccountOverview = (props) => {
    return (
        <BooksHooks.context.member.Consumer>
            {(member) => {
                return (
                    <div className='card rounded' id='account-entry'>
                        <div className='page-contain'>
                            <div className='page-container page-visible'>
                                <div className='page-content'>
                                    <FormHead text='User Account Details' />
                                    <div className='row' id='given-name'>
                                        <div className='column'>
                                            <TextEntry
                                                data-testid='given'
                                                label='Given Name'
                                                name='given_name'
                                                onChange={props.onChange}
                                                value={member.given_name}
                                            />
                                        </div>
                                    </div>
                                    <div className='row' id='family-name'>
                                        <div className='column'>
                                            <TextEntry
                                                data-testid='family_name'
                                                label='Family Name'
                                                name='family_name'
                                                onChange={props.onChange}
                                                value={member.family_name}
                                            />
                                        </div>
                                    </div>
                                    <div className='row' id='member-name'>
                                        <div className='column'>
                                            <TextEntry
                                                data-testid='nickname'
                                                label='Username'
                                                name='nickname'
                                                onChange={props.onChange}
                                                value={member.nickname}
                                            />
                                        </div>
                                    </div>
                                    <div className='row' id='email-phone'>
                                        <div className='column'>
                                            <TextEntry
                                                data-testid='email'
                                                disabled
                                                label='Email'
                                                name='email'
                                                onChange={props.onChange}
                                                value={member.email}
                                            />
                                        </div>
                                    </div>
                                    <div className='page-content'>
                                        {/* eslint-disable react/forbid-component-props */}
                                        <Button
                                            className='primary-button save-account-button'
                                            data-testid='submit-account-detail'
                                            onClick={() =>
                                                props.saveAccount(member)
                                            }
                                            raised
                                        >
                                            {`Save `}
                                        </Button>
                                        {/* eslint-enable react/forbid-component-props */}
                                    </div>
                                </div>
                            </div>
                        </div>
                        <style global='true' jsx='true'>
                            {`
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
                            `}
                        </style>
                    </div>
                )
            }}
        </BooksHooks.context.member.Consumer>
    )
}

AccountOverview.propTypes = {
    onChange: PropTypes.func.isRequired,
    saveAccount: PropTypes.func.isRequired
}

export default AccountOverview

/* eslint-enable react/jsx-max-depth */
