import { Link } from 'react-router-dom';
export default function AdminHeader() {
  return (
    <div className="navPanel">
      <Link to="/admin/category">
        <div>Категория</div>
      </Link>
      <Link to="/admin/products">
        <div>Приборы</div>
      </Link>
      <Link to="/admin/users">
        <div>Пользователи</div>
      </Link>
      <Link to="/admin/orders">
        <div>Заказы</div>
      </Link>
    </div>
  );
}
