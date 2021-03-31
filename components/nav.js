import styles from '../styles/Nav.module.css';
import { useCart } from '../hooks/use-cart';

const Nav = () => {
  const { subtotal, checkout } = useCart();
  return (
    <nav className={styles.nav}>
      <p className={styles.navTitle}>404 SKATE</p>
      <p className={styles.navCart}>
        <button onClick={checkout}>${subtotal.toFixed(2)}</button>
      </p>
    </nav>
  );
};

export default Nav;
