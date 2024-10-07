import AdminLayout from '@/layouts/AdminLayout';
// import BasicTable from '@/utils/Table/BasicTable';
// import SortingTable from '@/utils/Table/SortingTable';
// import GlobalFiltering from '@/utils/Table/GlobalFiltering';
import ColumnFiltering from '@/utils/Table/ColumnFiltering';

const Income = ({ title }) => {
  return (
    <AdminLayout>
      <div className='w-full h-[40px] text-xl font-semibold mb-1'>{title}</div>

      <ColumnFiltering />
    </AdminLayout>
  );
};

export default Income;
