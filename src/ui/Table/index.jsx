'use client';

import { useCallback, useEffect, useMemo, useState } from 'react';
import {
  useReactTable,
  flexRender,
  getCoreRowModel,
} from '@tanstack/react-table';
import { FaCaretUp, FaCaretDown } from 'react-icons/fa6';
import Pagination from 'react-responsive-pagination';
import { useMainContext } from '@/context/MainContext';
import { getParamsTable } from '@/lib/helper';
import { ChevronArrow } from '@/utils/icons';
import { callGetList } from '@/axios/api';
import { GetColumns } from './columns';
import Filters from './Filters';

const Table = ({
  api = '',
  customQuery = '',
  columns = [],
  actionHeader = 'Үйлдэл',
  actions = [],
  /* ====================
    actions
      - key
      - icon
      - label 
  ==================== */
  rowCount = 50,
  noFilter = false,
  noActions = false,
  noPagination = false,
  /* Functions */
  actionsHandler,
  rowOnClick,
}) => {
  const { reload } = useMainContext();

  const [fetchData, setFetchData] = useState([]);
  const [filterMap, setFilterMap] = useState(new Map());
  const [sortingCol, setSortingCol] = useState({});
  const [currentPage, setCurrentPage] = useState(1);
  const [pageSize, setPageSize] = useState(rowCount);
  const [totalCount, setTotalCount] = useState(null);
  const [totalPages, setTotalPages] = useState(null);

  const fetchList = useCallback(async () => {
    const params = getParamsTable({
      customQuery,
      filterMap,
      sortingCol,
      currentPage,
      pageSize,
      noPagination,
    });

    const res = await callGetList(`${api}${params}`);

    setFetchData(res?.items || []);
    setTotalCount(res?.total);
    setTotalPages(res?.total_pages);
  }, [
    api,
    customQuery,
    filterMap,
    sortingCol,
    currentPage,
    pageSize,
    noPagination,
  ]);

  useEffect(() => {
    fetchList();
  }, [reload, fetchList]);

  const DATA = useMemo(
    () =>
      fetchData.map((item, idx) => ({
        ...item,
        number: (currentPage - 1) * pageSize + idx + 1,
      })),
    [fetchData, currentPage, pageSize]
  );

  const COLUMNS = GetColumns({
    columns,
    actionHeader,
    actions,
    noActions,
    actionsHandler,
    rowOnClick,
  });

  const TABLE = useReactTable({
    columns: COLUMNS,
    data: DATA,
    getCoreRowModel: getCoreRowModel(),
  });

  const sortClickHandler = (key) => {
    let type;

    if (!sortingCol[key]) {
      type = 'asc';
    }

    if (sortingCol[key] === 'asc') {
      type = 'desc';
    }

    if (sortingCol[key] === 'desc') {
      type;
    }

    setSortingCol({ [key]: type });
  };

  const rowOnClickHandler = (data, key) => {
    if (rowOnClick && key !== 'action') {
      rowOnClick(data);
    }
  };

  const pageSizeOnChange = (e) => {
    const { value } = e.target;
    const _totalPages = Math.ceil(totalCount / value);

    if (currentPage > _totalPages) {
      setCurrentPage(_totalPages);
    }

    setPageSize(value);
  };

  return (
    <div>
      {noFilter || (
        <Filters
          TABLE={TABLE}
          filterMap={filterMap}
          setFilterMap={setFilterMap}
        />
      )}

      <div className='overflow-auto border rounded-4.5'>
        <table className='w-full border-collapse text-small'>
          <thead className='bg-dark'>
            {TABLE.getHeaderGroups().map((headerGroup) => (
              <tr key={headerGroup.id}>
                {headerGroup.headers.map((header) => (
                  <th
                    key={header.id}
                    className='text-white font-medium border-r last-of-type:border-r-0 p-2'
                    colSpan={header.colSpan}
                  >
                    <div className='flex justify-center gap-1'>
                      {header.isPlaceholder ||
                        flexRender(
                          header.column.columnDef.header,
                          header.getContext()
                        )}

                      {header.column.columnDef?.shownSort && (
                        <button
                          className='text_btn h-auto p-0'
                          onClick={() => sortClickHandler(header.id)}
                        >
                          <div className='flex flex-col'>
                            <FaCaretUp
                              className={[
                                '-my-[2.4px] text-sm',
                                sortingCol[header.id] === 'asc'
                                  ? 'text-white'
                                  : 'text-gray-400',
                              ].join(' ')}
                            />

                            <FaCaretDown
                              className={[
                                '-my-[2.4px] text-sm',
                                sortingCol[header.id] === 'desc'
                                  ? 'text-white'
                                  : 'text-gray-400',
                              ].join(' ')}
                            />
                          </div>
                        </button>
                      )}
                    </div>
                  </th>
                ))}
              </tr>
            ))}
          </thead>

          <tbody>
            {TABLE.getRowModel().rows.map((row) => (
              <tr
                key={row.id}
                className={[
                  'group border-b last-of-type:border-b-0',
                  rowOnClick
                    ? 'cursor-pointer active:text-white hover:bg-primary/10'
                    : 'cursor-default hover:bg-gray-100/65',
                ].join(' ')}
              >
                {row.getVisibleCells().map((cell) => (
                  <td
                    key={cell.id}
                    className={[
                      'text-nowrap border-r last-of-type:border-r-0 p-2',
                      cell.column.id === 'number' ? 'w-12 text-center' : '',
                      cell.column.id === 'action'
                        ? 'group-hover:bg-gray-100/65'
                        : '',
                    ].join(' ')}
                    onClick={() =>
                      rowOnClickHandler(row.original, cell.column.id)
                    }
                  >
                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {noPagination || (
        <div className='flex justify-between items-center gap-2 sm:gap-4 mt-3'>
          <p className='text-sm text-nowrap'>Нийт: {totalCount}</p>

          <div className='flex gap-4'>
            <div className='rct_paginate'>
              <Pagination
                current={currentPage}
                total={totalPages}
                onPageChange={setCurrentPage}
                maxWidth={100}
                previousLabel={<ChevronArrow rotate='left' />}
                nextLabel={<ChevronArrow />}
              />
            </div>

            <select
              className='hidden sm:block cursor-pointer w-fit px-1'
              value={pageSize}
              onChange={pageSizeOnChange}
            >
              {[5, 10, 25, 50, 100, 500, 1000, 5000].map((item) => (
                <option key={item} value={item}>
                  {item}
                </option>
              ))}
            </select>
          </div>
        </div>
      )}
    </div>
  );
};

export default Table;
