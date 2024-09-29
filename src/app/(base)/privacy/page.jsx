import BaseLayout from '@/layouts/BaseLayout';
import PrivacyContent from '@/components/TermsPrivacy/PrivacyContent';

const title = 'Нууцлалын бодлого';
export const metadata = { title };

const Privacy = () => {
  return (
    <BaseLayout shownBackground>
      <div className='lg:w-[800px] text-justify px-2 lg:px-0 mx-auto my-20'>
        <h1 className='text-center font-semibold mb-8'>{title}</h1>

        <PrivacyContent />
      </div>
    </BaseLayout>
  );
};

export default Privacy;
