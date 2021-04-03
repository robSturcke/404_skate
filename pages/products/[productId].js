import Head from 'next/head';
import styles from '../../styles/Product.module.css';
import { useCart } from 'react-use-cart';
import products from '../../products.json';
import { Col, Container, Row, Button } from 'react-bootstrap';

export default function Product({ product }) {
  const { id, title, image, price, description } = product;
  const { addItem } = useCart();

  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>
      <Container fluid>
        <Row>
          <Col>
            <div className={styles.productImage}>
              <img src={image} alt={title} />
            </div>
            <div>
              <h1>{title}</h1>
              <p className={styles.description}>{description}</p>
              <p className={styles.description}>${price.toFixed(2)}</p>
              <p>
                <Button onClick={() => addItem({ id })}>Buy</Button>
              </p>
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export async function getStaticProps({ params = {} }) {
  const product = products.find(({ id }) => `${id}` === `${params.productId}`);
  return {
    props: {
      product,
    },
  };
}

export async function getStaticPaths() {
  const paths = products.map((product) => {
    const { id } = product;
    return {
      params: {
        productId: id,
      },
    };
  });

  return {
    paths,
    fallback: false,
  };
}
