const generateTableColumns = () => {
    return [
        { className: 'account-name', label: 'account name' },
        { className: 'account-full-name', label: 'full name' },
        { className: 'account-email', label: 'email' },
        { className: 'account-delete', label: 'delete' }
    ]
}
const generateTableRows = (accounts, deleteAccount) => {
    return accounts.map((item) => {
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
                },
                {
                    className: 'account-delete',
                    content: (
                        <span
                                className='action delete'
                                data-testid='delete-action'
                                onClick={() => deleteAccount(item.user_id, item.nickname)}
                            >
                                <span>
                                    <i className='fal fa-trash-alt' />
                                </span>
                            </span>
                    )
                }
            ],
            key: item.user_id
        }
    })
}

const validEmail = (emailIn) => {
    emailIn = emailIn || ''
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(emailIn) ?
        emailIn :
        /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(emailIn)
}

const formatPhone = (incoming) => {
    incoming = /* istanbul ignore next */ incoming || ''
    incoming = incoming.replace(/[\D]/g, '')
    const areaCode = incoming.substring(0, 3)
    const prefix = incoming.substring(3, 6)
    const line = incoming.substring(6, 10)
    const phone = /* istanbul ignore next */ line ?
        `${areaCode}-${prefix}-${line}` :
        /* istanbul ignore next */
        prefix ?
        `${areaCode}-${prefix}` :
        areaCode

    return phone
}

const validPhone = (phoneIn) => {
    phoneIn = phoneIn || ''
    let phone = phoneIn.replace(/\D+/g, '')

    if (phone.length === 10) {
        phone = `+1${phone}`
    }

    if (
        // eslint-disable-next-line security/detect-unsafe-regex
        !/^((\+1|1)?( |-)?)?(\([2-9][0-9]{2}\)|[2-9][0-9]{2})( |-)?([2-9][0-9]{2}( |-)?[0-9]{4})$/.test(
            phone
        )
    )
        // eslint-disable-next-line security/detect-unsafe-regex
        return /^((\+1|1)?( |-)?)?(\([2-9][0-9]{2}\)|[2-9][0-9]{2})( |-)?([2-9][0-9]{2}( |-)?[0-9]{4})$/.test(
            phone
        )

    return phone
}

const validCurrency = (input) => {
    const userInput = input[0] === '$' ? input.substring(1) : input
    if (userInput.includes('.')) {
        const match = userInput.match(/\d+\.\d{2}\b/g)
        if (match) {
            if (match.length === 1)
                return match[0].length === userInput.length ?
                    match[0].replace(/\./g, '') :
                    false
        }
    }
    else {
        const match = userInput.match(/\d+/g)
        if (match) {
            if (match.length === 1)
                return match[0].length === userInput.length ?
                    `${match[0]}00` :
                    false
        }
    }
    return false
}

export {
    validPhone,
    formatPhone,
    validEmail,
    generateTableRows,
    generateTableColumns,
    validCurrency
}
