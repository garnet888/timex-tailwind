'use client';

import { useMemo, useState } from 'react';
import {
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  useReactTable,
} from '@tanstack/react-table';
import { columnDef } from './columns';
import dataJSON from './data.json';

import css from './style.module.css';

const GlobalFiltering = () => {
  const finalData = useMemo(() => dataJSON, []);
  const finalColumnDef = useMemo(() => columnDef, []);

  const [filtering, setFiltering] = useState('');

  const tableInstance = useReactTable({
    columns: finalColumnDef,
    data: finalData,
    getCoreRowModel: getCoreRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    state: {
      globalFilter: filtering,
    },
    onGlobalFilterChange: setFiltering,
  });

  return (
    <div className={css.container}>
      <input
        type='text'
        value={filtering}
        onChange={(e) => setFiltering(e.target.value)}
      />

      <hr></hr>

      <table>
        <thead>
          {tableInstance.getHeaderGroups().map((headerEl) => (
            <tr key={headerEl.id}>
              {headerEl.headers.map((columnEl) => (
                <th
                  key={columnEl.id}
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
                <td key={cellEl.id}>
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

export default GlobalFiltering;
