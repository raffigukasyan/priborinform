import { useContext, useState } from 'react';
import ModalCatalog from './ModalCatalog/ModalCatalog';
import Dropdown from 'rsuite/Dropdown';
import { Link } from 'react-router-dom';
import AppContext from '../context';
export default function Header() {
  const [modalCatalog, setModalCatalog] = useState(false);
  const { user, isAuth, setUser, setIsAuth } = useContext(AppContext);

  const logOut = () => {
    localStorage.removeItem('token');
    setUser({});
    setIsAuth(false);
  };

  console.log(user);
  return (
    <header className="header">
      <div className="headerTop">
        <div className="container">
          <div className="headerTopWrapper">
            <a href="/" className="headerTopLink">
              Ростов-на-Дону
            </a>
            <nav className="headerTopNav">
              <a href="/" className="headerTopLink">
                Сертификаты
              </a>
              <a href="/" className="headerTopLink">
                Условия доставки и оплаты
              </a>
              <a href="/" className="headerTopLink">
                Контакты
              </a>
              <a href="/" className="headerTopLink">
                Прайс
              </a>
              <a href="/" className="headerTopLink">
                Сервис
              </a>
            </nav>
            <a href="/" className="headerTopLink headerTopLinkWp">
              8(961)300 69 00
            </a>
          </div>
        </div>
      </div>
      <div className="headerButtom">
        <div className="container">
          <div className="headerButtomWrapper">
            <a href="/">
              <img src="/img/headerLogo.svg" alt="HeaderLogo" />
            </a>
            <div className="headerButtomCatalog" onClick={() => setModalCatalog(!modalCatalog)}>
              <div>
                <span className={modalCatalog ? 'active' : ''}></span>
                <span className={modalCatalog ? 'active' : ''}></span>
                <span className={modalCatalog ? 'active' : ''}></span>
              </div>
              <p>Каталог товаров</p>
            </div>
            <ul className="headerButtomConnection">
              <li>
                <a href="/">8(863) 283-08-00</a>
              </li>
              <li>
                <a href="/">8(863) 283-08-01</a>
              </li>
              <li>
                <a href="/">8(863) 283-08-02</a>
              </li>
            </ul>
            <div className="headerButtomSearch">
              <input type="text" placeholder="Поиск по названию" />
            </div>
            <div className="headerButtomUserBasket">
              {isAuth ? (
                <Dropdown
                  className="headerButtomUser"
                  title={user?.name?.slice(0, 2)}
                  trigger="hover"
                  noCaret>
                  <Dropdown.Item>Мои заказы</Dropdown.Item>
                  {user.roles === 'ADMIN' ? (
                    <Link to="/admin">
                      <Dropdown.Item>Админ-панель</Dropdown.Item>
                    </Link>
                  ) : (
                    ''
                  )}
                  <Dropdown.Item onClick={logOut}>Выход</Dropdown.Item>
                </Dropdown>
              ) : (
                <div className="headerButtomLogin">
                  <Link to="/login">
                    <svg
                      width="30"
                      height="30"
                      viewBox="0 0 25 25"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg">
                      <path
                        d="M20.5494 21.299C20.0746 19.9701 19.0284 18.7958 17.573 17.9582C16.1176 17.1206 14.3344 16.6667 12.5 16.6667C10.6655 16.6667 8.88235 17.1206 7.42698 17.9582C5.97161 18.7958 4.9254 19.9701 4.45061 21.299"
                        stroke="#33363F"
                        strokeWidth="2"
                        strokeLinecap="round"
                      />
                      <circle
                        cx="12.5"
                        cy="8.33332"
                        r="4.16667"
                        stroke="#33363F"
                        strokeWidth="2"
                        strokeLinecap="round"
                      />
                    </svg>
                    <p>Личный кабинет</p>
                  </Link>
                </div>
              )}
              <Link to={isAuth ? '/basket' : '/registration'}>
                <div className="headerButtomBasket">
                  <div>0</div>
                  <svg
                    width="30"
                    height="30"
                    viewBox="0 0 30 30"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M2.5 3.75H5.625L8.125 21.25H21.25C22.6307 21.25 23.75 22.3693 23.75 23.75C23.75 25.1307 22.6307 26.25 21.25 26.25C19.8693 26.25 18.75 25.1307 18.75 23.75M11.25 6.25H26.2501L23.7501 13.75M22.5 17.5H7.58926M13.75 23.75C13.75 25.1307 12.6307 26.25 11.25 26.25C9.86929 26.25 8.75 25.1307 8.75 23.75C8.75 22.3693 9.86929 21.25 11.25 21.25C12.6307 21.25 13.75 22.3693 13.75 23.75Z"
                      stroke="#33363F"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  <p>Корзина</p>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <ModalCatalog open={modalCatalog} />
    </header>
  );
}
