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

    if (signUp.token) {
      localStorage.setItem('ACCESS_TOKEN', signUp.token);
      window.location.href = '/';
    }

    return { signUp };
  }
});
