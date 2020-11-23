/* istanbul ignore file */
import React from 'react'

const GlobalStyle = (props) => {
    return (
        <div data-testid='globalStyle' className='appContainer'>
            {props.children}
            <style jsx='true' global='true'>{`
                :root {
                    --mdc-theme-secondary: #0199ed;
                }
                #app,
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
                    overflow: auto;
                    margin: 0;
                    padding: 0;
                    font-family: Europa, Segoe UI, Trebuchet MS, Arial,
                        Helvetica, sans-serif;
                    font-display: swap;
                    -webkit-font-smoothing: antialiased;
                    -moz-osx-font-smoothing: grayscale;
                    overflow: auto;
                }
                .body-container {
                    background-color: #FFFFFF;
                    flex-grow: 1;
                    height: 100%;
                    display: flex;
                    justify-content: stretch;
                    flex-direction: row;
                    flex-grow: 100;
                }

                .body-content {
                    height: 100%;
                    flex-grow: 100;
                    color: #1F0A28;
                    display: flex;
                    flex-direction: column;
                    overflow: visible;
                }
                .mdc-button {
                    font-family: Europa, Segoe UI, Trebuchet MS, Arial,
                        Helvetica, sans-serif !important;
                    font-display: swap;
                    letter-spacing: 0 !important;
                }
                .mdc-text-field {
                    font-family: Europa, Segoe UI, Trebuchet MS, Arial,
                        Helvetica, sans-serif !important;
                    font-display: swap;
                }

                code {
                    font-family: source-code-pro, Menlo, Monaco, Consolas,
                        'Courier New', monospace;
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
                .secondary-button i,
                .negative-button i,
                .primary-button i {
                    margin-right: 8px;
                }

                .secondary-button,
                .negative-button,
                .primary-button {
                    text-transform: none !important;
                    height: 46px !important;
                    line-height: 46px;
                    font-size: 0.95rem !important;
                    font-weight: 600 !important;
                    width: auto;
                    max-width: 250px;
                    border-radius: 4px;
                }

                .secondary-button {
                    background-color: #fff !important;
                    border-color: #e8ecef !important;
                    color: #101822 !important;
                    border-style: solid !important;
                    border-width: 1px 1px 1px 1px !important;
                }

                .negative-button {
                    background-color: #fff !important;
                    color: #ed454c !important;
                }

                .primary-button {
                    background-color: #09f !important;
                    color: #fff !important;
                }

                .primary-button i {
                    margin-right: 8px;
                }
                h3 {
                    font-size: 22px;
                    font-weight: 600;
                    margin: 0;
                    color: #101822;
                }
                .card {
                    background-color: #fff;
                    box-shadow: 0 3px 1px -2px rgba(0, 0, 0, 0.2),
                        0 2px 2px 0 rgba(0, 0, 0, 0.14),
                        0 1px 5px 0 rgba(0, 0, 0, 0.12);
                    -webkit-transition: box-shadow 0.28s
                        cubic-bezier(0.4, 0, 0.2, 1);
                    transition: box-shadow 0.28s cubic-bezier(0.4, 0, 0.2, 1);
                }

                .rounded {
                    border-radius: 5px;
                }

                .overview-detail-container {
                    display: flex;
                    flex-direction: row;
                    justify-content: flex-start;
                    align-items: flex-start;
                }
                .school-entry {
                    max-width: 100%;
                    min-width: 762px;
                    width: auto;
                    padding: 0;
                    flex-grow: 1;
                    margin: 0 8px;
                }
                .overview {
                    justify-content: center;
                    align-items: center;
                    width: 323px;
                    padding: 0 !important;
                    margin: 0 0 0 8px;
                }
                .coming-soon {
                    display: inline-block;
                    max-height: 28px;
                    border-radius: 14px;
                    font-size: 16px;
                    line-height: 20px;
                    font-weight: 600;
                    letter-spacing: 0;
                    padding: 4px 14px;
                    margin: 2px;
                    background: rgb(248, 95, 14);
                    background: linear-gradient(
                        45deg,
                        rgba(248, 95, 14, 1) 0%,
                        rgba(144, 49, 237, 1) 100%
                    );
                    color: #fff;
                }
                hr {
                    background-color: #cad3dd;
                    width: 100%;
                    opacity: 0.5;
                    border: 0;
                    clear: both;
                    display: block;
                    height: 1px;
                }
            `}</style>
        </div>
    )
}

export default GlobalStyle
