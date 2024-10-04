import Profile from './Profile';

const title = 'Ерөнхий мэдээлэл';
export const metadata = { title };

const ProfilePage = () => {
  return <Profile title={title} />;
};

export default ProfilePage;
