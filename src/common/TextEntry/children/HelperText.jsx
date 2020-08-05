import React from 'react'

export default (props) => {
    return (
        <React.Fragment>
            <div className='helper-line'>
                <div
                    data-testid="helper"
                    className={`helper-text ${
                        props.show ? 'opaque' : 'transparent'
                    }`}
                >
                    {props.children}
                </div>
            </div>
            <style jsx='true'>{`
                .helper-line {
                    display: -webkit-box;
                    display: flex;
                    -webkit-box-pack: justify;
                    justify-content: space-between;
                    box-sizing: border-box;
                }
                .helper-text {
                    font-smoothing: antialiased;
                    font-size: 0.75rem;
                    line-height: 1.25rem;
                    font-weight: 400;
                    letter-spacing: 0.03333em;
                    text-decoration: inherit;
                    text-transform: inherit;
                    display: block;
                    margin-top: 0;
                    line-height: normal;
                    margin: 0;
                    transition: opacity 150ms cubic-bezier(0.4, 0, 0.2, 1);
                    will-change: opacity;
                }
                .opaque {
                    opacity: 1;
                }
                .transparent {
                    opacity: 0;
                }
            `}</style>
        </React.Fragment>
    )
}
