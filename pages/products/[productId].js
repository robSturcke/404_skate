import Head from 'next/head';
import styles from '../../styles/Product.module.css';
import { useCart } from '../../hooks/use-cart';
import products from '../../products.json';
import { Col, Container, Row } from 'react-bootstrap';

export default function Product({ product }) {
  const { id, title, image, price, description } = product;
  const { addToCart } = useCart();

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
                <button
                  className={styles.button}
                  onClick={() => addToCart({ id })}
                >
                  Buy
                </button>
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
