import { createAsyncThunk } from '@reduxjs/toolkit';

export const boardPostAsync = createAsyncThunk('/board', async (payload) => {
  let headers = new Headers({
    'Content-Type': 'application/json',
  });

  const accessToken = localStorage.getItem('ACCESS_TOKEN');
  if (accessToken && accessToken != null) {
    headers.append('Authorization', 'Bearer ' + accessToken);
  }

  const response = await fetch(`${process.env.REACT_APP_API_BASE}/board`, {
    method: 'POST',
    headers: headers,
    body: JSON.stringify({
      title: payload.title,
      content: payload.content,
    }),
  });

  if (response.ok) {
    const board = await response.json();

    return await { board };
  }
});

export const boardUpdateAsync = createAsyncThunk('/board', async (payload) => {
  let headers = new Headers({
    'Content-Type': 'application/json',
  });

  const accessToken = localStorage.getItem('ACCESS_TOKEN');
  if (accessToken && accessToken != null) {
    headers.append('Authorization', 'Bearer ' + accessToken);
  }

  const response = await fetch(
    `${process.env.REACT_APP_API_BASE}/board/` + payload.boardId,
    {
      method: 'PUT',
      headers: headers,
      body: JSON.stringify({
        title: payload.title,
        content: payload.content,
      }),
    },
  );

  if (response.ok) {
    const board = await response.json();

    return await { board };
  }
});

export const boardDeleteAsync = createAsyncThunk('/board', async (payload) => {
  let headers = new Headers({
    'Content-Type': 'application/json',
  });

  const accessToken = localStorage.getItem('ACCESS_TOKEN');
  if (accessToken && accessToken != null) {
    headers.append('Authorization', 'Bearer ' + accessToken);
  }

  const response = await fetch(
    `${process.env.REACT_APP_API_BASE}/board/` + payload.boardId,
    {
      method: 'DELETE',
      headers: headers,
    },
  );

  if (response.ok) {
    const board = await response.json();
    window.location.href = window.location.pathname;

    return await { board };
  }
});
