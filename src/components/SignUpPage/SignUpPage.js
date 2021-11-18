import { Container, Grid, Typography } from '@mui/material';
import React, { useState } from 'react';
import { SButton, SInput } from './styles';
import { signUp } from '../../app/slices/singUpSlice';
import { useDispatch } from 'react-redux';

const SignUpPage = () => {
  const [username, setUsername] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const dispatch = useDispatch();

  const onSubmit = (e) => {
    e.preventDefault();
    dispatch(
      signUp({
        username: username,
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
          회원가입
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
              id="username"
              placeholder="이름"
              name="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              style={{ background: 'white' }}
            />
          </Grid>
          <Grid item xs={12}>
            <SInput
              variant="outlined"
              required
              fullWidth
              color="secondary"
              id="email"
              placeholder="이메일"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              style={{ background: 'white' }}
            />
          </Grid>
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
          <SButton type="submit">가입</SButton>
        </Grid>
      </form>
    </Container>
  );
};

export default SignUpPage;
