'use client';

import { useEffect, useMemo, useState } from 'react';
import {
  useReactTable,
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
} from '@tanstack/react-table';
import { RiSettings4Line, RiDeleteBin2Line } from 'react-icons/ri';
import { Popover, Select } from '@/ui';
import { callGetList } from '@/axios/api';

const Table = ({
  api = '',
  customQuery = '',
  columns = [],
  actionHeader = 'Үйлдэл',
  actions = [],
  actionsHandler,
  pageSize = 10,
  noFilter = false,
  noPagination = false,
  rowOnClick,
}) => {
  const [fetchData, setFetchData] = useState([]);
  const [columnFilters, setColumnFilters] = useState([]);

  useEffect(() => {
    const fetchList = async () => {
      // const res = await sList(`${code}${params.query}${params.filters}`);
      const res = await callGetList(`${api}?${customQuery}`);

      setFetchData(res?.items || []);
    };

    fetchList();
    // setFetchData(dataJSON);
  }, []);

  const DATA = useMemo(
    () =>
      fetchData.map((item, idx) => ({
        ...item,
        number: idx + 1,
      })),
    [fetchData]
  );

  const COLUMNS = useMemo(() => {
    const _columns = [
      {
        accessorKey: 'number',
        header: '№',
        enableColumnFilter: false,
      },
      ...columns,
      {
        accessorKey: 'action',
        header: actionHeader,
        enableColumnFilter: false,
        cell: ({ row }) => (
          <div className='flex justify-center gap-4 text-[20px]'>
            {actions.map((action) => {
              switch (action.key) {
                case 'EDIT':
                  return (
                    <Popover
                      key={action.key}
                      placement='LEFT'
                      content={
                        <button
                          className='text_btn click_effect'
                          onClick={
                            actionsHandler
                              ? () => actionsHandler(action.key, row.original)
                              : null
                          }
                        >
                          <RiSettings4Line />
                        </button>
                      }
                    >
                      <p className='text-sm text-nowrap'>Засах</p>
                    </Popover>
                  );
                case 'DELETE':
                  return (
                    <Popover
                      key={action.key}
                      placement='LEFT'
                      content={
                        <button
                          className='text_btn click_effect hover:text-red-500'
                          onClick={
                            actionsHandler
                              ? () => actionsHandler(action.key, row.original)
                              : null
                          }
                        >
                          <RiDeleteBin2Line />
                        </button>
                      }
                    >
                      <p className='bg-red-500 text-white text-sm text-nowrap px-2 py-1 -mx-2 -my-1'>
                        Устгах
                      </p>
                    </Popover>
                  );

                default:
                  return (
                    <Popover
                      key={action.key}
                      placement='LEFT'
                      content={
                        <button
                          className='text_btn click_effect'
                          onClick={
                            actionsHandler
                              ? () => actionsHandler(action.key, row.original)
                              : null
                          }
                        >
                          {action.icon}
                        </button>
                      }
                    >
                      <p className='text-sm text-nowrap'>{action.label}</p>
                    </Popover>
                  );
              }
            })}
          </div>
        ),
      },
    ];

    if (rowOnClick) {
      _columns.pop();
    }

    return _columns;
  }, []);

  const TABLE = useReactTable({
    columns: COLUMNS,
    data: DATA,
    initialState: {
      pagination: {
        pageSize,
      },
    },
    state: { columnFilters },
    onColumnFiltersChange: setColumnFilters,
    getCoreRowModel: getCoreRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
  });

  const renderFilterInput = (header) => {
    const { columnDef } = header.column;

    let INPUT = (
      <input
        className='rounded_input '
        placeholder='Хайх...'
        value={header.column.getFilterValue() ?? ''}
        onChange={(e) => header.column.setFilterValue(e.target.value)}
      />
    );

    if (columnDef?.inputType === 'select') {
      INPUT = (
        <div className='min-w-44'>
          <Select
            options={columnDef?.selectOptions}
            rounded
            onChange={(opt) => header.column.setFilterValue(opt?.value)}
          />
        </div>
      );
    }

    if (columnDef?.inputType === 'date') {
      INPUT = (
        <input
          className='rounded_input '
          type='date'
          value={header.column.getFilterValue() ?? ''}
          onChange={(e) => header.column.setFilterValue(e.target.value)}
        />
      );
    }

    return INPUT;
  };

  return (
    <>
      {noFilter || (
        <div className='grid grid-cols-2 sm:flex gap-x-4 gap-y-2 flex-wrap text-sm mb-3'>
          {TABLE.getHeaderGroups().map((headerGroup) =>
            headerGroup.headers.map((header) => {
              if (header.isPlaceholder || header.column.getCanFilter()) {
                return (
                  <span
                    key={header.id}
                    className='flex flex-col'
                  >
                    <p className='text-gray-500 ml-1'>
                      {header.column.columnDef.header}
                    </p>

                    {renderFilterInput(header)}
                  </span>
                );
              }
            })
          )}
        </div>
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
        <div className='flex justify-end items-center gap-4 mt-3'>
          <p className='text-sm'>Нийт: {DATA.length}</p>

          <div className='flex items-center gap-2'>
            <button
              className='normal_btn'
              disabled={!TABLE.getCanPreviousPage()}
              onClick={() => TABLE.previousPage()}
            >
              {'<'}
            </button>

            <p>{TABLE.options.state.pagination.pageIndex + 1}</p>
            <button
              className='normal_btn'
              disabled={!TABLE.getCanNextPage()}
              onClick={() => TABLE.nextPage()}
            >
              {'>'}
            </button>
          </div>

          <Select
            value={TABLE.options.state.pagination.pageSize}
            options={[5, 10, 20, 25, 30, 35, 40, 45, 50].map((item) => ({
              label: item,
              value: item,
            }))}
            hiddenClear
            onChange={(opt) => TABLE.setPageSize(opt?.value)}
          />
        </div>
      )}
    </>
  );
};

export default Table;
