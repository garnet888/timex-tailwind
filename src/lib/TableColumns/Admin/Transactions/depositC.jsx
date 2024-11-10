import { formatNumberSpace, getIfEmpty, numberWithCommas } from '@/lib/helper';
import { dataType } from '@/lib/constants';

export const depositC = [
  {
    accessorKey: 'branchName',
    header: 'Үйлчилгээний газрын нэр',
  },
  {
    accessorKey: 'branchPhoneNumber',
    header: 'Үйлчилгээний газрын утас',
  },
  {
    accessorKey: 'nickname',
    header: 'Захиалагчийн нэр',
  },
  {
    accessorKey: 'username',
    header: 'Захиалагчийн утас',
  },
  {
    accessorKey: 'amt',
    header: 'Төлбөр',
    filterType: dataType.AMOUNT,
    cell: ({ getValue }) =>
      getValue()
        ? `${numberWithCommas(parseInt(getValue()))}₮`
        : getIfEmpty(getValue()),
  },
  {
    accessorKey: 'accountNumber',
    header: 'Хүлээн авсан данс',
    cell: ({ getValue }) => formatNumberSpace(getIfEmpty(getValue())),
  },
  {
    accessorKey: 'createdAt',
    header: 'Төлбөр төлсөн огноо',
    filterType: dataType.DATETIME,
  },
];
