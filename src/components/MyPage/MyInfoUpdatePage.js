import { Grid } from '@mui/material';
import { Link } from 'react-router-dom';

import UpdateForm from './UpdateForm';

const MyInfoUpdatePage = () => {
  return (
    <>
      <UpdateForm />
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
    </>
  );
};

export default MyInfoUpdatePage;
