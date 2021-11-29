import { createAsyncThunk } from '@reduxjs/toolkit';

export const signUpAsync = createAsyncThunk('/auth/signup', async (payload) => {
  const response = await fetch(
    `${process.env.REACT_APP_API_BASE}/auth/signup`,
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        username: payload.username,
        email: payload.email,
        password: payload.password,
      }),
    },
  );

  if (response.status === 400) {
    alert('이미 사용중인 이메일입니다. 다시 설정해주세요.');
  }

  if (response.ok) {
    const signUp = await response.json();
    alert('회원가입에 성공하셨습니다.');
    window.location.href = '/';
    return { signUp };
  }
});
