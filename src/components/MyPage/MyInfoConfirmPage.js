import { Grid } from '@mui/material';
import { Link } from 'react-router-dom';
import ConfirmForm from './ConfirmForm';

const MyInfoConfirmPage = () => {
  return (
    <>
      <ConfirmForm />
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

export default MyInfoConfirmPage;
