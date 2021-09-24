import React, { useState } from 'react'
import PropTypes from 'prop-types'
import IconButton from '../IconButton'

const Pagination = ({ paginationHook }) => {
    const { nextPage, previousPage, toOldest, toNewest, page, total } =
        paginationHook

    const setOldest = () => {
        if (page !== total) {
            toOldest()
        }
    }

    const setNewest = () => {
        if (page !== 1) {
            toNewest()
        }
    }

    return (
        <div className='pt-pagination'>
            <div
                className={`pagination-number-wrapper ${
                    total > 1 ? '' : 'disabled'
                }`}
            >
                <p className='pagination-number'>{`${page} OF ${total}`}</p>
                <div className='sort-menu'>
                    <p
                        className={page === 1 ? 'disabled' : ''}
                        onClick={setNewest}
                    >
                        Newest
                    </p>
                    <p
                        className={page === total ? 'disabled' : ''}
                        onClick={setOldest}
                    >
                        Oldest
                    </p>
                </div>
            </div>
            <IconButton
                disabled={page === 1}
                icon='chevron-left'
                onClick={previousPage}
            />
            <IconButton
                disabled={page === total}
                icon='chevron-right'
                onClick={nextPage}
            />
            <style global='true' jsx='true'>
                {`
                    .pt-pagination {
                        display: flex;
                        position: relative;
                        align-items: center;
                        align-self: flex-start;
                        -webkit-touch-callout: none; /* iOS Safari */
                        -webkit-user-select: none; /* Safari */
                        -khtml-user-select: none; /* Konqueror HTML */
                        -moz-user-select: none; /* Old versions of Firefox */
                        -ms-user-select: none; /* Internet Explorer/Edge */
                        user-select: none;
                        height: 48px;
                        font-family: var(--secondary-font);
                        padding-left: 16px;
                    }

                    .pt-pagination .pagination-number {
                        border: 1px solid transparent;
                        padding: 8px 0px;
                    }

                    .pt-pagination
                        .pagination-number-wrapper:not(.disabled):hover
                        .sort-menu,
                    .pt-pagination .pagination-number-wrapper .sort-menu:hover {
                        display: block;
                    }

                    .pt-pagination .sort-menu {
                        border: 1px solid var(--black);
                        border-radius: 16px;
                        padding: 8px;
                        background: var(--white);
                        position: absolute;
                        top: 32px;
                        left: 50%;
                        transform: translateX(-50%);
                        z-index: 2;
                        overflow: hidden;
                        display: none;
                    }

                    .pt-pagination .sort-menu p {
                        padding: 12px 16px;
                        border-radius: 16px;
                    }

                    .pt-pagination .sort-menu p.disabled {
                        color: var(--grey-1);
                    }

                    .pt-pagination .sort-menu p:not(.disabled):hover {
                        background: var(--grey-2);
                        cursor: pointer;
                    }

                    .pagination-number-wrapper {
                        position: relative;
                        margin-right: 8px;
                    }
                `}
            </style>
        </div>
    )
}

Pagination.propTypes = {
    paginationHook: PropTypes.object.isRequired
}

export default Pagination

export const usePagination = (total, toNewestAction, toOldestAction) => {
    const [page, setPage] = useState(1)

    const nextPage = () => {
        setPage(page + 1)
    }

    const previousPage = () => {
        setPage(page - 1)
    }

    const toNewest = () => {
        setPage(1)
        toNewestAction()
    }

    const toOldest = () => {
        setPage(total)
        toOldestAction()
    }

    return {
        nextPage,
        previousPage,
        toOldest,
        toNewest,
        page,
        total
    }
}
