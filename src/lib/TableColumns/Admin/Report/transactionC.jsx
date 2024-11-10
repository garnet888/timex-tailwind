import { dataType } from '@/lib/constants';
import { getIfEmpty, numberWithCommas } from '@/lib/helper';

export const transactionC = [
  {
    accessorKey: 'companyName',
    header: 'Байгууллагын нэр',
  },
  {
    accessorKey: 'branchName',
    header: 'Салбарын нэр',
  },
  {
    accessorKey: 'customerName',
    header: 'Захиалагчийн нэр',
  },
  {
    accessorKey: 'customerPhone',
    header: 'Захиалагчийн утас',
  },
  {
    accessorKey: 'amt',
    header: 'Орлого',
    filterType: dataType.AMOUNT,
    cell: ({ getValue }) =>
      getValue()
        ? `${numberWithCommas(parseInt(getValue()))}₮`
        : getIfEmpty(getValue()),
  },
  {
    accessorKey: 'createdAt',
    header: 'Үүссэн огноо',
    filterType: dataType.DATETIME,
  },
  {
    accessorKey: 'startDate',
    header: 'Эхлэх огноо',
    filterType: dataType.DATETIME,
  },
];
