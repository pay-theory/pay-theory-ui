// node modules
import React from 'react'
import PropTypes from 'prop-types'
import { ACCESS } from '../const'

const AccessOptions = (props) => {
    return (
        <div>
            <div className='subsection-title'>
                <h5 className='navy'>Access level</h5>
            </div>
            <div className='access-options'>
                <div className='radio-option'>

                    <label htmlFor='full-access-radio'>
                        Full portal access
                    </label>
                </div>
                <div className='radio-option'>

                    <label htmlFor='limited-access-radio'>
                        Limited portal access
                    </label>
                </div>
            </div>
            <style jsx='true'>{`
                :root {
                    --mdc-theme-secondary: #0199ed;
                }
                .navy {
                    color: #253243;
                }

                .access-options {
                    margin-top: 0px;
                    margin-bottom: 24px;
                }
                .radio-option {
                    margin: 0px 24px;
                }
            `}</style>
        </div>
    )
}

AccessOptions.propTypes = {
    roleAccess: PropTypes.string.isRequired,
    setRoleAccess: PropTypes.func.isRequired,
    locked: PropTypes.bool
}

export default AccessOptions
