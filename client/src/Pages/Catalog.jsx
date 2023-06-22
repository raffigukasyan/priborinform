import { useContext, useEffect, useState } from 'react';
import Footer from '../components/Footer';
import Header from '../components/Header';
import { Link } from 'react-router-dom';
import AppContext from '../context';
export default function Catalog() {
  const { catalog } = useContext(AppContext);
  const [selected, setSelected] = useState(null);
  const toggle = (i) => {
    if (selected === i) {
      return setSelected(null);
    }
    setSelected(i);
  };
  return (
    <>
      <Header />
      <div className="catalog">
        <div className="container">
          <h1>Каталог товаров</h1>
          <div className="categoryWrapper">
            {catalog.map((cat) => {
              return (
                <div key={cat.id}>
                  <div className="category">
                    <div className="categoryTop">
                      <div>
                        <Link to={`/catalog/${cat.title}`}>{cat.title}</Link>
                        {cat.subCat.length ? (
                          <svg
                            onClick={() => (cat.subCat.length ? toggle(cat.id) : '')}
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth={1.5}
                            stroke="currentColor">
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                            />
                          </svg>
                        ) : (
                          ''
                        )}
                      </div>
                    </div>
                    <div className={`categoryBottom ${selected === cat.id ? 'active' : ''}`}>
                      <ul className={selected === cat.id ? 'active' : ''}>
                        {cat.subCat?.map((subcat) => {
                          return (
                            <li key={subcat.id}>
                              <Link to={`/catalog/${cat.title}/${subcat.title}`}>
                                {subcat.title}
                              </Link>
                            </li>
                          );
                        })}
                      </ul>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
