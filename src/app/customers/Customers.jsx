'use client';

import AdminLayout from '@/layouts/AdminLayout';
import { Table } from '@/ui';
import { customers } from '@/lib/TableColumns/customers';
import Box from '@/components/Box';

const Customers = ({ title }) => {
  const actionsHandler = (key, data) => {
    switch (key) {
      case 'EDIT':
        alert(`This is edit action: ${data.phone}`);
        break;
      case 'DELETE':
        alert(`This is delete action: ${data.phone}`);
        break;
    }
  };

  return (
    <AdminLayout>
      <Box
        title={title}
        noDivider
      >
        <Table
          api='/customer'
          customQuery='sort=-firstOrder'
          columns={customers}
          actions={[{ key: 'EDIT' }, { key: 'DELETE' }]}
          actionsHandler={actionsHandler}
          // rowOnClick={() => alert('This is row on clicked')}
        />
      </Box>
    </AdminLayout>
  );
};

export default Customers;
