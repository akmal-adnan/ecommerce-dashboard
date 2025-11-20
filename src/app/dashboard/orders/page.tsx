import styles from '@/app/dashboard/orders/styles.module.scss';
import { Calendar, DocumentUpload } from 'iconsax-reactjs';

const OrdersPage = () => {
  return (
    <div className={styles.mainContainer}>
      <div className={styles.headerGroup}>
        <div className={styles.titleTextContainer}>
          <h6>Orders List</h6>
          <p>Monitor and manage all customer orders in one place.</p>
        </div>

        <div className={styles.buttonGroup}>
          <button className={styles.calendarButton}>
            <Calendar size={24} />
            August 2024
          </button>

          <button className={styles.calendarButton}>
            <DocumentUpload size={24} />
            Export
          </button>
        </div>
      </div>
    </div>
  );
};

export default OrdersPage;
