import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { Card, Button, Col, Row } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';

const ProductList = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    getProducts();
  }, []);

  const getProducts = async () => {
    const response = await axios.get("http://localhost:5000/products");
    setProducts(response.data);
  };

  const deleteProduct = async (productId) => {
    try {
      await axios.delete(`http://localhost:5000/products/${productId}`);
      getProducts();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="container mt-5">
      <Link to="/add" className="btn btn-success">Add New</Link>
      <Row>
        {products.map((product) => (
          <Col sm={6} md={4} lg={3} key={product.id}>
            <Card>
              <Card.Img variant="top" src={product.url} style={{ objectFit: 'cover', height: '200px' }} />
              <Card.Body>
                <Card.Title>{product.name}</Card.Title>
                <Button variant="primary" as={Link} to={`edit/${product.id}`}>Edit</Button>{' '}
                <Button variant="danger" onClick={() => deleteProduct(product.id)}>Delete</Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default ProductList;
