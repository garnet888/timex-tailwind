'use client';

import { useMemo } from 'react';
import {
  flexRender,
  getCoreRowModel,
  useReactTable,
} from '@tanstack/react-table';
import { columnDef } from './columns';
import dataJSON from './data.json';

const BasicTable = () => {
  const finalData = useMemo(() => dataJSON, []);
  const finalColumnDef = useMemo(() => columnDef, []);

  const tableInstance = useReactTable({
    columns: finalColumnDef,
    data: finalData,
    getCoreRowModel: getCoreRowModel(),
  });

  return (
    <div className='overflow-auto bg-white rounded-t-4.5'>
      <table className='w-full border-collapse'>
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

export default BasicTable;
