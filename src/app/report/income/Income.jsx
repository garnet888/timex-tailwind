'use client';

import AdminLayout from '@/layouts/AdminLayout';
// import BasicTable from '@/utils/Table/BasicTable';
// import SortingTable from '@/utils/Table/SortingTable';
// import GlobalFiltering from '@/utils/Table/GlobalFiltering';
// import ColumnFiltering from '@/utils/Table/ColumnFiltering';
// import PaginationTable from '@/utils/Table/PaginationTable';
// import SelectingRow from '@/utils/Table/SelectingRow';
import { Table } from '@/ui';
import Box from '@/utils/Box';

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
      <Box
        title={title}
        noDivider
      >
        <Table
          actions={[{ key: 'EDIT' }, { key: 'DELETE' }]}
          actionsHandler={actionsHandler}
          // rowOnClick={(data) => alert(JSON.stringify(data, null, 2))}
        />
      </Box>
    </AdminLayout>
  );
};

export default Income;
