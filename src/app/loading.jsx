import { getMetaTitle } from '@/lib/getMetaTitle';
import Layout from '@/layouts/Layout';

const TITLE = 'Уншиж байна';

export const metadata = {
  title: getMetaTitle(TITLE),
};

const Loading = () => {
  return (
    <Layout>
      <main className='min-h-content grid place-content-center'>
        <h1>{TITLE}...</h1>
      </main>
    </Layout>
  );
};

export default Loading;
