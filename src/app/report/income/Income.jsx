'use client';

import AdminLayout from '@/layouts/AdminLayout';
// import BasicTable from '@/utils/Table/BasicTable';
// import SortingTable from '@/utils/Table/SortingTable';
// import GlobalFiltering from '@/utils/Table/GlobalFiltering';
// import ColumnFiltering from '@/utils/Table/ColumnFiltering';
// import PaginationTable from '@/utils/Table/PaginationTable';
// import SelectingRow from '@/utils/Table/SelectingRow';
import { Table } from '@/ui';

const Income = ({ title }) => {
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
      <div className='bg-white rounded-4.5 p-4.5'>
        <h3 className='w-full h-[40px] text-xl font-semibold mb-1'>{title}</h3>

        <Table
          actions={[{ key: 'EDIT' }, { key: 'DELETE' }]}
          actionsHandler={actionsHandler}
          // rowOnClick={(data) => alert(JSON.stringify(data, null, 2))}
        />
      </div>
    </AdminLayout>
  );
};

export default Income;
