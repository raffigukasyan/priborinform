import Footer from './components/Footer';
import Header from './components/Header';
import './scss/app.scss';
import { BrowserRouter } from 'react-router-dom';
import AppRouter from './components/AppRouter';
import { useState, useEffect } from 'react';
import AppContext from './context';
import axios from 'axios';

function App() {
  const [catalog, setCatalog] = useState([]);

  useEffect(() => {
    axios.get(`http://localhost:5000/catalog`).then((resp) => setCatalog(resp.data));
  }, []);
  return (
    <AppContext.Provider value={{ catalog }}>
      <BrowserRouter>
        <Header />
        <AppRouter />
        <Footer />
      </BrowserRouter>
    </AppContext.Provider>
  );
}

export default App;
