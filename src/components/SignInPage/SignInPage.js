import SigninForm from './SigninForm';
import { SLink } from './styles';

const LoginPage = () => {
  return (
    <>
      <SigninForm />
      <br />

      <SLink
        to="/signup"
        style={{
          fontSize: '15px',
          textDecoration: 'none',
          textAlign: 'right',
        }}
      >
        계정이 없습니까? 여기서 가입 하세요.
      </SLink>
    </>
  );
};

export default LoginPage;
