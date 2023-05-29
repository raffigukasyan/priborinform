export default function Footer() {
    return (
        <footer className="footer">
            <div className="container">
                <div className="footerWrapper">
                    <div className="footerLogo">
                        <img src="/img/headerLogo.svg"/>
                    </div>
                    <div className="footerBuyers">
                        <h3>Покупателям</h3>
                        <div>
                            <a href="/">О Нас</a>
                            <a href="/">Доставка</a>
                            <a href="/">Оплата</a>
                            <a href="/">Сертификаты</a>
                        </div>
                    </div>
                    <div className="footerWithUs">
                        <h3>Связаться с нами</h3>
                        <div className="footerItems">
                            <div>
                                <img src="/img/phone.svg" />
                                <a href="">(863) 295-57-44</a>
                            </div>
                            <div>
                                <img src="/img/phone.svg" />
                                <a href="">(863) 295-57-44</a>
                            </div>
                            <div>
                                <img src="/img/phone.svg" />
                                <a href="">(863) 295-57-44</a>
                            </div>
                            <div>
                                <img src="/img/phone.svg" />
                                <a href="">(863) 295-57-44</a>
                            </div>
                            
                        </div>
                    </div>
                    <div className="footerNavigation">
                        <h3>Навигация</h3>
                        <div>
                            <a href="">Каталог</a>
                            <a href="">Прайс</a>
                            <a href="">Сервис</a>
                        </div>
                    </div>
                </div>

            </div>
        </footer>
    )
}