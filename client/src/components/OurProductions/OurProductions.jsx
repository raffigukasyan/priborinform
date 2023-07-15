import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper';
import OurProduct from './OurProduct';

import styles from './OurProductions.module.scss';
import 'swiper/scss';
import 'swiper/scss/autoplay';

export default function ourProductions() {
  return (
    <section className={styles.ourProductions}>
      <div className="container">
        <div className={styles.ourProductionsTitle}>
          <h1>Товары нашего производства</h1>
          <div className={styles.ourProductionsButtons}>
            <button className="swiper-button-prev">
              <svg
                width="26"
                height="16"
                viewBox="0 0 26 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M25.5 8L0.916666 8M0.916666 8L8.83333 1.33333M0.916666 8L8.83333 15.5"
                  stroke="#33363F"
                />
              </svg>
            </button>
            <button className="swiper-button-next">
              <svg
                width="26"
                height="16"
                viewBox="0 0 26 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M0.5 8.83331L25.0833 8.83331M25.0833 8.83331L17.1667 15.5M25.0833 8.83331L17.1667 1.33331"
                  stroke="#33363F"
                />
              </svg>
            </button>
          </div>
        </div>
        <div className={styles.sliderContainer}></div>
        <Swiper
          modules={[Navigation, Autoplay]}
          slidesPerView={3}
          spaceBetween={160}
          autoplay={{ delay: 5000 }}
          navigation={{
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
            clickable: true,
          }}>
          <SwiperSlide>
            <OurProduct img="img/product.png" title="Названия прибора" price="15 200 ₽" />
          </SwiperSlide>
          <SwiperSlide>
            <OurProduct img="img/product.png" title="Названия прибора" price="15 200 ₽" />
          </SwiperSlide>
          <SwiperSlide>
            <OurProduct img="img/product.png" title="Названия прибора" price="15 200 ₽" />
          </SwiperSlide>
          <SwiperSlide>
            <OurProduct img="img/product.png" title="Названия прибора" price="15 200 ₽" />
          </SwiperSlide>
          <SwiperSlide>
            <OurProduct img="img/product.png" title="Названия прибора" price="15 200 ₽" />
          </SwiperSlide>
        </Swiper>
      </div>
    </section>
  );
}
