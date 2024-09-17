import Layout from '@/layouts/Layout';

const title = 'Хуудас олдсонгүй';

export const metadata = { title };

const NotFound = () => {
  return (
    <Layout>
      <main className='min-h-content grid place-content-center'>
        <h1>{title}...</h1>
      </main>
    </Layout>
  );
};

export default NotFound;
