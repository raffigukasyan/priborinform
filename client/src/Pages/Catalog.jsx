import { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import AppContext from '../context';
export default function Catalog() {
  const { catalog } = useContext(AppContext);
  const [selected, setSelected] = useState(null);
  const toggle = (i) => {
    console.log(selected, i);
    if (selected === i) {
      return setSelected(null);
    }
    setSelected(i);
  };
  return (
    <div className="catalog">
      <div className="container">
        <h1>Каталог товаров</h1>
        <div className="categoryWrapper">
          {catalog.map((cat) => {
            return (
              <div key={cat.id}>
                <div className="category">
                  <div className="categoryTop">
                    <div onClick={() => toggle(cat.id)}>
                      <span>{cat.title}</span>
                      <svg
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
                    </div>
                  </div>
                  <div className={`categoryBottom ${selected === cat.id ? 'active' : ''}`}>
                    <ul className={selected === cat.id ? 'active' : ''}>
                      <li>
                        <Link>Товары аываыаыа</Link>
                      </li>
                      <li>
                        <Link>вфалыаэд адыаыэвад эыа ыа</Link>
                      </li>
                      <li>
                        <Link> выавыаждыд дпэажыдып д вап</Link>
                      </li>
                      <li>
                        <Link> ыва ыа ыавыа а </Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
