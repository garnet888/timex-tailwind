'use client';

import { useMemo } from 'react';
import DebouncedInput from './DebouncedInput';

function FilterFunction({ column, table }) {
  const firstValue = table
    .getPreFilteredRowModel()
    .flatRows[0]?.getValue(column.id);

  const columnFilterValue = column.getFilterValue();

  const sortedUniqueValues = useMemo(
    () =>
      typeof firstValue === 'number'
        ? []
        : Array.from(column.getFacetedUniqueValues().keys()).sort(),
    [column.getFacetedUniqueValues()]
  );

  return typeof firstValue === 'number' ? (
    <div>
      <div>
        <DebouncedInput
          type='number'
          placeholder='min'
          min={Number(column.getFacetedMinMaxValues()?.[0] ?? '')}
          max={Number(column.getFacetedMinMaxValues()?.[1] ?? '')}
          value={columnFilterValue?.[0] ?? ''}
          onChange={(value) =>
            column.setFilterValue((old) => [value, old?.[1]])
          }
        />

        <DebouncedInput
          type='number'
          placeholder='max'
          min={Number(column.getFacetedMinMaxValues()?.[0] ?? '')}
          max={Number(column.getFacetedMinMaxValues()?.[1] ?? '')}
          value={columnFilterValue?.[1] ?? ''}
          onChange={(value) =>
            column.setFilterValue((old) => [old?.[0], value])
          }
        />
      </div>
    </div>
  ) : (
    <>
      <datalist id={column.id + 'list'}>
        {sortedUniqueValues.slice(0, 5000).map((value) => (
          <option
            key={value}
            value={value}
          />
        ))}
      </datalist>

      <DebouncedInput
        type='text'
        placeholder='Search...'
        value={columnFilterValue ?? ''}
        list={column.id + 'list'}
        onChange={(value) => column.setFilterValue(value)}
      />
    </>
  );
}

export default FilterFunction;
