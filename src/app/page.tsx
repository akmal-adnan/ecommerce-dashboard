import styles from '@/app/styles.module.scss';
import Link from 'next/link';

const Home = () => {
  return (
    <section>
      <div className={styles.mainContainer}>
        <h3>Landing page</h3>

        <Link className={styles.buttonLogin} href={'/login'}>
          Go to login page
        </Link>
      </div>
    </section>
  );
};

export default Home;
