import Head from 'next/head';
import styles from '../styles/Home.module.css';

import products from '../products.json';

export default function Home() {
  console.log('products', products);
  return (
    <div className={styles.container}>
      <Head>
        <title>404 Skateboards</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>404 Skateboards</h1>

        <p className={styles.description}>The hardest to find </p>

        <ul className={styles.grid}>
          {products.map((product) => {
            const { id, title, description, image, price } = product;
            return (
              <li key={id} className={styles.card}>
                <a href="https://nextjs.org/docs">
                  <img src={image} alt={title} />
                  <h3>{title}</h3>
                  <p>{price}</p>
                  <p>{description}</p>
                </a>
              </li>
            );
          })}
        </ul>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <img src="/vercel.svg" alt="Vercel Logo" className={styles.logo} />
        </a>
      </footer>
    </div>
  );
}
