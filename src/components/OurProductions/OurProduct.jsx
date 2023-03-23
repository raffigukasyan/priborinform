import styles from "./OurProductions.module.scss";

export default function OurProduct({img, title, price}) {
    return (
        <div className={styles.ourProduct}>
            <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M15 25L5.41425 15.0592C4.34865 13.9542 3.75 12.4554 3.75 10.8926C3.75 7.63819 6.29397 5 9.43211 5C10.9391 5 12.3844 5.62082 13.45 6.72589L15 8.33333L16.55 6.72589C17.6156 5.62082 19.0609 5 20.5679 5C23.706 5 26.25 7.63819 26.25 10.8926C26.25 12.4554 25.6514 13.9542 24.5857 15.0592L19.7929 20.0296" stroke="#33363F" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
            <img src={img}/>
            <p>{title}</p>
            <div className={styles.ourProductBottom}>
                <span>{price}</span>
                <button>В корзину</button>
            </div>
        </div>
    )
}