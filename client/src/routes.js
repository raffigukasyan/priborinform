import Admin from './Pages/Admin';
import Basket from './Pages/Basket';
import Catalog from './Pages/Catalog';
import Device from './Pages/Device';
import DevicePage from './Pages/DevicePage';
import Home from './Pages/Home';

export const authRoutes = [
  {
    path: '/admin',
    Component: Admin,
  },
  {
    path: '/basket',
    Component: Basket,
  },
];

export const publicRoutes = [
  {
    path: '/',
    Component: Home,
  },
  {
    path: '/catalog',
    Component: Catalog,
  },
  {
    path: '/catalog/:title',
    Component: Device,
  },
  {
    path: '/catalog/:title/:subTitle',
    Component: Device,
  },
  {
    path: '/catalog/:title/:subTitle/:id',
    Component: DevicePage,
  },
];
