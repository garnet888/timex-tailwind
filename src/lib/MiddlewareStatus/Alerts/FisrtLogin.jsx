import Modal from 'react-minimal-modal';
import { BiSolidError } from 'react-icons/bi';
import { BackedIcon } from '@/ui';

const FisrtLoginAlert = ({ visible, onClose }) => {
  return (
    <Modal
      hideIcon
      open={visible}
    >
      <div className='flex gap-4'>
        <BackedIcon>
          <BiSolidError
            size={26}
            color='orange'
          />
        </BackedIcon>

        <div className='flex flex-col items-end'>
          <div className='w-full mb-4'>
            <b className='font-semibold'>Timex.mn-д тавтай морилно уу</b>
            <p className='mt-1'>
              Салбартай байгууллагын эрхээр нэгдсэн мэдээлэл хүлээн авахын тулд
              бүртгэсэн салбар тус бүр Timex Business багц идэвхжүүлэх
              шаардлагатайг анхаарна уу
            </p>
          </div>

          <button onClick={onClose}>Ойлголоо</button>
        </div>
      </div>
    </Modal>
  );
};

export default FisrtLoginAlert;
