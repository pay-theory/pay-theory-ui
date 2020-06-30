import React from 'react'

const CardTable = (props) => {
    return (
        <div className='card-table card' data-testid='card-table'>
            {props.children}
            <style jsx='true'>{`
                .card-table {
                    background-color: #fff;
                    display: flex;
                    flex-direction: column;
                    margin: 0 24px;
                    border-radius: 5px;
                }
            `}</style>
        </div>
    )
}

export default CardTable
