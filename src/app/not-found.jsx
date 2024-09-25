import MainLayout from '@/layouts/MainLayout';

const title = 'Хуудас олдсонгүй';

export const metadata = { title };

const NotFound = () => {
  return (
    <MainLayout>
      <main className='h-full grid place-content-center'>
        <h1>{title}...</h1>
      </main>
    </MainLayout>
  );
};

export default NotFound;
