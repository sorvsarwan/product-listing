import React from "react";
import { Card, Button } from "react-bootstrap";

export const Product = ({ detail }) => {
  return (
    <Card className="product" key={detail.id}>
      <Card.Img variant="top" src={detail.image} />
      <Card.Body>
        <Card.Title>{detail.brand}</Card.Title>
        <Card.Text>{detail.title}</Card.Text>
        <Button variant="primary" className="product-action add-to-bag">
          ADD TO BAG
        </Button>
        <Button variant="secondary" className="product-action wishlist">
          WISHLIST
        </Button>
      </Card.Body>
    </Card>
  );
};
