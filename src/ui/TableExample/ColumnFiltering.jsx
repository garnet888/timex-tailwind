'use client';

import { useMemo, useState } from 'react';
import {
  useReactTable,
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
} from '@tanstack/react-table';
import { columnDefWithFilter } from './columns';
import dataJSON from './data.json';
import FilterFunction from './FilterFunction';

const ColumnFiltering = () => {
  const finalData = useMemo(() => dataJSON, []);
  const finalColumnDef = useMemo(() => columnDefWithFilter, []);
  const defaultColumn = useMemo(() => {
    return {
      youTubeProp: 'hello world',
    };
  }, []);

  const [columnFilters, setColumnFilters] = useState([]);

  const tableInstance = useReactTable({
    columns: finalColumnDef,
    data: finalData,
    defaultColumn: defaultColumn,
    getCoreRowModel: getCoreRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    state: {
      columnFilters: columnFilters,
    },
    onColumnFiltersChange: setColumnFilters,
  });

  return (
    <div className='overflow-auto bg-white rounded-t-4.5'>
      <table className='w-full border-collapse'>
        <thead className='bg-dark'>
          {tableInstance.getHeaderGroups().map((headerEl) => (
            <tr key={headerEl.id}>
              {headerEl.headers.map((columnEl) => {
                console.log(
                  'our property',
                  columnEl.column.columnDef.youTubeProp
                );

                return (
                  <th
                    key={columnEl.id}
                    className='text-white text-center border p-2'
                    colSpan={columnEl.colSpan}
                  >
                    {columnEl.isPlaceholder ? null : (
                      <div className='flex flex-col justify-center items-center'>
                        {flexRender(
                          columnEl.column.columnDef.header,
                          columnEl.getContext()
                        )}

                        {columnEl.column.getCanFilter() && (
                          <FilterFunction
                            column={columnEl.column}
                            table={tableInstance}
                          />
                        )}
                      </div>
                    )}
                  </th>
                );
              })}
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
  );
};

export default ColumnFiltering;
