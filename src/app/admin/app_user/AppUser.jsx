import { Table } from '@/ui';
import { appUserC } from '@/lib/TableColumns/Admin/appUserC';
import Box from '@/utils/Box';
import AdminLayout from '@/layouts/AdminLayout';

const AppUser = ({ title }) => {
  return (
    <AdminLayout>
      <Box title={title} noDivider>
        <Table api='/admin/app/user' columns={appUserC} />
      </Box>
    </AdminLayout>
  );
};

export default AppUser;
