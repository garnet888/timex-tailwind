import { dataType } from '@/lib/constants';

export const verifyC = [
  {
    accessorKey: 'lastName',
    header: 'Овог',
  },
  {
    accessorKey: 'firstName',
    header: 'Нэр',
  },
  {
    accessorKey: 'registerNo',
    header: 'РД',
  },
  {
    accessorKey: 'updatedAt',
    header: 'Илгээсэн огноо',
    filterType: dataType.DATETIME,
  },
];
