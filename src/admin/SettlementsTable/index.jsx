import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";

import { CardTable, Pagination, InnerTable, ExportCSV } from "../../common"

export const formatDate = (stamp) => {
  const dated = new Date(stamp);
  return `${dated.getMonth() + 1}/${dated.getDate()}/${dated.getFullYear()}`;
};

const formatFee = (fee) => {
  return fee < 0 ? `-$${(Math.abs(fee) / 100).toFixed(2)}` : `$${(fee / 100).toFixed(2)}`;
};

const SettlementsTable = (props) => {
  const {
    settlements,
    viewSettlement,
    sort,
    setSort,
    page,
    setPage,
    total,
    selected,
    setSelected
  } = props;

  const [csvArray, setCsvArray] = useState([]);

  const generateTableColumns = () => {
    return [
      { className: "settlement-id", label: "Settlement ID", sortable: false },
      {
        className: "settlement-date",
        label: "Settlement Date",
        sortable: false
      },
      {
        className: "total-transfers numeric",
        label: "Total Transfer",
        sortable: false
      },
      {
        className: "total-amount numeric",
        label: "Total Amount",
        sortable: false
      }
    ];
  };
  const generateTableRows = (reports) => {
    return reports.map((item, i) => {
      return {
        columns: [{
            className: "settlement-id",
            content: item.batch_id
          },
          {
            className: "settlement-date",
            content: formatDate(item.updated_at)
          },
          {
            className: "total-transfers numeric",
            content: item.transfer_debit_count
          },
          {
            className: "total-amount numeric",
            content: formatFee(item.total_amount)
          }
        ],
        key: item.batch_id,
        view: () => viewSettlement(item),
        item: item
      };
    });
  };

  useEffect(() => {
    const newArray = [];
    selected.forEach((item) => newArray.push(settlements[item]));
    setCsvArray(newArray)
  }, [selected]);

  return (
    <React.Fragment>
      <CardTable>
        <InnerTable
          columns={generateTableColumns()}
          rows={generateTableRows(settlements)}
          sort={sort}
          setSort={setSort}
          selected={selected}
          setSelected={setSelected}
        />
      </CardTable>
      <div className="table-footer">
      <ExportCSV
            id="download-link"
            items={csvArray}
            fileName={`PT-Settlements-${formatDate(new Date())}.csv`}
          />
        {total > 1 ? (
          <Pagination page={page} setPage={setPage} total={total} />
        ) : null}
      </div>
      <style global="true" jsx="true">
        {`
          .settlement-id {
            width: 160px;
          }
          .settlement-id p {
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;
          }
          .settlement-date {
            width: 130px;
          }
          .total-transfers {
            width: 120px;
          }
          .total-amount {
            width: 110px;
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
          .export-csv {
            position: absolute;
            left: 30 px;
          }

        `}
      </style>
    </React.Fragment>
  );
};

SettlementsTable.propTypes = {
  settlements: PropTypes.array.isRequired,
  viewSettlement: PropTypes.func.isRequired,
  sort: PropTypes.object.isRequired,
  setSort: PropTypes.func.isRequired,
  page: PropTypes.number.isRequired,
  setPage: PropTypes.func.isRequired,
  total: PropTypes.number.isRequired,
  selected: PropTypes.array.isRequired,
  setSelected: PropTypes.func.isRequired
};

export default SettlementsTable;
