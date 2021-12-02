import { createAsyncThunk } from '@reduxjs/toolkit';

export const scrapAsync = createAsyncThunk('/scrap', async (payload) => {
  let headers = new Headers({
    'Content-Type': 'application/json',
  });

  const accessToken = localStorage.getItem('ACCESS_TOKEN');
  if (accessToken && accessToken != null) {
    headers.append('Authorization', 'Bearer ' + accessToken);
  }

  const response = await fetch(
    `${process.env.REACT_APP_API_BASE}/scrap/` +
      this.state.event._def.extendedProps.eventId,
    {
      method: 'POST',
      headers: headers,
    },
  );

  if (response.ok) {
    const scrap = await response.json();

    return { scrap };
  }
});
