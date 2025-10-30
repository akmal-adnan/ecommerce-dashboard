'use client';

import styles from '@/app/dashboard/styles.module.scss';
import { logout } from '@/app/login/actions';

const DahsboardPage = () => {
  return (
    <div className={styles.mainContainer}>
      <button onClick={() => logout()}>Logout</button>
    </div>
  );
};

export default DahsboardPage;
