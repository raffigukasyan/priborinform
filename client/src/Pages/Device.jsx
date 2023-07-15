import { useEffect, useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import AppContext from '../context';
import Footer from '../components/Footer';
import Header from '../components/Header';
import Pagination from '../components/Pagination/Pagination';
import ProductCat from '../components/ProductCat/ProductCat';

export default function Device({ match }) {
  const { basket, setBasket, isAuth, user, device, setDevice } = useContext(AppContext);
  const limit = 4;
  const [page, setPage] = useState(1);
  const [totalCount, setTotalCount] = useState(0);
  const pages = [];

  useEffect(() => {
    async function fetchDevices() {
      axios
        .get(match.url, {
          params: {
            limit,
            page,
          },
        })
        .then((resp) => {
          setDevice(resp.data.rows);
          setTotalCount(resp.data.count);
        });
    }

    fetchDevices();
  }, [page]);

  const pageCount = Math.ceil(totalCount / limit);
  for (let i = 1; i <= pageCount; i++) {
    pages.push(i);
  }

  const onAddBasket = (id) => {
    if (!isAuth) {
      alert('Не зарегистрированый');
    } else {
      axios.post('/basket/basketAdd', { prodId: id, basketId: user.basket }).then((data) => {
        console.log(data);
      });
    }
  };

  return (
    <>
      <Header />
      <main>
        <div className="container">
          <section className="Categorylinks">
            <div>
              <Link to={'/'}>Главная /</Link>
              <Link to={`/catalog/${match.params.title}`}>{match.params.title} /</Link>
              <Link>{match.params.subTitle}</Link>
            </div>
          </section>
          <section className="products">
            <div className="container">
              <div className="productsWrapper">
                {console.log(device)}
                {device.map((dev) => {
                  return (
                    <ProductCat
                      key={dev.id}
                      id={dev.id}
                      description={dev.description}
                      img={dev.image}
                      title={dev.title}
                      onAddBasket={onAddBasket}
                    />
                  );
                })}
              </div>
            </div>
          </section>
          <Pagination pages={pages} setPage={setPage} page={page} />
        </div>
      </main>
      <Footer />
    </>
  );
}
