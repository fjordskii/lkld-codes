import { useRouter } from 'next/dist/client/router';
import Link from 'next/link';
import styles from '../../styles/Navbar.module.css';

export function Navbar() {
  const router = useRouter();

  const isActiveRoute = (route: string) => route === router.pathname;

  return (
    <section className={styles.navbar}>
      <div className="terminal-nav">
        <div className="terminal-logo">
          <div className="logo terminal-prompt">
            <a href="#" className="no-style">
              LKLD.codes
            </a>
          </div>
        </div>
        <nav className="terminal-menu">
          <ul>
            <li>
              <Link href="/">
                <a
                  className={
                    'menu-item ' + (isActiveRoute('/') ? 'active ' : '')
                  }
                >
                  Home
                </a>
              </Link>
            </li>
            <li>
              <Link href="/about">
                <a
                  className={
                    'menu-item ' + (isActiveRoute('/about') ? 'active ' : '')
                  }
                >
                  About
                </a>
              </Link>
            </li>
            <li>
              <Link href="/contact">
                <a
                  className={
                    'menu-item ' + (isActiveRoute('/contact') ? 'active ' : '')
                  }
                >
                  Contact
                </a>
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </section>
  );
}
