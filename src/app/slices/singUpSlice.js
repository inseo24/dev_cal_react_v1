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
        name: payload.name,
        email: payload.email,
        password: payload.password,
        mobileNum: payload.mobileNum,
      }),
    },
  );

  if (response.ok) {
    const signIn = await response.json();

    if (signIn.code === -1) {
      let error = signIn.data;
      Object.keys(error).forEach(function (key) {
        alert(error[key]);
      });
    }

    if (signIn.code === 1) {
      alert('회원가입에 성공했습니다.');
      window.location.href = '/login';
    }

    return { signIn };
  }
});
