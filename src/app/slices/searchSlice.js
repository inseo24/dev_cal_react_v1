import { createAsyncThunk } from '@reduxjs/toolkit';

export const eventSearchAsync = createAsyncThunk('/event', async (payload) => {
  let headers = new Headers({
    'Content-Type': 'application/json',
  });

  const response = await fetch(
    `${process.env.REACT_APP_API_BASE}/event/` + payload.event,
    {
      method: 'GET',
      headers: headers,
    },
  );

  if (response.ok) {
    const event = await response.json();

    return await { event };
  }
});
