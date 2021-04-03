import Head from 'next/head';
import Link from 'next/link';
import styles from '../styles/Home.module.css';
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

            <p className={styles.description}>The hardest to find </p>
          </Col>
          {products.map((product) => {
            const { id, title, description, image, price } = product;
            return (
              <Col md="4" sm="6" key={id}>
                <Link href={`/products/${id}`}>
                  <a>
                    <img src={image} className="img-fluid" alt={title} />
                    <h3>{title}</h3>
                    <p>{price}</p>
                    <p>{description}</p>
                  </a>
                </Link>
                <div>
                  <Button
                    color="primary"
                    onClick={() => {
                      addItem(product);
                    }}
                  >
                    Add To Cart
                  </Button>
                </div>
              </Col>
            );
          })}
        </Row>
      </Container>
    </>
  );
}
