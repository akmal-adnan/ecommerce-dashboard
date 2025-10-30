import styles from '@/app/login/styles.module.scss';
import Logo from '@/assets/icons/Logo';
import LoginForm from '@/components/LoginForm/LoginForm';

const LoginPage = () => {
  return (
    <section className={styles.mainContainer}>
      <div>
        <div className={styles.logoContainer}>
          <Logo />
        </div>

        <div className={styles.introTextContainer}>
          <h6>Welcome to Corebolt</h6>
          <p className={styles.subTitle}>
            Your business insights and tools are waiting for you.
          </p>
        </div>

        <LoginForm />
      </div>
    </section>
  );
};

export default LoginPage;
