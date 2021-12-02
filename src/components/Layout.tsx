import { FunctionComponent } from 'react';
import styles from '../../styles/Layout.module.css';
import { Footer } from './Footer';
import { Navbar } from './Navbar';

interface ILayout {
  children: any;
}

export const Layout: FunctionComponent<ILayout> = ({ children }) => {
  return (
    <div className={styles.container}>
      <Navbar />
      <main className={styles.flexContainer}>{children}</main>
      <Footer />
    </div>
  );
};
