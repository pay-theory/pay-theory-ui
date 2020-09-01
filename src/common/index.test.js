import '@testing-library/jest-dom/extend-expect'

import { formatAccountCode, padAccountCode } from './accountCodeUtils'

import {
    formatDateAndTime,
    formatTimestamp,
    validDate,
    formatDateString
}
from './dateUtils.js'

import { validCurrency } from './accountUtils'

test('display card row', async() => {
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

test('test formatDateAndTime', async() => {
    let testDate = new Date(1989, 4, 31, 14, 12, 12, 12)
    let dateAndTime = formatDateAndTime(testDate)
    expect(dateAndTime).toEqual('May 31, 1989 @ 2:12 PM')

    testDate = new Date(1989, 4, 31, 10, 12, 12, 12)
    dateAndTime = formatDateAndTime(testDate)
    expect(dateAndTime).toEqual('May 31, 1989 @ 10:12 AM')

    testDate = new Date(1989, 4, 31, 12, 12, 12, 12)
    dateAndTime = formatDateAndTime(testDate)
    expect(dateAndTime).toEqual('May 31, 1989 @ 12:12 PM')

    testDate = new Date(1989, 4, 31, 0, 7, 12, 12)
    dateAndTime = formatDateAndTime(testDate)
    expect(dateAndTime).toEqual('May 31, 1989 @ 12:07 AM')
})

test('test formatTimestamp', async() => {
    let testDate = new Date(1596053452000)
    let dateAndTime = formatTimestamp(testDate)
    expect(dateAndTime).toEqual('July 29, 2020 @ 8:10 PM')

    testDate = new Date(1595981452000)
    dateAndTime = formatTimestamp(testDate)
    expect(dateAndTime).toEqual('July 29, 2020 @ 12:10 AM')

    testDate = new Date(1596024112000)
    dateAndTime = formatTimestamp(testDate)
    expect(dateAndTime).toEqual('July 29, 2020 @ 12:01 PM')
})

test('test validDate', async() => {
    expect(validDate(null)).toBe(true)

    expect(validDate('05311989')).toBeTruthy()

    expect(validDate('13311989')).toBe(false)
})

test('test formatDateString', async() => {
    expect(formatDateString('05')).toBe('05')

    expect(formatDateString('052')).toBe('05 / 2')

    expect(formatDateString('0522')).toBe('05 / 22')

    expect(formatDateString('05221999')).toBe('05 / 22 / 1999')
})

test('test validCurrency', async() => {
    expect(validCurrency('asdf')).toBe(false)

    expect(validCurrency('$12.3333')).toBe(false)

    expect(validCurrency('2341sdf')).toBe(false)

    expect(validCurrency('12.22')).toBe('1222')

    expect(validCurrency('$12345')).toBe('1234500')
})
