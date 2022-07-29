import { ButtonLink } from '@/components/Button';
import { Container, Spacer, Wrapper } from '@/components/Layout';
import Link from 'next/link';
import styles from './Hero.module.css';

const Hero = () => {
  return (
    <Wrapper>
      <div>
        <h1 className={styles.title}>
          <span className={styles.nextjs}>Next.js</span>
          <span className={styles.mongodb}>MongoDB</span>
          <span>App</span>
        </h1>
        <Container justifyContent="center" className={styles.buttons}>
          <Container>
            <Link passHref href="/feed">
              <ButtonLink className={styles.button}>Explore Articles</ButtonLink>
            </Link>
          </Container>
          <Spacer axis="horizontal" size={1} />
          <Container>
            <ButtonLink
              href="https://github.com/qolbirokhis/tekweb2022"
              type="secondary"
              className={styles.button}
            >
              GitHub
            </ButtonLink>
          </Container>
        </Container>
      </div>
    </Wrapper>
  );
};

export default Hero;
