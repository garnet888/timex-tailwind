import Box from '@/utils/Box';
import AdminLayout from '@/layouts/AdminLayout';

const Txn = ({ title }) => {
  return (
    <AdminLayout>
      <Box title={title} noDivider></Box>
    </AdminLayout>
  );
};
export default Txn;
