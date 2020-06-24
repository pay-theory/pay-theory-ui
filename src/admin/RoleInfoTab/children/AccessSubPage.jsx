// node modules
import React from 'react'
import PropTypes from 'prop-types'
import Checkbox from '../../../common/Checkbox'

const AccessSubPage = (props) => {
    return (
        <div className='check-option' key={props.tag}>
            <Checkbox
                data-testid={props.tag}
                id={props.tag}
                checked={props.checked}
                onChange={(e) => props.onChange(e)}
                label={props.title}
            />
            <style jsx='true'>{`
                .check-option {
                    margin: 0px 24px;
                    display: flex;
                    flex-direction: row;
                    justify-content: flex-start;
                    align-items: center;
                }
            `}</style>
        </div>
    )
}

AccessSubPage.propTypes = {
    tag: PropTypes.string.isRequired,
    checked: PropTypes.bool.isRequired,
    title: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired
}

export default AccessSubPage
