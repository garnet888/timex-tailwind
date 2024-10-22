import { Tooltip } from '@/ui';
import { dataType } from '../constants';

export const customers = [
  {
    accessorKey: 'name',
    header: 'Нэр',
  },
  {
    accessorKey: 'phone',
    header: 'Утас',
  },
  {
    accessorKey: 'done',
    header: 'Ирсэн захиалга',
    cell: ({ getValue }) => (
      <center>{getValue() === 0 ? '-' : getValue()}</center>
    ),
  },

  {
    accessorKey: 'active',
    header: 'Идэвхтэй захиалга',
    cell: ({ getValue }) => (
      <center>{getValue() === 0 ? '-' : getValue()}</center>
    ),
  },
  {
    accessorKey: 'cancelled',
    header: 'Цуцалсан захиалга',
    cell: ({ getValue }) => (
      <center>{getValue() === 0 ? '-' : getValue()}</center>
    ),
  },
  {
    accessorKey: 'notDone',
    header: 'Ирээгүй захиалга',
    cell: ({ getValue }) => (
      <center>
        {getValue() === 0 ? '-' : <p className='text-red-500'>{getValue()}</p>}
      </center>
    ),
  },
  {
    accessorKey: 'notes',
    header: 'Тэмдэглэл',
    cell: ({ getValue }) => (
      <center>
        <Tooltip
          content={
            <p className='w-[200px] whitespace-normal break-words'>
              Elit esse laboris id amet proident aliquip voluptate id cillum
              occaecat deserunt deserunt commodo ex. Laboris Lorem cupidatat
              enim sit non non cillum ea eiusmod. Cupidatat qui in ad aliquip
              reprehenderit minim. Incididunt deserunt pariatur duis
              reprehenderit consequat est fugiat eu consectetur cupidatat enim
              ullamco quis. Consequat aute tempor esse culpa eu exercitation
              aute. Culpa consectetur esse ullamco quis esse reprehenderit amet
              labore ullamco non nulla eiusmod tempor pariatur. Laboris est
              dolore velit excepteur id amet id irure ullamco.
            </p>
          }
        >
          ...
        </Tooltip>
      </center>
    ),
  },
  {
    accessorKey: 'date',
    header: 'Огноо',
    filterType: dataType.DATETIME,
  },
];
