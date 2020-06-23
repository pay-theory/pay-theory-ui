const dateSplit = /^([0-1]?(?:(?<=1)[0-2]|(?<!1)[1-9]))([0-3]?(?:(?<=[1-2])[0-9]|(?<=[3])[0-1]|(?<!1)[1-9]))?([1-2](?:(?<=1)9[0-9][0-9]|(?<=2)0[0-2][0-9]))?$/

export const formatDateString = (dateIn) => {
    dateIn = dateIn || ''
    const matched = dateIn.replace(/\D+/g, '').match(dateSplit)
    const day = matched[1] ? matched[1] : ' '
    const month = matched[2] ? matched[2] : ' '
    const year = matched[3] ? matched[3] : ' '

    return `${month} / ${day} / ${year}`
}

export const validDate = (dateIn) => {
    dateIn = dateIn || ''
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
