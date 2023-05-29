import styles from './ModalCatalog.module.scss';
export default function ModalCatalog({ open }) {
  return (
    <div className={styles.modal}>
      <div className={`${styles.modalWrapper} ${open && styles.active}`}>
        <div className="container">
          <div className={`${styles.modalContent} ${open ? styles.active : ''}`}>
            <div>
              <h4>Товары нашего производства</h4>
            </div>
            <div>
              <h4>Оборудование для лабораторий зерноперерабатывающих производств</h4>
              <div>
                <a href="#">определение влажности зерна и продуктов его переработки</a>
                <a href="#">оборудование для определения качества зерна и муки</a>
                <a href="#">определение количества и качества клейковины</a>
                <a href="#">определение качества крупяных культур</a>
                <a href="#">отбор проб и определение примесей</a>
                <a href="#">определение качества крупяных культур</a>
              </div>
            </div>
            <div>
              <h4>Оборудование для хлебопекарного производства</h4>
            </div>
            <div>
              <h4>Оборудование для молочного производства</h4>
            </div>
            <div>
              <h4>Оборудование для пивоваренного производства</h4>
            </div>
            <div>
              <h4></h4>
            </div>
            <div>
              <h4></h4>
            </div>
            <div>
              <h4></h4>
            </div>
            <div>
              <h4></h4>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
