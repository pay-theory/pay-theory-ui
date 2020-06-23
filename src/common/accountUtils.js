const generateTableColumns = () => {
    return [
        { className: 'account-name', label: 'name' },
        { className: 'account-full-name', label: 'email' },
        { className: 'account-email', label: 'email' }
    ]
}
const generateTableRows = (accounts, view, deleteAccount) => {
    return accounts.map((item, i) => {
        return {
            columns: [
                { className: 'account-name', content: item.nickname },
                {
                    className: 'account-full-name',
                    content: `${item.given_name} ${item.family_name}`
                },
                {
                    className: 'account-email',
                    content: item.email
                }
            ],
            key: item.user_id,
            view: () => view(item.user_id, item.nickname),
            delete: () => deleteAccount(item.user_id, item.nickname)
        }
    })
}

const validEmail = (emailIn) => {
    emailIn = emailIn ? emailIn : ''
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(emailIn)
        ? emailIn
        : /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(emailIn)
}

const formatPhone = (incoming) => {
    incoming = /* istanbul ignore next */ incoming ? incoming : ''
    incoming = incoming.replace(/[\D]/g, '')
    const areaCode = incoming.substring(0, 3)
    const prefix = incoming.substring(3, 6)
    const line = incoming.substring(6, 10)
    const phone = /* istanbul ignore next */ line
        ? `${areaCode}-${prefix}-${line}`
        : /* istanbul ignore next */
        prefix
        ? `${areaCode}-${prefix}`
        : areaCode

    return phone
}

const validPhone = (phoneIn) => {
    phoneIn = phoneIn ? phoneIn : ''
    let phone = phoneIn.replace(/\D+/g, '')

    if (phone.length === 10) {
        phone = `+1${phone}`
    }

    if (
        !/^((\+1|1)?( |-)?)?(\([2-9][0-9]{2}\)|[2-9][0-9]{2})( |-)?([2-9][0-9]{2}( |-)?[0-9]{4})$/.test(
            phone
        )
    )
        return /^((\+1|1)?( |-)?)?(\([2-9][0-9]{2}\)|[2-9][0-9]{2})( |-)?([2-9][0-9]{2}( |-)?[0-9]{4})$/.test(
            phone
        )

    return phone
}

export {
    validPhone,
    formatPhone,
    validEmail,
    generateTableRows,
    generateTableColumns
}
