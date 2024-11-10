'use client';

import { Table } from '@/ui';
import { topC } from '@/lib/TableColumns/Admin/Report/topC';
import Box from '@/utils/Box';
import AdminLayout from '@/layouts/AdminLayout';

const Employee = ({ title }) => {
  return (
    <AdminLayout>
      <Box title={title} noDivider>
        <Table api='/report/admin/employee' columns={topC()} />
      </Box>
    </AdminLayout>
  );
};

export default Employee;
