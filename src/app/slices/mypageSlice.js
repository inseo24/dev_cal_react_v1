import { createAsyncThunk } from '@reduxjs/toolkit';

export const myPageAsync = createAsyncThunk('/auth/signin', async (payload) => {
  let headers = new Headers({
    'Content-Type': 'application/json',
  });

  const response = await fetch(
    `${process.env.REACT_APP_API_BASE}/auth/signin`,
    {
      method: 'POST',
      headers: headers,
      body: JSON.stringify({
        email: payload.email,
        password: payload.password,
      }),
    },
  );
  if (response.status === 400) {
    alert('올바르지 않은 비밀번호입니다.');
  }

  if (response.status === 500) {
    alert('로그인을 먼저 해주세요.');
    window.location.href = '/login';
  }

  if (response.ok) {
    const signIn = await response.json();

    if (signIn.token) {
      localStorage.setItem('ACCESS_TOKEN', signIn.token);
      localStorage.setItem('user', signIn.email);
      window.location.href = '/mypage/update';
    }

    return { signIn };
  }
});
