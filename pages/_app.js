import Head from 'next/head';
import { ToggleProvider } from '../context/toolbar_context';
import '../styles/App.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navigation from '../components/navigation';
import Toolbar from '../components/toolbar';
import { CartProvider } from 'react-use-cart';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <CartProvider>
        <ToggleProvider>
          <div className="spacer" />
          <Navigation />
          <Toolbar />
          <main>
            <div className="content">
              <Component {...pageProps} />
            </div>
          </main>
        </ToggleProvider>
        <footer>
          <div className="my-5">
            ©{' '}
            <a
              href="https://rsvision.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              RSVision {new Date().getFullYear()}
            </a>{' '}
            {'&'}{' '}
            <a
              href="https://robsturcke.dev"
              target="_blank"
              rel="noopener noreferrer"
            >
              robSturcke
            </a>
          </div>
        </footer>
      </CartProvider>
    </>
  );
}

export default MyApp;
