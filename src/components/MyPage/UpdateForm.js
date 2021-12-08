import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { SButton, SForm, SInput, SLabel, SSpan } from './styles';
import { Typography } from '@mui/material';
import { updateAsync } from '../../app/slices/updateSlice';

export default function UpdateForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const dispacth = useDispatch();

  const onSubmit = async (data) => {
    await dispacth(
      updateAsync({
        name: data.name,
        email: localStorage.getItem('user'),
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
        개인정보 변경
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
      <SButton type="submit">변경</SButton>
    </SForm>
  );
}
