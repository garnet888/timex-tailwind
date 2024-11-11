'use client';

import { usePathname } from 'next/navigation';
import { Table } from '@/ui';
import { topC } from '@/lib/TableColumns/Admin/Report/topC';
import Box from '@/utils/Box';
import AdminLayout from '@/layouts/AdminLayout';

const Service = ({ title }) => {
  const pathname = usePathname();

  return (
    <AdminLayout>
      <Box
        title={title}
        noDivider
      >
        <Table
          api='/report/admin/service'
          columns={topC(pathname)}
        />
      </Box>
    </AdminLayout>
  );
};

export default Service;
