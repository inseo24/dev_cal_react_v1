import { Container, Grid, Typography } from '@mui/material';
import React, { useState } from 'react';
import { SButton, SInput } from './styles';
import { signUpAsync } from '../../app/slices/singUpSlice';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
// import { useHistory } from 'react-router';

const SignUpPage = () => {
  const [name, setName] = useState('');

  const [email, setEmail] = useState('');
  // const [emailCheck, setEmailCheck] = useState(false);
  // const [checkError, setCheckError] = useState('');

  const [password, setPassword] = useState('');
  // const [passwordConfirm, setPasswordConfirm] = useState('');

  const [mobileNum, setMobileNum] = useState('');
  const dispatch = useDispatch();

  const onSubmit = (e) => {
    e.preventDefault();
    dispatch(
      signUpAsync({
        name: name,
        email: email,
        password: password,
        mobileNum: mobileNum,
      }),
    );
  };

  // const history = useHistory();

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
              value={name}
              onChange={(e) => setName(e.target.value)}
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
          <Grid item xs={12}>
            <SInput
              variant="outlined"
              required
              fullWidth
              color="secondary"
              id="passwordConfirm"
              placeholder="패스워드 확인"
              name="passwordConfirm"
              type="password"
              style={{ background: 'white' }}
            />
          </Grid>
          <Grid item xs={12}>
            <SInput
              variant="outlined"
              required
              fullWidth
              color="secondary"
              id="mobile"
              placeholder="휴대폰번호"
              name="mobile"
              value={mobileNum}
              onChange={(e) => setMobileNum(e.target.value)}
              style={{ background: 'white' }}
            />
          </Grid>
        </Grid>
        <Grid item xs={12}>
          <SButton type="submit">가입</SButton>
        </Grid>
        <Link
          to="/login"
          style={{
            fontSize: '15px',
            textDecoration: 'none',
            textAlign: 'right',
          }}
        >
          <Grid item>이미 계정이 있습니까? 로그인 하세요.</Grid>
        </Link>
      </form>
    </Container>
  );
};

export default SignUpPage;
