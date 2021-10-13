import React, { createContext, useState, useRef, useEffect } from 'react'
import PropTypes from 'prop-types'

import * as children from './children'

export const TableContext = createContext()

const InnerTable = ({
    groupActions,
    paginationHook,
    resultsPerPageHook,
    rows,
    columns,
    id,
    emptyMessage,
    height
}) => {
    const wrapper = useRef(null)
    const [selected, setSelected] = useState({})
    const [parentWidth, setParentWidth] = useState(0)
    const [parentHeight, setParentHeight] = useState(0)
    const [actualHeight, setActualHeight] = useState('auto')
    const [columnWidth] = useState({})
    const [isResizingHeader, setIsResizingHeader] = useState(false)
    const [rowWidth, setRowWidth] = useState(0)
    const [resized, setResized] = useState(false)
    const hasActions = !!groupActions

    const { page } = paginationHook || {}

    const reduceWidth = (acc, value) => {
        return acc + value
    }

    const updateWidth = (key, width) => {
        columnWidth[key] = width
        const totalWidth = Object.values(columnWidth).reduce(reduceWidth, 0)
        setRowWidth(totalWidth)
    }

    useEffect(() => {
        setSelected({})
    }, [page])

    // checks the height of the parent to see if it is taller than the full table height

    useEffect(() => {
        if (parentHeight) {
            const tableHeight = 48 * rows.length + 41
            const adjustedParentHeight = hasActions
                ? parentHeight - 48
                : parentHeight
            const height =
                adjustedParentHeight < tableHeight
                    ? adjustedParentHeight
                    : tableHeight
            setActualHeight(`${height}px`)
        }
    }, [parentHeight, hasActions, rows])

    useEffect(() => {
        if ((wrapper && wrapper.current) || resized) {
            const client = wrapper.current
            setParentWidth(client.getBoundingClientRect().width)
            setParentHeight(client.parentNode.getBoundingClientRect().height)
            setResized(false)
        }
    }, [wrapper, resized])

    useEffect(() => {
        const handleResize = () => {
            setResized(true)
        }
        window.addEventListener('resize', handleResize)

        return () => {
            window.removeEventListener('resize', handleResize)
        }
    }, [])

    return (
        <TableContext.Provider
            value={{
                selected,
                setSelected,
                id,
                updateWidth,
                parentWidth,
                rowWidth,
                isResizingHeader,
                setIsResizingHeader
            }}
        >
            <div className='table-wrapper' id={id} ref={wrapper}>
                {hasActions || paginationHook ? (
                    <children.ActionBar
                        actions={groupActions}
                        paginationHook={paginationHook}
                        resultsPerPageHook={resultsPerPageHook}
                        rows={rows}
                    />
                ) : (
                    ''
                )}
                <div
                    className='inner-table-wrapper'
                    style={{ height: height ? `${height}px` : actualHeight }}
                >
                    <table
                        className='inner-table'
                        style={{
                            width:
                                rowWidth > parentWidth
                                    ? `${rowWidth}px`
                                    : `${parentWidth}px`
                        }}
                    >
                        <thead className='table-head'>
                            <children.HeaderRow
                                columns={columns}
                                hasActions={hasActions}
                            />
                        </thead>
                        <tbody>
                            {rows.length === 0 ||
                                rows.map((item, rowNum) => {
                                    return (
                                        <children.Row
                                            columns={item.columns}
                                            hasActions={hasActions}
                                            itemKey={item.key}
                                            key={`${item.key}-row-${rowNum}`}
                                            row={rowNum}
                                            rowObject={item.item}
                                        />
                                    )
                                })}
                        </tbody>
                        <style global='true' jsx='true'>
                            {`
                                .inner-table {
                                    border-collapse: collapse;
                                    table-layout: fixed;
                                    cursor: default;
                                    display: table;
                                }

                                .inner-table-wrapper {
                                    overflow: auto;
                                    width: 100%;
                                    -ms-overflow-style: none;
                                    scrollbar-width: none;
                                }

                                .inner-table-wrapper::-webkit-scrollbar {
                                    display: none;
                                }

                                .inner-table-row-head {
                                    border-bottom: 1px solid
                                        var(--black-opaque-8);
                                    text-transform: capitalize;
                                    height: 40px !important;
                                    background: var(--grey-3);
                                }

                                .inner-table-row {
                                    height: 48px;
                                }

                                .inner-table-row:hover:not(.inner-table-row-head) {
                                    background: var(--grey-3);
                                }

                                .inner-table-row .head {
                                    font-size: 11pt;
                                    text-align: left;
                                }

                                .inner-table-row .head,
                                .inner-table-row .cell {
                                    white-space: nowrap;
                                    min-width: 50px;
                                    padding: 0px 10px !important;
                                    vertical-align: inherit;
                                    position: relative;
                                    overflow: hidden;
                                    display: table-cell;
                                }

                                .inner-table-row .cell:last-child {
                                    border-bottom-right-radius: 15px;
                                    border-top-right-radius: 15px;
                                }

                                .inner-table-row .cell:first-child {
                                    border-bottom-left-radius: 15px;
                                    border-top-left-radius: 15px;
                                }

                                /*Styling the dividers*/
                                .inner-table-row .cell:not(:last-child)::after {
                                    content: ' ';
                                    position: absolute;
                                    right: 0px;
                                    top: 25%;
                                    height: 24px;
                                    border-left: 1px solid var(--black-opaque-8);
                                }

                                /* Styling the Header Divider*/
                                .inner-table-row .head .header-divider {
                                    position: absolute;
                                    right: -10px;
                                    top: 25%;
                                    height: 24px;
                                    width: 20px;
                                }

                                .inner-table-row .head .header-divider::after {
                                    content: ' ';
                                    position: absolute;
                                    right: 10px;
                                    top: 0px;
                                    height: 24px;
                                    border-left: 1px solid var(--black-opaque-8);
                                }

                                .inner-table-row
                                    .head:not(.select)
                                    .header-divider.resize:hover {
                                    cursor: col-resize;
                                }

                                .inner-table-row
                                    .head:not(.select)
                                    .header-divider.resize:hover::after {
                                    border-left: 1px solid var(--black);
                                }

                                .inner-table-row .numeric {
                                    text-align: right;
                                    margin-right: 15px;
                                }

                                /* Styling the Link Col*/
                                .cell .link {
                                    cursor: pointer;
                                    color: var(--pt-purple);
                                    text-decoration: none;
                                }

                                /* Styling the Action Col*/
                                .cell.action {
                                    min-width: 48px;
                                    padding: 0px !important;
                                    overflow: visible;
                                }
                                .cell.action .content {
                                    padding: 4px;
                                    display: flex;
                                }

                                /* Styling the Chip Col*/
                                .cell.chip .content {
                                    display: flex;
                                    align-items: center;
                                    justify-content: center;
                                }

                                /* Styling the Click To Copy Col*/

                                .cell.click-to-copy {
                                    overflow: visible;
                                }

                                .cell.click-to-copy .content {
                                    display: flex;
                                    align-items: center;
                                    width: 100%;
                                    overflow: hidden;
                                }

                                /* Styling the Currenct Col*/
                                .cell.currency .content {
                                    display: flex;
                                    justify-content: space-between;
                                }

                                .cell.currency.negative .content span {
                                    color: var(--red) !important;
                                }

                                /* Styling the row Selection*/
                                .cell.select .content {
                                    padding: 4px;
                                }

                                .inner-table-row .cell.select {
                                    padding: 0px !important;
                                }

                                .inner-table-row .select {
                                    position: sticky;
                                    z-index: 1;
                                }

                                /* Styling the Action Bar*/
                                .table-wrapper .action-bar {
                                    display: flex;
                                    justify-content: space-between;
                                    align-items: center;
                                }
                                .table-wrapper .action-bar .actions > * {
                                    padding: 4px;
                                }

                                .table-wrapper .action-bar .actions {
                                    display: flex;
                                }

                                /* Styling the PayMethod Col*/
                                .pay-theory-card-badge {
                                    background-repeat: no-repeat;
                                    background-size: 100%;
                                    background-position: 50%;
                                    min-height: 24px;
                                    min-width: 38px;
                                    align-self: center;
                                    margin-right: 5px;
                                }

                                .payment-account-detail {
                                    display: flex;
                                    align-items: center;
                                }

                                .pagination-results-div {
                                    display: flex;
                                    align-items: center;
                                }

                                .results-per-page {
                                    display: flex;
                                    height: 48px;
                                    align-items: center;
                                }
                                .results-per-page > * {
                                    margin-right: 16px;
                                }

                                .empty-message {
                                    text-align: center;
                                    padding: 8px;
                                }

                                .inner-table thead {
                                    position: sticky;
                                    top: 0;
                                    z-index: 2;
                                }
                            `}
                        </style>
                    </table>
                    {rows.length > 0 || (
                        <h4 className='empty-message grey'>{emptyMessage}</h4>
                    )}
                </div>
            </div>
        </TableContext.Provider>
    )
}

InnerTable.propTypes = {
    columns: PropTypes.array.isRequired,
    rows: PropTypes.array.isRequired,
    groupActions: PropTypes.array,
    id: PropTypes.string.isRequired,
    paginationHook: PropTypes.object,
    emptyMessage: PropTypes.string,
    resultsPerPageHook: PropTypes.string
}

InnerTable.defaultProps = {
    emptyMessage: 'No Data Available'
}

export default InnerTable

export const useResultsPerPage = (totalItems, initialResultsAmount) => {
    const [results, setResults] = useState(initialResultsAmount || 10)

    return { totalItems, results, setResults }
}
