import { createAsyncThunk } from '@reduxjs/toolkit';

export const commentPostAsync = createAsyncThunk(
  '/comment',
  async (payload) => {
    let headers = new Headers({
      'Content-Type': 'application/json',
    });

    const accessToken = localStorage.getItem('ACCESS_TOKEN');
    if (accessToken && accessToken != null) {
      headers.append('Authorization', 'Bearer ' + accessToken);
    }

    const response = await fetch(`${process.env.REACT_APP_API_BASE}/comment`, {
      method: 'POST',
      headers: headers,
      body: JSON.stringify({
        comment: payload.comment,
        boardId: payload.boardId,
      }),
    });

    if (response.ok) {
      const comment = await response.json();

      return await { comment };
    }
  },
);
