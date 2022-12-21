import { NavLink } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { selectUser } from 'redux/auth/selectors';
import { logOut } from 'redux/auth/operations';

export const UserMenu = () => {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  const onLogOut = () => dispatch(logOut());

  return (
    <>
      <NavLink className="nav-link" to="contacts">
        Contacts
      </NavLink>
      <div className="login">
        <p className="login__user">
          Welcome,<span>{user.name}</span>
        </p>

        <button type="button" className="login__button" onClick={onLogOut}>
          Logout
        </button>
      </div>
    </>
  );
};
