import { useDispatch } from 'react-redux';
import { logIn } from 'redux/auth';
import css from './App.module.css';

const LoginForm = () => {
  const dispatch = useDispatch();

  function onFormSubmit(event) {
    event.preventDefault();
    const form = event.target;
    const email = form.elements.email.value;
    const password = form.elements.password.value;

    dispatch(
      logIn({
        email,
        password,
      })
    );
    console.log('login');
    form.reset();
  }

  return (
    <div>
      <h2>Log in</h2>
      <form onSubmit={onFormSubmit}>
        <label className={css.form__label}>
          Email
          <input type="email" name="email" required />
        </label>
        <label className={css.form__label}>
          Password
          <input type="password" name="password" required />
        </label>
        <button className={css.form__button} type="submit">
          Log in
        </button>
      </form>
    </div>
  );
};

export default LoginForm;
