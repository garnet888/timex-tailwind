import { DatePicker, Select } from '@/ui';
import { CleanIcon, SearchingIcon } from '@/utils/icons';
import { dataType, filterActions } from '@/lib/constants';

const Filters = ({ TABLE, filterMap, setFilterMap }) => {
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

  const renderFilterInput = (header) => {
    const { columnDef } = header.column;

    let INPUT = (
      <input
        className='rounded_input '
        placeholder='Хайх...'
        // value={header.column.getFilterValue() ?? ''}
        // onChange={(e) => header.column.setFilterValue(e.target.value)}
        value={filterMap.get(columnDef.accessorKey)?.filtering ?? ''}
        onChange={(e) =>
          onChangeHandler(columnDef.accessorKey, e.target.value, dataType.TEXT)
        }
      />
    );

    if (columnDef?.filterType === dataType.SELECT) {
      INPUT = (
        <div className='min-w-44'>
          <Select
            options={columnDef?.selectOptions}
            rounded
            // onChange={(opt) => header.column.setFilterValue(opt?.value)}
            value={filterMap.get(columnDef.accessorKey)?.filtering ?? ''}
            onChange={(e) =>
              onChangeHandler(
                columnDef.accessorKey,
                e.target.value,
                columnDef.filterType
              )
            }
          />
        </div>
      );
    }

    if (String(columnDef?.filterType).includes('date')) {
      const _filtering = filterMap.get(columnDef.accessorKey)?.filtering;
      const _filteringTo = filterMap.get(columnDef.accessorKey)?.filteringTo;

      const _value = [_filtering, _filteringTo];

      INPUT = (
        <DatePicker
          value={_value}
          range
          rounded
          onChange={(date) =>
            onChangeHandler(
              columnDef.accessorKey,
              date[0],
              columnDef.filterType,
              date[1]
            )
          }
        />
      );
    }

    return INPUT;
  };

  return (
    <div className='flex flex-col xl:flex-row items-end xl:items-start gap-4 xl:gap-6 mb-4'>
      {/* <div className='grid grid-cols-2 lg:flex gap-x-4 gap-y-3 flex-wrap text-sm'> */}
      <div className='grid grid-cols-2 lg:grid-cols-5 gap-x-4 gap-y-3 text-sm'>
        {TABLE.getHeaderGroups().map((headerGroup) =>
          headerGroup.headers.map((header) => {
            if (header.isPlaceholder || header.column.getCanFilter()) {
              return (
                <span
                  key={header.id}
                  className={[
                    'flex flex-col gap-1',
                    String(header.column.columnDef?.filterType).includes('date')
                      ? 'col-span-2'
                      : '',
                  ].join(' ')}
                >
                  <p className='text-gray-500 leading-none ml-1'>
                    {header.column.columnDef.header}
                  </p>

                  {renderFilterInput(header)}
                </span>
              );
            }
          })
        )}
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
