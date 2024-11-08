import AdminLayout from '@/layouts/AdminLayout';
import Box from '@/utils/Box';

const Verify = ({ title }) => {
  return (
    <AdminLayout>
      <Box
        title={title}
        noDivider
      ></Box>
    </AdminLayout>
  );
};

export default Verify;
