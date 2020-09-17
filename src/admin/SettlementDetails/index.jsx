import React, { useEffect } from "react";
import PropTypes from "prop-types";

import { CardTable, Pagination, InnerTable } from "../../common";

import { arrayToCSV } from '../../common/generalUtils'

const formatDate = (stamp) => {
  const dated = new Date(stamp);
  return `${dated.getMonth() + 1}/${dated.getDate()}/${dated.getFullYear()}`;
};

const formatFee = (fee) => {
  return fee < 0 ? `-$${(Math.abs(fee) / 100).toFixed(2)}` : `$${(fee / 100).toFixed(2)}`;
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
  setPage
}) => {
  const generateTableColumns = () => {
    return [
      { className: "transaction-id", label: "Transaction ID", sortable: false },
      { className: "update-date", label: "Update Date", sortable: false },
      { className: "customer-name", label: "Customer Name", sortable: false },
      {
        className: "payment-account",
        label: "Payment Account",
        sortable: false
      },
      { className: "amount numeric", label: "Amount", sortable: false },
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
              item.state === "SETTLED" ? (
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
            )
          }
        ],
        key: item.transfer_id,
        view: () => viewTransaction(item),
        item: item
      };
    });
  };

  useEffect(() => {
    if (selected.length > 0) {
      const newArray = [];
      selected.forEach((item) => newArray.push(settlement.payments[item]));
      var text = arrayToCSV(newArray);
      var data = new Blob([text], { type: "text/csv" });

      var url = URL.createObjectURL(data);

      document.getElementById("export-csv").href = url;
    }
    else {
      document.getElementById("export-csv").href = null;
    }
  }, [selected]);

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
          <a
            className={`export-csv ${selected.length ? "active" : ""}`}
            id="export-csv"
            data-testid = "export-csv"
            download={`PT-Settlement${settlement.settlement.batch_id}-Payments.csv`}
            href=""
            onClick={(e) => {
              if (selected.length === 0) e.preventDefault();
            }}
          >
            <i className="fas fa-file-csv" />
            <p>Export CSV</p>
          </a>
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
        .payment-account {
          width: 150px;
        }
        .customer-name {
          width: 130px;
        }

        .refund {
          width: 50px !important;
          display: flex;
          align-items: center;
          justify-content: center;
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

        .card-footer .export-csv,
        .card-footer .export-csv:hover,
        .card-footer .export-csv:active {
          display: flex;
          align-items: center;
          justify-content: center;
          position: absolute;
          left: 30px;
          text-decoration: none;
          cursor: default;
          color: #666666;
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
  setPage: PropTypes.func.isRequired
};

export default SettlementDetails;
