import { createAsyncThunk } from '@reduxjs/toolkit';

export const updateAsync = createAsyncThunk('/auth/update', async (payload) => {
  let headers = new Headers({
    'Content-Type': 'application/json',
  });

  const accessToken = localStorage.getItem('ACCESS_TOKEN');
  if (accessToken && accessToken != null) {
    headers.append('Authorization', 'Bearer ' + accessToken);
  }

  const response = await fetch(
    `${process.env.REACT_APP_API_BASE}/auth/update`,
    {
      method: 'PUT',
      headers: headers,
      body: JSON.stringify({
        name: payload.name,
        email: payload.email,
        password: payload.password,
      }),
    },
  );

  if (response.ok) {
    const update = await response.json();

    if (update.code === -1) {
      let error = update.data;
      Object.keys(error).forEach(function (key) {
        alert(error[key]);
      });
    }

    if (update.code === 1) {
      alert(update.message + ' 다시 로그인해주세요.');

      localStorage.removeItem('ACCESS_TOKEN');
      localStorage.removeItem('user');

      window.location.href = '/login';
    }

    return { update };
  }
});
