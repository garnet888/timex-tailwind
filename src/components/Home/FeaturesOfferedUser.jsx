import BackedIcon from '@/ui/BackedIcon';
import {
  Award,
  Like,
  Notif,
  Search,
  StarLine,
  TimeRightArrow,
} from '@/utils/icons';

const FeaturesOfferedUser = () => {
  return (
    <div>
      <b className='text-primary font-medium'>Онцлог</b>
      <h2 className='font-medium my-2'>
        Timex-ээс Хэрэглэгчдэд санал болгож буй боломжууд
      </h2>

      <ul className='grid md:grid-cols-2 xl:grid-cols-3 gap-8 mt-8'>
        <li>
          <BackedIcon outsideColor='#f7f4ff' insideColor='#f1ecff'>
            <StarLine />
          </BackedIcon>

          <b className='block font-medium my-2'>
            Үйлчилгээний газруудын мэдээллийг нэг платформоос
          </b>

          <p className='text-gray-500 text-sm text-justify'>
            TimeХ нь орон даяарх үйлчилгээний газруудын мэдээллийг нэгтгэн
            хэрэглэгчид хүргэж буй захиалга, удирдлагын платформ юм.
          </p>
        </li>

        <li>
          <BackedIcon outsideColor='#f7f4ff' insideColor='#f1ecff'>
            <Search />
          </BackedIcon>

          <b className='block font-medium my-2'>
            Олон өгөгдлөөр хайлт хийж өөрт тохирох газраа олох
          </b>

          <p className='text-gray-500 text-sm text-justify'>
            Хэрэгцээт үйлчилгээ, түүний хаяг, ойр байршил, үнэлгээ өндөртэй
            газар гэх мэт хүссэн нөхцөлөөрөө хайлт хийж өөрт тохирох газраа
            сонгоход тань туслах болно.
          </p>
        </li>

        <li>
          <BackedIcon outsideColor='#f7f4ff' insideColor='#f1ecff'>
            <Like />
          </BackedIcon>

          <b className='block font-medium my-2'>
            Үнэлгээ өгөх, үйлчлүүлэгчдийн өгсөн үнэлгээг ранк санал болгоно
          </b>

          <p className='text-gray-500 text-sm text-justify'>
            Захиалагч нь авсан үйлчилгээндээ үнэлгээ өгч, сэтгэгдлээ хуваалцах
            боломжтой ба үйлчилгээний газар болон ажилчдын үнэлгээ хийгдэнэ.
          </p>
        </li>

        <li>
          <BackedIcon outsideColor='#f7f4ff' insideColor='#f1ecff'>
            <Award />
          </BackedIcon>

          <b className='block font-medium my-2'>Ур чадварын мэдээллийг харах</b>

          <p className='text-gray-500 text-sm text-justify'>
            Үйлчилгээний газар болон үйлчилгээ үзүүлэгчийн ур чадвар,
            зэрэглэлийн мэдээллийг харж үйлчилгээ авах ажилтнаа өөрөө сонгох
            боломжийг танд олгож байна.
          </p>
        </li>

        <li>
          <BackedIcon outsideColor='#f7f4ff' insideColor='#f1ecff'>
            <Notif />
          </BackedIcon>

          <b className='block font-medium my-2'>Захиалга сануулах мэдэгдэл</b>

          <p className='text-gray-500 text-sm text-justify'>
            Хийгдсэн захиалгыг мэдэгдэл хэлбэрээр урьдчилан сануулна. Мөн
            захиалгын хугацаа дөхөж байгааг танд мэдэгдэл очиж сануулах тул
            захиалгын цагаа мартаад очихгүй өнгөрөөх асуудал дахин гарахгүй
            боллоо.
          </p>
        </li>

        <li>
          <BackedIcon outsideColor='#f7f4ff' insideColor='#f1ecff'>
            <TimeRightArrow />
          </BackedIcon>

          <b className='block font-medium my-2'>Захиалгын түүхээ харах</b>

          <p className='text-gray-500 text-sm text-justify'>
            Хэзээ, хаана ямар үйлчилгээ авсан тэмдэглэлээ эргэн харах боломжтой.
          </p>
        </li>
      </ul>
    </div>
  );
};

export default FeaturesOfferedUser;
