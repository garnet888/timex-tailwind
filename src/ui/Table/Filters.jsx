import { GrRotateLeft } from 'react-icons/gr';
import { Select } from '@/ui';
import { Searching } from '@/utils/icons';

const Filters = ({ TABLE, filterValues, setFilterValues }) => {
  const onChangeHandler = (key, value) => {
    const seting = filterValues.set(key, value);

    setFilterValues(new Map(seting));
  };

  const renderFilterInput = (header) => {
    const { columnDef } = header.column;

    let INPUT = (
      <input
        className='rounded_input '
        placeholder='Хайх...'
        // value={header.column.getFilterValue() ?? ''}
        // onChange={(e) => header.column.setFilterValue(e.target.value)}
        value={filterValues.get(columnDef.accessorKey) ?? ''}
        onChange={(e) => onChangeHandler(columnDef.accessorKey, e.target.value)}
      />
    );

    if (columnDef?.filterType === 'select') {
      INPUT = (
        <div className='min-w-44'>
          <Select
            options={columnDef?.selectOptions}
            rounded
            // onChange={(opt) => header.column.setFilterValue(opt?.value)}
            value={filterValues.get(columnDef.accessorKey) ?? ''}
            onChange={(e) =>
              onChangeHandler(columnDef.accessorKey, e.target.value)
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
          value={filterValues.get(columnDef.accessorKey) ?? ''}
          onChange={(e) =>
            onChangeHandler(columnDef.accessorKey, e.target.value)
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
                <span key={header.id} className='flex flex-col gap-1'>
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
          onClick={() => setFilterValues(new Map())}
        >
          <GrRotateLeft />
          Цэвэрлэх
        </button>

        <button className='normal_btn w-[124px] flex gap-2 text-dark'>
          <Searching /> Хайх
        </button>
      </div> */}
    </div>
  );
};

export default Filters;
