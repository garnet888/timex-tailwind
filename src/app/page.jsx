'use client';

import Link from 'next/link';
import Image from 'next/image';
import { v4 as uuid } from 'uuid';
import * as ReactSwiper from 'swiper/react';
import * as SwiperModules from 'swiper/modules';
import Layout from '@/layouts/Layout';

export default function Home() {
  return (
    <Layout>
      <div className='background_img_2 lg:h-home_top flex flex-col justify-between gap-6 lg:gap-0 py-8 bg-gray-200'>
        <div className='flex flex-col gap-8 lg:flex-row justify-between items-center px-12 xl:px-[200px]'>
          <div>
            <h3 className='text-center md:text-start text-[42px] md:text-[54px] leading-none font-bold'>
              Цаг захиалгын <span className='text-primary'>платформ</span>
            </h3>

            <p className='text-center md:text-start text-gray-500 my-6'>
              Бид танд захиалга, үйл ажиллагаагаа төлөвлөх хялбар шийдлийг санал
              болгож байна.
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
            src='/images/home_top_business.png'
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
            <ReactSwiper.SwiperSlide>
              <Image
                className='w-[60px] h-[60px] object-cover rounded-md'
                src='https://images.pexels.com/photos/28402807/pexels-photo-28402807/free-photo-of-surah-fateha-quran-first-page.jpeg'
                alt='Logo'
                width={200}
                height={200}
                priority
              />
            </ReactSwiper.SwiperSlide>

            <ReactSwiper.SwiperSlide>
              <Image
                className='w-[60px] h-[60px] object-cover rounded-md'
                src='https://images.pexels.com/photos/15354555/pexels-photo-15354555/free-photo-of-top-view-of-colorful-flower-bouquets.jpeg'
                alt='Logo'
                width={200}
                height={200}
                priority
              />
            </ReactSwiper.SwiperSlide>

            <ReactSwiper.SwiperSlide>
              <Image
                className='w-[60px] h-[60px] object-cover rounded-md'
                src='https://images.pexels.com/photos/28403277/pexels-photo-28403277/free-photo-of-almere-central-station.jpeg'
                alt='Logo'
                width={200}
                height={200}
                priority
              />
            </ReactSwiper.SwiperSlide>

            <ReactSwiper.SwiperSlide>
              <Image
                className='w-[60px] h-[60px] object-cover rounded-md'
                src='https://images.pexels.com/photos/269077/pexels-photo-269077.jpeg'
                alt='Logo'
                width={200}
                height={200}
                priority
              />
            </ReactSwiper.SwiperSlide>

            <ReactSwiper.SwiperSlide>
              <Image
                className='w-[60px] h-[60px] object-cover rounded-md'
                src='https://images.pexels.com/photos/2102416/pexels-photo-2102416.jpeg'
                alt='Logo'
                width={200}
                height={200}
                priority
              />
            </ReactSwiper.SwiperSlide>

            <ReactSwiper.SwiperSlide>
              <Image
                className='w-[60px] h-[60px] object-cover rounded-md'
                src='https://images.pexels.com/photos/28486840/pexels-photo-28486840/free-photo-of-turkish-coffee-and-tea-on-traditional-tray.jpeg'
                alt='Logo'
                width={200}
                height={200}
                priority
              />
            </ReactSwiper.SwiperSlide>

            <ReactSwiper.SwiperSlide>
              <Image
                className='w-[60px] h-[60px] object-cover rounded-md'
                src='https://images.pexels.com/photos/20143999/pexels-photo-20143999/free-photo-of-glass-multi-colored-ornate-lamps.jpeg'
                alt='Logo'
                width={200}
                height={200}
                priority
              />
            </ReactSwiper.SwiperSlide>

            <ReactSwiper.SwiperSlide>
              <Image
                className='w-[60px] h-[60px] object-cover rounded-md'
                src='https://images.pexels.com/photos/25070493/pexels-photo-25070493/free-photo-of-stained-glass-on-the-ceiling.jpeg'
                alt='Logo'
                width={200}
                height={200}
                priority
              />
            </ReactSwiper.SwiperSlide>

            <ReactSwiper.SwiperSlide>
              <Image
                className='w-[60px] h-[60px] object-cover rounded-md'
                src='https://images.pexels.com/photos/17097308/pexels-photo-17097308/free-photo-of-a-vase-filled-with-red-and-yellow-flowers.jpeg'
                alt='Logo'
                width={200}
                height={200}
                priority
              />
            </ReactSwiper.SwiperSlide>

            <ReactSwiper.SwiperSlide>
              <Image
                className='w-[60px] h-[60px] object-cover rounded-md'
                src='https://images.pexels.com/photos/28472063/pexels-photo-28472063/free-photo-of-royal-gorge-aerial-tramway-over-rocky-cliffs.jpeg'
                alt='Logo'
                width={200}
                height={200}
                priority
              />
            </ReactSwiper.SwiperSlide>

            <ReactSwiper.SwiperSlide>
              <Image
                className='w-[60px] h-[60px] object-cover rounded-md'
                src='https://images.pexels.com/photos/18996311/pexels-photo-18996311/free-photo-of-close-up-of-a-multi-colored-bouquet.jpeg'
                alt='Logo'
                width={200}
                height={200}
                priority
              />
            </ReactSwiper.SwiperSlide>

            <ReactSwiper.SwiperSlide>
              <Image
                className='w-[60px] h-[60px] object-cover rounded-md'
                src='https://images.pexels.com/photos/28381510/pexels-photo-28381510/free-photo-of-shells-and-pebbles-on-the-beach.jpeg'
                alt='Logo'
                width={200}
                height={200}
                priority
              />
            </ReactSwiper.SwiperSlide>

            <ReactSwiper.SwiperSlide>
              <Image
                className='w-[60px] h-[60px] object-cover rounded-md'
                src='https://images.pexels.com/photos/19434321/pexels-photo-19434321/free-photo-of-aerial-view-of-a-shipwreck-near-the-shore.jpeg'
                alt='Logo'
                width={200}
                height={200}
                priority
              />
            </ReactSwiper.SwiperSlide>

            <ReactSwiper.SwiperSlide>
              <Image
                className='w-[60px] h-[60px] object-cover rounded-md'
                src='https://images.pexels.com/photos/27562631/pexels-photo-27562631/free-photo-of-seagull-flying-in-cloudy-blue-sky.jpeg'
                alt='Logo'
                width={200}
                height={200}
                priority
              />
            </ReactSwiper.SwiperSlide>
          </ReactSwiper.Swiper>
        </div>
      </div>

      <div className='flex flex-col gap-24 background_img_1 px-10 lg:px-[120px] py-24'>
        <div>
          <b className='text-primary font-medium'>Онцлог</b>
          <h3 className='font-medium my-2'>TIMEX хэрхэн ажилладаг вэ?</h3>

          <p className='text-gray-500'>
            TimeX нь цаг захиалах үйлчилгээ үзүүлэхээс гадна ажилтны цагийн
            хуваарь, үйлчилгээнүүдийн мэдээлэл болон салбарын үйл ажиллагааг
            нэгдсэн дэлгэцээр харж удирдах хянахтай холбоотой бүхий л төрлийн
            мэдээллийг хялбаршуулан автоматжуулсан цогц систем юм.
          </p>

          <ul className='grid md:grid-cols-2 xl:grid-cols-4 gap-[28px] mt-16'>
            <li className='bg-white border shadow rounded-2xl p-6'>
              <b className='block font-medium my-2'>Хэрэглэгч</b>

              <p className='text-gray-500 text-sm text-justify'>
                <span className='block text-primary'>TIMEX Аппликейшнээр</span>
                дамжуулан өөрт тохирох үйлчилгээний газрын хаяг байршил болон ур
                чадварын мэдээллийг авах. Мөн боломжит цагаа захиалах, тэмдэглэн
                төлөвлөх боломжтой.
              </p>
            </li>

            <li className='bg-white border shadow rounded-2xl p-6'>
              <b className='block font-medium my-2'>Ажилтан</b>

              <p className='text-gray-500 text-sm text-justify'>
                <span className='block text-primary'>TIMEX Аппликейшнээр</span>
                дамжуулан өөрт ирсэн захиалгуудыг шалгах, хянаж удирдах
                боломжтойгоос гадна өөрийн амрах, ажиллах цагаа хялбараар
                төлөвлөх шийдлийг өгнө.
              </p>
            </li>

            <li className='bg-white border shadow rounded-2xl p-6'>
              <b className='block font-medium my-2'>Салбар</b>

              <p className='text-gray-500 text-sm text-justify'>
                <span className='block text-primary'>TIMEX Веб платформ</span>
                дээр бүх ажилчдынхаа захиалгыг нэгдсэн самбарт харах, удирдах,
                хяналт хийх, тайлан гаргах боломжтой.
              </p>
            </li>

            <li className='bg-white border shadow rounded-2xl p-6'>
              <b className='block font-medium my-2'>Байгууллага</b>

              <p className='text-gray-500 text-sm text-justify'>
                <span className='block text-primary'>TIMEX Веб платформ</span>
                дээр бүх салбарынхаа захиалгыг шалгах, хянах, тайлан гаргах
                боломжтой.
              </p>
            </li>
          </ul>
        </div>

        <div>
          <b className='text-primary font-medium'>Онцлог</b>
          <h3 className='font-medium my-2'>
            Timex-ээс Хэрэглэгчдэд санал болгож буй боломжууд
          </h3>

          <ul className='grid md:grid-cols-2 xl:grid-cols-3 gap-8 mt-16'>
            <li>
              <b className='block font-medium mb-2'>
                Үйлчилгээний газруудын мэдээллийг нэг платформоос
              </b>

              <p className='text-gray-500 text-sm text-justify'>
                TimeХ нь орон даяарх үйлчилгээний газруудын мэдээллийг нэгтгэн
                хэрэглэгчид хүргэж буй захиалга, удирдлагын платформ юм.
              </p>
            </li>

            <li>
              <b className='block font-medium mb-2'>
                Олон өгөгдлөөр хайлт хийж өөрт тохирох газраа олох
              </b>

              <p className='text-gray-500 text-sm text-justify'>
                Хэрэгцээт үйлчилгээ, түүний хаяг, ойр байршил, үнэлгээ өндөртэй
                газар гэх мэт хүссэн нөхцөлөөрөө хайлт хийж өөрт тохирох газраа
                сонгоход тань туслах болно.
              </p>
            </li>

            <li>
              <b className='block font-medium mb-2'>
                Үнэлгээ өгөх, үйлчлүүлэгчдийн өгсөн үнэлгээг ранк санал болгоно
              </b>

              <p className='text-gray-500 text-sm text-justify'>
                Захиалагч нь авсан үйлчилгээндээ үнэлгээ өгч, сэтгэгдлээ
                хуваалцах боломжтой ба үйлчилгээний газар болон ажилчдын үнэлгээ
                хийгдэнэ.
              </p>
            </li>

            <li>
              <b className='block font-medium mb-2'>
                Ур чадварын мэдээллийг харах
              </b>

              <p className='text-gray-500 text-sm text-justify'>
                Үйлчилгээний газар болон үйлчилгээ үзүүлэгчийн ур чадвар,
                зэрэглэлийн мэдээллийг харж үйлчилгээ авах ажилтнаа өөрөө сонгох
                боломжийг танд олгож байна.
              </p>
            </li>

            <li>
              <b className='block font-medium mb-2'>
                Захиалга сануулах мэдэгдэл
              </b>

              <p className='text-gray-500 text-sm text-justify'>
                Хийгдсэн захиалгыг мэдэгдэл хэлбэрээр урьдчилан сануулна. Мөн
                захиалгын хугацаа дөхөж байгааг танд мэдэгдэл очиж сануулах тул
                захиалгын цагаа мартаад очихгүй өнгөрөөх асуудал дахин гарахгүй
                боллоо.
              </p>
            </li>

            <li>
              <b className='block font-medium mb-2'>Захиалгын түүхээ харах</b>

              <p className='text-gray-500 text-sm text-justify'>
                Хэзээ, хаана ямар үйлчилгээ авсан тэмдэглэлээ эргэн харах
                боломжтой.
              </p>
            </li>
          </ul>
        </div>
      </div>
    </Layout>
  );
}
