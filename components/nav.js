import styles from '../styles/Nav.module.css';
import { useCart } from '../hooks/use-cart';
import Link from 'next/link';

const Nav = () => {
  const { subtotal, checkout } = useCart();
  return (
    <nav className={styles.nav}>
      <p className={styles.navTitle}>
        <Link href="/">
          <a>404 SKATE</a>
        </Link>
      </p>
      <p className={styles.navCart}>
        <Link href="/cart">
          <a>${subtotal.toFixed(2)}</a>
        </Link>
      </p>
    </nav>
  );
};

export default Nav;
