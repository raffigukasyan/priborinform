import './scss/app.scss';
import { BrowserRouter } from 'react-router-dom';
import AppRouter from './components/AppRouter';
import { useState, useEffect } from 'react';
import AppContext from './context';
import axios from 'axios';
import { check } from './http/UserApi';

function App() {
  const [catalog, setCatalog] = useState([]);
  const [device, setDevice] = useState([]);
  const [user, setUser] = useState({});
  const [isAuth, setIsAuth] = useState(false);
  const [basket, setBasket] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    check()
      .then((data) => {
        setUser(data);
        setIsAuth(true);
        if (!localStorage.getItem('basket')) {
          localStorage.setItem('basket', JSON.stringify(basket));
        }
      })
      .finally(() => setLoading(false));
    axios.get(`http://localhost:5000/catalog`).then((resp) => setCatalog(resp.data));
  }, []);

  if (loading) {
    return <div>Загрузка</div>;
  }
  return (
    <AppContext.Provider
      value={{ basket, setBasket, catalog, device, setDevice, user, setUser, isAuth, setIsAuth }}>
      <BrowserRouter>
        <AppRouter />
      </BrowserRouter>
    </AppContext.Provider>
  );
}

export default App;
