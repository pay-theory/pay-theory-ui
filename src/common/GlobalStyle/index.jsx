/* istanbul ignore file */
import React from 'react'

const GlobalStyle = (props) => {
    return (
        <div className='appContainer' data-testid='globalStyle'>
            {props.children}
            <style global='true' jsx='true'>
                {`
                    :root {
                        /* Colors */
                        --pt-purple: rgba(145, 57, 210, 1);
                        --pt-purple-opaque-56: rgba(145, 57, 210, 0.56);
                        --pt-purple-opaque-8: rgba(145, 57, 210, 0.08);
                        --pt-purple-1: rgba(124, 44, 221, 1);
                        --pt-purple-dark: rgba(90, 22, 170, 1);
                        --white: rgba(255, 255, 255, 1);
                        --black: rgba(0, 0, 0, 1);
                        --black-opaque-8: rgba(0, 0, 0, 0.08);
                        --black-opaque-16: rgba(0, 0, 0, 0.16);
                        --black-opaque-32: rgba(0, 0, 0, 0.32);
                        --dark-grey: rgba(106, 96, 109, 1);
                        --grey: rgba(142, 134, 143, 1);
                        --grey-1: rgba(202, 196, 202, 1);
                        --grey-1-opaque: rgba(202, 196, 202, 0.16);
                        --grey-1-opaque-32: rgba(202, 196, 202, 0.32);
                        --grey-2: rgba(242, 242, 242, 1);
                        --grey-2-opaque: rgba(242, 242, 242, 0.48);
                        --grey-3: rgba(248, 248, 248, 1);
                        --pink: rgba(255, 170, 195, 1);
                        --raspberry: rgba(255, 105, 118, 1);
                        --raspberry-opaque: rgba(255, 105, 118, 0.08);
                        --light-red: rgba(255, 237, 245, 1);
                        --red: rgba(226, 58, 84, 1);
                        --orange: rgba(255, 152, 75, 1);
                        --light-yellow: rgba(255, 255, 237, 1);
                        --yellow: rgba(253, 204, 41, 1);
                        --light-mint: rgba(234, 255, 244, 1);
                        --dark-mint: rgba(91, 199, 148, 1);
                        --mint: rgba(156, 239, 189, 1);
                        --light-blue: rgba(232, 244, 255, 1);
                        --blue: rgba(84, 122, 243, 1);
                        --dark-blue: rgba(46, 56, 191, 1);
                        --light-indigo: rgba(214, 217, 255, 1);
                        --indigo: rgba(122, 100, 255, 1);
                        --purple-light: rgba(246, 238, 255, 1);

                        /* font-weight */
                        --light-weight: 200;
                        --book-weight: 300;
                        --regular-weight: 400;
                        --medium-weight: 500;
                        --black-weight: 900;

                        /* font-family */
                        --primary-font: halyard-text, inter, arial, sans-serif;
                        --secondary-font: ibm-plex-mono, monaco, monospace;
                    }
                    #app,
                    #root,
                    html,
                    body {
                        height: 100%;
                    }

                    * {
                        -webkit-box-sizing: border-box;
                        -moz-box-sizing: border-box;
                        -o-box-sizing: border-box;
                        box-sizing: border-box;
                        margin: 0;
                        padding: 0;
                        -webkit-text-size-adjust: none;
                    }
                    body {
                        background-image: none;
                        height: 100%;
                        margin: 0;
                        padding: 0;
                        font-family: var(--primary-font);
                        font-display: swap;
                        -webkit-font-smoothing: antialiased;
                        -moz-osx-font-smoothing: grayscale;
                        overflow: hidden;
                    }

                    #container {
                        height: 100vh;
                        width: 100vw;
                        display: grid;
                        grid-template-columns: 1fr;
                        grid-template-rows: 64px 1fr;
                    }
                    .body-container {
                        background-color: var(--white);
                        display: grid;
                        height: 100%;
                        grid-template-columns: 290px 1fr;
                        overflow: hidden;
                    }

                    .body-content {
                        padding: 16px;
                        overflow-y: auto;
                    }

                    #container {
                        display: flex;
                        flex-direction: column;
                        min-height: 100%;
                        width: 100%;
                    }

                    .modal-wrapper {
                        height: 100%;
                        width: 100%;
                    }
                    .spinner-wrapper {
                        height: 100%;
                        width: 100%;
                    }

                    h1 {
                        font-weight: var(--light-weight);
                        font-size: 60px;
                        color: var(--black);
                        line-height: 60px;
                    }

                    h1.strong {
                        font-weight: var(--black-weight);
                    }

                    h1.alt-text {
                        font-weight: var(--book-weight);
                        font-size: 56px;
                        color: var(--black);
                        line-height: 52px;
                        text-transform: uppercase;
                    }

                    .pt-icon.h1 {
                        font-weight: var(--light-weight);
                        font-size: 54px;
                        color: var(--black);
                        line-height: 68px;
                    }

                    h2 {
                        font-weight: var(--light-weight);
                        font-size: 38px;
                        color: var(--black);
                        line-height: 42px;
                    }

                    h2.strong {
                        font-weight: var(--black-weight);
                    }

                    h2.alt-text {
                        font-weight: var(--book-weight);
                        font-size: 32px;
                        color: var(--black);
                        line-height: 30px;
                        text-transform: uppercase;
                    }

                    .pt-icon.h2 {
                        font-weight: var(--light-weight);
                        font-size: 31px;
                        color: var(--black);
                        line-height: 40px;
                    }

                    h3 {
                        font-weight: var(--light-weight);
                        font-size: 26px;
                        color: var(--black);
                        line-height: 30px;
                    }

                    h3.strong {
                        font-weight: var(--black-weight);
                    }

                    h3.alt-text {
                        font-weight: var(--book-weight);
                        font-size: 22px;
                        color: var(--black);
                        line-height: 22px;
                        text-transform: uppercase;
                    }

                    .pt-icon.h3 {
                        font-weight: var(--light-weight);
                        font-size: 24px;
                        color: var(--black);
                        line-height: 32px;
                    }

                    h4 {
                        font-weight: var(--book-weight);
                        font-size: 18px;
                        color: var(--black);
                        line-height: 22px;
                    }

                    h4.strong {
                        font-weight: var(--medium-weight);
                    }

                    h4.alt-text {
                        font-weight: var(--regular-weight);
                        font-size: 16px;
                        color: var(--black);
                        line-height: 18px;
                        text-transform: uppercase;
                    }

                    .pt-icon.h4 {
                        font-weight: var(--light-weight);
                        font-size: 18px;
                        color: var(--black);
                        line-height: 24px;
                    }

                    h5 {
                        font-weight: var(--book-weight);
                        font-size: 14px;
                        color: var(--black);
                        line-height: 17px;
                    }

                    h5.strong {
                        font-weight: var(--medium-weight);
                    }

                    h5.alt-text {
                        font-weight: var(--regular-weight);
                        font-size: 12px;
                        color: var(--black);
                        line-height: 14px;
                        text-transform: uppercase;
                    }

                    .pt-icon.h5 {
                        font-weight: var(--light-weight);
                        font-size: 13px;
                        color: var(--black);
                        line-height: 18px;
                    }

                    h6 {
                        font-weight: var(--book-weight);
                        font-size: 11px;
                        color: var(--black);
                        line-height: 13px;
                    }

                    h6.strong {
                        font-weight: var(--medium-weight);
                    }

                    h6.alt-text {
                        font-weight: var(--regular-weight);
                        font-size: 10px;
                        color: var(--black);
                        line-height: 13px;
                        text-transform: uppercase;
                    }

                    .pt-icon.h6 {
                        font-weight: var(--light-weight);
                        font-size: 10px;
                        color: var(--black);
                        line-height: 14pxpx;
                    }

                    p {
                        font-weight: var(--book-weight);
                        font-size: 16px;
                        color: var(--black);
                        line-height: 20px;
                    }

                    p.strong {
                        font-weight: var(--medium-weight);
                    }

                    p.alt-text {
                        font-weight: var(--regular-weight);
                        font-size: 14px;
                        color: var(--black);
                        line-height: 16px;
                        text-transform: uppercase;
                    }

                    .pt-icon.p {
                        font-weight: var(--light-weight);
                        font-size: 16px;
                        color: var(--black);
                        line-height: 22px;
                    }

                    .all-caps {
                        text-transform: uppercase;
                    }

                    .alt-text {
                        font-family: var(--secondary-font);
                    }

                    a {
                        color: var(--pt-purple);
                    }

                    .grey {
                        color: var(--dark-grey) !important;
                    }

                    .no-select {
                        -webkit-touch-callout: none; /* iOS Safari */
                        -webkit-user-select: none; /* Safari */
                        -khtml-user-select: none; /* Konqueror HTML */
                        -moz-user-select: none; /* Old versions of Firefox */
                        -ms-user-select: none; /* Internet Explorer/Edge */
                        user-select: none; /* Non-prefixed version, currently
                                          supported by Chrome, Edge, Opera and Firefox */
                    }

                    .pay-theory-card-visa {
                        background-image: url(https://books-ui-assets.s3.amazonaws.com/visa-color.svg);
                    }

                    .pay-theory-card-mastercard {
                        background-image: url(https://books-ui-assets.s3.amazonaws.com/mastercard-color.svg);
                    }

                    .pay-theory-card-american-express {
                        background-image: url(https://books-ui-assets.s3.amazonaws.com/amex-color.svg);
                    }

                    .pay-theory-card-discover {
                        background-image: url(https://books-ui-assets.s3.amazonaws.com/discover-color.svg);
                    }

                    .pay-theory-card-default {
                        background-image: url(https://books-ui-assets.s3.amazonaws.com/card-default-color.svg);
                    }

                    .pay-theory-ach-badge {
                        background-image: url(https://books-ui-assets.s3.amazonaws.com/ACH-color.svg);
                    }

                    .pay-theory-cash-badge {
                        background-image: url(https://books-ui-assets.s3.amazonaws.com/cash-dollar-color.svg);
                    }

                    .flex {
                        display: flex;
                    }

                    .flex-center {
                        display: flex;
                        justify-content: center;
                    }

                    .flex-between {
                        display: flex;
                        justify-content: space-between;
                    }

                    .flex-around {
                        display: flex;
                        justify-content: space-around;
                    }
                `}
            </style>
        </div>
    )
}

export default GlobalStyle
