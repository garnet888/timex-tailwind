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
    cell: ({ getValue }) => moment(new Date(getValue())).format('MMM Do YY'),
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
  columnHelper.accessor('id', {
    header: 'ID',
    enableColumnFilter: false,
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
    enableColumnFilter: false,
  },
  {
    accessorKey: 'date',
    header: 'Date',
    cell: ({ getValue }) => moment(new Date(getValue())).format('MMM Do YY'),
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
