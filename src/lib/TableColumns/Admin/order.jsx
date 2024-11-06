'use client';

import { dataType } from '@/lib/constants';
import { getIfEmpty, numberWithCommas } from '@/lib/helper';

export const order = [
  {
    accessorKey: 'customerName',
    header: 'Захиалагчийн нэр',
  },
  {
    accessorKey: 'customerPhoneNumber',
    header: 'Захиалагчийн утас',
  },
  {
    accessorKey: 'createdAt',
    header: 'Захиалга үүсгэсэн огноо',
    filterType: dataType.DATETIME,
  },
  {
    accessorKey: 'startDate',
    header: 'Захиалгын эхлэх цаг',
    filterType: dataType.DATETIME,
  },
  {
    accessorKey: 'endDate',
    header: 'Захиалгын дуусах цаг',
    filterType: dataType.DATETIME,
  },
  {
    accessorKey: 'branchName',
    header: 'Ажлын газрын нэр',
  },
  {
    accessorKey: 'employeeName',
    header: 'Ажлтны нэр',
  },
  {
    accessorKey: 'services',
    header: 'Үйлчилгээ',
  },
  {
    accessorKey: 'price',
    header: 'Төлбөр',
    filterType: dataType.AMOUNT,
    cell: ({ getValue }) =>
      getValue()
        ? `${numberWithCommas(parseInt(getValue()))}₮`
        : getIfEmpty(getValue()),
  },
  {
    accessorKey: 'statusName',
    accessorFilterKey: 'statusCode',
    header: 'Төлөв',
    filterType: dataType.SELECT,
    optionAPI: 'ref?filters=[["parent_code", "ORDER_STATUS"]]',
  },
];
