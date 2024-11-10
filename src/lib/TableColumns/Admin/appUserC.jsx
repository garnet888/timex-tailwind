import { dataType } from '@/lib/constants';

export const appUserC = [
  {
    accessorKey: 'username',
    header: 'Утасны дугаар',
  },
  {
    accessorKey: 'nickname',
    header: 'Нэр',
  },
  {
    accessorKey: 'statusName',
    accessorFilterKey: 'statusCode',
    header: 'Төлөв',
    filterType: dataType.SELECT,
    optionAPI: 'ref?filters=[["parent_code", "USER_STATUS"]]',
  },
  {
    accessorKey: 'createdAt',
    header: 'Бүртгүүлсэн огноо',
    filterType: dataType.DATETIME,
  },
];
