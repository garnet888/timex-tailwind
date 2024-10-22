import Box from '@/components/Box';
import AdminLayout from '@/layouts/AdminLayout';

const Settings = ({ title }) => {
  return (
    <AdminLayout>
      <Box title={title} noDivider>
        <div>Hello World!</div>
      </Box>
    </AdminLayout>
  );
};

export default Settings;
