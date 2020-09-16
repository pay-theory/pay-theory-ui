import React from 'react'
import PropTypes from 'prop-types'

import { InnerTable, CardTable, Pagination } from '../../common'

import { formatDate } from '../../common/dateUtils'

const formatFee = (fee) => {
  return `$${(fee / 100).toFixed(2)}`
}

const formatString = (string) => {
  return string ? string[0] + string.substring(1).toLowerCase() : '';
}

const TransactionsTable = (props) => {
  const { transactions, viewTransaction, handleRefund, selected, setSelected, sort, setSort, viewSettlement, total, page, setPage, exportCSV } = props

  const bulkAction = (action) => {
    selected.forEach((index) => {
      action(transactions[index]);
    });
    setSelected([])
  };

  const handleExportCSV = () => {
    if (selected.length) {
      const selectedObjects = [];
      selected.forEach((item) =>
        selectedObjects.push(transactions[item])
      );
      exportCSV(selectedObjects);
    }
  };

  const generateTableColumns = () => {
    return [
      { className: 'transaction-id', label: 'Transaction ID', sortable: true },
      { className: 'update-date', label: 'Update Date', sortable: true },
      { className: 'customer-name', label: 'Customer Name', sortable: true },
      { className: 'payment-account', label: 'Payment Account', sortable: true },
      { className: 'settlement numeric', label: 'Settlement', sortable: true },
      { className: 'status', label: 'Status', sortable: true },
      { className: 'amount numeric', label: 'Amount', sortable: true },
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
            className: "settlement numeric",
            content: (item.settlement ? <span className="settlement-number link-column" onClick={() => viewSettlement(item.settlement)}>{item.settlement}</span> : '')
          },
          {
            className: `status ${item.state === "SUCCEEDED" ? "received" : item.state === 'APPROVED'? "pending" : item.state.toLowerCase()}`,
            content: item.state === "SUCCEEDED" ? "Received" : item.state === 'APPROVED' ? "Pending" : formatString(item.state)
          },
          {
            className: "amount numeric",
            content: formatFee(item.amount)
          },
          {
            className: "refund",
            content: item.state === "SETTLED" ? (
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
            ) : (
              <span/>
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
     <div className="table-footer">
        <div
          className={`export-csv ${selected.length ? "active" : ""}`}
          onClick={handleExportCSV}
          data-testid="export-csv"
        >
          <i className="fas fa-file-csv" />
          <p>Export CSV</p>
        </div>
        {total > 1 ? (
          <Pagination page={page} setPage={setPage} total={total} />
        ) : null}
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
            .refund {
              width: 50px !important;
              display: flex;
              align-items: center;
              justify-content: center;
            }

            .settlement .settlement-number {
              color: #0099ff,
              cursor: pointer
            }

            .declined p,
            .pending p,
            .settled p,
            .received p {
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

            .received p {
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

            .table-footer {
            height: 40px;
            margin: 10px 24px;
            width: auto;
            display: flex;
            align-items: center;
            justify-content: center;
            position: relative;
          }

          .table-footer .export-csv {
            display: flex;
            align-items: center;
            justify-content: center;
            position: absolute;
            left: 30px;
          }

          .table-footer .export-csv i {
            font-size: 20px;
            margin-right: 10px;
          }

          .table-footer .export-csv p {
            opacity: 0;
            transition: visibility 0s, opacity 0.2s linear;
            cursor: default;
          }

          .table-footer .export-csv.active p {
            opacity: 1;
            transition: visibility 0s, opacity 0.2s linear;
            cursor: pointer;
          }

          .table-footer .export-csv.active:hover {
            color: #4098eb;
            cursor: pointer;
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
