import { Container, Grid, Typography } from '@mui/material';
import React from 'react';
import { SButton, SInput } from './styles';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { signInAsync } from '../../app/slices/signInSlice';

const LoginPage = () => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const dispatch = useDispatch();

  const onSubmit = (e) => {
    e.preventDefault();
    dispatch(
      signInAsync({
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
          로그인
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
              id="email"
              placeholder="이메일"
              name="email"
              autoComplete="email"
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
          <SButton type="submit">로그인</SButton>
        </Grid>
        <Link
          to="/signup"
          style={{
            fontSize: '15px',
            textDecoration: 'none',
            textAlign: 'right',
          }}
        >
          <Grid item>계정이 없습니까? 여기서 가입 하세요.</Grid>
        </Link>
      </form>
    </Container>
  );
};

export default LoginPage;
