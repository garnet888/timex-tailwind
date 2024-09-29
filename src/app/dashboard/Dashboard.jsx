import { v4 as uuid } from 'uuid';
import AdminLayout from '@/layouts/AdminLayout';

const Dashboard = ({ title }) => {
  return (
    <AdminLayout title={title}>
      <header className='w-full flex items-center gap-3 pr-4 sm:pl-0 mt-[20px] mb-[10px]'>
        <div className='w-full h-[40px] flex items-center rounded-full bg-white text-xl font-semibold px-3'>
          {title}, Garnet
        </div>
      </header>

      {[...Array(80)].map((_, idx) => (
        <div key={uuid()}>Information {idx + 1}</div>
      ))}
    </AdminLayout>
  );
};

export default Dashboard;