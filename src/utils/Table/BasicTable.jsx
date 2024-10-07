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
    <div className='overflow-auto bg-white'>
      <table className='w-full border-collapse'>
        <thead>
          {tableInstance.getHeaderGroups().map((headerEl) => (
            <tr key={headerEl.id}>
              {headerEl.headers.map((columnEl) => (
                <th
                  key={columnEl.id}
                  className='bg-[#4caf50] text-white text-center border p-2'
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
          {tableInstance.getCoreRowModel().rows.map((rowEl) => (
            <tr key={rowEl.id}>
              {rowEl.getVisibleCells().map((cellEl) => (
                <td key={cellEl.id} className='border p-2'>
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
