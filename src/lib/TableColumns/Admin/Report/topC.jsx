import { dataType } from '@/lib/constants';
import { getIfEmpty, numberWithCommas } from '@/lib/helper';

export const topC = (path) => {
  const PATHNAMES = {
    service: '/admin/report/service',
    user: '/admin/report/user',
    employee: '/admin/report/employee',
  };

  let colKey = '';
  let colHeader = '';

  switch (path) {
    case PATHNAMES.service:
      colKey = 'name';
      colHeader = 'Үйлчилгээний нэр';
      break;
    case PATHNAMES.user:
      colKey = 'username';
      colHeader = 'Хэрэглэгчийн нэр';
      break;
    case PATHNAMES.employee:
      colKey = 'nickname';
      colHeader = 'Ажилтны нэр';
      break;
  }

  const COLUMNS = [
    {
      accessorKey: colKey,
      header: colHeader,
    },
    {
      accessorKey: 'total',
      header: 'Орлого',
      filterType: dataType.AMOUNT,
      cell: ({ getValue }) =>
        getValue()
          ? `${numberWithCommas(parseInt(getValue()))}₮`
          : getIfEmpty(getValue()),
    },
    {
      accessorKey: 'cnt',
      header: 'Захиалгын давтамж',
    },
    {
      accessorKey: 'companyName',
      header: 'Байгууллагын нэр',
    },
    {
      accessorKey: 'branchName',
      header: 'Салбарын нэр',
    },
  ];

  if (path === PATHNAMES.user) {
    COLUMNS.splice(3, 0, {
      accessorKey: 'phone',
      header: 'Хэрэглэгчийн утас',
    });
  }

  return COLUMNS;
};
