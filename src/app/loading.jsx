import { getMetaTitle } from '@/utils/MetaTitle';
import Layout from '@/layouts/Layout';

const TITLE = 'Уншиж байна';

export const metadata = {
  title: getMetaTitle(TITLE),
};

const Loading = () => {
  return (
    <Layout>
      <main className='h-full grid place-content-center'>
        <h1>{TITLE}...</h1>
      </main>
    </Layout>
  );
};

export default Loading;
