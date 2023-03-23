import CategoryBlock from "./CategoryBlock";

import styles from "./CategoryMain.module.scss";

export default function CategoryMain() {
    return (
        <section className={styles.categoryMain}>
            <div className="container">
                <div className={styles.categoryContainer}>
                    <CategoryBlock img="/img/sterilizator.png" title="Лабораторное оборудование общего назначения" />
                    <CategoryBlock img="/img/product.png" title="Лабораторное оборудование общего назначения" />
                    <CategoryBlock img="/img/product.png" title="Лабораторное оборудование общего назначения" />
                    <CategoryBlock img="/img/product.png" title="Лабораторное оборудование общего назначения" />
                </div>
            </div>
        </section>
    )
}