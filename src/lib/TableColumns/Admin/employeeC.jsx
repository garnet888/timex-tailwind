import { dataType } from '@/lib/constants';

export const employeeC = [
  {
    accessorKey: 'username',
    header: 'Утасны дугаар',
  },
  {
    accessorKey: 'lastName',
    header: 'Овог',
  },
  {
    accessorKey: 'firstName',
    header: 'Нэр',
  },
  {
    accessorKey: 'nickname',
    header: 'Ажилтны нэр',
  },
  {
    accessorKey: 'companyName',
    header: 'Байгууллагын нэр',
  },
  {
    accessorKey: 'createdAt',
    header: 'Бүртгүүлсэн огноо',
    filterType: dataType.DATETIME,
  },
];
