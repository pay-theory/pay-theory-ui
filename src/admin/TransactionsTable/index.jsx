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
  const { transactions, viewTransaction, handleRefund, selected, setSelected, sort, setSort, viewSettlement } = props

  const bulkAction = (action) => {
    selected.forEach((index) => {
      action(transactions[index]);
    });
    setSelected([])
  };

  const generateTableColumns = () => {
    return [
      { className: 'transaction-id', label: 'Transaction ID', sortable: true },
      { className: 'update-date', label: 'Update Date', sortable: true },
      { className: 'customer-name', label: 'Customer Name', sortable: true },
      { className: 'account-type', label: 'Account Type', sortable: true },
      { className: 'payment-account', label: 'Payment Account', sortable: true },
      { className: 'amount numeric', label: 'Amount', sortable: true },
      { className: 'settlement', label: 'Settlement', sortable: true },
      { className: 'status', label: 'Status', sortable: true },
      { className: "refund", label: "Refund", sortable: false }
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
            className: "settlement",
            content: (item.settlement ? <span className="settlement-number" onClick={() => viewSettlement(item.settlement)}>{item.settlement}</span> : '')
          },
          {
            className: `status ${item.state.toLowerCase()}`,
            content: formatString(item.state)
          },
          {
            className: "refund",
            content: (
              <span
                className="action other"
                title="refund"
                onClick={() => handleRefund(item)}
                data-testid="refund-action"
              >
                <span>
                  <i className="fal fa-undo" />
                </span>
              </span>
            )
          }
        ],
        key: item.transfer_id,
        view: () => viewTransaction(item),
        item: item
      };
    });
  };

  return (
    <React.Fragment>
    <CardTable>
      <InnerTable
        columns={generateTableColumns()}
        rows={generateTableRows(transactions)}
        selected={selected}
        setSelected={setSelected}
        sort={sort}
        setSort={setSort}
      >
      </InnerTable>
    </CardTable>
    <div className="group-button">

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
            .settlement {
              width: 100px;
            }

            .settlement .settlement-number {
              color: #0099ff,
              cursor: pointer
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
  selected: PropTypes.array.isRequired,
  setSelected: PropTypes.func.isRequired,
  setSort: PropTypes.func,
  sort: PropTypes.object.isRequired
};

export default TransactionsTable;
