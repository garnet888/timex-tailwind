'use client';

import { Table } from '@/ui';
import { transactionC } from '@/lib/TableColumns/Admin/Report/transactionC';
import Box from '@/utils/Box';
import AdminLayout from '@/layouts/AdminLayout';

const Transaction = ({ title }) => {
  return (
    <AdminLayout>
      <Box title={title} noDivider>
        <Table api='/report/admin/transaction' columns={transactionC} />
      </Box>
    </AdminLayout>
  );
};

export default Transaction;
