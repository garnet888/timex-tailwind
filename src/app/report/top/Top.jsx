import AdminLayout from '@/layouts/AdminLayout';
import Box from '@/utils/Box';

const Top = ({ title }) => {
  return (
    <AdminLayout>
      <Box
        title={title}
        noDivider
      >
        Hello World!
      </Box>
    </AdminLayout>
  );
};

export default Top;
