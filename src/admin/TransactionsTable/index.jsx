import React from 'react'
import PropTypes from 'prop-types'

import { InnerTable, CardTable, Button } from '../../common'

import { formatDate } from '../../common/dateUtils'

const formatFee = (fee) => {
  return `$${(fee / 100).toFixed(2)}`
}

const formatString = (string) => {
  return string ? string[0] + string.substring(1).toLowerCase() : '';
}

const TransactionsTable = (props) => {
  const { transactions, viewTransaction, handleRefund, handleResendingEmail, selected, setSelected, sort, setSort } = props

  const bulkAction = (action) => {
    selected.forEach((index) => {
      action(transactions[index]);
    });
    setSelected([])
  };

  const generateTableColumns = () => {
    return [
      { className: 'transaction-id', label: 'Transaction ID' },
      { className: 'update-date', label: 'Update Date' },
      { className: 'customer-name', label: 'Customer Name' },
      { className: 'account-type', label: 'Account Type' },
      { className: 'payment-account', label: 'Payment Account' },
      { className: 'amount numeric', label: 'Amount' },
      { className: 'status', label: 'Status' }
    ]
  }

  const generateTableRows = (reports) => {
    return reports.map((item, i) => {
      return {
        columns: [{
            className: "transaction-id",
            content: item.transfer_id
          },
          {
            className: "update-date",
            content: formatDate(item.updated_at)
          },
          {
            className: "customer-name",
            content: item.name
          },
          {
            className: "account-type",
            content: item.type
          },
          {
            className: "payment-account",
            content: (
              <span className="payment-account-detail">
                <span
                  className={`pay-theory-card-badge pay-theory-card-${item.card_brand ? item.card_brand.toLowerCase().replace(/_/g, '-') : 'unknown'}`}
                />
                ending in {item.last_four}
              </span>
            )
          },
          {
            className: "amount numeric",
            content: formatFee(item.amount)
          },
          {
            className: `status ${item.state.toLowerCase()}`,
            content: formatString(item.state)
          }
        ],
        key: item.transfer_id,
        view: () => viewTransaction(item),
        item: item
      };
    });
  };

  const otherActions = [{
      action: handleRefund,
      label: "Refund",
      icon: "fa-undo"
    },
    {
      action: handleResendingEmail,
      label: "Resend Email",
      icon: "fa-envelope"
    }
  ];

  return (
    <React.Fragment>
    <CardTable>
      <InnerTable
        columns={generateTableColumns()}
        hasActions
        otherActions={otherActions}
        rows={generateTableRows(transactions)}
        selected={selected}
        setSelected={setSelected}
        sort={sort}
        setSort={setSort}
      >
      </InnerTable>
    </CardTable>
    <div className="group-button">
        <Button
          label={selected.length > 1 ? "Resend Emails" : "Resend Email"}
          disabled={!selected.length}
          leadingIcon="envelope"
          onClick={() => bulkAction(handleResendingEmail)}
          name="group-email"
          small
        />
        <Button
          label={selected.length > 1 ? "Refund Transactions" : "Refund Transaction"}
          disabled={!selected.length}
          leadingIcon="undo"
          onClick={() => bulkAction(handleRefund)}
          name="group-refund"
          small
        />
        </div>
        <style global="true" jsx="true">
          {`
            .transaction-id {
              width: 120px;
            }
            .transaction-id p {
              white-space: nowrap;
              overflow: hidden;
              text-overflow: ellipsis;
            }
            .update-date {
              width: 105px;
            }
            .status {
              min-width: 110px;
            }
            .amount {
              width: 70px;
            }
            .account-type {
              width: 115px;
            }
            .payment-account {
              width: 150px;
            }
            .customer-name {
              width: 130px;
            }
            .actions {
              width: 70px !important;
            }

            .declined p,
            .pending p,
            .settled p,
            .recieved p {
              border-radius: 14px;
              color: white;
              height: 28px;
              min-width: auto;
              justify-content: center;
              align-items: center;
              display: flex;
              font-size: 16px;
            }

            .settled p {
              background: #5bc794;
            }

            .declined p {
              background: #ea4141;
            }

            .pending p {
              background: #cac4ca;
            }

            .recieved p {
              background: #f5bd42;
            }

            .pay-theory-card-badge {
              background-repeat: no-repeat;
              background-size: 100%;
              background-position: 50%;
              height: 40px;
              width: 45px;
              align-self: center;
              margin-right: 5px;
            }

            .pay-theory-card-visa {
              background-image: url(https://storage.googleapis.com/pt-assets/visa-badge-icon.svg);
            }

            .pay-theory-card-mastercard {
              background-image: url(https://storage.googleapis.com/pt-assets/mastercard-badge-icon.svg);
            }

            .pay-theory-card-american-express {
              background-image: url(https://storage.googleapis.com/pt-assets/amex-badge-icon.svg);
            }

            .pay-theory-card-discover {
              background-image: url(https://storage.googleapis.com/pt-assets/discover-badge-icon.svg);
            }

            .payment-account-detail {
              display: flex;
            }

            .group-button {
              display: flex;
              justify-content: flex-end;
              margin: 10px 24px;
            }
            .group-button button {
              margin-left: 10px;
            }
          `}
        </style>
    </React.Fragment>
  );
};

TransactionsTable.propTypes = {
  transactions: PropTypes.array.isRequired,
  viewTransaction: PropTypes.func.isRequired,
  handleRefund: PropTypes.func.isRequired,
  handleResendingEmail: PropTypes.func.isRequired,
  selected: PropTypes.array.isRequired,
  setSelected: PropTypes.func.isRequired,
  setSort: PropTypes.func,
  sort: PropTypes.object.isRequired
};

export default TransactionsTable;
