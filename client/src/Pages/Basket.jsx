import { useContext, useEffect } from 'react';
import Footer from '../components/Footer';
import { Card, Button } from 'react-bootstrap';
import Header from '../components/Header';
import AppContext from '../context';
export default function Basket() {
  const { basket, setBasket } = useContext(AppContext);
  useEffect(() => {
    setBasket(JSON.parse(localStorage.getItem('basket')));
  }, []);
  return (
    <div>
      <Header></Header>
      <div className="basket">
        <div className="productWrapper">
          {basket.map((bas) => {
            return (
              <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" height={'250px'} src={`/${bas.image}`} />
                <Card.Body>
                  <Card.Title>{bas.title}</Card.Title>
                  <Card.Text>{bas.description.slice(0, 100)} ...</Card.Text>
                  <Button
                    variant="primary"
                    onClick={() => {
                      console.log(basket);
                    }}>
                    Удалить в корзину
                  </Button>
                </Card.Body>
              </Card>
            );
          })}
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
}
