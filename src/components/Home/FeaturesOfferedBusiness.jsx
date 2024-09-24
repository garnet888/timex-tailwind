import { BackedIcon } from '@/ui';
import {
  ChartUp,
  Company,
  DocPlus,
  Infinite,
  Notif,
  UserEdit,
} from '@/utils/icons';

const FeaturesOfferedBusiness = () => {
  return (
    <div>
      <b className='text-primary font-medium'>Онцлог</b>
      <h2 className='font-medium my-2'>
        Timex-ээс Үйлчилгээ үзүүлэгчид санал болгож буй боломжууд
      </h2>

      <ul className='grid md:grid-cols-2 xl:grid-cols-3 gap-8 mt-8'>
        <li>
          <BackedIcon outsideColor='#f7f4ff' insideColor='#f1ecff'>
            <Infinite />
          </BackedIcon>

          <b className='block font-medium my-2'>24/7 захиалга авах</b>

          <p className='text-gray-500 text-sm text-justify'>
            Timex нь ажлын цагаас үл хамааран захиалгуудыг алдалгүй бүртгэнэ.
          </p>
        </li>

        <li>
          <BackedIcon outsideColor='#f7f4ff' insideColor='#f1ecff'>
            <UserEdit />
          </BackedIcon>

          <b className='block font-medium my-2'>
            Ажилтан бүр өөрийн цагаа менежмент хийх
          </b>

          <p className='text-gray-500 text-sm text-justify'>
            Ажлын газар болон ажилтан хоорондоо захиалгын талаар мэдээллийг
            харилцан мэдээлэх шаардлагагүй болж, ажилтан өөрийнхөө захиалгыг
            шалгаж, удирдах боломжтой болсноор өөрийн цагаа бүрэн менежмент
            хийхэд хялбар болно.
          </p>
        </li>

        <li>
          <BackedIcon outsideColor='#f7f4ff' insideColor='#f1ecff'>
            <DocPlus />
          </BackedIcon>

          <b className='block font-medium my-2'>
            Бусад сувгаар ирсэн захиалгуудаа бүртгэх, удирдах
          </b>

          <p className='text-gray-500 text-sm text-justify'>
            Утсаар, чатаар гэх мэт бусад сувгаар ирсэн захиалгуудаа ч мөн
            бүртгэж, удирдах боломжтой байх уян хатан шийдлийг санал болгож
            байна.
          </p>
        </li>

        <li>
          <BackedIcon outsideColor='#f7f4ff' insideColor='#f1ecff'>
            <Notif />
          </BackedIcon>

          <b className='block font-medium my-2'>Захиалгын мэдэгдэл</b>

          <p className='text-gray-500 text-sm text-justify'>
            Шинэ захиалга ирэх, захиалга өөрчлөгдөх, захиалга цуцлагдах үед танд
            мэдэгдэл ирэх бөгөөд захиалгатай холбоотой мэдээллийг тухай бүрд нь
            шууд мэдэх боломжтой.
          </p>
        </li>

        <li>
          <BackedIcon outsideColor='#f7f4ff' insideColor='#f1ecff'>
            <Company />
          </BackedIcon>

          <b className='block font-medium my-2'>
            Салбаруудын үйл ажиллагааг хянах
          </b>

          <p className='text-gray-500 text-sm text-justify'>
            Салбаруудаасаа тайлан мэдээ ирэхийг хүлээх шаардлагагүйгээр бүх
            салбаруудынхаа захиалга, үйл ажиллагааны талаар мэдээллийг Timex
            захиалга удирдлагын системээрээ дамжуулан хянаж шалгах боломжтой.
          </p>
        </li>

        <li>
          <BackedIcon outsideColor='#f7f4ff' insideColor='#f1ecff'>
            <ChartUp />
          </BackedIcon>

          <b className='block font-medium my-2'>
            Үйл ажиллагаагаа хянах, сайжруулах
          </b>

          <p className='text-gray-500 text-sm text-justify'>
            Хяналтын самбар нь танай үйл ажиллагааны талаарх олон төрлийн тайлан
            мэдээллийг нэг дор гаргаж богино болон урт хугацааны төлөвлөлт хийх,
            менежментийн шийдвэр гаргалтад туслах болно.
          </p>
        </li>
      </ul>
    </div>
  );
};

export default FeaturesOfferedBusiness;
