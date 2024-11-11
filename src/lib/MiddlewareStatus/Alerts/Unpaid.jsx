import { useRouter } from 'next/navigation';
import { BackedIcon, Warning } from '@/ui';
import { LockIcon } from '@/utils/icons';

const UnpaidAlert = ({ visible }) => {
  const router = useRouter();

  return (
    <Warning
      width={428}
      icon={
        <BackedIcon>
          <LockIcon />
        </BackedIcon>
      }
      title='Төлөлт хийгдээгүй байна'
      text='Та өөрт тохирох багцаа худалдан авна уу'
      yesText='За'
      borderColor='red'
      visible={visible}
      hiddenNoButton
      yesOnClick={() => router.push('/payment?type=buy')}
    />
  );
};

export default UnpaidAlert;
