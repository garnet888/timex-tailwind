'use client';

import { useMemo, useState } from 'react';
import {
  flexRender,
  getCoreRowModel,
  useReactTable,
} from '@tanstack/react-table';
import { columnDefWithCheckBox } from './columns';
import dataJSON from './data.json';

const SelectingRow = () => {
  const finalData = useMemo(() => dataJSON, []);
  const finalColumnDef = useMemo(() => columnDefWithCheckBox, []);

  const [rowSelection, setRowSelection] = useState({});

  const tableInstance = useReactTable({
    columns: finalColumnDef,
    data: finalData,
    getCoreRowModel: getCoreRowModel(),
    state: {
      rowSelection: rowSelection,
    },
    onRowSelectionChange: setRowSelection,
    enableRowSelection: true,
  });

  return (
    <div className='overflow-auto bg-white rounded-t-[18px]'>
      {console.log(
        'getSelectedRowModel--->',
        tableInstance.getSelectedRowModel()
      )}

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
                    cellEl.column.columnDef.header === 'ID' ||
                    cellEl.column.columnDef.id === 'checkbox'
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

      <ul>
        {tableInstance.getSelectedRowModel().flatRows.map((item) => (
          <li key={item.id}>{JSON.stringify(item.original)}</li>
        ))}
      </ul>
    </div>
  );
};

export default SelectingRow;
