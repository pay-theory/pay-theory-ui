const formatAccountCode = (entry) => {
    const digits = entry.replace(/\D/g, '')

    const fund = digits.length >= 3 ? `${digits.substr(0, 3)}` : digits

    const receipt =
        digits.length >= 7
            ? `-${digits.substr(3, 4)}`
            : digits.length > 3
            ? `-${digits.substr(3)}`
            : ''

    const scc =
        digits.length >= 11
            ? `-${digits.substr(7, 4)}`
            : /* istanbul ignore next */ digits.length > 7
            ? `-${digits.substr(7)}`
            : ''

    const subject =
        digits.length >= 17
            ? `-${digits.substr(11, 6)}`
            : digits.length > 11
            ? `-${digits.substr(11)}`
            : ''

    const opu = digits.length >= 18 ? `-${digits.substr(17, 3)}` : ''

    return `${fund}${receipt}${scc}${subject}${opu}`
}

const padAccountCode = (entry) => {
    const digits = entry.replace(/\D/g, '')

    const fund = (digits.length >= 3
        ? `${digits.substr(0, 3)}`
        : digits
    ).padEnd(3, '0')

    const receipt = (digits.length >= 7
        ? `-${digits.substr(3, 4)}`
        : digits.length > 3
        ? `-${digits.substr(3)}`
        : '-'
    ).padEnd(5, '0')

    const scc = (digits.length >= 11
        ? `-${digits.substr(7, 4)}`
        : /* istanbul ignore next */ digits.length > 7
        ? `-${digits.substr(7)}`
        : '-'
    ).padEnd(5, '0')

    const subject = (digits.length >= 17
        ? `-${digits.substr(11, 6)}`
        : digits.length > 11
        ? `-${digits.substr(11)}`
        : '-'
    ).padEnd(7, '0')

    const opu = (digits.length >= 18 ? `-${digits.substr(17, 3)}` : '-').padEnd(
        4,
        '0'
    )

    return `${fund}${receipt}${scc}${subject}${opu}`
}

export { formatAccountCode, padAccountCode }
