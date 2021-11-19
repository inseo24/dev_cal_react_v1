import { createAsyncThunk } from '@reduxjs/toolkit';
// import { createSlice } from '@reduxjs/toolkit';

export const signUpAsync = createAsyncThunk('/auth/signup', async (payload) => {
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

  if (response.status === 400) {
    alert('이미 사용중인 이메일입니다. 다시 설정해주세요.');
  }

  if (response.ok) {
    const signUp = await response.json();
    alert('회원가입에 성공하셨습니다.');
    window.location.href = '/';
    return { signUp };
  }
});

// const signUpSlice = createSlice({
//   name: 'signUp',
//   initialState: {
//     status: null,
//   },
//   extraReducers: {
//     [signUp.pending]: (state, action) => {
//       state.status = 'loading';
//     },
//     [signUp.fulfilled]: (state, action) => {
//       state.push(action.payload.signUp);
//     },
//     [signUp.rejected]: (state, action) => {
//       state.status = 'failed';
//     },
//   },
// });

// export default signUpSlice.reducer;
