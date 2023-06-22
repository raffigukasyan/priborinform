import './scss/app.scss';
import { BrowserRouter } from 'react-router-dom';
import AppRouter from './components/AppRouter';
import { useState, useEffect } from 'react';
import AppContext from './context';
import axios from 'axios';

function App() {
  const [catalog, setCatalog] = useState([]);
  const [device, setDevice] = useState([]);

  useEffect(() => {
    axios.get(`http://localhost:5000/catalog`).then((resp) => setCatalog(resp.data));
  }, []);
  return (
    <AppContext.Provider value={{ catalog, device, setDevice }}>
      <BrowserRouter>
        <AppRouter />
      </BrowserRouter>
    </AppContext.Provider>
  );
}

export default App;
