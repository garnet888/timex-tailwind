import Layout from '@/layouts/Layout';

const title = 'Уншиж байна...';

export const metadata = { title };

const Loading = () => {
  return (
    <Layout>
      <main className='min-h-content grid place-content-center'>
        <h1>{title}</h1>
      </main>
    </Layout>
  );
};

export default Loading;
