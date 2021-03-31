import '../styles/globals.css';
import Nav from '../components/nav';
import { CartContext, useCartState } from '../hooks/use-cart';

function MyApp({ Component, pageProps }) {
  const cart = useCartState();

  return (
    <CartContext.Provider value={cart}>
      <Nav />
      <Component {...pageProps} />
    </CartContext.Provider>
  );
}

export default MyApp;
