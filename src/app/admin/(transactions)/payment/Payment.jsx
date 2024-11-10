'use client';

import { Table } from '@/ui';
import { paymentC } from '@/lib/TableColumns/Admin/Transactions/paymentC';
import Box from '@/utils/Box';
import AdminLayout from '@/layouts/AdminLayout';

const Payment = ({ title }) => {
  return (
    <AdminLayout>
      <Box title={title} noDivider>
        <Table api='/admin/payment' columns={paymentC} />
      </Box>
    </AdminLayout>
  );
};

export default Payment;
