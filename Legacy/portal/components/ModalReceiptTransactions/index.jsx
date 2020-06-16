import React from 'react'
import PropTypes from 'prop-types'

import InnerTable from '../InnerTable'
import ModalContent from '../ModalContent'

const generateTableColumns = () => {
	return [
		{ className: 'student-id', label: 'Student ID' },
		{ className: 'student-name', label: 'Student Name' },
		{ className: 'payment-no', label: 'No' },
		{ className: 'description', label: 'Description' },
		{ className: 'account-code', label: 'Account Code' },
		{ className: 'fee-type', label: 'Fee Type' },
		{ className: 'fee', label: 'Fee' },
	]
}

const generateTableRows = transactions => {
	return transactions.map(transaction => {
		return {
			columns: [{
					className: 'student-id',
					content: transaction.student_id,
				},
				{
					className: 'student-name',
					content: transaction.student_name,
				},
				{
					className: 'payment-no',
					content: transaction.payment_no,
				},
				{
					className: 'description',
					content: transaction.description,
				},
				{
					className: 'account-code',
					content: transaction.account_code,
				},
				{
					className: 'fee-type',
					content: transaction.fee_type,
				},
				{ className: 'fee', content: transaction.fee },
			],
			key: transaction.payment_no,
		}
	})
}

const ModalReceiptTransactions = props => {
	return (
		<ModalContent
			text={`Transaction Details: ${props.school} ${props.account}`}
		>
			<InnerTable
				columns={generateTableColumns()}
				rows={generateTableRows(props.transactions)}
				noAction
			/>
		</ModalContent>
	)
}

ModalReceiptTransactions.propTypes = {
	school: PropTypes.string.isRequired,
	account: PropTypes.string.isRequired,
	transactions: PropTypes.array.isRequired,
}

export default ModalReceiptTransactions
