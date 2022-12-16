import { useSelector } from 'react-redux';
import { selectIsLoggedIn, selectUser } from 'redux/auth';
import RegisterForm from '../components/RegisterForm';

const Register = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const user = useSelector(selectUser);

  console.log(isLoggedIn);
  console.log(user);
  return (
    <>
      <RegisterForm />
      {isLoggedIn && <h3>Succesfully registred!</h3>}
    </>
  );
};

export default Register;
