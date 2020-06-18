/* eslint-disable camelcase */
import XLSX from 'xlsx'

const HEADERS = [
    'StudentID',
    'LastName',
    'FirstName',
    'PaymentNo',
    'Description',
    'AccountCode',
    'Meals',
    'Fees',
    'ActivityFee',
    'ConvenienceFee',
    'PaymentMadeDate'
]

const toDate = (input) => {
    const parts = input.split('/')
    const month = parseInt(parts[0]) - 1
    const day = parseInt(parts[1])

    const remaining_parts = parts[2].split(' ')
    const year = remaining_parts[0]

    const time_parts = remaining_parts[1].split(':')

    const minute = parseInt(time_parts[1].substring(0, 2))
    const ampm = time_parts[1].substring(2, 4)
    let hour = parseInt(time_parts[0])

    hour =
        /* istanbul ignore next */ ampm === 'pm'
            ? /* istanbul ignore next */ hour > 12
                ? hour + 12
                : hour
            : hour

    return new Date(year, month, day, hour, minute, 0)
}

const extractReportRange = (input) => {
    // Payments from 10/26/2018 10:55pm to 10/28/2018 10:55pm
    const parts = input.split(' ')
    const datedFrom = `${parts[2]} ${parts[3]}`
    const datedTo = `${parts[5]} ${parts[6]}`
    return {
        begin: toDate(datedFrom),
        end: toDate(datedTo)
    }
}

const findFeeType = (row) => {
    /* istanbul ignore if */
    if (row.Meals) {
        return 'Meals'
    } /* istanbul ignore next */ else if (row.ActivityFee) {
        return 'Activity'
    } /* istanbul ignore next */ else if (
        row.ConvenienceFee &&
        row.PaymentMadeDate
    ) {
        return 'Convenience'
    } /* istanbul ignore else */ else {
        return 'General'
    }
}

const findFee = (row) => {
    /* istanbul ignore if */
    if (row.Meals) {
        return row.Meals
    } /* istanbul ignore next */ else if (row.ActivityFee) {
        return row.ActivityFee
    } /* istanbul ignore next */ else if (
        row.ConvenienceFee &&
        row.PaymentMadeDate
    ) {
        return row.ConvenienceFee
    } else {
        return row.Fees
    }
}
const findDigit = (digits) => {
    if (digits && digits.length >= 1) {
        return digits.pop()
    } else {
        return '0'
    }
}
const digitize = (digit) => /* istanbul ignore next */ digit || 0
const normalizeCents = (fee) => {
    // normalize decimal value to cents
    const dollars = fee
    const cents = dollars * 100
    const roundedCents = Math.round(cents)
    const digits = roundedCents.toString().split('')

    let digit = findDigit(digits)
    const hundredths = digitize(digit)

    digit = findDigit(digits)
    const tenths = digitize(digit)

    let whole_num = '0'
    if (digits.length > 0) {
        whole_num = digits.join('')
    }
    return `${whole_num}.${tenths}${hundredths}`
}

const formatFee = (fee) => {
    const roundedPrice = normalizeCents(fee)

    // break into dollars and cents
    const parts = roundedPrice.split('.')

    // format with ending zero and dollar sign
    let formatted = `$${roundedPrice}`
    /* istanbul ignore if */
    if (parts.length === 1) {
        formatted = `$${parts[0]}.00`
    } /* istanbul ignore next */ else if (parts[1].length === 1) {
        formatted = `$${parts[0]}.${parts[1]}0`
    }
    return formatted
}
const parse = (uploaded, forDistrict) => {
    // eslint-disable-next-line no-undef
    const workbook = XLSX.read(atob(uploaded), {
        type: 'binary'
    })

    const first_sheet_name = workbook.SheetNames[0]
    const worksheet = workbook.Sheets[first_sheet_name]
    const rows = XLSX.utils.sheet_to_json(worksheet, {
        header: HEADERS
    })

    if (rows.length < 7) return false

    const reportName = rows.shift().StudentID
    const reportDate = toDate(rows.shift().StudentID)
    const ranged = rows.shift().StudentID
    const reportRange = extractReportRange(ranged)
    const reportPrint = uploaded

    const report = {
        report_name: reportName,
        report_date: (reportDate.getTime() / 1000).toString(),
        report_begin: (reportRange.begin.getTime() / 1000).toString(),
        report_end: (reportRange.end.getTime() / 1000).toString(),
        report_key: reportPrint,
        district_uid: forDistrict
    }

    const receipts = {}
    const usas_submissions = {}
    let school = false
    const school_names = []
    const school_fees = {}
    const school_receipts = {}
    let total_fees = '0.0'
    let total_receipts = 0
    let total_submissions = 0

    const sheetHeading = rows.shift()
    let useConvenienceAsDate = false

    if (sheetHeading.ConvenienceFee === 'Payments Made') {
        useConvenienceAsDate = true
    }
    while (rows.length - 1) {
        const row = rows.shift()
        if (row.LastName && row.AccountCode && school) {
            const fee_type = findFeeType(row)
            const fee = findFee(row)

            const account_code = row.AccountCode

            usas_submissions[school][account_code] = usas_submissions[school][
                account_code
            ]
                ? usas_submissions[school][account_code]
                : {
                      fees: 0.0,
                      receipts: []
                  }

            const paymentMade = useConvenienceAsDate
                ? row.ConvenienceFee
                : row.PaymentMadeDate

            const receipts = usas_submissions[school][account_code].receipts
            receipts.push({
                school: school,
                student_id: row.StudentID,
                student_name: `${row.LastName}, ${row.FirstName}`,
                payment_no: row.PaymentNo,
                description: row.Description,
                account_code: row.AccountCode,
                fee_type: fee_type,
                fee: formatFee(fee),
                fee_date: paymentMade,
                district_uid: forDistrict
            })

            const fees =
                parseFloat(usas_submissions[school][account_code].fees) + fee

            if (!school_fees[school]) {
                school_fees[school] = 0.0
                school_receipts[school] = 0
            }

            school_fees[school] = school_fees[school] + fee

            total_fees = normalizeCents(parseFloat(total_fees) + fee)

            school_receipts[school] = school_receipts[school] + 1

            total_receipts = total_receipts + 1

            usas_submissions[school][account_code] = {
                fees: normalizeCents(fees),
                receipts: receipts,
                date: (reportRange.end.getTime() / 1000).toString()
            }
        } else if (row.StudentID && Object.keys(row).length === 1) {
            if (school) {
                total_submissions =
                    total_submissions +
                    Object.keys(usas_submissions[school]).length
            }

            school = row.StudentID
            school_names.push(school)
            receipts[school] = []
            usas_submissions[school] = {}
        }
    }
    const schools = school_names.map((school) => {
        return {
            name: school,
            submissions: usas_submissions[school],
            total: school_fees[school],
            receipts: school_receipts[school]
        }
    })

    report.report_receipts = total_receipts
    report.report_fees = total_fees
    report.report_submissions = total_submissions
    report.report_line_items = usas_submissions

    return /* istanbul ignore next */ school
        ? {
              schools: schools,
              total_fees: total_fees,
              total_receipts: total_receipts,
              upload: report
          }
        : school
}

export { parse, formatFee }
