import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectIsLoggedIn } from 'redux/auth';

import { AuthNav } from './AuthNav';
import { UserMenu } from './UserMenu';

export const Navigation = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);

  return (
    <>
      <NavLink to="/">Phonebook</NavLink>
      {isLoggedIn ? <UserMenu /> : <AuthNav />}
    </>
  );
};
