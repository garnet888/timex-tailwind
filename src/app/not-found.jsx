import { getMetaTitle } from '@/lib/getMetaTitle';
import Layout from '@/layouts/Layout';

const TITLE = 'Хуудас олдсонгүй';

export const metadata = {
  title: getMetaTitle(TITLE),
};

const NotFound = () => {
  return (
    <Layout>
      <main className='h-full grid place-content-center'>
        <h1>{TITLE}...</h1>
      </main>
    </Layout>
  );
};

export default NotFound;
