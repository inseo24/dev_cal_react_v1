import { Container, Grid, Typography } from '@mui/material';
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { updateAsync } from '../../app/slices/updateSlice';
import { SButton, SInput, SPtag } from './styles';

const UpdateForm = () => {
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();

  const onSubmit = (e) => {
    e.preventDefault();
    dispatch(
      updateAsync({
        password: password,
      }),
    );
  };

  return (
    <>
      <Container component="main" maxWidth="xs" style={{ marginTop: '13%' }}>
        <Grid item xs={12}>
          <Typography
            component="h1"
            variant="h5"
            style={{ marginBottom: '4%', fontWeight: '600' }}
          >
            비밀번호 수정
          </Typography>
        </Grid>
        <form onSubmit={onSubmit}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <SPtag>아이디 : {localStorage.getItem('user')}</SPtag>
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
          </Grid>
          <Grid item xs={12}>
            <SButton type="submit">수정</SButton>
          </Grid>
          <Link
            to="/mypage"
            style={{
              fontSize: '15px',
              textDecoration: 'none',
              textAlign: 'right',
            }}
          >
            <Grid item>뒤로 가기</Grid>
          </Link>
        </form>
      </Container>
    </>
  );
};

export default UpdateForm;
