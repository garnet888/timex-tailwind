'use client';

import { useEffect, useMemo, useState } from 'react';
import {
  useReactTable,
  flexRender,
  getCoreRowModel,
} from '@tanstack/react-table';
import Pagination from 'react-responsive-pagination';
import { callGetList } from '@/axios/api';
import { getParamsTable } from '@/lib/helper';
import { ChevronArrow } from '@/utils/icons';
import { GetColumns } from './columns';
import Filters from './Filters';

const Table = ({
  api = '',
  customQuery = '',
  columns = [],
  actionHeader = 'Үйлдэл',
  actions = [],
  rowCount = 50,
  noFilter = false,
  noPagination = false,
  /* Functions */
  actionsHandler,
  rowOnClick,
}) => {
  const [fetchData, setFetchData] = useState([]);
  const [filterMap, setFilterMap] = useState(new Map());
  const [currentPage, setCurrentPage] = useState(1);
  const [pageSize, setPageSize] = useState(rowCount);
  const [totalCount, setTotalCount] = useState(null);
  const [totalPages, setTotalPages] = useState(null);

  useEffect(() => {
    const params = getParamsTable(
      customQuery,
      filterMap,
      currentPage,
      pageSize,
      noPagination
    );

    const fetchList = async () => {
      const res = await callGetList(`${api}${params}`);

      setFetchData(res?.items || []);
      setTotalCount(res?.total);
      setTotalPages(res?.total_pages);
    };

    fetchList();
  }, [api, customQuery, filterMap, currentPage, pageSize, noPagination]);

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
    actionsHandler,
    rowOnClick,
  });

  const TABLE = useReactTable({
    columns: COLUMNS,
    data: DATA,
    getCoreRowModel: getCoreRowModel(),
  });

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
                    className='text-white text-center font-medium border-r last-of-type:border-r-0 p-2'
                    colSpan={header.colSpan}
                  >
                    {header.isPlaceholder ||
                      flexRender(
                        header.column.columnDef.header,
                        header.getContext()
                      )}
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
                  rowOnClick ? 'cursor-pointer hover:bg-gray-100' : '',
                  'border-b last-of-type:border-b-0',
                ].join(' ')}
                onClick={rowOnClick ? () => rowOnClick(row.original) : null}
              >
                {row.getVisibleCells().map((cell) => (
                  <td
                    key={cell.id}
                    className={[
                      cell.column.id === 'number' ? 'w-12 text-center' : '',
                      'text-nowrap border-r last-of-type:border-r-0 p-2',
                    ].join(' ')}
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
                <option
                  key={item}
                  value={item}
                >
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
