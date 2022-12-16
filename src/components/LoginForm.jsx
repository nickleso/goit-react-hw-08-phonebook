import css from './App.module.css';

const LoginForm = () => {
  return (
    <div>
      <h2>Log in</h2>
      <form>
        <label className={css.form__label}>
          Email
          <input type="email" name="email" />
        </label>
        <label className={css.form__label}>
          Password
          <input type="password" name="password" />
        </label>
        <button className={css.form__button} type="submit">
          Log in
        </button>
      </form>
    </div>
  );
};

export default LoginForm;
