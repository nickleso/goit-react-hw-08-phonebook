import { NavLink, Outlet } from 'react-router-dom';

const Layout = () => {
  return (
    <>
      <header
        style={{
          display: 'flex',
          justifyContent: 'space-around',
        }}
      >
        <NavLink to="/">Phonebook</NavLink>
        <NavLink to="register">Register</NavLink>
        <NavLink to="login">Log in</NavLink>
      </header>

      <Outlet />
    </>
  );
};

export default Layout;
