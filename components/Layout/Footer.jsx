import { ThemeSwitcher } from '@/components/ThemeSwitcher';
import styles from './Footer.module.css';
import Wrapper from './Wrapper';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <Wrapper>
        <ThemeSwitcher />
      </Wrapper>
    </footer>
  );
};

export default Footer;
