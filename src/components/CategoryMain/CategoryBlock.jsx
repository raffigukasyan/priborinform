import styles from "./CategoryMain.module.scss";

export default function CategoryBlock({img, title}) {
    return (
        <div className={styles.categoryBlock}>
            <h1>{title}</h1>
            <img src={img}/>
        </div>
    )
}