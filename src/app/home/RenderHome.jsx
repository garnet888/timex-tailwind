import dynamic from 'next/dynamic';
import { v4 as uuid } from 'uuid';
import Layout from '@/layouts/Layout';

const DynamicImage = dynamic(() => import('next/image'), { ssr: false });

const RenderHome = ({ title }) => {
  return (
    <Layout>
      <div className='background_img_2 h-home_top flex flex-col justify-between py-12 bg-gray-200'>
        <div className='px-[200px]'>
          <h1 className='text-center'>{title}</h1>
        </div>

        <ul className='h-[80px] flex items-center gap-4 bg-white shadow-md px-4'>
          {[...Array(4)].map((_, idx) => (
            <li key={uuid()}>
              <DynamicImage
                className='w-[68px] h-[68px] object-cover rounded-md'
                src={
                  idx % 2 === 0
                    ? 'https://images.pexels.com/photos/28402807/pexels-photo-28402807/free-photo-of-surah-fateha-quran-first-page.jpeg'
                    : 'https://images.pexels.com/photos/28389431/pexels-photo-28389431/free-photo-of-grand-canyon-overlook-zion-national-park.jpeg'
                }
                alt='Logo'
                width={300}
                height={300}
                priority
              />
            </li>
          ))}
        </ul>
      </div>

      <div className='background_img_1 h-[800px] px-[120px]'>Other</div>
    </Layout>
  );
};

export default RenderHome;
