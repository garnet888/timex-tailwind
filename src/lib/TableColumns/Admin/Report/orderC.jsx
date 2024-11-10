import { dataType } from '@/lib/constants';
import { getIfEmpty, numberWithCommas } from '@/lib/helper';

const getFilterDurations = () => {
  const times = [];

  let hour = 0;
  let minute = 30;

  while (hour < 24) {
    if (minute === 60) {
      minute = 0;
      hour++;
    } else {
      const time = (hour ? `${hour}цаг ` : '') + (minute ? `${minute}мин` : '');

      times.push({
        value: hour * 60 + minute,
        label: time,
      });

      minute += 30;
    }
  }

  times.length > 0 && times.push({ value: 1440, label: '24цаг' });

  return times;
};

const getDuration = (dur) => {
  const hour = parseInt(dur / 60);
  const minute = dur % 60;

  return `${hour}цаг ${minute}мин`;
};

export const orderC = [
  {
    accessorKey: 'startDate',
    header: 'Эхлэх цаг',
    filterType: dataType.DATETIME,
  },
  {
    accessorKey: 'endDate',
    header: 'Дуусах цаг',
    filterType: dataType.DATETIME,
  },
  {
    accessorKey: 'duration',
    header: 'Үргэлжлэх хугацаа',
    filterType: dataType.SELECT,
    optionItems: getFilterDurations(),
    cell: ({ getValue }) => getDuration(getValue()),
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
    accessorKey: 'orderDate',
    header: 'Захиалга өгсөн огноо',
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
