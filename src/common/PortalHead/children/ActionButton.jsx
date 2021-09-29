import React from 'react'
import Icon from '../../Icon'
import Tooltip from '../../Tooltip'

const ActionButton = ({ icon, action, tooltip }) => {
    const button = (
        <div className='pt-portal-head-action-button' onClick={action}>
            <Icon name={icon} />
        </div>
    )
    return tooltip ? (
        <Tooltip left text={tooltip}>
            {button}
        </Tooltip>
    ) : (
        button
    )
}

export default ActionButton
