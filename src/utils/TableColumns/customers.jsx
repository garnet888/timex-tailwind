import moment from 'moment';
import { Popover } from '@/ui';

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
    cell: ({ getValue }) =>
      getValue() && (
        <center>
          <Popover
            placement='TOP'
            content='...'
          >
            {getValue()}
          </Popover>
        </center>
      ),
  },
  {
    accessorKey: 'date',
    header: 'Огноо',
    inputType: 'date',
    cell: ({ getValue }) => (
      <center>{moment(getValue()).format('YYYY-MM-DD HH:mm:ss')}</center>
    ),
  },
];
