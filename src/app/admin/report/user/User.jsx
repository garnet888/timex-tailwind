'use client';

import { usePathname } from 'next/navigation';
import { Table } from '@/ui';
import { topC } from '@/lib/TableColumns/Admin/Report/topC';
import Box from '@/utils/Box';
import AdminLayout from '@/layouts/AdminLayout';

const User = ({ title }) => {
  const pathname = usePathname();

  return (
    <AdminLayout>
      <Box
        title={title}
        noDivider
      >
        <Table
          api='/report/admin/user'
          columns={topC(pathname)}
        />
      </Box>
    </AdminLayout>
  );
};

export default User;
