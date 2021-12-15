import { Container, Grid, TextField, Typography } from '@mui/material';
import axios from 'axios';

import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { SButton } from './styles';

const BoardUpdateForm = () => {
  const inputTitleRef = useRef();
  const inputContentRef = useRef();
  const [img, setImage] = useState(null);

  const [board, setBoard] = useState({
    boardId: '',
    title: '',
    content: '',
    createdTime: '',
  });

  let headers = new Headers({
    'Content-Type': 'application/json',
  });

  const accessToken = localStorage.getItem('ACCESS_TOKEN');
  headers.append('Authorization', 'Bearer ' + accessToken);

  let boardId = window.location.pathname.split('/')[2];

  useEffect(() => {
    fetch(`${process.env.REACT_APP_API_BASE}/board/` + boardId, {
      method: 'GET',
      headers: headers,
    })
      .then((res) => res.json())
      .then((res) => {
        setBoard(res.data[0]);
        if (
          localStorage.getItem('user') === null ||
          localStorage.getItem('user') === ''
        ) {
          alert('로그인을 해주세요.');
        }
      });
  }, []);

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

      const res = await axios.put(
        `${process.env.REACT_APP_API_BASE}/board/` + boardId + '/image',
        formData,
        {
          headers: {
            'Content-Type': 'multipart/form-data',
            Authorization: 'Bearer ' + accessToken,
          },
        },
      );

      if (res.status === 200) {
        alert('수정되었습니다.');
        window.location.href = '/board/' + board.boardId;
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

      const res = await axios.put(
        `${process.env.REACT_APP_API_BASE}/board/` + boardId,
        formData,
        {
          headers: {
            'Content-Type': 'multipart/form-data',
            Authorization: 'Bearer ' + accessToken,
          },
        },
      );

      if (res.status === 200) {
        alert('수정되었습니다.');
        window.location.href = '/board/' + board.boardId;
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
      <Container component="main" maxWidth="xs" style={{ marginTop: '5%' }}>
        <Grid item xs={12}>
          <Typography
            component="h1"
            variant="h5"
            style={{ marginBottom: '4%', fontWeight: '600' }}
          >
            글 수정하기
          </Typography>
        </Grid>
        <form onSubmit={onSubmit}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <Typography component="h3" variant="h7">
                수정하기
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                color="secondary"
                id="title"
                placeholder="제목을 입력하세요"
                name="title"
                inputRef={inputTitleRef}
                value={board.title}
                type="text"
                maxLength="25"
                onChange={onChangeValue}
                style={{ background: 'white', width: '420px' }}
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
                style={{
                  background: 'white',
                }}
              />
            </Grid>
          </Grid>
          <Grid item xs={12}>
            <input
              type="file"
              accept="image/jpeg, image/jpg"
              name="file"
              onChange={onChange}
            ></input>
          </Grid>
          <Grid item xs={12}>
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
    </>
  );
};

export default BoardUpdateForm;
