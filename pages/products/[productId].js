import Head from 'next/head';
import styles from '../../styles/Product.module.scss';
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
        <div className="my-3">
          <Row>
            <Col md="4">
              <img src={image} alt={title} className="img-fluid" />
            </Col>
            <Col md="8">
              <div>
                <h1>{title}</h1>
                <p className={styles.description}>{description}</p>
                <p className={styles.description}>${price.toFixed(2)}</p>
                <p>
                  <button
                    className={styles.cart_btn}
                    onClick={() => addItem(product)}
                  >
                    Add to Cart
                  </button>
                </p>
              </div>
            </Col>
          </Row>
        </div>
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
