// node modules
import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import { FormHead, TabPage } from '../../common'
import { formatFee, formatBasisPoints } from '../../common/generalUtils'

const FeeModeTab = ({ feeModes }) => {
    const [fixed, setFixed] = useState({})
    const [basis, setBasis] = useState({})
    const [surcharge, setSurcharge] = useState({})

    useEffect(() => {
        feeModes.forEach((mode) => {
            if (mode.fee_type === 'fixed') {
                setFixed(mode)
            }
            if (mode.fee_type === 'basis') {
                setBasis(mode)
            }
            if (mode.fee_type === 'combined') {
                setSurcharge(mode)
            }
        })
    }, [feeModes])
    return (
        <TabPage id='fee-mode-tab' visibility='gone'>
            <div className='tab-content'>
                <FormHead text='Fee Modes' />
                <div className='tab-row'>
                    <div className='tab-column'>
                        <h4>Interchange Plus</h4>
                        <ul>
                            <li>
                                {`${formatBasisPoints(surcharge.fee)}% + ${formatFee(
                                    surcharge.additional_fixed
                                )}`}
                            </li>
                        </ul>
                    </div>
                </div>
                {feeModes.length > 1 ? (
                    <div className='tab-row' data-testid='service-fee'>
                        <div className='tab-column'>
                            <h4>Service Fee</h4>
                            <ul>
                                <li>{`${formatBasisPoints(basis.fee)}%`}</li>
                                <li>
                                    {`Minimum Fee: ${formatFee(fixed.fee)}`}
                                </li>
                            </ul>
                        </div>
                    </div>
                ) : null}
            </div>
            <hr />
            <style global='true' jsx='true'>
                {`
                    #fee-mode-tab ul {
                        list-style-position: inside;
                    }

                    #fee-mode-tab h4 {
                        margin-bottom: 5px;
                    }
                `}
            </style>
        </TabPage>
    )
}

FeeModeTab.propTypes = {
    feeModes: PropTypes.array.isRequired
}

export default FeeModeTab
