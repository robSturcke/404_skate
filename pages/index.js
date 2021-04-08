import Head from 'next/head';
import Link from 'next/link';
import styles from '../styles/Index.module.scss';
import products from '../products.json';
import { useCart } from 'react-use-cart';
import { Col, Container, Row, Button } from 'react-bootstrap';
import Logo from '../components/logo';

export default function Home() {
  const { addItem } = useCart();

  return (
    <>
      <Head>
        <title>404 Skateboards</title>
      </Head>
      <Container fluid>
        <Row>
          <Col md="12">
            <div className="text-center">
              <Logo width="350" />
            </div>
          </Col>
          {products.map((product) => {
            const { id, title, description, image, price } = product;
            return (
              <Col md="4" sm="6" key={id}>
                <div className="h-100 d-flex flex-column">
                  <Link href={`/products/${id}`}>
                    <a className={styles.product_link}>
                      <img src={image} className="img-fluid my-1" alt={title} />
                      <h3>{title}</h3>
                    </a>
                  </Link>
                  <p>{description}</p>
                  <div className="mt-auto">
                    <div className="mb-1">
                      <strong>${price.toFixed(2)}</strong>
                    </div>
                    <div>
                      <button
                        className="cart_btn"
                        onClick={() => {
                          addItem(product);
                        }}
                      >
                        Add To Cart
                      </button>
                    </div>
                  </div>
                </div>
              </Col>
            );
          })}
        </Row>
      </Container>
    </>
  );
}
