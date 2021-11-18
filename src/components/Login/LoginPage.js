import { Container, Grid, TextField, Typography } from '@mui/material';
import React from 'react';
import { SButton } from './styles';

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
          <TextField
            variant="outlined"
            required
            fullWidth
            color="secondary"
            id="email"
            label="이메일"
            name="email"
            autoComplete="email"
            style={{ background: 'white' }}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            variant="outlined"
            required
            fullWidth
            color="secondary"
            id="password"
            label="패스워드"
            name="password"
            type="password"
            autoComplete="current-password"
            style={{ background: 'white' }}
          />
        </Grid>
      </Grid>
      <Grid item xs={12}>
        <SButton>로그인</SButton>
      </Grid>
    </Container>
  );
};

export default LoginPage;
