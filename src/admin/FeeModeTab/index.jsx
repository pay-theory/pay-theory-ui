// node modules
import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import { FormHead, TabPage } from '../../common'
import { formatFee, formatBasisPoints } from '../../common/generalUtils'

const FeeModeTab = ({ feeModes }) => {
    const [fixed, setFixed] = useState({ fixedFee: 0 })
    const [basis, setBasis] = useState({ basisPoints: 0 })
    const [surcharge, setSurcharge] = useState({})

    useEffect(() => {
        Object.keys(feeModes).forEach((identity) => {
            const mode = feeModes[identity]
            if (mode.feeType === 'fixed') {
                setFixed(mode)
            }
            if (mode.feeType === 'basis') {
                setBasis(mode)
            }
            if (mode.feeType === 'combined') {
                setSurcharge(mode)
            }
        })
    }, [feeModes])
    return (
        <TabPage id='fee-mode-tab' visibility='gone'>
            <div className='tab-content'>
                <FormHead text='Fee Modes' />
                {surcharge.basisPoints ? <div className='tab-row'>
                    <div className='tab-column'>
                        <h4>Interchange Plus</h4>
                        <ul>
                            <li>
                                {`${formatBasisPoints(surcharge.basisPoints)}% + ${formatFee(
                                    surcharge.additionalFee
                                )}`}
                            </li>
                        </ul>
                    </div>
                </div> : null}
                <div className='tab-row' data-testid='service-fee'>
                    <div className='tab-column'>
                        <h4>Service Fee</h4>
                        <ul>
                            <li>{ basis.basisPoints > 0 ? `${formatBasisPoints(basis.basisPoints)}%`: '' }</li>
                            <li>
                                { fixed.fixedFee > 0 ? `Minimum Fee: ${formatFee(fixed.fixedFee)}` : '' }
                            </li>
                        </ul>
                    </div>
                </div>
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
