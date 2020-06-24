const dateSplit = /^([0-1]?(?:(?<=1)[0-2]|(?<!1)[1-9]))([0-3]?(?:(?<=[1-2])[0-9]|(?<=[3])[0-1]|(?<!1)[1-9]))?([1-2](?:(?<=1)9[0-9][0-9]|(?<=2)0[0-2][0-9]))?$/

export const formatDateString = (dateIn) => {
    const dated = dateIn.replace(/\D/g, '')

    if (dated === '') return ''
    const matched = dated.match(dateSplit)
    const month = matched && matched[1] ? matched[1] : ''
    const day = matched && matched[2] ? matched[2] : ''
    const dayRemainder =
        day || (matched && matched[1] ? dated.replace(matched[0], '') : '')
    const year = matched && matched[3] ? matched[3] : ''
    const yearRemainder =
        year.length > 1
            ? year
            : matched && matched[2]
            ? dated.replace(matched[0], '')
            : ''

    if (year.length > 0) {
        return `${month} / ${day} / ${year}`
    } else if (yearRemainder.length > 0) {
        return `${month} / ${day} / ${yearRemainder}`
    } else if (day.length > 0) {
        return `${month} / ${day}`
    } else if (dayRemainder.length > 0) {
        return `${month} / ${dayRemainder}`
    } else if (month.length > 0) {
        return `${month}`
    } else {
        return `${dateIn}`
    }
}

export const validDate = (dateIn) => {
    dateIn = dateIn || ''
    if (dateIn === '') return true
    const matched = dateIn.replace(/\D+/g, '').match(dateSplit)
    const day = matched[1] ? matched[1] : false
    const month = matched[2] ? matched[2] : false
    const year = matched[3] ? matched[3] : false

    if (year && month && day) {
        return new Date(year, month, day)
    } else {
        return false
    }
}
