import React from 'react'
import PropTypes from 'prop-types'
import Button from '../Button'

const UtilityBar = (props) => {
    return (
        <div className='utility-bar'>
            {props.children}
            {props.addButton ? (
                <Button
                    label={props.addButton}
                    leadingIcon='plus-circle'
                    color='primary'
                    onClick={props.clickAction}
                    name='addButton'
                />
            ) : (
                ''
            )}
            <style jsx='true'>{`
                .utility-bar {
                    display: flex;
                    flex-direction: row;
                    justify-content: flex-end;
                    align-items: center;
                    max-height: 200px;
                    padding: 12px 24px;
                    width: auto;
                    height: auto;
                }
            `}</style>
        </div>
    )
}

UtilityBar.propTypes = {
    addButton: PropTypes.string,
    clickAction: PropTypes.func
}
export default UtilityBar
