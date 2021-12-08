import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { SButton, SForm, SInput, SLabel, SSpan } from './styles';
import { Typography } from '@mui/material';
import { myPageAsync } from '../../app/slices/mypageSlice';

export default function ConfirmForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const dispacth = useDispatch();
  const email = localStorage.getItem('user');

  const onSubmit = async (data) => {
    await dispacth(
      myPageAsync({
        email: email,
        password: data.password,
      }),
    );
    reset();
  };

  return (
    <SForm onSubmit={handleSubmit(onSubmit)}>
      <Typography
        component="h1"
        variant="h5"
        style={{ marginBottom: '4%', fontWeight: '600' }}
      >
        비밀번호 확인
      </Typography>
      <p>비밀번호를 확인합니다.</p>
      <SLabel htmlFor="password">비밀번호</SLabel>
      <SInput
        id="password"
        {...register('password', {
          required: '비밀번호를 입력해주세요.',
          pattern: {
            value:
              /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,20}$/,
            message:
              '비밀번호는 영문 대,소문자와 숫자, 특수기호가 적어도 1개 이상씩 포함된 8자 ~ 20자의 비밀번호여야 합니다.',
          },
        })}
        type="password"
      />
      {errors.password && <SSpan role="alert">{errors.password.message}</SSpan>}
      <br />
      <SButton type="submit">확인</SButton>
    </SForm>
  );
}
