/* istanbul ignore file */
import PropTypes from 'prop-types'

export default PropTypes.exact({
    UID: PropTypes.string,
    item_title: PropTypes.string.isRequired,
    item_slug: PropTypes.string.isRequired,
    item_type: PropTypes.oneOf(['donation', 'service', 'product']),
    item_status: PropTypes.oneOf([
        'draft',
        'modified',
        'active',
        'discontinued'
    ]),
    item_account_code: PropTypes.string.isRequired,
    item_description: PropTypes.string,
    item_is_public: PropTypes.bool,
    item_is_indefinite: PropTypes.bool,
    item_start_date: PropTypes.number,
    item_end_date: PropTypes.number,
    item_last_published: PropTypes.number,
    item_last_status_change: PropTypes.number,
    item_has_quick_pay_options: PropTypes.bool,
    item_quick_pay_options: PropTypes.array
})
