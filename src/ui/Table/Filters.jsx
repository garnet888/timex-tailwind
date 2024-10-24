import { GrRotateLeft } from 'react-icons/gr';
import { Select } from '@/ui';
import { SearchingIcon } from '@/utils/icons';
import { dataType, filterActions } from '@/lib/constants';

const Filters = ({
  TABLE,
  filterMap,
  filterCols,
  setFilterMap,
  setFilterCols,
}) => {
  const getAction = (value, type) => {
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
      case dataType.DATE:
      case dataType.DATETIME:
        return {
          filtering: value,
          action: filterActions.IN_RANGE,
        };

      default:
        break;
    }
  };

  const onChangeHandler = (key, value, type) => {
    const addMap = filterMap.set(key, getAction(value, type));
    let addObject = [];

    if (filterCols) {
      addObject = [
        ...filterCols,
        {
          [key]: getAction(value, type),
        },
      ];
    } else {
      addObject = [
        {
          [key]: getAction(value, type),
        },
      ];
    }

    setFilterMap(new Map(addMap));
    setFilterCols(addObject);
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
      INPUT = (
        <input
          className='rounded_input '
          type='date'
          value={filterMap.get(columnDef.accessorKey)?.filtering ?? ''}
          onChange={(e) =>
            onChangeHandler(
              columnDef.accessorKey,
              e.target.value,
              columnDef.filterType
            )
          }
        />
      );
    }

    return INPUT;
  };

  return (
    <div className='flex flex-col gap-3 mb-4'>
      <div className='grid grid-cols-2 lg:flex gap-x-4 gap-y-3 flex-wrap text-sm'>
        {TABLE.getHeaderGroups().map((headerGroup) =>
          headerGroup.headers.map((header) => {
            if (header.isPlaceholder || header.column.getCanFilter()) {
              return (
                <span
                  key={header.id}
                  className='flex flex-col gap-1'
                >
                  <p className='text-gray-500 ml-1'>
                    {header.column.columnDef.header}
                  </p>

                  {renderFilterInput(header)}
                </span>
              );
            }
          })
        )}
      </div>

      {/* <div className='flex justify-between lg:justify-end gap-3'>
        <button
          className='normal_btn w-[124px] flex gap-2 bg-orange-400 text-white'
          onClick={() => setFilterMap(new Map())}
        >
          <GrRotateLeft />
          Цэвэрлэх
        </button>

        <button className='normal_btn w-[124px] flex gap-2 text-dark'>
          <SearchingIcon /> Хайх
        </button>
      </div> */}
    </div>
  );
};

export default Filters;
