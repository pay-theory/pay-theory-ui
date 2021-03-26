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

const daysInMonth = {
    1: 31,
    2: 29,
    3: 31,
    4: 30,
    5: 31,
    6: 30,
    7: 31,
    8: 31,
    9: 30,
    10: 31,
    11: 30,
    12: 31,
}

const findMonth = (string) => {
    let month = parseInt(string.substring(0, 2));

    if (month > 0 && month < 13) {
        let dayAndYear = string.length > 1 ?
            findDayAndYear(string.substring(2), month) :
            findDayAndYear(string.substring(1), month);
        return [string.substring(0, 2), ...dayAndYear];
    }
    else {
        let month = parseInt(string.charAt(0));
        let dayAndYear = findDayAndYear(string.substring(1), month);
        return [month, ...dayAndYear];
    }
};

const findDayAndYear = (string, month) => {
    if (string.length === 0) return [];

    let day = parseInt(string.substring(0, 2));

    if (day > 0 && day <= daysInMonth[month]) {
        let result = string.substring(2) !== "" ? [day, parseInt(string.substring(2, 6))] : [day];
        return result;
    }
    else {
        let day = parseInt(string.charAt(0));
        let result = string.substring(1) !== "" && day > 0 ? [day, parseInt(string.substring(1, 5))] : [day];
        return result;
    }
};

export const formatDateString = (dateIn, previousDate) => {
    let value = dateIn;
    if (previousDate.length > dateIn.length && previousDate.endsWith("/")) {
        value = dateIn.substring(0, dateIn.length - 1);
    }
    const dated = value.replace(/\D/g, "");
    if (dated.length === 0) return "";

    const dateArray = findMonth(dated);
    return dateArray.length > 1 ? dateArray.join("/") : `${dateArray[0]}`;
};

// export const formatDateString = (dateIn) => {
//     const dated = dateIn.replace(/\D/g, '')

//     if (dated === '') return ''
//     const matched = dated.match(dateSplit)
//     const month = matched && matched[1] ? matched[1] : ''
//     const day = matched && matched[2] ? matched[2] : ''
//     const dayRemainder =
//         day || (matched && matched[1] ? dated.replace(matched[0], '') : '')
//     const year = matched && matched[3] ? matched[3] : ''
//     /* eslint-disable-next-line indent */
//     const yearRemainder =
//         year.length > 1 ?
//         year :
//         matched && matched[2] /* eslint-disable-next-line indent */ ?
//         dated.replace(matched[0], '') :
//         '' /* eslint-disable-line indent */

//     if (year.length > 0) {
//         return `${month} / ${day} / ${year}`
//     }
//     else if (yearRemainder.length > 0) {
//         return `${month} / ${day} / ${yearRemainder}`
//     }
//     else if (day.length > 0) {
//         return `${month} / ${day}`
//     }
//     else if (dayRemainder.length > 0) {
//         return `${month} / ${dayRemainder}`
//     }
//     else if (month.length > 0) {
//         return `${month}`
//     }
//     else {
//         return `${dateIn}`
//     }
// }

export const validDate = (dateIn) => {
    dateIn = dateIn || ''
    if (dateIn === '') return true
    const dateArray = dateIn.split('/')

    const getDateIndex = number => {
        let value = dateArray[number].replace(/\D/g, "");
        return value.length > 0 ? parseInt(value) : 0;
    }

    const month = getDateIndex(0) > 0 && getDateIndex(0) < 13 ? getDateIndex(0) : false

    if (month === false) return false

    const day = getDateIndex(1) > 0 && getDateIndex(1) <= daysInMonth[month] ?
        getDateIndex(1) : false

    const year = dateArray[2].length === 4 ? getDateIndex(2) : false

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
