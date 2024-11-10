import { dataType } from '@/lib/constants';
import { getIfEmpty, numberWithCommas } from '@/lib/helper';

export const incomeC = [
  {
    accessorKey: 'startDate',
    header: 'Захиалгын огноо',
    filterType: dataType.DATETIME,
  },
  {
    accessorKey: 'services',
    header: 'Үйлчилгээ',
    cell: ({ getValue }) =>
      String(getValue()).length > 28
        ? String(getValue()).slice(0, 28) + '...'
        : getValue(),
  },
  {
    accessorKey: 'employeeName',
    header: 'Ажилтны нэр',
  },
  {
    accessorKey: 'qpayDate',
    header: 'Урьдчилгаа төлсөн огноо',
    filterType: dataType.DATETIME,
  },
  {
    accessorKey: 'prePayment',
    header: 'Урьдчилгаа төлбөр',
    filterType: dataType.AMOUNT,
    cell: ({ getValue }) =>
      getValue()
        ? `${numberWithCommas(parseInt(getValue()))}₮`
        : getIfEmpty(getValue()),
  },
  {
    accessorKey: 'qpayFee',
    header: 'Qpay шимтгэл',
    filterType: dataType.AMOUNT,
    cell: ({ getValue }) =>
      getValue()
        ? `${numberWithCommas(parseInt(getValue()))}₮`
        : getIfEmpty(getValue()),
  },
  {
    accessorKey: 'price',
    header: 'Бүртгэсэн үнийн дүн',
    filterType: dataType.AMOUNT,
    cell: ({ getValue }) =>
      getValue()
        ? `${numberWithCommas(parseInt(getValue()))}₮`
        : getIfEmpty(getValue()),
  },
  {
    accessorKey: 'priceUpdated',
    header: 'Зассан дүн',
    filterType: dataType.AMOUNT,
    cell: ({ getValue }) =>
      getValue()
        ? `${numberWithCommas(parseInt(getValue()))}₮`
        : getIfEmpty(getValue()),
  },
  {
    accessorKey: 'sales',
    header: 'Орлогын дүн',
    filterType: dataType.AMOUNT,
    cell: ({ getValue }) =>
      getValue()
        ? `${numberWithCommas(parseInt(getValue()))}₮`
        : getIfEmpty(getValue()),
  },
  {
    accessorKey: 'companyName',
    header: 'Байгууллагын нэр',
  },
  {
    accessorKey: 'branchName',
    header: 'Салбарын нэр',
  },
  {
    accessorKey: 'statusName',
    accessorFilterKey: 'statusCode',
    header: 'Төлөв',
    filterType: dataType.SELECT,
    optionAPI: 'ref?filters=[["parent_code", "ORDER_STATUS"]]',
  },
];
