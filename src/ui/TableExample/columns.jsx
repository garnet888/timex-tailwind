import { createColumnHelper } from '@tanstack/react-table';
import moment from 'moment';
import MagicCheckbox from './MagicCheckbox';

const columnHelper = createColumnHelper();

export const columnDef = [
  columnHelper.accessor('id', { header: 'ID' }),
  {
    accessorFn: (row) => `${row.first_name}`,
    header: 'First Name',
  },
  {
    accessorKey: 'last_name',
    header: 'Last Name',
  },
  {
    accessorKey: 'email',
    header: 'Email',
  },
  {
    accessorKey: 'date',
    header: 'Date',
    cell: ({ getValue }) => (
      <p className='text-nowrap'>
        {moment(new Date(getValue())).format('MMM Do YY')}
      </p>
    ),
  },
];

const columnDefWithCellMerge = [
  columnHelper.accessor('id', { header: 'ID' }),
  {
    accessorFn: (row) => `${row.first_name} ${row.last_name}`,
    header: 'Name',
  },
];

export const columnDefWithGrouping = [
  columnHelper.accessor('id', { header: 'ID' }),
  {
    header: 'Name',
    columns: [
      {
        accessorFn: (row) => `${row.first_name}`,
        header: 'First Name',
      },
      {
        accessorKey: 'last_name',
        header: 'Last Name',
      },
    ],
  },
  {
    accessorKey: 'email',
    header: 'Email',
  },
  {
    accessorKey: 'date',
    header: 'Date',
  },
];

export const columnDefWithFilter = [
  // columnHelper.accessor('id', {
  //   header: 'ID',
  //   enableColumnFilter: false,
  // }),
  {
    accessorKey: 'name',
    accessorFn: (row) => `${row.last_name}. ${row.first_name}`,
    header: 'Нэр',
  },
  {
    accessorKey: 'email',
    header: 'И-Мэйл',
    inputType: 'select',
    enableColumnFilter: false,
  },
  {
    accessorKey: 'phone',
    header: 'Утас',
    cell: ({ getValue }) => <p className='whitespace-nowrap'>{getValue()}</p>,
  },
  {
    accessorKey: 'gender',
    header: 'Хүйс',
    inputType: 'select',
    selectOptions: [
      {
        label: 'Эмэгтэй',
        value: 'Female',
      },
      {
        label: 'Эрэгтэй',
        value: 'Male',
      },
      {
        label: 'Ажендэр',
        value: 'Agender',
      },
      {
        label: 'Полижендэр',
        value: 'Polygender',
      },
      {
        label: 'Хоосон',
        value: 'Non-binary',
      },
    ],
  },
  {
    accessorKey: 'date',
    header: 'Огноо',
    inputType: 'date',
    cell: ({ getValue }) => (
      <p className='text-center whitespace-nowrap'>
        {moment(new Date(getValue())).format('YYYY/MM/DD')}
      </p>
    ),
  },
];

export const columnDefWithCheckBox = [
  {
    id: 'checkbox',
    header: ({ table }) => (
      <MagicCheckbox
        {...{
          checked: table.getIsAllRowsSelected(),
          indeterminate: table.getIsSomeRowsSelected(),
          onChange: table.getToggleAllRowsSelectedHandler(),
        }}
      />
    ),
    cell: ({ row }) => (
      <MagicCheckbox
        {...{
          checked: row.getIsSelected(),
          disabled: !row.getCanSelect(),
          indeterminate: row.getIsSomeSelected(),
          onChange: row.getToggleSelectedHandler(),
        }}
      />
    ),
  },
  columnHelper.accessor('id', {
    header: 'ID',
  }),
  {
    accessorFn: (row) => `${row.first_name}`,
    header: 'First Name',
  },
  {
    accessorKey: 'last_name',
    header: 'Last Name',
  },
  {
    accessorKey: 'email',
    header: 'Email',
  },
  {
    accessorKey: 'date',
    header: 'Date',
    cell: ({ getValue }) => moment(new Date(getValue())).format('MMM Do YY'),
  },
];
