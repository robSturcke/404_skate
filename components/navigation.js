import { useCart } from '../hooks/use-cart';
import Link from 'next/link';
import Logo from './logo';
import { Navbar, Nav } from 'react-bootstrap';

const Navigation = () => {
  const { subtotal } = useCart();
  return (
    <Navbar bg="light" expand="lg" fixed="top">
      <Navbar.Brand>
        <Link href="/">
          <a>
            <Logo width="125" />
          </a>
        </Link>
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto">
          <div className="nav-item">
            <Link className="nav-link" href="/cart">
              <a>${subtotal.toFixed(2)}</a>
            </Link>
          </div>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Navigation;
