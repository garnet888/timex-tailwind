'use client';

import { Table } from '@/ui';
import { depositC } from '@/lib/TableColumns/Admin/Transactions/depositC';
import Box from '@/utils/Box';
import AdminLayout from '@/layouts/AdminLayout';

const Deposit = ({ title }) => {
  return (
    <AdminLayout>
      <Box title={title} noDivider>
        <Table api='/admin/deposit' columns={depositC} />
      </Box>
    </AdminLayout>
  );
};

export default Deposit;
