import { createAsyncThunk } from '@reduxjs/toolkit';

export const signInAsync = createAsyncThunk('/auth/signin', async (payload) => {
  let headers = new Headers({
    'Content-Type': 'application/json',
  });

  const accessToken = localStorage.getItem('ACCESS_TOKEN');
  if (accessToken && accessToken != null) {
    headers.append('Authorization', 'Bearer' + accessToken);
  }

  const response = await fetch('http://localhost:8080/auth/signin', {
    method: 'POST',
    headers: headers,
    body: JSON.stringify({
      email: payload.email,
      password: payload.password,
    }),
  });

  console.log(response);

  if (response.ok) {
    const signUp = await response.json();
    alert('회원가입에 성공하셨습니다.');
    //  if (response.status === 400) {
    //    alert('이미 사용중인 이메일입니다. 다시 설정해주세요.');
    //    window.location.href = '/signIn';
    //  }

    if (signUp.token) {
      localStorage.setItem('ACCESS_TOKEN', signUp.token);
      window.location.href = '/';
    }

    return { signUp };
  }
});
