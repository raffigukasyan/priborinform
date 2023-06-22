import styles from './ProductCat.module.scss';
export default function ProductCat({ title, img }) {
  return (
    <div className={styles.productCat}>
      <img src={`/${img}`} alt="" />
      <h1>{title}</h1>
      <button>В Корзину</button>
    </div>
  );
}
