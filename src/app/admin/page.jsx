import { getMetaTitle } from '@/lib/getMetaTitle';
import RenderAdmin from './RenderAdmin';

const TITLE = 'Тавтай морилно уу';

export const metadata = {
  title: getMetaTitle(TITLE),
};

const Admin = () => {
  return <RenderAdmin title={TITLE} />;
};

export default Admin;
