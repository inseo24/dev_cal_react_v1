import { Container, Grid, Typography } from '@mui/material';
import React from 'react';
import { SButton, SInput } from './styles';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { myPageAsync } from '../../app/slices/mypageSlice';

const MyPage = () => {
  const [email, setEmail] = useState(localStorage.getItem('user'));
  const [password, setPassword] = useState();
  const dispatch = useDispatch();

  const onSubmit = (e) => {
    e.preventDefault();
    dispatch(
      myPageAsync({
        email: email,
        password: password,
      }),
    );
  };

  return (
    <Container component="main" maxWidth="xs" style={{ marginTop: '13%' }}>
      <Grid item xs={12}>
        <Typography
          component="h1"
          variant="h5"
          style={{ marginBottom: '4%', fontWeight: '600' }}
        >
          비밀번호 확인
        </Typography>
      </Grid>
      <form onSubmit={onSubmit}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <SInput
              variant="outlined"
              required
              fullWidth
              color="secondary"
              id="password"
              placeholder="패스워드"
              name="password"
              type="password"
              autoComplete="current-password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              style={{ background: 'white' }}
            />
          </Grid>
        </Grid>
        <Grid item xs={12}>
          <SButton type="submit">확인</SButton>
        </Grid>
      </form>
    </Container>
  );
};

export default MyPage;
