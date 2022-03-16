import React from 'react'
import PropTypes from 'prop-types'

const TabPage = (props) => {
    return (
        <div
            id={props.id}
            data-testid='tab-page'
            className={`tab-container ${props.visibility}`}
        >
            {props.children}
            <style jsx='true' global='true'>{`
                .tab-visible {
                    display: block;
                }

                .tab-container {
                    height: 100%;
                }

                .gone {
                    display: none;
                }

                .tab-row {
                    display: flex;
                    flex-direction: row;
                    justify-content: space-around;
                    align-items: flex-start;
                }
                .tab-column {
                    margin: 16px 12px 16px 24px;
                    display: flex;
                    flex-direction: column;
                    width: 100%;
                }

                .tab-column .mdc-select {
                    margin: 16px 24px;
                }

                .tab-content {
                    display: flex;
                    flex-direction: column;
                    justify-content: flex-start;
                    align-items: stretch;
                }

                .tab-content {
                    display: flex;
                    flex-direction: column;
                    justify-content: flex-start;
                    align-items: stretch;
                }

                .tab-content .text-entry {
                    margin: 16px 24px;
                }
                .tab-content .primary-button {
                    margin: 16px 24px;
                }
            `}</style>
        </div>
    )
}

TabPage.propTypes = {
    id: PropTypes.string.isRequired,
    visibility: PropTypes.string
}

export default TabPage
