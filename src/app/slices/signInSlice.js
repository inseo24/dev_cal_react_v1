import { createAsyncThunk } from '@reduxjs/toolkit';

export const signInAsync = createAsyncThunk('/auth/signin', async (payload) => {
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
    alert('이메일과 비밀번호를 확인해주세요.');
  }

  if (response.ok) {
    const signIn = await response.json();
    alert('로그인 되었습니다.');

    if (signIn.token) {
      localStorage.setItem('ACCESS_TOKEN', signIn.token);
      localStorage.setItem('user', signIn.email);
      window.location.href = '/mypage';
    }

    return { signIn };
  }
});
