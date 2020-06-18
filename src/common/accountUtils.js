import validator from 'validator'

const generateTableColumns = () => {
    return [
        { className: 'account-name', label: 'name' },
        { className: 'account-email', label: 'email' },
        { className: 'account-phone', label: 'phone' },
        { className: 'account-title', label: 'title' }
    ]
}
const generateTableRows = (accounts, view, deleteAccount) => {
    return accounts.map((item, i) => {
        const name = `${item.data.first_name} ${item.data.last_name}`
        return {
            columns: [
                { className: 'account-name', content: name },
                {
                    className: 'account-email',
                    content: item.data.email
                },
                {
                    className: 'account-phone',
                    content: item.data.phone_number
                },
                {
                    className: 'account-title',
                    content: item.data.title
                }
            ],
            key: item.key,
            view: () => view(item.key, name),
            delete: () => deleteAccount(item.key, name)
        }
    })
}

const formatPhone = (incoming) => {
    incoming = /* istanbul ignore next */ incoming || ''
    incoming = incoming.replace(/[\D]/g, '')
    const areaCode = incoming.substring(0, 3)
    const prefix = incoming.substring(3, 6)
    const line = incoming.substring(6, 10)
    const phone = /* istanbul ignore next */ line
        ? `${areaCode}-${prefix}-${line}`
        : /* istanbul ignore next */ prefix
        ? `${areaCode}-${prefix}`
        : areaCode

    return phone
}

const validPhone = (phoneIn) => {
    phoneIn = phoneIn || ''
    let phone = phoneIn.replace(/\D+/g, '')

    if (phone.length === 10) {
        phone = `+1${phone}`
    }

    if (!validator.isMobilePhone(phone, 'en-US'))
        return validator.isMobilePhone(phone, 'en-US')

    return phone
}

const validEmail = (emailIn) => {
    emailIn = emailIn || ''
    return validator.isEmail(emailIn) ? emailIn : validator.isEmail(emailIn)
}

export {
    formatPhone,
    validPhone,
    validEmail,
    generateTableRows,
    generateTableColumns
}
