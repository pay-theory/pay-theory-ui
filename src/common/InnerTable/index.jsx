// node modules
import React from 'react'
import PropTypes from 'prop-types'

import * as children from './children'

const InnerTable = (props) => {


    const updateSelected = (e, index) => {
        if (e.target.checked === false) {
            props.setSelected(props.selected.filter(item => item !== index))
        }
        else {
            props.selected.push(index)
        }
    }

    const selected = props.selected ? updateSelected : null;


    return (
        <div id='body-content'>
        <div className='inner-table'>
            <children.HeaderRow
                columns={props.columns}
                hasActions={props.hasActions}
                select={selected}
            />
            <div className='inner-table inner'>
                {props.rows.map((item, rowNum) => {
                    return (
                        <children.Row
                            canDelete={props.canDelete}
                            columns={item.columns}
                            copyCallback={
                                item.copyCallback ? item.copyCallback : false
                            }
                            copyOnly={props.copyOnly}
                            copyText={item.copyText}
                            delete={item.delete ? item.delete : false}
                            hasActions={props.hasActions}
                            itemKey={item.key}
                            key={item.key}
                            locked={item.locked}
                            otherActions={props.otherActions}
                            row={rowNum}
                            rowObject={item.item}
                            view={item.view ? item.view : false}
                            select={selected}
                        />
                    )
                })}
            </div>
        </div>
        {props.children}
        <style global='true' jsx='true'>
            {`
                .inner-table {
                    color: #6b7887;
                    display: flex;
                    flex-direction: column;
                    line-height: 36px;
                }

                .inner-table-row-head {
                    border-bottom: 1px solid #cad3dd;
                    border-radius: 5px 5px 0 0;
                    text-transform: capitalize;
                }

                .inner-table-row {
                    padding: 0px 24px;
                    display: flex;
                    flex-direction: row;
                    justify-content: space-between;
                    align-items: center;
                    font-weight: 600;
                    min-height: 36px;
                    max-height: 50px;
                    line-height: 50px;
                }

                .inner-table-row:nth-child(even) {
                    background: #f8f8f8;
                }
                .inner-table-row:nth-child(odd) {
                    background: #fff;
                }
                .inner-table-row:last-child {
                    border-bottom-right-radius: 5px;
                    border-bottom-left-radius: 5px;
                }

                .inner-table-row .head {
                    font-size: 11pt;
                }
                .inner-table-row .cell {
                    font-weight: 400;
                    font-size: 11pt;
                    overflow: hidden;
                    text-overflow: ellipsis;
                    white-space: nowrap;
                }

                .inner-table-row .cell,
                .card-table-row .head {
                    font-size: 11pt;
                }

                .inner-table-row .numeric {
                    text-align: right;
                }

                .inner-table-row .actions {
                    width: 85px;
                    display: flex;
                    justify-content: flex-start;
                    align-items: center;
                }

                .inner-table-row .action {
                    display: flex;
                    flex-direction: row;
                    justify-content: center;
                }

                .inner-table-row .action svg {
                    cursor: pointer;
                }

                .action span {
                    width: 36px;
                    height: 36px;
                    text-align: center;
                    padding: 6px 0;
                    display: flex;
                    flex-wrap: wrap;
                    align-items: center;
                    justify-content: center;
                    border-radius: 18px;
                    cursor: pointer;
                }
                .action span:hover {
                    color: #fff;
                    -webkit-transition: all 0.2s ease-in-out;
                    transition: all width 0.2s ease-in-out;
                }
                .action.view span:hover,
                .action.other span:hover {
                    background: #0199ed;
                }
                .action.copy span:hover {
                    background: #febf19;
                }
                .action.delete span:hover {
                    background: #ed454c;
                }

                .link-column {
                    cursor: pointer;
                    color: #09f;
                    text-decoration: none;
                    font-weight: 600 !important;
                }
                .disabled {
                    color: #ccc;
                    cursor: auto;
                }
                .locked {
                    margin: 0 0.5em;
                }
                .inner-table .table-select {
                    width: 24px;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                }
            `}
        </style>
    </div>
    )
}

InnerTable.propTypes = {
    columns: PropTypes.array.isRequired,
    rows: PropTypes.array.isRequired,
    visibility: PropTypes.bool,
    hasActions: PropTypes.bool,
    canDelete: PropTypes.bool,
    copyOnly: PropTypes.bool,
    otherActions: PropTypes.array
}

export default InnerTable
