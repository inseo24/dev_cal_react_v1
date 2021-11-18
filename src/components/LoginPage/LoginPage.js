import { Container, Grid, Typography } from '@mui/material';
import React from 'react';
import { SButton, SInput } from './styles';
import { Link } from 'react-router-dom';

const LoginPage = () => {
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
            style={{ background: 'white' }}
          />
        </Grid>
      </Grid>
      <Grid item xs={12}>
        <SButton>로그인</SButton>
        <Link to="/signup">
          <SButton>회원가입</SButton>
        </Link>
      </Grid>
    </Container>
  );
};

export default LoginPage;
