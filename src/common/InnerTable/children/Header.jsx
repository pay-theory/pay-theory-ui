import React from 'react'
import PropTypes from 'prop-types'

const Header = (props) => {
    const className = `head ${props.className}`
    return (
        <span
            className={className}
            key={`${props.className}-${props.itemKey}`}
            data-testid={`${props.className}-${props.itemKey}`}
        >
            {props.label}
            <style jsx='true'>{`
                .head {
                    font-size: 11pt;
                }
            `}</style>
        </span>
    )
}

Header.propTypes = {
    className: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    itemKey: PropTypes.any
}

export default Header
