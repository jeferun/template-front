import React from 'react';
// bootstrap
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
// redux
import { useSelector, useDispatch } from 'react-redux';
// reducer
import { addProduct } from 'store/product';
// type
import { RootState } from 'store';

function Catalog() {
  const dispactch = useDispatch();

  const products = useSelector((state: RootState) => state.product.products);
  const handleAddProduct = () => {
    dispactch(addProduct({
      name: 'new product',
      type: 'd'
    }));
  };

  return (
    <Container fluid="md">
      <Row>
        <h1>Go</h1>
        <Col xs={6}>
          <Button onClick={handleAddProduct}> Add Product </Button>
        </Col>
        {products.map((product) => (
          <div key={product.name}>
            <h2>{product.name}</h2>
          </div>
        ))}
      </Row>
    </Container>
  );
}

export default Catalog;
