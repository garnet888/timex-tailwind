import { dataType } from '@/lib/constants';

export const userC = [
  {
    accessorKey: 'username',
    header: 'Утасны дугаар',
  },
  {
    accessorKey: 'typeName',
    accessorFilterKey: 'typeCode',
    header: 'Төрөл',
    filterType: dataType.SELECT,
    optionItems: [
      {
        value: 'ORG',
        label: 'Байгууллага',
      },
      {
        value: 'ORG_BRANCH',
        label: 'Салбартай байгууллага',
      },
      {
        value: 'BRANCH',
        label: 'Салбар',
      },
      {
        value: 'PERSON',
        label: 'Хувь хүн',
      },
    ],
  },
  {
    accessorKey: 'name',
    header: 'Нэр',
  },
  {
    accessorKey: 'registerNo',
    header: 'РД',
  },
  {
    accessorKey: 'createdAt',
    header: 'Бүртгүүлсэн огноо',
    filterType: dataType.DATETIME,
  },
  {
    accessorKey: 'endAt',
    header: 'Дуусах хугацаа',
    filterType: dataType.DATETIME,
  },
  {
    accessorKey: 'statusName',
    accessorFilterKey: 'statusCode',
    header: 'Төлөв',
    filterType: dataType.SELECT,
    optionAPI: 'ref?filters=[["parent_code", "USER_STATUS"]]',
  },
];
