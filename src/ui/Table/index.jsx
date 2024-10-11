'use client';

import { useEffect, useMemo, useState } from 'react';
import {
  useReactTable,
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
} from '@tanstack/react-table';
import { callGetList } from '@/axios/api';
import { getQueryToTable } from '@/lib/helper';
import { getColumns } from './columns';
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
  const [filterValues, setFilterValues] = useState(new Map());
  const [currentPage, setCurrentPage] = useState(1);
  const [pageSize, setPageSize] = useState(rowCount);

  useEffect(() => {
    const params = getQueryToTable(
      api,
      customQuery,
      filterValues,
      currentPage,
      pageSize,
      noPagination
    );

    console.log('Params:::', params);
    console.log('Filter Values:::', filterValues);

    const fetchList = async () => {
      // const res = await sList(`${code}${params.query}${params.filters}`);
      const res = await callGetList(`${api}${params.query}${params.filters}`);

      setFetchData(res?.items || []);
    };

    fetchList();
  }, [filterValues, currentPage, pageSize]);

  const DATA = useMemo(
    () =>
      fetchData.map((item, idx) => ({
        ...item,
        number: idx + 1,
      })),
    [fetchData]
  );

  const COLUMNS = getColumns({
    columns,
    actionHeader,
    actions,
    actionsHandler,
    rowOnClick,
  });

  const TABLE = useReactTable({
    columns: COLUMNS,
    data: DATA,
    initialState: {
      pagination: {
        pageSize: rowCount,
      },
    },
    getCoreRowModel: getCoreRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
  });

  return (
    <>
      {noFilter || (
        <Filters
          TABLE={TABLE}
          filterValues={filterValues}
          setFilterValues={setFilterValues}
        />
      )}

      <div className='overflow-auto border rounded-[18px]'>
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
                      'whitespace-nowrap border-r last-of-type:border-r-0 p-2',
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
        <div className='relative z-50 flex justify-end items-center gap-4 mt-3'>
          <p className='text-sm'>Нийт: {DATA.length}</p>

          <div className='flex items-center gap-2'>
            <button
              className='normal_btn'
              disabled={!TABLE.getCanPreviousPage()}
              onClick={() => {
                TABLE.previousPage();
                setCurrentPage(TABLE.options.state.pagination.pageIndex);
              }}
            >
              {'<'}
            </button>

            <p>{TABLE.options.state.pagination.pageIndex + 1}</p>
            <button
              className='normal_btn'
              disabled={!TABLE.getCanNextPage()}
              onClick={() => {
                TABLE.nextPage();
                setCurrentPage(TABLE.options.state.pagination.pageIndex);
              }}
            >
              {'>'}
            </button>
          </div>

          {/* <Select
            value={TABLE.options.state.pagination.pageSize}
            options={[5, 10, 25, 50, 100, 500, 1000, 5000].map((item) => ({
              label: item,
              value: item,
            }))}
            hiddenClear
            onChange={(opt) => TABLE.setPageSize(opt?.value)}
          /> */}

          <select
            className='cursor-pointer px-1'
            value={TABLE.options.state.pagination.pageSize}
            onChange={(e) => {
              TABLE.setPageSize(e.target.value);
              setPageSize(e.target.value);
            }}
          >
            {[5, 10, 25, 50, 100, 500, 1000, 5000].map((item) => (
              <option key={item} value={item}>
                {item}
              </option>
            ))}
          </select>
        </div>
      )}
    </>
  );
};

export default Table;
