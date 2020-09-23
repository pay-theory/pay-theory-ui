import React from 'react'

const Unauthorized = () => {
    document.body.style = null
    return (
        <div id='appContainer'>
            <div id='errorContent'>
                <div className='pt-logo space-lg' />
                <div className='frenchie' />
                <h1 className='space-sm center white'>{`You seem to be lost... `}</h1>
                <p className='space-lg center white'>
                    {`That area is off limits, if you feel this is in error
                    please `}
                    <a href='mailto:support@paytheory.com'>{` contact support`}</a>
                </p>
            </div>
            <style global='true' jsx='true'>
                {`
                    html {
                        height: 100%;
                    }

                    body {
                        height: 100%;
                        width: 100%;
                        margin: 0;
                        padding: 0;
                        left: 0;
                        top: 0;
                        overflow: auto;
                        background-color: rgb(0, 153, 255);
                        backgroundimage: url('https://d3i745cguwtt4u.cloudfront.net/school-pattern.svg');
                        background-size: cover;
                        -webkit-font-smoothing: antialiased;
                    }

                    * {
                        font-family: 'Europa', Segoe UI, Trebuchet MS, Arial,
                            Helvetica;
                    }

                    h1 {
                        font-size: 28px;
                        font-weight: 600;
                        margin: 0;
                        color: #101822;
                    }

                    p {
                        font-size: 16px;
                        margin: 0;
                        color: #6b7887;
                    }

                    .white {
                        color: #fff !important;
                    }

                    .center {
                        text-align: center;
                        margin-left: auto;
                        margin-right: auto;
                    }

                    #appContainer {
                        display: flex;
                        align-items: center;
                        justify-content: center;
                        height: 100%;
                        width: 100%;
                        overflow: auto;
                    }

                    #errorContent {
                        width: 600px;
                        height: auto;
                        margin: 12px;
                        display: flex;
                        flex-direction: column;
                    }

                    .space-lg {
                        padding-bottom: 24px;
                    }

                    .space-sm {
                        padding-bottom: 12px;
                    }

                    .pt-logo {
                        background-image: url(https://assets.paytheory.com/pt-logo.svg);
                        background-repeat: no-repeat;
                        background-size: 85%;
                        background-position: 50%;
                        height: 40px;
                        width: 208px;
                        align-self: center;
                    }

                    .frenchie {
                        background-image: url(https://assets.paytheory.com/frenchie.svg);
                        background-repeat: no-repeat;
                        background-size: 70%;
                        background-position: 50%;
                        height: 350px;
                        width: 320px;
                        align-self: center;
                    }

                    .number-graphic {
                        background-image: url(https://assets.paytheory.com/404.svg);
                        background-repeat: no-repeat;
                        background-size: 100%;
                        background-position: 50%;
                        height: 100px;
                        width: 246px;
                        align-self: center;
                    }
                `}
            </style>
        </div>
    )
}

export default Unauthorized
