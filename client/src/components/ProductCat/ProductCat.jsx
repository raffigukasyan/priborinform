import styles from './ProductCat.module.scss';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
export default function ProductCat({ id, title, img, description, onAddBasket }) {
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" height={'250px'} src={`/${img}`} />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>{description.slice(0, 100)} ...</Card.Text>
        <Button variant="primary" onClick={() => onAddBasket(id)}>
          Добавить в корзину
        </Button>
      </Card.Body>
    </Card>
  );
}
