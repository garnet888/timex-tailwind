'use client';

import { usePathname } from 'next/navigation';
import { Table } from '@/ui';
import { topC } from '@/lib/TableColumns/Admin/Report/topC';
import Box from '@/utils/Box';
import AdminLayout from '@/layouts/AdminLayout';

const Employee = ({ title }) => {
  const pathname = usePathname();

  return (
    <AdminLayout>
      <Box
        title={title}
        noDivider
      >
        <Table
          api='/report/admin/employee'
          columns={topC(pathname)}
        />
      </Box>
    </AdminLayout>
  );
};

export default Employee;
