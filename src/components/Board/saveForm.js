import { Container, Grid, Typography } from '@mui/material';
import axios from 'axios';

import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { boardId, boardPostAsync } from '../../app/slices/boardSlice';
import { SButton, SInput } from './styles';

const BoardSaveForm = () => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [img, setImage] = useState(null);

  const dispatch = useDispatch();

  const onSubmit = async (e) => {
    e.preventDefault();
    dispatch(
      boardPostAsync({
        title: title,
        content: content,
      }),
    );
    if (img !== null) {
      const formData = new FormData();
      formData.append('file', img);

      let headers = new Headers({ 'Content-Type': 'multipart/form-data' });

      const accessToken = localStorage.getItem('ACCESS_TOKEN');
      headers.append('Authorization', 'Bearer ' + accessToken);
      await formData.append('boardId', boardId);

      const res = await axios.post(
        `${process.env.REACT_APP_API_BASE}/file/image`,
        formData,
        {
          headers: headers,
        },
      );
    }
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
              <SInput
                variant="outlined"
                required
                fullWidth
                color="secondary"
                id="title"
                placeholder="제목을 입력하세요"
                name="title"
                value={title}
                type="text"
                maxLength="25"
                onChange={(e) => setTitle(e.target.value)}
                style={{ background: 'white', width: '420px' }}
              />
            </Grid>
            <Grid item xs={12}>
              <Typography component="h3" variant="h7">
                내용
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <SInput
                variant="outlined"
                required
                fullWidth
                color="secondary"
                id="content"
                placeholder="내용을 입력하세요."
                name="content"
                type="text"
                value={content}
                onChange={(e) => setContent(e.target.value)}
                style={{
                  background: 'white',
                  width: '420px',
                  height: '200px',
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

export default BoardSaveForm;
