import BaseLayout from '@/layouts/BaseLayout';

const title = 'Хуудас олдсонгүй';

export const metadata = { title };

const NotFound = () => {
  return (
    <BaseLayout>
      <main className='h-full grid place-content-center'>
        <h1>{title}...</h1>
      </main>
    </BaseLayout>
  );
};

export default NotFound;
