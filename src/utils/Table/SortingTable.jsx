'use client';

import { useMemo, useState } from 'react';
import {
  flexRender,
  getCoreRowModel,
  getSortedRowModel,
  useReactTable,
} from '@tanstack/react-table';
import { columnDef } from './columns';
import dataJSON from './data.json';

const SortingTable = () => {
  const finalData = useMemo(() => dataJSON, []);
  const finalColumnDef = useMemo(() => columnDef, []);

  const [sorting, setSorting] = useState([]);

  const tableInstance = useReactTable({
    columns: finalColumnDef,
    data: finalData,
    getCoreRowModel: getCoreRowModel(),
    getSortedRowModel: getSortedRowModel(),
    state: {
      sorting: sorting,
    },
    onSortingChange: setSorting,
  });

  return (
    <div className='overflow-auto bg-white rounded-t-[18px]'>
      <table className='w-full border-collapse'>
        <thead className='bg-dark'>
          {tableInstance.getHeaderGroups().map((headerEl) => (
            <tr key={headerEl.id}>
              {headerEl.headers.map((columnEl) => (
                <th
                  key={columnEl.id}
                  className='text-white text-center border p-2'
                  colSpan={columnEl.colSpan}
                  onClick={columnEl.column.getToggleSortingHandler()}
                >
                  {columnEl.isPlaceholder
                    ? null
                    : flexRender(
                        columnEl.column.columnDef.header,
                        columnEl.getContext()
                      )}

                  {/* CODE FOR UP AND DOWN SORTING */}
                  {
                    { asc: '-UP', desc: '-DOWN' }[
                      columnEl.column.getIsSorted() ?? null
                    ]
                  }
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
                    cellEl.column.columnDef.header === 'ID'
                      ? 'text-center'
                      : '',
                    'border p-2',
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
  );
};

export default SortingTable;
