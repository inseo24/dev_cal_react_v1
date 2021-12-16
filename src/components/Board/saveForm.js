import { Container, Grid, TextField, Typography } from '@mui/material';
import axios from 'axios';
import { useRef } from 'react';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { SButton, SInput } from './styles';

const BoardSaveForm = () => {
  let state = useSelector((state) => state.ui.menuOpen);

  const inputTitleRef = useRef();
  const inputContentRef = useRef();

  const [board, setBoard] = useState({
    title: '',
    content: '',
  });

  const [img, setImage] = useState(null);

  const onSubmit = async (e) => {
    e.preventDefault();

    if (img !== null) {
      const formData = new FormData();
      formData.append('file', img);

      let data = {
        title: inputTitleRef.current.value,
        content: inputContentRef.current.value,
      };

      formData.append(
        'data',
        new Blob([JSON.stringify(data)], { type: 'application/json' }),
      );

      const accessToken = localStorage.getItem('ACCESS_TOKEN');

      const res = await axios.post(
        `${process.env.REACT_APP_API_BASE}/board/image`,
        formData,
        {
          headers: {
            'Content-Type': 'multipart/form-data',
            Authorization: 'Bearer ' + accessToken,
          },
        },
      );
      if (res.status === 200) {
        alert('저장되었습니다.');
        window.location.href = '/board';
        return;
      }
    } else {
      const formData = new FormData();

      let data = {
        title: inputTitleRef.current.value,
        content: inputContentRef.current.value,
      };
      formData.append(
        'data',
        new Blob([JSON.stringify(data)], { type: 'application/json' }),
      );

      const accessToken = localStorage.getItem('ACCESS_TOKEN');

      const res = await axios.post(
        `${process.env.REACT_APP_API_BASE}/board`,
        formData,
        {
          headers: {
            'Content-Type': 'multipart/form-data',
            Authorization: 'Bearer ' + accessToken,
          },
        },
      );

      if (res.status === 200) {
        alert('저장되었습니다.');
        window.location.href = '/board';
        return;
      }
    }
  };

  const onChangeValue = (e) => {
    e.preventDefault();
    setBoard({
      ...board,
      [e.target.name]: e.target.value,
    });
  };

  const onChange = (e) => {
    e.preventDefault();
    setImage(e.target.files[0]);
  };

  return (
    <>
      {!state && (
        <Container component="main" maxWidth="xs" style={{ marginTop: '5%' }}>
          <Grid item xs={12}>
            <Typography
              component="h1"
              variant="h5"
              style={{ marginBottom: '4%', fontWeight: '600' }}
            >
              글 작성하기
            </Typography>
          </Grid>
          <form onSubmit={onSubmit}>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <Typography component="h3" variant="h7">
                  제목
                </Typography>
              </Grid>
              <Grid item xs={12}>
                <TextField
                  variant="outlined"
                  required
                  fullWidth
                  color="secondary"
                  id="title"
                  placeholder="제목을 입력하세요.(50자 이내)"
                  name="title"
                  inputRef={inputTitleRef}
                  value={board.title}
                  onChange={onChangeValue}
                  type="text"
                  maxLength="50"
                  style={{ background: 'white' }}
                />
              </Grid>
              <Grid item xs={12}>
                <Typography component="h3" variant="h7">
                  내용
                </Typography>
              </Grid>
              <Grid item xs={12}>
                <TextField
                  variant="outlined"
                  required
                  fullWidth
                  color="secondary"
                  id="content"
                  value={board.content}
                  placeholder="내용을 입력하세요."
                  name="content"
                  type="text"
                  inputRef={inputContentRef}
                  onChange={onChangeValue}
                  multiline
                  rows={10}
                  style={{
                    background: 'white',
                  }}
                />
              </Grid>
            </Grid>
            <Grid item xs={12}>
              <br />
              <input
                type="file"
                accept="image/jpeg, image/jpg"
                name="file"
                onChange={onChange}
              ></input>
            </Grid>
            <Grid item xs={12}>
              <br />
              <SButton type="submit">저장</SButton>
            </Grid>
            <Link
              to="/board"
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
      )}
    </>
  );
};

export default BoardSaveForm;
