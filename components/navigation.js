import { useCart } from 'react-use-cart';
import Link from 'next/link';
import Logo from './logo';
import { Navbar, Nav } from 'react-bootstrap';
import styles from '../styles/Nav.module.scss';

const Navigation = () => {
  const { totalItems } = useCart();
  return (
    <div className={styles.nav_wrap}>
      <Navbar fixed="top">
        <Navbar.Brand>
          <Link href="/">
            <a>
              <Logo width="125" />
            </a>
          </Link>
        </Navbar.Brand>
        <Nav className="ml-auto">
          <li className="nav-item">
            <Link className="nav-link" href="/cart">
              <a className={styles.nav_link}>
                {totalItems}{' '}
                {!totalItems ? (
                  <img
                    src="images/cart-outline.svg"
                    className={styles.nav_icon}
                  />
                ) : (
                  <img src="images/cart.svg" className={styles.nav_icon} />
                )}
              </a>
            </Link>
          </li>
        </Nav>
      </Navbar>
    </div>
  );
};

export default Navigation;
