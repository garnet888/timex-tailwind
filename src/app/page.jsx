'use client';

import Link from 'next/link';
import Image from 'next/image';
import * as ReactSwiper from 'swiper/react';
import * as SwiperModules from 'swiper/modules';
import { v4 as uuid } from 'uuid';
import { BackedIcon } from '@/ui';
import { useBaseContext } from '@/context/BaseContext';
import { Picon1, Picon2, Picon3, Picon4 } from '@/utils/icons';
import BaseLayout from '@/layouts/BaseLayout';
import FeaturesOfferedUser from '@/components/Home/FeaturesOfferedUser';
import FeaturesOfferedBusiness from '@/components/Home/FeaturesOfferedBusiness';

const SLIDE_IMGs = [
  'https://images.pexels.com/photos/28402807/pexels-photo-28402807/free-photo-of-surah-fateha-quran-first-page.jpeg',
  'https://images.pexels.com/photos/15354555/pexels-photo-15354555/free-photo-of-top-view-of-colorful-flower-bouquets.jpeg',
  'https://images.pexels.com/photos/28403277/pexels-photo-28403277/free-photo-of-almere-central-station.jpeg',
  'https://images.pexels.com/photos/269077/pexels-photo-269077.jpeg',
  'https://images.pexels.com/photos/2102416/pexels-photo-2102416.jpeg',
  'https://images.pexels.com/photos/28486840/pexels-photo-28486840/free-photo-of-turkish-coffee-and-tea-on-traditional-tray.jpeg',
  'https://images.pexels.com/photos/20143999/pexels-photo-20143999/free-photo-of-glass-multi-colored-ornate-lamps.jpeg',
  'https://images.pexels.com/photos/25070493/pexels-photo-25070493/free-photo-of-stained-glass-on-the-ceiling.jpeg',
  'https://images.pexels.com/photos/17097308/pexels-photo-17097308/free-photo-of-a-vase-filled-with-red-and-yellow-flowers.jpeg',
  'https://images.pexels.com/photos/28472063/pexels-photo-28472063/free-photo-of-royal-gorge-aerial-tramway-over-rocky-cliffs.jpeg',
  'https://images.pexels.com/photos/18996311/pexels-photo-18996311/free-photo-of-close-up-of-a-multi-colored-bouquet.jpeg',
  'https://images.pexels.com/photos/28381510/pexels-photo-28381510/free-photo-of-shells-and-pebbles-on-the-beach.jpeg',
  'https://images.pexels.com/photos/19434321/pexels-photo-19434321/free-photo-of-aerial-view-of-a-shipwreck-near-the-shore.jpeg',
  'https://images.pexels.com/photos/27562631/pexels-photo-27562631/free-photo-of-seagull-flying-in-cloudy-blue-sky.jpeg',
];

export default function Home() {
  const { isUser } = useBaseContext();

  return (
    <BaseLayout>
      <div className='background_img_2 lg:h-home_top flex flex-col justify-between gap-6 lg:gap-0 py-8 bg-gray-200'>
        <div className='flex flex-col gap-8 lg:flex-row justify-between items-center px-12 xl:px-[200px]'>
          <div>
            <h3 className='text-center md:text-start text-[42px] md:text-[54px] leading-none font-bold'>
              Цаг захиалгын <span className='text-primary'>платформ</span>
            </h3>

            <p className='text-center md:text-start text-gray-500 my-6'>
              {isUser
                ? 'Бид танд олон төрлийн үйлчилгээний цагийг нэг дороос захиалах, захиалгаа удирдах хялбар шийдлийг санал болгож байна.'
                : 'Бид танд захиалга, үйл ажиллагаагаа төлөвлөх хялбар шийдлийг санал болгож байна.'}
            </p>

            <div className='flex flex-col gap-2 items-center md:items-start'>
              <b>Апп татах</b>

              <div className='flex gap-2'>
                <Image
                  className='w-[100px] h-[100px] object-contain'
                  src='/images/app_qr_code.png'
                  alt='Logo'
                  width={1000}
                  height={1000}
                  priority
                />

                <div className='flex flex-col justify-between'>
                  <Link
                    href='https://play.google.com/store/apps/details?id=mn.timex.timex'
                    target='_blank'
                  >
                    <Image
                      className='w-[148px] h-[36px] lg:w-[320px] xl:w-[148px]  object-contain'
                      src='/images/store_google.png'
                      alt='Logo'
                      width={500}
                      height={500}
                      priority
                    />
                  </Link>

                  <Link
                    href='https://apps.apple.com/mn/app/timex-mn/id6470434425'
                    target='_blank'
                  >
                    <Image
                      className='w-[148px] h-[36px] lg:w-[320px] xl:w-[148px]  object-contain'
                      src='/images/store_apple.png'
                      alt='Logo'
                      width={500}
                      height={500}
                      priority
                    />
                  </Link>
                </div>
              </div>
            </div>
          </div>

          <Image
            className='w-[780px] h-[300px] lg:h-[460px] object-contain'
            src={
              isUser
                ? '/images/home_top_user.png'
                : '/images/home_top_business.png'
            }
            alt='Logo'
            width={1000}
            height={1000}
            priority
          />
        </div>

        <div
          className='bg-white shadow-md py-[10px]'
          style={{ width: 'calc(100vw - var(--scrollbar-width))' }}
        >
          <ReactSwiper.Swiper
            modules={[SwiperModules.Autoplay]}
            slidesPerView={6}
            autoplay={{ delay: 0.1 }}
            speed={4000}
            allowTouchMove={false}
            loop
            breakpoints={{
              200: { slidesPerView: 2 },
              424: { slidesPerView: 3 },
              768: { slidesPerView: 8 },
              1024: { slidesPerView: 10 },
            }}
          >
            {SLIDE_IMGs.map((item) => (
              <ReactSwiper.SwiperSlide key={uuid()}>
                <Image
                  className='w-[60px] h-[60px] object-cover rounded-md'
                  src={item}
                  alt='Logo'
                  width={200}
                  height={200}
                  priority
                />
              </ReactSwiper.SwiperSlide>
            ))}
          </ReactSwiper.Swiper>
        </div>
      </div>

      <div className='flex flex-col gap-24 background_img_1 px-10 lg:px-[120px] py-24'>
        <div>
          <b className='text-primary font-medium'>Онцлог</b>
          <h2 className='font-medium my-2'>TIMEX хэрхэн ажилладаг вэ?</h2>

          <p className='text-gray-500'>
            Timex нь цаг захиалах үйлчилгээ үзүүлэхээс гадна ажилтны цагийн
            хуваарь, үйлчилгээнүүдийн мэдээлэл болон салбарын үйл ажиллагааг
            нэгдсэн дэлгэцээр харж удирдах хянахтай холбоотой бүхий л төрлийн
            мэдээллийг хялбаршуулан автоматжуулсан цогц систем юм.
          </p>

          <ul className='grid md:grid-cols-2 xl:grid-cols-4 gap-[28px] mt-10'>
            <li className='bg-white border shadow rounded-2xl p-6'>
              <BackedIcon
                outsideColor='#f7f4ff'
                insideColor='#f1ecff'
              >
                <Picon1 />
              </BackedIcon>

              <b className='block font-medium my-2'>Хэрэглэгч</b>

              <p className='text-gray-500 text-sm text-justify'>
                <span className='block text-primary'>TIMEX Аппликейшнээр</span>
                дамжуулан өөрт тохирох үйлчилгээний газрын хаяг байршил болон ур
                чадварын мэдээллийг авах. Мөн боломжит цагаа захиалах, тэмдэглэн
                төлөвлөх боломжтой.
              </p>
            </li>

            <li className='bg-white border shadow rounded-2xl p-6'>
              <BackedIcon
                outsideColor='#f7f4ff'
                insideColor='#f1ecff'
              >
                <Picon2 />
              </BackedIcon>

              <b className='block font-medium my-2'>Ажилтан</b>

              <p className='text-gray-500 text-sm text-justify'>
                <span className='block text-primary'>TIMEX Аппликейшнээр</span>
                дамжуулан өөрт ирсэн захиалгуудыг шалгах, хянаж удирдах
                боломжтойгоос гадна өөрийн амрах, ажиллах цагаа хялбараар
                төлөвлөх шийдлийг өгнө.
              </p>
            </li>
            <li className='bg-white border shadow rounded-2xl p-6'>
              <BackedIcon
                outsideColor='#f7f4ff'
                insideColor='#f1ecff'
              >
                <Picon3 />
              </BackedIcon>

              <b className='block font-medium my-2'>Салбар</b>

              <p className='text-gray-500 text-sm text-justify'>
                <span className='block text-primary'>TIMEX Веб платформ</span>
                дээр бүх ажилчдынхаа захиалгыг нэгдсэн самбарт харах, удирдах,
                хяналт хийх, тайлан гаргах боломжтой.
              </p>
            </li>
            <li className='bg-white border shadow rounded-2xl p-6'>
              <BackedIcon
                outsideColor='#f7f4ff'
                insideColor='#f1ecff'
              >
                <Picon4 />
              </BackedIcon>

              <b className='block font-medium my-2'>Байгууллага</b>

              <p className='text-gray-500 text-sm text-justify'>
                <span className='block text-primary'>TIMEX Веб платформ</span>
                дээр бүх салбарынхаа захиалгыг шалгах, хянах, тайлан гаргах
                боломжтой.
              </p>
            </li>
          </ul>
        </div>

        {isUser ? <FeaturesOfferedUser /> : <FeaturesOfferedBusiness />}
      </div>
    </BaseLayout>
  );
}
