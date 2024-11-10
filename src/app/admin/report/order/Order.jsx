'use client';

import { Table } from '@/ui';
import { orderC } from '@/lib/TableColumns/Admin/Report/orderC';
import Box from '@/utils/Box';
import AdminLayout from '@/layouts/AdminLayout';

const Report = ({ title }) => {
  return (
    <AdminLayout>
      <Box title={title} noDivider>
        <Table api='/report/admin/order' columns={orderC} />
      </Box>
    </AdminLayout>
  );
};

export default Report;
