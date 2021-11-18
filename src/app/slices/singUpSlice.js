import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const signUp = createAsyncThunk('/auth/signup', async (payload) => {
  const response = await fetch('http://localhost:8080/auth/signup', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      username: payload.username,
      email: payload.email,
      password: payload.password,
    }),
  });
  if (response.ok) {
    const signUp = await response.json();
    return { signUp };
  }
});

const signUpSlice = createSlice({
  name: 'signUp',
  initialState: {
    status: null,
  },
  extraReducers: {
    [signUp.pending]: (state, action) => {
      state.status = 'loading';
    },
    [signUp.fulfilled]: (state, action) => {
      state.push(action.payload.signUp);
    },
    [signUp.rejected]: (state, action) => {
      state.status = 'failed';
    },
  },
});

export default signUpSlice.reducer;
