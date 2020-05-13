import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import products from "../../../data/products.json";
import { Product } from "./Product";


const ProductListing = () => {
    const productData = products.Products;
    
    return (
      <Container>
        <Row>
          <Col xs>
            {productData.map((product) => (
              <Product detail={product} />
            ))}
          </Col>
        </Row>
      </Container>
    );
}

export default ProductListing;
