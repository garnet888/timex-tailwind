'use client';

import { Table } from '@/ui';
import { incomeC } from '@/lib/TableColumns/Admin/Report/incomeC';
import Box from '@/utils/Box';
import AdminLayout from '@/layouts/AdminLayout';

const Imcome = ({ title }) => {
  return (
    <AdminLayout>
      <Box title={title} noDivider>
        <Table api='/report/admin/income' columns={incomeC} />
      </Box>
    </AdminLayout>
  );
};

export default Imcome;
