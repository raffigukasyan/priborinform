import AdminHeader from '../components/AdminHeader';
export default function Admin() {
  return (
    <div className="panel">
      <AdminHeader />
      <div className="panelControl">
        <div className="panelBlock">
          <div>
            <img src="/catControl.svg" />
          </div>
          <h2>Управления категорями</h2>
        </div>
        <div className="panelBlock">
          <div>
            <img src="/userControl.svg" />
          </div>
          <h2>Управления пользователями</h2>
        </div>
        <div className="panelBlock">
          <div>
            <img src="/prodControl.svg" />
          </div>
          <h2>Управления продуктами</h2>
        </div>
        <div className="panelBlock">
          <div>
            <img src="/ordersControl.svg" />
          </div>
          <h2>Управления заказамы</h2>
        </div>
      </div>
    </div>
  );
}
