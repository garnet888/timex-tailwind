import { BiSolidError } from 'react-icons/bi';
import { BackedIcon, Warning } from '@/ui';

const FisrtLoginAlert = ({ visible, onClose }) => {
  return (
    <Warning
      icon={
        <BackedIcon>
          <BiSolidError
            size={26}
            color='orange'
          />
        </BackedIcon>
      }
      title='Timex.mn-д тавтай морилно уу'
      text='Салбартай байгууллагын эрхээр нэгдсэн мэдээлэл хүлээн авахын тулд бүртгэсэн салбар тус бүр Timex Business багц идэвхжүүлэх шаардлагатайг анхаарна уу'
      yesText='Ойлголоо'
      visible={visible}
      hiddenNoButton
      yesOnClick={onClose}
    />
  );
};

export default FisrtLoginAlert;
