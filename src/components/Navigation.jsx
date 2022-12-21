import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectIsLoggedIn } from 'redux/auth/selectors';

import { AuthNav } from './AuthNav';
import { UserMenu } from './UserMenu';

export const Navigation = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);

  return (
    <>
      <NavLink className="nav-link" to="/">
        Phonebook
      </NavLink>
      {isLoggedIn ? <UserMenu /> : <AuthNav />}
    </>
  );
};
