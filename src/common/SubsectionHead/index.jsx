import React from 'react'

import { SubsectionParent, SubsectionSubtitle } from './children'

const SubsectionHead = (props) => {
    return (
        <div className='body-head'>
            <SubsectionParent />
            <SubsectionSubtitle />
            <style jsx='true'>{`
                .body-head {
                    display: flex;
                    flex-direction: row;
                    padding: 24px;
                    justify-content: space-between;
                    align-items: center;
                    border-bottom: 1px solid #F2F2F2
                }
            `}</style>
        </div>
    )
}

export default SubsectionHead
