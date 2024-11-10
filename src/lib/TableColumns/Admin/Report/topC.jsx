import { dataType } from '@/lib/constants';
import { getIfEmpty, numberWithCommas } from '@/lib/helper';
import { usePathname } from 'next/navigation';

export const topC = () => {
  const pathname = usePathname();

  const PATHNAMES = {
    service: '/admin/report/service',
    user: '/admin/report/user',
    employee: '/admin/report/employee',
  };

  let colHeader = '';
  let colKey = '';

  switch (pathname) {
    case PATHNAMES.service:
      colHeader = 'Үйлчилгээний нэр';
      colKey = 'name';
      break;
    case PATHNAMES.user:
      colHeader = 'Хэрэглэгчийн нэр';
      colKey = 'username';
      break;
    case PATHNAMES.employee:
      colHeader = 'Ажилтны нэр';
      colKey = 'nickname';
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

  if (pathname === PATHNAMES.user) {
    COLUMNS.splice(3, 0, {
      accessorKey: 'phone',
      header: 'Хэрэглэгчийн утас',
    });
  }

  return COLUMNS;
};
