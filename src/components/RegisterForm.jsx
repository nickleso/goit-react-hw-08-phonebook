import { useDispatch } from 'react-redux';
import { register } from 'redux/auth';
import css from './App.module.css';

const RegisterForm = () => {
  const dispatch = useDispatch();

  function onFormSubmit(event) {
    event.preventDefault();
    const form = event.target;
    const name = form.elements.name.value;
    const email = form.elements.email.value;
    const password = form.elements.password.value;

    dispatch(
      register({
        name,
        email,
        password,
      })
    );
    form.reset();
  }

  return (
    <div>
      <h2>Registration</h2>
      <form onSubmit={onFormSubmit}>
        <label className={css.form__label}>
          Username
          <input
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
          />
        </label>
        <label className={css.form__label}>
          Email
          <input type="email" name="email" required />
        </label>
        <label className={css.form__label}>
          Password
          <input type="password" name="password" required />
        </label>
        <button className={css.form__button} type="submit">
          Register
        </button>
      </form>
    </div>
  );
};

export default RegisterForm;
