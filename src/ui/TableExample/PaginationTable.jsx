'use client';

import { useMemo } from 'react';
import {
  flexRender,
  getCoreRowModel,
  getPaginationRowModel,
  useReactTable,
} from '@tanstack/react-table';
import { columnDef } from './columns';
import dataJSON from './data.json';

const PaginationTable = () => {
  const finalData = useMemo(() => dataJSON, []);
  const finalColumnDef = useMemo(() => columnDef, []);

  const tableInstance = useReactTable({
    columns: finalColumnDef,
    data: finalData,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
  });

  return (
    <div>
      <div className='overflow-auto rounded-t-4.5'>
        <table className='w-full bg-white border-collapse'>
          <thead className='bg-dark'>
            {tableInstance.getHeaderGroups().map((headerEl) => (
              <tr key={headerEl.id}>
                {headerEl.headers.map((columnEl) => (
                  <th
                    key={columnEl.id}
                    className='text-white text-center border p-2'
                    colSpan={columnEl.colSpan}
                  >
                    {columnEl.isPlaceholder ||
                      flexRender(
                        columnEl.column.columnDef.header,
                        columnEl.getContext()
                      )}
                  </th>
                ))}
              </tr>
            ))}
          </thead>

          <tbody>
            {tableInstance.getRowModel().rows.map((rowEl) => (
              <tr key={rowEl.id}>
                {rowEl.getVisibleCells().map((cellEl) => (
                  <td
                    key={cellEl.id}
                    className={[
                      'border p-2',
                      cellEl.column.columnDef.header === 'ID'
                        ? 'text-center'
                        : '',
                    ].join(' ')}
                  >
                    {flexRender(
                      cellEl.column.columnDef.cell,
                      cellEl.getContext()
                    )}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className='flex justify-end gap-2 mt-4'>
        <button
          className='normal_btn'
          disabled={!tableInstance.getCanPreviousPage()}
          onClick={() => tableInstance.setPageIndex(0)}
        >
          {'<<'}
        </button>

        <button
          className='normal_btn'
          disabled={!tableInstance.getCanPreviousPage()}
          onClick={() => tableInstance.previousPage()}
        >
          {'<'}
        </button>
        <button
          className='normal_btn'
          disabled={!tableInstance.getCanNextPage()}
          onClick={() => tableInstance.nextPage()}
        >
          {'>'}
        </button>

        <button
          className='normal_btn'
          disabled={!tableInstance.getCanNextPage()}
          onClick={() =>
            tableInstance.setPageIndex(tableInstance.getPageCount() - 1)
          }
        >
          {'>>'}
        </button>
      </div>

      <ul>
        <li>
          You are on page number:
          {' ' + tableInstance.options.state.pagination.pageIndex}
        </li>
        <li>Total pages: {tableInstance.getPageCount() - 1}</li>
      </ul>

      <input
        type='number'
        defaultChecked={tableInstance.options.state.pagination.pageIndex}
        onChange={(e) => tableInstance.setPageIndex(e.target.value)}
      />

      <h3>
        Current page size: {tableInstance.options.state.pagination.pageSize}
      </h3>
      <select
        value={tableInstance.options.state.pagination.pageSize}
        onChange={(e) => tableInstance.setPageSize(e.target.value)}
      >
        {[10, 25, 50].map((item) => (
          <option
            key={item}
            value={item}
          >
            {item}
          </option>
        ))}
      </select>
    </div>
  );
};

export default PaginationTable;
