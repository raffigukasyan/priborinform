import Admin from './Pages/Admin';
import Auth from './Pages/Auth';
import Basket from './Pages/Basket';
import Catalog from './Pages/Catalog';
import Device from './Pages/Device';
import DevicePage from './Pages/DevicePage';
import Home from './Pages/Home';
import TableData from './components/TableData/TableData';

export const authRoutes = [
  {
    path: '/basket',
    Component: Basket,
  },

  {
    path: '/admin',
    Component: Admin,
  },

  {
    path: '/admin/category',
    Component: TableData,
  },

  {
    path: '/admin/products',
    Component: TableData,
  },

  {
    path: '/admin/users',
    Component: TableData,
  },

  {
    path: '/admin/orders',
    Component: TableData,
  },
];

export const publicRoutes = [
  {
    path: '/',
    Component: Home,
  },

  {
    path: '/login',
    Component: Auth,
  },

  {
    path: '/registration',
    Component: Auth,
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
