import User from './User';

const title = 'Топ хэрэглэгч';
export const metadata = { title };

const UserPage = () => {
  return <User title={title} />;
};

export default UserPage;
