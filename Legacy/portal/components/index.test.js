import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom'

import '@testing-library/jest-dom/extend-expect'

import { render, cleanup, fireEvent } from '@testing-library/react'

import { formatAccountCode, padAccountCode } from './accountCodeUtils'

test('display card row', async () => {
	let formatted = formatAccountCode('11')
	expect(formatted).toEqual('11')
	let padded = padAccountCode(formatted)
	expect(padded).toEqual('110-0000-0000-000000-000')

	formatted = formatAccountCode('111')
	expect(formatted).toEqual('111')
	padded = padAccountCode(formatted)
	expect(padded).toEqual('111-0000-0000-000000-000')

	formatted = formatAccountCode('111222')
	expect(formatted).toEqual('111-222')
	padded = padAccountCode(formatted)
	expect(padded).toEqual('111-2220-0000-000000-000')

	formatted = formatAccountCode('1112222')
	expect(formatted).toEqual('111-2222')
	padded = padAccountCode(formatted)
	expect(padded).toEqual('111-2222-0000-000000-000')

	formatted = formatAccountCode('1112222333344444')
	expect(formatted).toEqual('111-2222-3333-44444')
	padded = padAccountCode(formatted)
	expect(padded).toEqual('111-2222-3333-444440-000')

	formatted = formatAccountCode('11122223333444444')
	expect(formatted).toEqual('111-2222-3333-444444')
	padded = padAccountCode(formatted)
	expect(padded).toEqual('111-2222-3333-444444-000')

	formatted = formatAccountCode('1112222333344444455')
	expect(formatted).toEqual('111-2222-3333-444444-55')
	padded = padAccountCode(formatted)
	expect(padded).toEqual('111-2222-3333-444444-550')

	formatted = formatAccountCode('11122223333444444555')
	expect(formatted).toEqual('111-2222-3333-444444-555')
	padded = padAccountCode(formatted)
	expect(padded).toEqual('111-2222-3333-444444-555')
})
