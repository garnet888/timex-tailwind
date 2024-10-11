'use client';

import AdminLayout from '@/layouts/AdminLayout';
import { Table } from '@/ui';
import { customers } from '@/lib/TableColumns/customers';

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
      <div className='bg-white rounded-[18px] p-[18px]'>
        <h3 className='text-xl font-semibold mb-4 leading-none'>{title}</h3>

        <Table
          api='/customer'
          // customQuery='sort=-firstOrder'
          columns={customers}
          actions={[{ key: 'EDIT' }, { key: 'DELETE' }]}
          actionsHandler={actionsHandler}
        />
      </div>
    </AdminLayout>
  );
};

export default Customers;
