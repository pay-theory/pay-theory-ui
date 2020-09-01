// eslint-disable-next-line security/detect-unsafe-regex
const dateSplit = /^([0-1]?(?:(?<=1)[0-2]|(?<!1)[1-9]))([0-3]?(?:(?<=[1-2])[0-9]|(?<=[3])[0-1]|(?<!1)[1-9]))?([1-2](?:(?<=1)9[0-9][0-9]|(?<=2)0[0-2][0-9]))?$/
const monthAbbreviations = [
    'Jan',
    'Feb',
    'Mar',
    'Apr',
    'May',
    'June',
    'July',
    'Aug',
    'Sep',
    'Oct',
    'Nov',
    'Dec'
]

export const formatDateString = (dateIn) => {
    const dated = dateIn.replace(/\D/g, '')

    if (dated === '') return ''
    const matched = dated.match(dateSplit)
    const month = matched && matched[1] ? matched[1] : ''
    const day = matched && matched[2] ? matched[2] : ''
    const dayRemainder =
        day || (matched && matched[1] ? dated.replace(matched[0], '') : '')
    const year = matched && matched[3] ? matched[3] : ''
    /* eslint-disable-next-line indent */
    const yearRemainder =
        year.length > 1 ?
        year :
        matched && matched[2] /* eslint-disable-next-line indent */ ?
        dated.replace(matched[0], '') :
        '' /* eslint-disable-line indent */

    if (year.length > 0) {
        return `${month} / ${day} / ${year}`
    }
    else if (yearRemainder.length > 0) {
        return `${month} / ${day} / ${yearRemainder}`
    }
    else if (day.length > 0) {
        return `${month} / ${day}`
    }
    else if (dayRemainder.length > 0) {
        return `${month} / ${dayRemainder}`
    }
    else if (month.length > 0) {
        return `${month}`
    }
    else {
        return `${dateIn}`
    }
}

export const validDate = (dateIn) => {
    dateIn = dateIn || ''
    if (dateIn === '') return true
    const matched = dateIn.replace(/\D+/g, '').match(dateSplit)
    const day = matched && matched[1] ? matched[1] : false
    const month = matched && matched[2] ? matched[2] : false
    const year = matched && matched[3] ? matched[3] : false

    if (year && month && day) {
        return new Date(year, month, day)
    }
    else {
        return false
    }
}

export const formatTimestamp = (stamp) => {
    const date = new Date(stamp)

    const MM = date.getMonth()
    const DD = date.getDate()
    const YY = date.getFullYear()
    const HH = date.getHours()
    let mm = date.getMinutes()
    let result

    if (mm < 10) {
        mm = '0' + mm
    }

    if (HH === 0) {
        result = `${
            monthAbbreviations[parseInt(MM)]
        } ${DD}, ${YY} @ 12:${mm} AM`
    }
    else if (HH === 12) {
        result = `${
            monthAbbreviations[parseInt(MM)]
        } ${DD}, ${YY} @ 12:${mm} PM`
    }
    else if (HH < 12) {
        result = `${
            monthAbbreviations[parseInt(MM)]
        } ${DD}, ${YY} @ ${HH}:${mm} AM`
    }
    else {
        result = `${monthAbbreviations[parseInt(MM)]} ${DD}, ${YY} @ ${
            HH - 12
        }:${mm} PM`
    }

    return result
}

export const formatDateAndTime = (date) => {
    const MM = date.getMonth()
    const DD = date.getDate()
    const YY = date.getFullYear()
    const HH = date.getHours()
    let mm = date.getMinutes()

    if (mm < 10) {
        mm = '0' + mm
    }

    let result

    if (HH === 0) {
        result = `${
            monthAbbreviations[parseInt(MM)]
        } ${DD}, ${YY} @ 12:${mm} AM`
    }
    else if (HH === 12) {
        result = `${
            monthAbbreviations[parseInt(MM)]
        } ${DD}, ${YY} @ 12:${mm} PM`
    }
    else if (HH < 12) {
        result = `${
            monthAbbreviations[parseInt(MM)]
        } ${DD}, ${YY} @ ${HH}:${mm} AM`
    }
    else {
        result = `${monthAbbreviations[parseInt(MM)]} ${DD}, ${YY} @ ${
            HH - 12
        }:${mm} PM`
    }

    return result
}

export const formatDate = (stamp) => {
    const dated = new Date(stamp)
    return `${dated.getMonth() + 1}/${dated.getDate()}/${dated.getFullYear()}`
}
