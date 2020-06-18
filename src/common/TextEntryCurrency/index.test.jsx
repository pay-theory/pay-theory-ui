import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom'

import '@testing-library/jest-dom/extend-expect'

import { render, cleanup, fireEvent } from '@testing-library/react'

import TextEntryCurrency from '.'

// TextEntryCurrency.propTypes = {
// 	name: PropTypes.string.isRequired,
// 	label: PropTypes.string.isRequired,
// 	value: PropTypes.number.isRequired,
// 	onChange: PropTypes.func.required,
// 	onBlur: PropTypes.func,
// 	autoComplete: PropTypes.string,
// 	onChange: PropTypes.string,
// 	required: PropTypes.bool,
// }
test('display currency entry', async () => {
	const onChange = jest.fn()
	const { getByText, queryByTestId } = render(
		<TextEntryCurrency
			name="test-name"
			label="test-label"
			value="100"
			onChange={onChange}
		/>
	)

	expect(getByText('test-label')).toBeInTheDocument()

	fireEvent.change(queryByTestId('test-name'), { target: { value: 999 } })
	expect(onChange).toHaveBeenCalledTimes(1)
})
