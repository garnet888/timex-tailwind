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

import css from './style.module.css';

const BasicTable = () => {
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
    <div className={css.container}>
      <div className={css.content}>
        <table>
          <thead>
            {tableInstance.getHeaderGroups().map((headerEl) => {
              return (
                <tr key={headerEl.id}>
                  {headerEl.headers.map((columnEl) => {
                    console.log(
                      'our property',
                      columnEl.column.columnDef.youTubeProp
                    );

                    return (
                      <th
                        key={columnEl.id}
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
              );
            })}
          </thead>
          <tbody>
            {tableInstance.getRowModel().rows.map((rowEl) => {
              return (
                <tr key={rowEl.id}>
                  {rowEl.getVisibleCells().map((cellEl) => {
                    return (
                      <td key={cellEl.id}>
                        {flexRender(
                          cellEl.column.columnDef.cell,
                          cellEl.getContext()
                        )}
                      </td>
                    );
                  })}
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default BasicTable;
