import React from 'react';
import { useCart } from 'react-use-cart';
import { initiateCheckout } from '../lib/payments.js';
import { Container, Row, Col, Button } from 'react-bootstrap';
import productStyles from '../styles/Product.module.scss';

export default function ToolbarContent() {
  const { isEmpty, quantity, items, updateItemQuantity, cartTotal } = useCart();

  function checkout() {
    initiateCheckout({
      lineItems: items.map(({ id, quantity }) => {
        return {
          price: id,
          quantity,
        };
      }),
    });
  }

  return (
    <div className="toolbar_content">
      <Container fluid>
        <Row>
          {items.map((product) => {
            const { id, title, image, price, quantity } = product;
            const increment = () => updateItemQuantity(id, quantity + 1);
            const decrement = () => updateItemQuantity(id, quantity - 1);
            return (
              <>
                <Col md="12">
                  <img width="50" className="p-1" src={image} alt={title} />
                  <span>{title} | </span>
                  <span>${price.toFixed(2)}</span>
                </Col>
                <Col md="12">
                  <div className="float-right">
                    <strong>{quantity}</strong>
                    <span className="ml-1">
                      <Button
                        variant="outline-dark"
                        onClick={increment}
                        size="sm"
                      >
                        +
                      </Button>
                    </span>
                    <span className="ml-1">
                      <Button
                        variant="outline-dark"
                        onClick={decrement}
                        size="sm"
                      >
                        -
                      </Button>
                    </span>
                  </div>
                </Col>
              </>
            );
          })}
          <Col md="12">
            <div className="text-center my-3">
              <button className={productStyles.cart_btn} onClick={checkout}>
                CHECKOUT
              </button>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
