import Box from '@/utils/Box';
import AdminLayout from '@/layouts/AdminLayout';

const Report = ({ title }) => {
  return (
    <AdminLayout>
      <Box title={title} noDivider></Box>
    </AdminLayout>
  );
};

export default Report;
