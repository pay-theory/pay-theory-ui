import '@testing-library/jest-dom/extend-expect'

import { formatAccountCode, padAccountCode } from './accountCodeUtils'

import { formatDateAndTime, validDate, formatDateString } from './dateUtils.js'

import { validCurrency } from './accountUtils'

import { arrayToCSV, formatString, formatFee } from './generalUtils'

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

test('test formatDateAndTime', async () => {
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

// test('test formatTimestamp', async () => {
//     let testDate = new Date(1596053452000)
//     let dateAndTime = formatTimestamp(testDate)
//     expect(dateAndTime).toEqual('July 29, 2020 @ 8:10 PM')

//     testDate = new Date(1595981452000)
//     dateAndTime = formatTimestamp(testDate)
//     expect(dateAndTime).toEqual('July 29, 2020 @ 12:10 AM')

//     testDate = new Date(1596024112000)
//     dateAndTime = formatTimestamp(testDate)
//     expect(dateAndTime).toEqual('July 29, 2020 @ 12:01 PM')

//     expect(formatTimestamp('2020-07-21T08:01:11.35Z')).toEqual(
//         'July 21, 2020 @ 8:01 AM'
//     )
// })

test('test validDate', async () => {
    expect(validDate(null)).toBe(true)

    expect(validDate('05/31/1989')).toBeTruthy()

    expect(validDate('13/31/1989')).toBe(false)
})

test('test formatDateString', async () => {
    expect(formatDateString('05', '')).toBe('05')

    expect(formatDateString('120', '')).toBe('12/0')

    expect(formatDateString('0522', '')).toBe('05/22')

    expect(formatDateString('05221999', '')).toBe('05/22/1999')
})

test('test validCurrency', async () => {
    expect(validCurrency('asdf')).toBe(false)

    expect(validCurrency('$12.3333')).toBe(false)

    expect(validCurrency('2341sdf')).toBe(false)

    expect(validCurrency('12.22')).toBe('1222')

    expect(validCurrency('$12345')).toBe('1234500')

    expect(validCurrency('$12.22 12.22')).toBe(false)

    expect(validCurrency('$12.22wertyu')).toBe(false)

    expect(validCurrency('123 123')).toBe(false)
})

test('test formatFee', async () => {
    expect(formatFee(100)).toBe('$1.00')

    expect(formatFee(-123)).toBe('-$1.23')
})

test('test formatString', async () => {
    expect(formatString('AUSTIN')).toBe('Austin')

    expect(formatString('austin')).toBe('Austin')

    expect(formatString()).toBe('')
})

test('test arrayToCSV', async () => {
    const objectArray = [
        { first: 'test', second: 'test2' },
        { first: 'test3', second: 'test4' }
    ]
    expect(arrayToCSV(objectArray)).toBe(
        '"first","second"\r\n"test","test2"\r\n"test3","test4"\r\n'
    )

    const jsonObj = JSON.stringify(objectArray)

    expect(arrayToCSV(jsonObj)).toBe(
        '"first","second"\r\n"test","test2"\r\n"test3","test4"\r\n'
    )
})
