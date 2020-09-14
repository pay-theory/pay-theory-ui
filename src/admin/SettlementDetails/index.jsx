import React from "react";
import PropTypes from "prop-types";

import { CardTable, Pagination, InnerTable } from "../../common";

const formatDate = (stamp) => {
  const dated = new Date(stamp);
  return `${dated.getMonth() + 1}/${dated.getDate()}/${dated.getFullYear()}`;
};

const formatFee = (fee) => {
  return `$${(fee / 100).toFixed(2)}`;
};

const SettlementDetails = ({
  settlement,
  viewTransaction,
  handleRefund,
  total,
  sort,
  setSort,
  selected,
  setSelected,
  page,
  setPage,
  exportCSV
}) => {
  const generateTableColumns = () => {
    return [
      { className: "transaction-id", label: "Transaction ID", sortable: true },
      { className: "update-date", label: "Update Date", sortable: true },
      { className: "customer-name", label: "Customer Name", sortable: true },
      { className: "account-type", label: "Account Type", sortable: true },
      {
        className: "payment-account",
        label: "Payment Account",
        sortable: true
      },
      { className: "amount numeric", label: "Amount", sortable: true },
      { className: "refund", label: "Refund", sortable: false }
    ];
  };

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
                  className={`pay-theory-card-badge pay-theory-card-${
                    item.card_brand
                      ? item.card_brand.toLowerCase().replace(/_/g, "-")
                      : "unknown"
                  }`}
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

  const handleExportCSV = () => {
    if (selected.length) {
      const selectedObjects = [];
      selected.forEach((item) =>
        selectedObjects.push(settlement.payments[item])
      );
      exportCSV(selectedObjects);
    }
  };

  return (
    <div>
      <CardTable>
        <div className="card-head">
          <div className="id-date">
            <h3>Settlement #{settlement.settlement.batch_id}</h3>
            <p>Settled on {formatDate(settlement.settlement.updated_at)}</p>
          </div>
          <div className="totals">
            <h4>Transfers: {settlement.payment_count}</h4>
            <h4>
              Total Amount:{" $"}
              {(settlement.settlement.total_amount / 100).toFixed(2)}
            </h4>
          </div>
        </div>

        <InnerTable
          columns={generateTableColumns()}
          rows={generateTableRows(settlement.payments)}
          selected={selected}
          setSelected={setSelected}
          sort={sort}
          setSort={setSort}
        />
        <div className="card-footer">
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
      </CardTable>
      <style jsx="true">{`
        .card-head {
          display: flex;
          margin: 18px;
          justify-content: space-between;
          align-items: center;
          height: 45px;
        }
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
        .refund {
          width: 50px !important;
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
        .payment-account-detail {
          display: flex;
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

        .card-head .totals,
        .card-head .id-date {
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          height: 100%;
        }

        .card-head .totals {
          align-items: flex-end;
        }

        .table-wrapper {
          margin: 0px 18px !important;
          border-radius: 5px;
          border: 1px solid #cad3dd;
        }

        .card-footer {
          height: 40px;
          margin: 10px 18px;
          width: auto;
          display: flex;
          align-items: center;
          justify-content: center;
          position: relative;
        }

        .card-footer .export-csv {
          display: flex;
          align-items: center;
          justify-content: center;
          position: absolute;
          left: 30px;
        }

        .card-footer .export-csv i {
          font-size: 20px;
          margin-right: 10px;
        }

        .card-footer .export-csv p {
          opacity: 0;
          transition: visibility 0s, opacity 0.2s linear;
          cursor: default;
        }

        .card-footer .export-csv.active p {
          opacity: 1;
          transition: visibility 0s, opacity 0.2s linear;
          cursor: pointer;
        }

        .card-footer .export-csv.active:hover {
          color: #4098eb;
          cursor: pointer;
        }
      `}</style>
    </div>
  );
};

SettlementDetails.propTypes = {
  settlement: PropTypes.object.isRequired,
  viewTransaction: PropTypes.func.isRequired,
  handleRefund: PropTypes.func.isRequired,
  total: PropTypes.number.isRequired,
  sort: PropTypes.object.isRequired,
  setSort: PropTypes.func.isRequired,
  selected: PropTypes.array.isRequired,
  setSelected: PropTypes.func.isRequired,
  page: PropTypes.number.isRequired,
  setPage: PropTypes.func.isRequired,
  exportCSV: PropTypes.func.isRequired
};

export default SettlementDetails;