import User from './User';

const title = 'Харилцагчдын жагсаалт';
export const metadata = { title };

const UserPage = () => {
  return <User title={title} />;
};

export default UserPage;
