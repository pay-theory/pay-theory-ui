import React from 'react'
import PropTypes from 'prop-types'

import Button from '../Button'

const ActionHead = ({ header, action, label, actionId, icon }) => {
    return (
        <div className='action-tab-head'>
            <div className='actionHead'>
                <h3 className='title' data-testid='form-head-text'>
                    {header}
                </h3>
                <Button
                    name={actionId}
                    label={label}
                    onClick={action}
                    leadingIcon={icon}
                    small
                />
            </div>
            <style jsx='true'>{`
                .action-tab-head {
                    display: flex;
                    flex-direction: column;
                    width: 100%;
                }
                .actionHead {
                    padding: 24px 24px 14px 24px;
                    border-radius: 6px 6px 0px 0px;
                    display: flex;
                    justify-content: space-between;
                    align-content: center;
                }
                .action-tab-head .title {
                    font-size: 22px;
                    font-weight: 600;
                    margin: 0;
                    color: #101822;
                    text-transform: capitalize;
                }
            `}</style>
        </div>
    )
}
ActionHead.propTypes = {
    header: PropTypes.string.isRequired,
    action: PropTypes.func.isRequired,
    label: PropTypes.string.isRequired,
    actionId: PropTypes.string.isRequired,
    icon: PropTypes.string
}
export default ActionHead
