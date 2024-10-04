import Modal from 'react-minimal-modal';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';
import { FormElement, ImageUploader, InputPassword } from '@/ui';
import { apiList, callPatch, callPost } from '@/axios/api';
import { useMainContext } from '@/context/MainContext';

const schema = {
  profile: Yup.object({
    profile: Yup.string().required('Профайл зурагаа оруулна уу'),
  }),
  phone: Yup.object({
    phone: Yup.string()
      .required('Утасны дугаараа оруулна уу')
      .matches(/^\d{8}$/, '8 ширхэг тоо байх ёстой'),
  }),
  email: Yup.object({
    email: Yup.string().required('И-Мэйлээ оруулна уу'),
  }),
  password: Yup.object({
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
  }),
};

const EditProfile = ({ which, label, open, setOpen }) => {
  const { setReload, fecthUserInfo } = useMainContext();

  const {
    formState: { errors },
    register,
    setValue,
    getValues,
    clearErrors,
    resetField,
    handleSubmit,
  } = useForm({
    resolver: yupResolver(schema[which]),
  });

  const closeHandler = () => {
    resetField();
    clearErrors();

    setOpen(false);
  };

  const submitHandler = () => {
    // setReload(true);
    // if (which === 'profile') {
    // } else if (which === 'email') {
    //   callPost(`${apiList.user}/info/email`, {
    //     email: getValues('email'),
    //   }).then((res) => {
    //     if (res?.status) {
    //       closeHandler();
    //       setReload(false);
    //       fecthUserInfo();
    //     } else {
    //       setReload(false);
    //     }
    //   });
    // } else if (which === 'password') {
    //   callPatch(`${apiList.user}/password`, {
    //     oldPassword: oldPassword,
    //     password: getValues('password'),
    //     passwordMatch: btoa(getValues('rePassword')),
    //   }).then((res) => {
    //     if (res?.status) {
    //       closeHandler();
    //       setReload(false);
    //       fecthUserInfo();
    //     } else {
    //       setReload(false);
    //     }
    //   });
    // }
  };

  const renderInput = () => {
    switch (which) {
      case 'profile':
        return <ImageUploader getFile={(val) => setValue('profile', val)} />;
      case 'password':
        return (
          <InputPassword
            id='password'
            alert={errors.password}
            rounded
            register={register}
          />
        );

      default:
        return (
          <input
            className={[
              errors[which]?.message ? 'alert_input' : '',
              'rounded_input w-full',
            ].join(' ')}
            {...register(which)}
          />
        );
    }
  };

  return (
    <Modal
      title={label ? `${label} солих` : ''}
      width={which === 'profile' ? 600 : 400}
      open={open}
      onClose={closeHandler}
    >
      <form
        className='flex flex-col gap-2'
        onSubmit={handleSubmit(submitHandler)}
      >
        <FormElement
          label={which === 'password' && 'Нууц үг'}
          message={errors[which]?.message}
          hideAsterisk={which !== 'password'}
          shownInputAsterrisk={which !== 'password'}
        >
          {renderInput()}
        </FormElement>

        {which === 'password' && (
          <FormElement
            label='Нууц үг давтах'
            message={errors.rePassword?.message}
          >
            <InputPassword
              id='rePassword'
              alert={errors.rePassword}
              register={register}
            />
          </FormElement>
        )}

        <div className='flex justify-end gap-3 mt-1'>
          <button
            className='normal_btn'
            type='button'
            onClick={closeHandler}
          >
            Болих
          </button>

          <button type='submit'>Солих</button>
        </div>
      </form>
    </Modal>
  );
};

export default EditProfile;
