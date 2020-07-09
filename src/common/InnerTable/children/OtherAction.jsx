import React from 'react'
import PropTypes from 'prop-types'

const OtherAction = (props) => {
    return (
        <span className='cell actions' key={`actions-${props.row}`}>
            {props.actions.map((item) => {
                return (
                    <div
                        className='action other'
                        data-testid={`${item.label}-action`}
                        key={item.action}
                        onClick={item.action}
                        title={item.label}
                    >
                        <span>
                            <i className={`fal ${item.icon}`} />
                        </span>
                    </div>
                )
            })}
        </span>
    )
}

OtherAction.propTypes = {
    actions: PropTypes.array.isRequired,
    row: PropTypes.number.isRequired
}

export default OtherAction
