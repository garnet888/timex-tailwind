import { useState } from 'react';
import { RiSmartphoneLine, RiLockPasswordLine } from 'react-icons/ri';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';
import Modal from 'react-minimal-modal';
import {
  Checkbox,
  FormElement,
  InputPassword,
  InputPrefix,
  Notification,
} from '@/ui';
import { apiList, callPost } from '@/axios/api';
import TermsContent from '../../TermsPrivacy/TermsContent';

const schema = Yup.object({
  phone_number: Yup.string()
    .required('Утасны дугаараа оруулна уу')
    .matches(/^\d{8}$/, '8 ширхэг тоо байх ёстой'),
  password: Yup.string()
    .required('Нууц үгээ оруулна уу')
    .min(6, 'Хамгийн багадаа 6 тэмдэгт байх ёстой')
    .matches(
      /^(?=.*[\W_])(?=.*\d)(?=.*[A-Z])[A-Za-z0-9!@#%^&*()_+{}[\]:;<>,.?/~`'"\-|=№₮¥$\\]*$/,
      'Таны нууц үг латин үсгээр, ядаж 1 том үсэг, жижиг үсэг, тоо, тусгай тэмдэгт агуулсан байх ёстой'
    ),
  rePassword: Yup.string()
    .required('Нууц үгээ давтан оруулна уу')
    .oneOf([Yup.ref('password')], 'Нууц үг таарахгүй байна'),
});

const RegisterStep = ({ setUserID, setPhone, changeStep }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [agreeTerms, setAgreeTerms] = useState(false);
  const [visibleTerms, setVisibleTerms] = useState(false);
  const [termsPer, setTermsPer] = useState(0);

  const {
    formState: { errors },
    register,
    getValues,
    handleSubmit,
  } = useForm({
    resolver: yupResolver(schema),
  });

  const termsOnCheckHandler = () => {
    if (!agreeTerms) {
      setVisibleTerms(true);
    } else {
      setAgreeTerms(false);
    }
  };

  const allowTerms = () => {
    setVisibleTerms(false);
    setAgreeTerms(true);
  };

  const registerHandler = () => {
    if (agreeTerms) {
      setIsLoading(true);

      callPost(`${apiList.auth}`, {
        phoneNumber: getValues('phone_number'),
        password: btoa(getValues('password')),
        passwordMatch: btoa(getValues('rePassword')),
      }).then((res) => {
        if (res.status) {
          setUserID(res.data.id);
          setPhone(getValues('phone_number'));
          changeStep(2);
        }

        setIsLoading(false);
      });
    } else {
      Notification.warning({ desc: 'Үйлчилгээний нөхцөлтэй танилцана уу!' });
    }
  };

  return (
    <>
      <Modal
        title='Үйлчилгээний нөхцөл'
        width={800}
        open={visibleTerms}
        onClose={() => setVisibleTerms(false)}
        footer={
          <button
            className='w-full mt-6'
            disabled={termsPer < 94}
            onClick={allowTerms}
          >
            Зөвшөөрч байна
          </button>
        }
      >
        <TermsContent setTermsPer={setTermsPer} />
      </Modal>

      <form
        className='flex flex-col gap-2'
        onSubmit={handleSubmit(registerHandler)}
      >
        <FormElement
          label='Утасны дугаар'
          message={errors.phone_number?.message}
        >
          <InputPrefix
            id='phone_number'
            before={<RiSmartphoneLine color='gray' />}
            alert={errors.phone_number}
            rounded
            register={register}
          />
        </FormElement>

        <FormElement label='Нууц үг' message={errors.password?.message}>
          <InputPassword
            id='password'
            before={<RiLockPasswordLine color='gray' />}
            alert={errors.password}
            rounded
            register={register}
          />
        </FormElement>

        <FormElement
          label='Нууц үг давтах'
          message={errors.rePassword?.message}
        >
          <InputPassword
            id='rePassword'
            before={<RiLockPasswordLine color='gray' />}
            alert={errors.rePassword}
            rounded
            register={register}
          />
        </FormElement>

        <Checkbox checked={agreeTerms} onChange={termsOnCheckHandler}>
          {`Үйлчилгээний нөхцөл${agreeTerms ? ' зөвшөөрсөн' : 'тэй танилцах'}`}
        </Checkbox>

        <button
          className='w-full rounded-full mt-6'
          type='submit'
          disabled={isLoading}
        >
          {isLoading ? <span className='load_spinner w-4' /> : 'Бүртгүүлэх'}
        </button>
      </form>
    </>
  );
};

export default RegisterStep;
