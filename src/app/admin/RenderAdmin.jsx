import { v4 as uuid } from 'uuid';
import AdminLayout from '@/layouts/AdminLayout';

const RenderAdmin = ({ title }) => {
  return (
    <AdminLayout title={title}>
      {[...Array(80)].map((_, idx) => (
        <div key={uuid()}>Information {idx + 1}</div>
      ))}
    </AdminLayout>
  );
};

export default RenderAdmin;
