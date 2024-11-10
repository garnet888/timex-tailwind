import { getIfEmpty, numberWithCommas } from '@/lib/helper';
import { dataType } from '@/lib/constants';

export const paymentC = [
  {
    accessorKey: 'firstName',
    header: 'Харилцагчийн нэр',
  },
  {
    accessorKey: 'username',
    header: 'Харилцагчийн утас',
  },
  {
    accessorKey: 'name',
    header: 'Багц',
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
    accessorKey: 'intervalName',
    accessorFilterKey: 'intervalCode',
    header: 'Хугацаа',
    filterType: dataType.SELECT,
    optionAPI: 'ref?filters=[["parent_code", "PAYMENT_INTERVAL"]]',
    cell: ({ getValue }) => {
      let bgColor = '';

      switch (getValue()) {
        case 'Сараар':
          bgColor = 'blue';
          break;
        case 'Улирлаар':
          bgColor = 'green';
          break;
        case 'Жилээр':
          bgColor = 'purple';
          break;
      }

      return (
        <center>
          <p
            className='w-fit text-white rounded-full px-2'
            style={{ backgroundColor: bgColor }}
          >
            {getValue()}
          </p>
        </center>
      );
    },
  },
  {
    accessorKey: 'startAt',
    header: 'Эхлэх огноо',
    filterType: dataType.DATETIME,
  },
  {
    accessorKey: 'endAt',
    header: 'Дуусах огноо',
    filterType: dataType.DATETIME,
  },
  {
    accessorKey: 'createdAt',
    header: 'Төлбөр төлсөн огноо',
    filterType: dataType.DATETIME,
  },
];
