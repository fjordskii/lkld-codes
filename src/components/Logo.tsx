import styles from '../../styles/Logo.module.css';
import { CallOut } from './CallOut';

export function Logo() {
  return (
    <div className={styles.logoFlexContainer}>
      <h1 className={styles.logo}>LKLD.codes</h1>
      <CallOut />
    </div>
  );
}
