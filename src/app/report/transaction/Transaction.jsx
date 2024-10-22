import AdminLayout from '@/layouts/AdminLayout';
import Box from '@/components/Box';

const Transaction = ({ title }) => {
  return (
    <AdminLayout>
      <Box title={title} noDivider>
        Hello World!
      </Box>
    </AdminLayout>
  );
};

export default Transaction;
