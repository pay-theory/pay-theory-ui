import React from 'react'
import PropTypes from 'prop-types'

const OtherAction = (props) => {
    return (
        <span className='cell actions' key={`actions-${props.row}`}>
            {props.actions.map((item) => {
                return (
                    <div
                        className='action other'
                        data-testid={`${item.label.toLowerCase().replace(/\s/g, '-')}-action`}
                        key={item.label}
                        onClick={() => {
                            item.action(props.rowObject)
                        }}
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
    row: PropTypes.number.isRequired,
    rowObject: PropTypes.object.isRequired
}

export default OtherAction
