import React from 'react'
import '@testing-library/jest-dom/extend-expect'

import { render, fireEvent } from '@testing-library/react'

import { openModal } from '../../common'

import ActionModal from '.'

// test('modal create role success', async() => {
//     const refund = jest.fn()

//     const { queryByText, queryByTestId } = render(
//         <div className='spinner-wrapper'>
//                 <div className='modal-wrapper'>
//                     <div id='container' />
//                     <ActionModal
//                         action={refund}
//                         actionName="Refund"
//                         label='refund'
//                         message="Are you sure you want to refund?"
//                     />
//                 </div>
//             </div>
//     )
//     expect(queryByText('refund')).not.toBeVisible()
//     openModal()
//     expect(queryByText('refund')).toBeVisible()

//     fireEvent.click(queryByTestId('refund-button'))

//     expect(refund).toHaveBeenCalledTimes(1)

//     fireEvent.click(queryByTestId('cancel-button'))

//     expect(queryByText('refund')).not.toBeVisible()
// })
