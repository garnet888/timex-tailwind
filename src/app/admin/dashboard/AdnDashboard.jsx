import AdminLayout from '@/layouts/AdminLayout';

const AdnDashboard = ({ title }) => {
  return (
    <AdminLayout title={title}>
      <header className='w-full flex items-center gap-3 mb-[10px]'>
        <div className='w-full h-[40px] flex items-center rounded-full bg-white text-xl font-semibold px-3'>
          {title}, Garnet
        </div>
      </header>
    </AdminLayout>
  );
};

export default AdnDashboard;
