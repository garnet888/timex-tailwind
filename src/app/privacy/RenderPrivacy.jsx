import Layout from '@/layouts/Layout';
import PrivacyContent from '@/components/TermsPrivacy/PrivacyContent';

const RenderPrivacy = ({ title }) => {
  return (
    <Layout shownBackground>
      <div className='lg:w-[800px] text-justify px-2 lg:px-0 mx-auto my-20'>
        <h1 className='text-center font-semibold mb-8'>{title}</h1>

        <PrivacyContent />
      </div>
    </Layout>
  );
};

export default RenderPrivacy;
