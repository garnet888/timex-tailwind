import { useRouter } from 'next/navigation';
import Modal from 'react-minimal-modal';
import { BackedIcon } from '@/ui';
import { LockIcon } from '@/utils/icons';

const CONTACT_PHONE = process.env.NEXT_PUBLIC_CONTACT_PHONE;

const NoServiceAlert = ({ visible, onClose }) => {
  const router = useRouter();

  return (
    <Modal
      hideIcon
      open={visible}
    >
      <div className='flex gap-4'>
        <BackedIcon>
          <LockIcon />
        </BackedIcon>

        <div className='flex flex-col items-end'>
          <div className='w-full mb-4'>
            <b className='font-semibold'>
              Таны үйлчилгээний эрх нээгдээгүй байна
            </b>

            <span className='mt-1'>
              <p>
                Манай борлуулалтын албанаас холбогдтол түр хүлээнэ үү. Хэрвээ
                холбогдохыг хүсвэл доорх дугаараар холбогдоно уу.
              </p>

              <p className='font-medium mt-2'>{CONTACT_PHONE}</p>
            </span>
          </div>

          <div className='flex gap-3'>
            <button
              className='normal_btn'
              onClick={onClose}
            >
              Хаах
            </button>

            <button onClick={() => router.push('/dashboard')}>За</button>
          </div>
        </div>
      </div>
    </Modal>
  );
};

export default NoServiceAlert;
