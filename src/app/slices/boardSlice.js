import { createAsyncThunk } from '@reduxjs/toolkit';

export let boardId = '';

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

    boardId = await board.data[0].boardId;

    return await { board };
  }
});
