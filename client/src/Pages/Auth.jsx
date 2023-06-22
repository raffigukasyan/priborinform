import { Link, useLocation } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

export default function Auth() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm({
    mode: 'onBlur',
    // resolver: yupResolver(schema),
  });

  const location = useLocation();
  const isLogin = location.pathname === '/login';

  const onSubmit = (data) => console.log(data);

  // const schema = yup.object().shape({
  //   firstName: yup
  //     .string()
  //     .match(/^([^0-9]*)$/, 'First name should not conatin numbers ')
  //     .required('First name is a required field'),
  // });

  return (
    <div className="AuthWrapper">
      <div className="authForm">
        <h2>{isLogin ? 'Войти в аккаунт' : 'Зарегистрироватся'}</h2>
        <form onSubmit={handleSubmit(onSubmit)}>
          {/* <div>
            <label htmlFor="firstName">Имя</label>
            <input
              id="firstName"
              {...register('firstName', {
                required: 'required',
                pattern: {
                  value: /\S+@\S+\.\S+/,
                  message: 'Entered value does not match email format',
                },
              })}
            />
          </div> */}
          <div>
            <label htmlFor="email">Email</label>
            <input id="email" type="email" />
            {errors.email && <span role="alert">{errors.email.message}</span>}
          </div>
          <div>
            <label htmlFor="password">Пароль</label>
            <input
              id="password"
              {...register('password', {
                required: 'required',
                minLength: {
                  value: 5,
                  message: 'min length is 5',
                },
              })}
              type="password"
            />
            {errors.password && <span role="alert">{errors.password.message}</span>}
          </div>
          <button type="submit">Войти</button>
          <p>
            У вас ещё нет аккаунта? <Link to={'/registration'}>зарегистрироваться</Link>
          </p>
        </form>
      </div>
    </div>
  );
}
