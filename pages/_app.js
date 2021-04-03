import Head from 'next/head';
import '../styles/App.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navigation from '../components/navigation';
import { CartProvider } from 'react-use-cart';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <CartProvider>
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
      </CartProvider>
    </>
  );
}

export default MyApp;
