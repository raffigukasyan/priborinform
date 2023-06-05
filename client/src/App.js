import Footer from './components/Footer';
import Header from './components/Header';
import Home from './Pages/Home';
import './scss/app.scss';
import AppContext from './context';
import { BrowserRouter } from 'react-router-dom';
import AppRouter from './components/AppRouter';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <AppRouter />
      <Footer />
    </BrowserRouter>
  );
}

export default App;
