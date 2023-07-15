import { useEffect, useState } from 'react';
import Table from 'react-bootstrap/Table';
import AdminHeader from '../AdminHeader';
import Pagination from '../Pagination/Pagination';
import {
  createProduct,
  getCategory,
  getColTable,
  getSubCategory,
  getTableData,
} from '../../http/AdminApi';
import { Button, Form, Modal, Row, Col, Dropdown } from 'react-bootstrap';

export default function TableData({ match }) {
  const [columns, setColumns] = useState([]);
  const [dataTable, setDataTable] = useState([]);
  const [category, setCategory] = useState([]);
  const [characteristic, setCharacteristic] = useState([]);
  const [subCategory, setSubCategory] = useState([]);

  const [titleProd, setTitleProd] = useState('');
  const [descriptionProd, setDescriptionProd] = useState('');
  const [categoryProd, setCategoryProd] = useState({});
  const [subCategoryProd, setSubCategoryProd] = useState({});
  const [file, SetFile] = useState(null);

  const [page, setPage] = useState(1);
  const [totalCount, setTotalCount] = useState(0);
  const pages = [];
  const [show, setShow] = useState(false);

  const limit = 10;

  useEffect(() => {
    getColTable(match.url.split('/')[2]).then((data) => {
      setColumns(data);
    });

    getCategory().then((data) => {
      setCategory(data);
    });

    getSubCategory().then((data) => {
      setSubCategory(data);
    });
  }, []);

  useEffect(() => {
    getTableData(match.url.split('/')[2], limit, page).then((resp) => {
      console.log(resp);
      setDataTable(resp.rows);
      setTotalCount(resp.count);
    });
  }, [page]);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const AddCharacteristic = () => {
    setCharacteristic([...characteristic, { title: '', description: '', number: Date.now() }]);
  };

  const removeCharacteristic = (number) => {
    setCharacteristic(characteristic.filter((i) => i.number !== number));
  };

  const changeCharacteristic = (key, value, number) => {
    setCharacteristic(
      characteristic.map((i) => (i.number === number ? { ...i, [key]: value } : i)),
    );
  };

  const pageCount = Math.ceil(totalCount / limit);
  for (let i = 1; i <= pageCount; i++) {
    pages.push(i);
  }

  const addProd = () => {
    const formData = new FormData();
    formData.append('title', titleProd);
    formData.append('description', descriptionProd);
    formData.append('cat', categoryProd.id);
    formData.append('subCat', subCategoryProd.id);
    formData.append('img', file);
    formData.append('characteristic', JSON.stringify(characteristic));
    createProduct(formData).then((data) => {
      handleClose();
    });
  };
  return (
    <div className="panel">
      <AdminHeader />

      <div>
        {console.log(match.url)}
        {match.url === '/admin/category' || match.url === '/admin/products' ? (
          <Button variant="primary" onClick={handleShow}>
            Launch demo modal
          </Button>
        ) : (
          ''
        )}
        <Modal size="lg" show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Modal heading</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form>
              <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                <Form.Label>Название</Form.Label>
                <Form.Control
                  value={titleProd}
                  onChange={(e) => setTitleProd(e.target.value)}
                  type="text"
                  autoFocus
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                <Form.Label>Описание</Form.Label>
                <Form.Control
                  value={descriptionProd}
                  onChange={(e) => setDescriptionProd(e.target.value)}
                  as="textarea"
                  rows={3}
                />
              </Form.Group>
              <Form.Group className="mb-3">
                <Dropdown className="mt-2 mb-2">
                  <Dropdown.Toggle>{categoryProd.title}</Dropdown.Toggle>
                  <Dropdown.Menu>
                    {category.map((cat) => {
                      return (
                        <Dropdown.Item onClick={() => setCategoryProd(cat)} key={cat.id}>
                          {cat.title}
                        </Dropdown.Item>
                      );
                    })}
                  </Dropdown.Menu>
                </Dropdown>
              </Form.Group>
              <Form.Group className="mb-3">
                <Dropdown className="mt-2 mb-2">
                  <Dropdown.Toggle>{subCategoryProd.title}</Dropdown.Toggle>
                  <Dropdown.Menu>
                    {subCategory.map((cat) => {
                      return (
                        <Dropdown.Item onClick={() => setSubCategoryProd(cat)} key={cat.id}>
                          {cat.title}
                        </Dropdown.Item>
                      );
                    })}
                  </Dropdown.Menu>
                </Dropdown>
                {/* <Form.Label>Выбрать Под категорию</Form.Label>
                <Form.Select aria-label="Default select example">
                  <option>{subCategoryProd && 'Выьерите'}</option>
                  {subCategory.map((subCat) => {
                    return (
                      <option
                        key={subCat.id}
                        onClick={() => setSubCategoryProd(subCat.title)}
                        value={subCat.id}>
                        {subCat.title}
                      </option>
                    );
                  })}
                </Form.Select> */}
              </Form.Group>
              <Form.Group controlId="formFile" className="mb-3">
                <Form.Label>Загружите изображения</Form.Label>
                <Form.Control onChange={(e) => SetFile(e.target.files[0])} type="file" />
              </Form.Group>
              <Button className="mb-3" variant="secondary" onClick={() => AddCharacteristic()}>
                Добавить новое свойства
              </Button>
              {characteristic.map((char) => {
                return (
                  <Row className="mb-3">
                    <Col md="4">
                      <Form.Control
                        value={char.title}
                        onChange={(e) => changeCharacteristic('title', e.target.value, char.number)}
                        type="text"
                        placeholder="Введите название"
                      />
                    </Col>
                    <Col md="4">
                      <Form.Control
                        value={char.description}
                        onChange={(e) =>
                          changeCharacteristic('description', e.target.value, char.number)
                        }
                        type="text"
                        placeholder="Введите описание"
                      />
                    </Col>
                    <Col md="4">
                      <Button onClick={() => removeCharacteristic(char.number)} variant="danger">
                        Удалить
                      </Button>
                    </Col>
                  </Row>
                );
              })}
            </Form>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <Button variant="primary" onClick={() => addProd()}>
              Save Changes
            </Button>
          </Modal.Footer>
        </Modal>
        <Table striped bordered hover size="sm">
          <thead>
            {columns.map((col) => {
              return <th>{col}</th>;
            })}
          </thead>
          <tbody>
            {dataTable.map((col) => {
              return (
                <tr>
                  {columns.map((el) => {
                    return <td>{col[el]}</td>;
                  })}
                  <td>
                    <Button variant="secondary">Изменить</Button>
                  </td>
                  <td>
                    <Button variant="danger">Удалить</Button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </Table>
        <Pagination pages={pages} setPage={setPage} page={page} />
      </div>
    </div>
  );
}
