import { useDispatch } from 'react-redux';
import { logIn } from 'redux/auth/operations';
import { BiPencil } from 'react-icons/bi';

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
    form.reset();
  }

  return (
    <main>
      <section className="section">
        <div className="container registration">
          <h2 className="registration__title">Log in</h2>
          <form className="registration__form" onSubmit={onFormSubmit}>
            <label className="registration__label">
              Email
              <input
                className="registration__input"
                type="email"
                name="email"
                placeholder="Email"
                pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
                title="example: characters@characters.domain"
                required
              />
            </label>
            <label className="registration__label">
              Password
              <input
                className="registration__input"
                type="password"
                name="password"
                placeholder="Password"
                pattern="\w{7,16}"
                title="Password requires 8-16 characters"
                required
              />
            </label>
            <button className="registration__button" type="submit">
              Log in{' '}
              <BiPencil style={{ verticalAlign: '-3px', paddingLeft: '4px' }} />
            </button>
          </form>
        </div>
      </section>
    </main>
  );
};

export default LoginForm;
