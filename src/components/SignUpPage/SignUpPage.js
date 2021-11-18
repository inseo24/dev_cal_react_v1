import { Container, Grid, Typography } from '@mui/material';
import React from 'react';
import { SButton, SInput } from './styles';

const SignUpPage = () => {
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
        <SButton>가입</SButton>
      </Grid>
    </Container>
  );
};

export default SignUpPage;
