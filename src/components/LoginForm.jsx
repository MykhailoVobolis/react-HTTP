// Login form
import { useId } from "react";

export default function LoginForm({ onLogin }) {
  const handleSubmit = (evt) => {
    evt.preventDefault();

    const form = evt.target;
    const { login, password } = form.elements;

    // Викликаємо пропс onLogin
    onLogin({
      login: login.value,
      password: password.value,
    });

    form.reset();
  };

  const loginId = useId();
  const passwordId = useId();

  return (
    <>
      <h2>Login Form</h2>
      <h3>Please login to your account!</h3>
      <form onSubmit={handleSubmit}>
        <label htmlFor={loginId}>Login</label>
        <input type="text" name="login" />
        <label htmlFor={passwordId}>Password</label>
        <input type="password" name="password" />
        <button type="submit">Log in</button>
      </form>
    </>
  );
}
