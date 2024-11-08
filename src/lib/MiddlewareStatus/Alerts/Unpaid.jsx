import { useRouter } from 'next/navigation';
import Modal from 'react-minimal-modal';
import { BackedIcon } from '@/ui';
import { LockIcon } from '@/utils/icons';

const UnpaidAlert = ({ visible, onClose }) => {
  const router = useRouter();

  return (
    <Modal
      width={428}
      hideIcon
      open={visible}
    >
      <div className='flex gap-4'>
        <BackedIcon>
          <LockIcon />
        </BackedIcon>

        <div className='flex flex-col items-end'>
          <span className='w-full mb-4'>
            <b className='font-semibold'>Төлөлт хийгдээгүй байна</b>
            <p className='mt-1'>Та өөрт тохирох багцаа худалдан авна уу</p>
          </span>

          <button onClick={() => router.push('/payment?type=buy')}>За</button>
        </div>
      </div>
    </Modal>
  );
};

export default UnpaidAlert;
