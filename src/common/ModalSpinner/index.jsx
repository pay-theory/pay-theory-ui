import React from 'react'
import PropTypes from 'prop-types'

const closeSpinner = () => {
    const container = document.getElementById('container')
    /* istanbul ignore else */
    if (container) {
        container.classList.remove('blurred')

        const spinnerForm = document.getElementById('spinner-form')
        spinnerForm.classList.add('spinner-form-off')
        spinnerForm.classList.remove('spinner-form-on')

        const spinner = document.getElementById('spinner')
        spinner.classList.add('spinner-off')
        spinner.classList.remove('spinner-on')
    }
}

const openSpinner = () => {
    const container = document.getElementById('container')
    /* istanbul ignore else */
    if (container) {
        container.classList.add('blurred')

        const spinner = document.getElementById('spinner')
        spinner.classList.remove('spinner-off')
        spinner.classList.add('spinner-on')

        const spinnerForm = document.getElementById('spinner-form')
        spinnerForm.classList.remove('spinner-form-off')
        spinnerForm.classList.add('spinner-form-on')
    }
}

export { closeSpinner, openSpinner }

const SpinnerContent = (props) => {
    return (
        <div className='hide-spinner'>
            <div
                id='spinner'
                className={`spinner-${props.on ? 'on' : 'off'}`}
                data-testid='spinner-close'
            />
            <div
                id='spinner-form'
                className={`spinner-form-${props.on ? 'on' : 'off'}`}
                data-testid='spinner-form'
            >
                <div id='spinner-content' className='lds-ellipsis'>
                    <div />
                    <div />
                    <div />
                    <div />
                </div>
            </div>
            <style jsx='true' global='true'>
                {`
                    #spinner-content {
                        display: flex;
                        flex-direction: column;
                        width: 100%;
                        min-height: 56px;
                    }

                    .spinner-wrapper {
                        height: 100%;
                        width: 100%;
                    }
                    .spinner-on {
                        display: flex;
                        flex-direction: column;
                        visibility: visible;
                        position: fixed;
                        top: 0;
                        left: 0;
                        height: 100%;
                        width: 100%;
                        backdrop-filter: opacity(75%) blur(1px);
                        z-index: 9999;
                    }
                    .spinner-off {
                        visibility: hidden;
                    }
                    .spinner-gone {
                        display: none;
                    }
                    .spinner-form-on {
                        margin: auto;
                        height: auto;
                        width: auto;
                        visibility: visible;
                        position: fixed;
                        top: 50%;
                        left: 50%;
                        z-index: 9999;
                    }

                    #spinner-content form {
                        display: flex;
                        flex-direction: column;
                        align-content: center;
                        justify-content: center;
                    }

                    .spinner-form-off {
                        visibility: hidden;
                    }

                    .spinner-form-gone {
                        display: none;
                    }

                    .hide-spinner {
                        height: 0;
                        overflow: hidden;
                    }

                    /* spinner css from https://loading.io/css/ */
                    .lds-ellipsis {
                        display: inline-block;
                        position: relative;
                        width: 64px;
                        height: 64px;
                    }
                    .lds-ellipsis div {
                        position: absolute;
                        top: 27px;
                        width: 11px;
                        height: 11px;
                        border-radius: 50%;
                        background: #31187f;
                        animation-timing-function: cubic-bezier(0, 1, 1, 0);
                    }
                    .lds-ellipsis div:nth-child(1) {
                        left: 6px;
                        animation: lds-ellipsis1 0.6s infinite;
                    }
                    .lds-ellipsis div:nth-child(2) {
                        left: 6px;
                        animation: lds-ellipsis2 0.6s infinite;
                    }
                    .lds-ellipsis div:nth-child(3) {
                        left: 26px;
                        animation: lds-ellipsis2 0.6s infinite;
                    }
                    .lds-ellipsis div:nth-child(4) {
                        left: 45px;
                        animation: lds-ellipsis3 0.6s infinite;
                    }
                    @keyframes lds-ellipsis1 {
                        0% {
                            transform: scale(0);
                        }
                        100% {
                            transform: scale(1);
                        }
                    }
                    @keyframes lds-ellipsis3 {
                        0% {
                            transform: scale(1);
                        }
                        100% {
                            transform: scale(0);
                        }
                    }
                    @keyframes lds-ellipsis2 {
                        0% {
                            transform: translate(0, 0);
                        }
                        100% {
                            transform: translate(19px, 0);
                        }
                    }
                `}
            </style>
        </div>
    )
}

SpinnerContent.propTypes = {
    on: PropTypes.bool
}

export default SpinnerContent
