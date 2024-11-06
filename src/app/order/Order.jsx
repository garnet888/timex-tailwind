import AdminLayout from '@/layouts/AdminLayout';
import Box from '@/utils/Box';

const Order = ({ title }) => {
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

export default Order;
