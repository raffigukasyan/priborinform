import styles from './ModalCatalog.module.scss';
import AppContext from '../../context';
import { useContext } from 'react';
import { NavLink } from 'react-router-dom';

export default function ModalCatalog({ open }) {
  const { catalog } = useContext(AppContext);
  return (
    <div className={styles.modal}>
      <div className={`${styles.modalWrapper} ${open && styles.active}`}>
        <div className="container">
          <div className={`${styles.modalContent} ${open ? styles.active : ''}`}>
            {catalog.map((cat) => {
              return (
                <div>
                  <h4>{cat.title}</h4>
                  {cat.subCat.length ? (
                    <div>
                      {cat.subCat.map((subcat) => (
                        <a href="#">{subcat.title}</a>
                      ))}
                    </div>
                  ) : (
                    ''
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
