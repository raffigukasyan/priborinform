import OurProductions from '../components/OurProductions/OurProductions';
import { Link } from 'react-router-dom';
import Footer from '../components/Footer';
import Header from '../components/Header';
export default function Home() {
  return (
    <>
      <Header />
      <main>
        <section className="headerIntro">
          <div className="container">
            <div>
              <h1>Аналитические и лабораторные оборудования</h1>
              <Link to="/catalog">
                Каталог
                <svg
                  width="31"
                  height="16"
                  viewBox="0 0 31 16"
                  fill="#DDE3E9"
                  xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M30.7071 8.70711C31.0976 8.31658 31.0976 7.68342 30.7071 7.29289L24.3431 0.928932C23.9526 0.538408 23.3195 0.538408 22.9289 0.928932C22.5384 1.31946 22.5384 1.95262 22.9289 2.34315L28.5858 8L22.9289 13.6569C22.5384 14.0474 22.5384 14.6805 22.9289 15.0711C23.3195 15.4616 23.9526 15.4616 24.3431 15.0711L30.7071 8.70711ZM0 9L30 9V7L0 7L0 9Z"
                    fill="#DDE3E9"
                  />
                </svg>
              </Link>
            </div>
          </div>
          <div className="line"></div>
          <img className="headerIntroImageOne" src="/img/Intropribor1.png" />
          <img className="headerIntroImageTwo" src="/img/Intropribor2.png" />
        </section>
        <OurProductions />
        <section className="productCatalog">
          <div className="container">
            <div className="catalogWrapper">
              <div className="blockWrapper">
                <div className="catalogBlock catalogBlockOne">
                  <h1>лабораторное оборудование общего назначения</h1>
                  <div>
                    <img src="img/sterilizator.png" />
                  </div>
                </div>
                <div className="catalogBlock catalogBlockOne">
                  <h1>Оборудование для хлебопекарного производства</h1>
                  <div>
                    <img src="img/product3.png" />
                  </div>
                </div>
                <div className="catalogBlock catalogBlock5">
                  <h1>Лабораторная посуда</h1>
                  <div>
                    <img src="img/product5.png" />
                  </div>
                </div>
                <div className="catalogBlock catalogBlock8">
                  <h1>Термометры, гигрометры</h1>
                  <div>
                    <img src="img/product8_1.png" />
                    <img src="img/product8_2.png" />
                  </div>
                </div>
                <div className="catalogBlock">
                  <h1>Оборудование для лабораторий дорожных и строительных предприятий</h1>
                  <div>
                    <img src="img/product10.png" />
                  </div>
                </div>
              </div>
              <div className="blockWrapper">
                <div className="catalogBlock">
                  <h1>Оборудование для лабораторий зерноперерабатывающих производств</h1>
                  <div>
                    <img src="img/product.png" />
                  </div>
                </div>
                <div className="catalogBlock catalogBlock3">
                  <h1>Товары нашего производства</h1>
                  <div>
                    <img src="img/product4.png" />
                  </div>
                </div>
                <div className="catalogBlock">
                  <h1>Оборудование для молочного производства</h1>
                  <div>
                    <img src="img/product6.png" />
                  </div>
                </div>
                <div className="catalogBlock">
                  <h1>Оборудование для пивоваренного производства</h1>
                  <div>
                    <img src="img/product7.png" />
                  </div>
                </div>
                <div className="catalogBlock">
                  <h1>Медицинское оборудование</h1>
                  <div>
                    <img src="img/product9.png" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="advantages">
          <div className="container">
            <h1>Наши примущества</h1>
            <div className="advatagesWrapper">
              <div>
                <img src="img/VerifiedBrands.svg" />
                <h2>Провереные бренды</h2>
                <p>
                  Ассортимент составляет продукция ведущих производителей лабораторного,
                  аналитического и весового оборудования, таких как Foss, Sartorius, PFEUFFER GMBH,
                  FARMPRO, ATAGO, Perten, VELP, SNOL, Mettler Toledo, Testo, Ohaus, Acom, Vibra,
                  Cas, A&D Company, DEMCOM, Kett, DICKEY-john
                </p>
              </div>
              <div>
                <img src="img/QualityControl.svg" />
                <h2>Контроль Качества</h2>
                <p>
                  Оборудование поставляется со всей необходимой документацией и гарантией,
                  отличается высокой точностью показаний, удобством настройки и простотой
                  эксплуатации. Перед продажей проходит тщательную проверку: вы получаете только те
                  приборы, в которых мы уверены и которые не подведут в ответственный момент.
                </p>
              </div>
              <div>
                <img src="img/AdvisorySupport.svg" />
                <h2>Консультационная поддержка</h2>
                <p>
                  Мы оказываем информационную поддержку на всех этапах работы с заказом, несем
                  полную ответственность за актуальность и качество информации
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className="partners">
          <div className="logosSlider">
            <div className="overflow">
              <div className="logosWrapper">
                <div className="logoItem">
                  <img src="img/acomLogo.png" />
                </div>
                <div className="logoItem">
                  <img src="img/ad-companyLogo.png" />
                </div>
                <div className="logoItem">
                  <img src="img/casLogo.svg" />
                </div>
                <div className="logoItem">
                  <img src="img/demcomLogo.webp" />
                </div>
                <div className="logoItem">
                  <img src="img/atagoLogo-svg.png" />
                </div>
                <div className="logoItem">
                  <img src="img/farmproLogo.jpg" />
                </div>
                <div className="logoItem">
                  <img src="img/PfeufferLogo.svg" />
                </div>
                <div className="logoItem">
                  <img src="img/fossLogo.png" />
                </div>
                <div className="logoItem">
                  <img src="img/ketLogo.jpg" />
                </div>
                <div className="logoItem">
                  <img className="kettLogo" src="img/kettLogo.jpg" />
                </div>
              </div>
              <div className="logosWrapper">
                <div className="logoItem">
                  <img src="img/acomLogo.png" />
                </div>
                <div className="logoItem">
                  <img src="img/ad-companyLogo.png" />
                </div>
                <div className="logoItem">
                  <img src="img/casLogo.svg" />
                </div>
                <div className="logoItem">
                  <img src="img/demcomLogo.webp" />
                </div>
                <div className="logoItem">
                  <img src="img/atagoLogo-svg.png" />
                </div>
                <div className="logoItem">
                  <img src="img/farmproLogo.jpg" />
                </div>
                <div className="logoItem">
                  <img src="img/PfeufferLogo.svg" />
                </div>
                <div className="logoItem">
                  <img src="img/fossLogo.png" />
                </div>
                <div className="logoItem">
                  <img src="img/ketLogo.jpg" />
                </div>
                <div className="logoItem">
                  <img className="kettLogo" src="img/kettLogo.jpg" />
                </div>
              </div>
            </div>
            <div className="overflow reverse">
              <div className="logosWrapper">
                <div className="logoItem">
                  <img className="kettLogo" src="img/ohausLogo.png" />
                </div>
                <div className="logoItem">
                  <img src="img/pertenLogo.png" />
                </div>
                <div className="logoItem">
                  <img className="kettLogo" src="img/snolLogo.png" />
                </div>
                <div className="logoItem">
                  <img className="kettLogo" src="img/testoLogo.jpg" />
                </div>
                <div className="logoItem">
                  <img src="img/velpLogo.jpg" />
                </div>
                <div className="logoItem">
                  <img src="img/vibraLogo.jpg" />
                </div>
                <div className="logoItem">
                  <img className="mettlerLogo" src="img/mettlertoledoLogo.svg" />
                </div>
                <div className="logoItem">
                  <img className="sartoriusLogo" src="img/sartoriusLogo.jpg" />
                </div>
                <div className="logoItem">
                  <img src="img/dickey-johnLogo.png" />
                </div>
              </div>
              <div className="logosWrapper">
                <div className="logoItem">
                  <img className="kettLogo" src="img/ohausLogo.png" />
                </div>
                <div className="logoItem">
                  <img src="img/pertenLogo.png" />
                </div>
                <div className="logoItem">
                  <img className="kettLogo" src="img/snolLogo.png" />
                </div>
                <div className="logoItem">
                  <img className="kettLogo" src="img/testoLogo.jpg" />
                </div>
                <div className="logoItem">
                  <img src="img/velpLogo.jpg" />
                </div>
                <div className="logoItem">
                  <img src="img/vibraLogo.jpg" />
                </div>
                <div className="logoItem">
                  <img className="mettlerLogo" src="img/mettlertoledoLogo.svg" />
                </div>
                <div className="logoItem">
                  <img className="sartoriusLogo" src="img/sartoriusLogo.jpg" />
                </div>
                <div className="logoItem">
                  <img src="img/dickey-johnLogo.png" />
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
