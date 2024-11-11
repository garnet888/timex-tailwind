import { useRouter } from 'next/navigation';
import { BackedIcon, Warning } from '@/ui';
import { LockIcon } from '@/utils/icons';

const CONTACT_PHONE = process.env.NEXT_PUBLIC_CONTACT_PHONE;

const NoServiceAlert = ({ visible, onClose }) => {
  const router = useRouter();

  return (
    <Warning
      width={564}
      icon={
        <BackedIcon>
          <LockIcon />
        </BackedIcon>
      }
      title='Таны үйлчилгээний эрх нээгдээгүй байна'
      text={
        <span>
          <p>
            Манай борлуулалтын албанаас холбогдтол түр хүлээнэ үү. Хэрвээ
            холбогдохыг хүсвэл доорх дугаараар холбогдоно уу.
          </p>

          <p className='font-medium sm:text-end mt-2'>{CONTACT_PHONE}</p>
        </span>
      }
      yesText='За'
      noText='Хаах'
      borderColor='red'
      visible={visible}
      yesOnClick={() => router.push('/dashboard')}
      noOnClick={onClose}
    />
  );
};

export default NoServiceAlert;
