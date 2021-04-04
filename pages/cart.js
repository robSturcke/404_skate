import Head from 'next/head';
import styles from '../styles/Cart.module.css';
import { useCart } from 'react-use-cart';
import Table from '../components/table';
import products from '../products.json';
import { initiateCheckout } from '../lib/payments.js';
import { Col, Container, Row, Button } from 'react-bootstrap';

const columns = [
  {
    columnId: 'title',
    Header: 'Product Name',
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
  const {
    isEmpty,
    items,
    updateItemQuantity,
    removeItem,
    cartTotal,
  } = useCart();

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
      const remove = () => removeItem(id);
      function handleOnSubmit(e) {
        e.preventDefault();

        const { currentTarget } = e;
        const inputs = Array.from(currentTarget.elements);
        const quantity = inputs.find((input) => input.name === 'quantity')
          ?.value;

        updateItem({
          id,
          quantity: quantity && parseInt(quantity),
        });
      }

      return (
        <div>
          {quantity}
          <button onClick={increment}>+</button>
          <button onClick={decrement}>-</button>
          <button onClick={remove}>x</button>
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
            <h1 className={styles.title}>Cart</h1>
            <Table className={styles.table} data={data} columns={columns} />
            Total: ${cartTotal.toFixed(2)}
            <p className={styles.checkout}>
              <Button onClick={checkout}>Check Out</Button>
            </p>
          </Col>
        </Row>
      </Container>
    </>
  );
}
