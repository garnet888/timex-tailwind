import Layout from '@/layouts/Layout';
import TermsContent from '@/components/TermsPrivacy/TermsContent';

const RenderTerms = ({ title }) => {
  return (
    <Layout shownBackground>
      <div className='lg:w-[800px] text-justify px-2 lg:px-0 mx-auto my-20'>
        <h1 className='text-center font-semibold mb-8'>{title}</h1>

        <TermsContent />
      </div>
    </Layout>
  );
};

export default RenderTerms;
