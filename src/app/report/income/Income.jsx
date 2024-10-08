import AdminLayout from '@/layouts/AdminLayout';
// import BasicTable from '@/utils/Table/BasicTable';
// import SortingTable from '@/utils/Table/SortingTable';
// import GlobalFiltering from '@/utils/Table/GlobalFiltering';
// import ColumnFiltering from '@/utils/Table/ColumnFiltering';
// import PaginationTable from '@/utils/Table/PaginationTable';
import SelectingRow from '@/utils/Table/SelectingRow';

const Income = ({ title }) => {
  return (
    <AdminLayout>
      <div className='w-full h-[40px] text-xl font-semibold mb-1'>{title}</div>

      <SelectingRow />
    </AdminLayout>
  );
};

export default Income;
