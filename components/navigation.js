import Link from 'next/link';
import Logo from './logo';
import { Navbar, Nav } from 'react-bootstrap';
import styles from '../styles/Nav.module.scss';
import ToolbarSwitch from './toolbar_switch';

const Navigation = () => (
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
          <span className="nav-link">
            <ToolbarSwitch />
          </span>
        </li>
      </Nav>
    </Navbar>
  </div>
);

export default Navigation;
