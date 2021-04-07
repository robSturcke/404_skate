import Head from 'next/head';
import productStyles from '../styles/Product.module.scss';
import { useCart } from 'react-use-cart';
import CartTable from '../components/cart_table';
import products from '../products.json';
import { initiateCheckout } from '../lib/payments.js';
import { Col, Container, Row, Button } from 'react-bootstrap';
import Fade from 'react-reveal/Fade';
import YourCartLogo from '../components/your_cart_logo';

const columns = [
  {
    columnId: 'title',
    Header: 'Product',
  },
  {
    columnId: 'pricePerUnit',
    Header: 'Price Per',
  },
  {
    columnId: 'quantity',
    Header: 'Quantity',
  },
];

export default function Cart() {
  const { isEmpty, items, updateItemQuantity, cartTotal } = useCart();

  if (isEmpty) return <h2 className="mt-3 text-center">Your cart is empty</h2>;

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

  const data = items.map(({ id, quantity, price, total }) => {
    const product = products.find(({ id: pid }) => pid === id);
    const { title } = product || {};

    const Quantity = () => {
      const increment = () => updateItemQuantity(id, quantity + 1);
      const decrement = () => updateItemQuantity(id, quantity - 1);

      return (
        <div>
          {quantity}
          <span className="ml-1">
            <Button variant="outline-dark" onClick={increment}>
              +
            </Button>
          </span>
          <span className="ml-1">
            <Button variant="outline-dark" onClick={decrement}>
              -
            </Button>
          </span>
        </div>
      );
    };

    return {
      id,
      title,
      quantity: <Quantity />,
      pricePerUnit: price.toFixed(2),
      total,
    };
  });

  return (
    <>
      <Head>
        <title>Shopping Cart</title>
      </Head>
      <Container fluid>
        <Row>
          <Col>
            <div className="text-center">
              <Fade top>
                <YourCartLogo width="450" baseLayer="img-fluid" />
              </Fade>
            </div>
            <CartTable data={data} columns={columns} />
            <Fade right cascade>
              <div className="float-right py-3">
                <h3>
                  <small>Total: </small>${cartTotal.toFixed(2)}{' '}
                  <button className={productStyles.cart_btn} onClick={checkout}>
                    Check Out
                  </button>
                </h3>
              </div>
            </Fade>
          </Col>
        </Row>
      </Container>
    </>
  );
}
