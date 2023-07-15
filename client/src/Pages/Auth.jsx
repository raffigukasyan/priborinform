import { useContext } from 'react';
import { Link, useHistory, useLocation } from 'react-router-dom';
import { useForm, Controller } from 'react-hook-form';
import InputMask from 'react-input-mask';
import AppContext from '../context';
import { login, registration } from '../http/UserApi';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function Auth() {
  const { user, setUser, isAuth, setIsAuth } = useContext(AppContext);
  const history = useHistory();
  const {
    register,
    formState: { errors },
    handleSubmit,
    control,
  } = useForm();

  const location = useLocation();
  const isLogin = location.pathname === '/login';

  const onSubmit = async (data) => {
    try {
      let userData;
      if (isLogin) {
        userData = await login(data.email, data.password);
      } else {
        userData = await registration(
          data.name,
          data.surName,
          data.phone,
          data.email,
          data.password,
        );
      }
      setUser(userData);
      setIsAuth(true);
      history.push('/');
    } catch (error) {
      toast.error(error.response.data.message, {
        position: 'bottom-left',
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: 'colored',
      });
    }
  };

  return (
    <div className="AuthWrapper">
      <ToastContainer
        position="bottom-left"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
      />
      <div className="authForm">
        <h2>{isLogin ? 'Войти в аккаунт' : 'Зарегистрироватся'}</h2>
        <form onSubmit={handleSubmit(onSubmit)}>
          {!isLogin ? (
            <>
              <div>
                <label htmlFor="name">Имя</label>
                <input
                  id="name"
                  {...register('name', {
                    required: 'Поле не должно быть пустым',
                    minLength: {
                      value: 3,
                      message: 'Имя должно состоять из 3 символов',
                    },
                    maxLength: {
                      value: 30,
                      message: 'Имя должно содержать не более 30 символов',
                    },
                    pattern: {
                      value: /^[A-zА-яЁё]+$/,
                      message: 'Имя не должно содержать цифры',
                    },
                  })}
                />
                <span>{errors.name?.message}</span>
              </div>
              <div>
                <label htmlFor="surName">Фамилия</label>
                <input
                  {...register('surName', {
                    required: 'Поле не должно быть пустым',
                    minLength: {
                      value: 3,
                      message: 'Фамилия должно состоять из 3 символов',
                    },
                    maxLength: {
                      value: 30,
                      message: 'Имя должно содержать не более 30 символов',
                    },
                    pattern: {
                      value: /^[A-zА-яЁё]+$/,
                      message: 'Фамилию не должно содержать цифры',
                    },
                  })}
                  id="surName"
                />
                <span>{errors.surName?.message}</span>
              </div>
              <div>
                <label htmlFor="surName">Номер телефона</label>
                <Controller
                  control={control}
                  name="phone"
                  render={({ field: { onChange, onBlur, ref } }) => (
                    <InputMask
                      placeholder="+7 999 999 99 99"
                      onChange={onChange}
                      onBlur={onBlur}
                      inputRef={ref}
                      mask="+7 999 999 99 99"
                    />
                  )}
                />
                <span>{errors.surName?.message}</span>
              </div>
            </>
          ) : (
            ''
          )}
          <div>
            <label htmlFor="email">Email</label>
            <input
              {...register('email', {
                required: 'Поле не должно быть пустым',
                pattern: {
                  value:
                    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                  message: 'Электронная почта должна быть действительной',
                },
              })}
              id="email"
              type="email"
            />
          </div>
          <span>{errors.email?.message}</span>
          <div>
            <label htmlFor="password">Пароль</label>
            <input
              {...register('password', {
                required: 'Поле не должно быть пустым',
                minLength: {
                  value: 3,
                  message: 'Пароль должно состоять из 3 символов',
                },
                maxLength: {
                  value: 20,
                  message: 'Пароль должно содержать не более 20 символов',
                },
              })}
              id="password"
              type="password"
            />
            <span>{errors.password?.message}</span>
          </div>
          <button type="submit">{isLogin ? 'Войти' : 'Зарегистрироваться'}</button>
          {isLogin ? (
            <p>
              У вас ещё нет аккаунта? <Link to={'/registration'}>зарегистрироваться</Link>
            </p>
          ) : (
            <p>
              У вас есть аккаунта? <Link to={'/login'}>войти</Link>
            </p>
          )}
        </form>
      </div>
    </div>
  );
}
