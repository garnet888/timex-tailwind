import AuthLoyout from '@/layouts/AuthLoyout';

const Signup = ({ title }) => {
  return (
    <AuthLoyout
      title={title}
      covers={[...Array(1)].fill('/images/cover_signup.png')}
    >
      Signup
    </AuthLoyout>
  );
};

export default Signup;
