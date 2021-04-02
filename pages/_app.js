import Head from 'next/head';
import '../styles/App.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navigation from '../components/navigation';
import { CartContext, useCartState } from '../hooks/use-cart';

function MyApp({ Component, pageProps }) {
  const cart = useCartState();

  return (
    <>
      <Head>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <CartContext.Provider value={cart}>
        <div className="spacer" />
        <Navigation />
        <main>
          <div className="content">
            <Component {...pageProps} />
          </div>
        </main>
        <footer>
          <div className="my-5">
            <a
              href="https://rsvision.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              © RSVision {new Date().getFullYear()}
            </a>
          </div>
        </footer>
      </CartContext.Provider>
    </>
  );
}

export default MyApp;
