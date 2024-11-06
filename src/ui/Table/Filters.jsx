'use client';

import { useEffect, useState } from 'react';
import { DatePicker, InputDouble, Select } from '@/ui';
import { dataType, filterActions } from '@/lib/constants';
import { CleanIcon } from '@/utils/icons';
import { callGet } from '@/axios/api';

const Filters = ({ TABLE, filterMap, setFilterMap }) => {
  const [searchCols, setSearchCols] = useState();

  useEffect(() => {
    const _searchCols = [];

    TABLE.getHeaderGroups().map((headerGroup) =>
      headerGroup.headers.map(async (header) => {
        if (header.isPlaceholder || header.column.getCanFilter()) {
          const { columnDef } = header.column;

          let _columnDef = columnDef;

          if (columnDef?.optionAPI) {
            const apiOptions = [];

            const res = await callGet(columnDef.optionAPI);

            if (res?.items) {
              const { items } = res;

              items.map((item) =>
                apiOptions.push({ value: item.code, label: item.name })
              );

              _columnDef = { ...columnDef, optionItems: apiOptions };
            }
          }

          _searchCols.push(_columnDef);
        }
      })
    );

    setSearchCols(_searchCols);
  }, [TABLE]);

  const getAction = (value, type, valueTo) => {
    switch (type) {
      case dataType.NUMBER:
      case dataType.SELECT:
        return {
          filtering: value,
          action: filterActions.EQUALS,
        };

      case dataType.TEXT:
      case dataType.TEXTAREA:
        return {
          filtering: value,
          action: filterActions.CONTAINS,
        };

      case dataType.AMOUNT:
        return {
          filtering: value,
          filteringTo: valueTo,
          action: filterActions.THAN_EQUAL,
        };

      case dataType.DATE:
      case dataType.DATETIME:
        return {
          filtering: value,
          filteringTo: valueTo,
          action: filterActions.IN_RANGE,
        };

      default:
        break;
    }
  };

  const onChangeHandler = (key, value, type, valueTo) => {
    const addMap = filterMap.set(key, getAction(value, type, valueTo));

    setFilterMap(new Map(addMap));
  };

  const renderFilterInput = (column) => {
    const KEY = column?.accessorFilterKey
      ? column.accessorFilterKey
      : column.accessorKey;

    let INPUT = (
      <input
        className='rounded_input'
        placeholder='Хайх...'
        // value={header.column.getFilterValue() ?? ''}
        // onChange={(e) => header.column.setFilterValue(e.target.value)}
        value={filterMap.get(KEY)?.filtering ?? ''}
        onChange={(e) => onChangeHandler(KEY, e.target.value, dataType.TEXT)}
      />
    );

    if (column?.filterType === dataType.SELECT) {
      INPUT = (
        <Select
          options={column?.optionItems ?? []}
          rounded
          hiddenClear
          value={filterMap.get(KEY)?.filtering ?? ''}
          onChange={(opt) =>
            onChangeHandler(KEY, opt && opt.value, column.filterType)
          }
        />
      );
    }

    if (column?.filterType === dataType.AMOUNT) {
      const _filtering = filterMap.get(KEY)?.filtering;
      const _filteringTo = filterMap.get(KEY)?.filteringTo;

      const _value = [_filtering, _filteringTo];

      INPUT = (
        <InputDouble
          placeholder={['Бага утга', 'Их утга']}
          value={_value}
          rounded
          onChange={(val) =>
            onChangeHandler(KEY, val[0], column.filterType, val[1])
          }
        />
      );
    }

    if (String(column?.filterType).includes('date')) {
      const _filtering = filterMap.get(KEY)?.filtering;
      const _filteringTo = filterMap.get(KEY)?.filteringTo;

      const _value = [_filtering, _filteringTo];

      INPUT = (
        <DatePicker
          value={_value}
          range
          rounded
          onChange={(date) =>
            onChangeHandler(KEY, date[0], column.filterType, date[1])
          }
        />
      );
    }

    return INPUT;
  };

  return (
    <div className='flex flex-col xl:flex-row items-end xl:items-start gap-4 xl:gap-6 mb-4'>
      {/* <div className='grid grid-cols-2 lg:flex gap-x-4 gap-y-3 flex-wrap text-sm'> */}
      <div className='w-full grid grid-cols-2 lg:grid-cols-5 gap-x-4 gap-y-3 text-sm'>
        {searchCols &&
          searchCols.map((col) => (
            <span
              key={col.accessorKey}
              className={[
                'flex flex-col gap-1',
                col?.filterType === dataType.AMOUNT ||
                String(col?.filterType).includes('date')
                  ? 'col-span-2'
                  : '',
              ].join(' ')}
            >
              <p className='text-gray-500 leading-none ml-1'>{col.header}</p>

              {renderFilterInput(col)}
            </span>
          ))}
      </div>

      <button
        className='normal_btn p-2'
        onClick={() => setFilterMap(new Map())}
      >
        <CleanIcon />
      </button>
    </div>
  );
};

export default Filters;
