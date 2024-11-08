'use client';

import AdminLayout from '@/layouts/AdminLayout';
import { Table } from '@/ui';
import { order } from '@/lib/TableColumns/Admin/order';
import Box from '@/utils/Box';

const Order = ({ title }) => {
  return (
    <AdminLayout>
      <Box
        title={title}
        noDivider
      >
        <Table
          api='/admin/order'
          columns={order}
        />
      </Box>
    </AdminLayout>
  );
};

export default Order;
