import { Typography } from '@mui/material';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { SButton, SForm, SInput, SLabel, SSpan } from './styles';
import { signUpAsync } from '../../app/slices/singUpSlice';

export default function SignupForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const dispatch = useDispatch();

  const onSubmit = async (data) => {
    await dispatch(
      signUpAsync({
        name: data.name,
        email: data.email,
        password: data.password,
        mobileNum: data.mobileNum,
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
        회원가입
      </Typography>
      <SLabel htmlFor="name">이름</SLabel>
      <SInput
        id="name"
        {...register('name', {
          required: '이름을 입력해주세요.',
          minLength: {
            value: 1,
            message: '최소 1자리를 입력하세요.',
          },
          maxLength: {
            value: 4,
            message: '최대 4자리까지 입력할 수 있습니다.',
          },
          pattern: {
            value: /^[가-힣]{2,4}$/,
            message: '한글 이름을 2자에서 4자 이내로 입력해주세요',
          },
        })}
        type="text"
      />
      {errors.name && <SSpan role="alert">{errors.name.message}</SSpan>}
      <SLabel htmlFor="email">이메일</SLabel>
      <SInput
        id="email"
        {...register('email', {
          required: '이메일을 입력해주세요.',
          pattern: {
            value: /\S+@\S+\.\S+/,
            message: '이메일 형식에 맞지 않습니다.',
          },
        })}
        type="email"
      />
      {errors.email && <SSpan role="alert">{errors.email.message}</SSpan>}
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
      <SLabel htmlFor="mobile">휴대폰번호</SLabel>
      <SInput
        id="mobileNum"
        {...register('mobileNum', {
          required: '전화번호를 입력해주세요.',
          pattern: {
            value: /^01([0|1|6|7|8|9])-?([0-9]{3,4})-?([0-9]{4})$/,
            message: '예시에 맞게 입력해주세요. 예) 01023215820',
          },
        })}
        type="tel"
      />
      {errors.mobileNum && (
        <SSpan role="alert">{errors.mobileNum.message}</SSpan>
      )}
      <br />
      <SButton type="submit">가입</SButton>
    </SForm>
  );
}
