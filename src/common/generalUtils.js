const formatFee = (fee) => {
    return fee < 0
        ? `-$${(Math.abs(fee) / 100).toFixed(2)}`
        : `$${(fee / 100).toFixed(2)}`
}

const formatBasisPoints = (bp) => {
    const originalAmount = 100000
    const totalAmount = Math.round(originalAmount / (1 - bp / 10000))
    const fee = totalAmount - originalAmount
    return ((fee / originalAmount) * 100).toFixed(2)
}

const formatString = (string) => {
    return string
        ? string[0].toUpperCase() + string.substring(1).toLowerCase()
        : ''
}

const formatPhone = (string) => {
    const numbers = string.replace(/\D/g, '')
    let result
    if (numbers.length === 7) {
        result = `${numbers.substring(0, 3)}-${numbers.substring(3)}`
    } else if (numbers.length === 10) {
        result = `(${numbers.substring(0, 3)})${numbers.substring(
            3,
            6
        )}-${numbers.substring(6)}`
    } else if (numbers.length === 11) {
        result = `+${numbers.substring(0, 1)}(${numbers.substring(
            1,
            4
        )})${numbers.substring(4, 7)}-${numbers.substring(7)}`
    }

    return result
}

export { formatFee, formatString, formatPhone, formatBasisPoints }

function arrayToCSV(objArray) {
    const array = typeof objArray !== 'object' ? JSON.parse(objArray) : objArray
    const str =
        `${Object.keys(array[0])
            .map((value) => `"${value}"`)
            .join(',')}` + '\r\n'

    return array.reduce((str, next) => {
        str +=
            `${Object.keys(next)
                .map(
                    (value) =>
                        `"${
                            value.includes('amount')
                                ? formatFee(next[`${value}`])
                                : next[`${value}`]
                        }"`
                )
                .join(',')}` + '\r\n'
        return str
    }, str)
}

export { arrayToCSV }

const parseAddress = (incoming) => {
    incoming.map((item) => {
        if (item.address) {
            const parsed = JSON.parse(item.address.replace(/\\/, ''))
            const address = parsed.personal_address
            item.line1 = address.line1
            item.line2 = address.line2
            item.city = address.city
            item.region = address.region
            item.postal_code = address.postal_code
            item.country = address.country
            delete item.address
        } else {
            item.line1 = ''
            item.line2 = ''
            item.city = ''
            item.region = ''
            item.postal_code = ''
            item.country = ''
            delete item.address
        }
        return item
    })
    return incoming
}

export { parseAddress }
