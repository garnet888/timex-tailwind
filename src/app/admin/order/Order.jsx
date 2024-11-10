'use client';

import AdminLayout from '@/layouts/AdminLayout';
import { Table } from '@/ui';
import { orderC } from '@/lib/TableColumns/Admin/orderC';
import Box from '@/utils/Box';

const Order = ({ title }) => {
  return (
    <AdminLayout>
      <Box title={title} noDivider>
        <Table api='/admin/order' columns={orderC} />
      </Box>
    </AdminLayout>
  );
};

export default Order;
