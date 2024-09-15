import { getMetaTitle } from '@/utils/MetaTitle';
import RenderHome from './RenderHome';

const TITLE = 'Нүүр';

export const metadata = {
  title: getMetaTitle(TITLE),
};

const Home = () => {
  return <RenderHome title={TITLE} />;
};

export default Home;
