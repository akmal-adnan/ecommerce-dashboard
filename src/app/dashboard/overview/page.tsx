import styles from '@/app/dashboard/overview/styles.module.scss';
import ProductSalesChart from '@/components/Dashboard/ProductSalesChart/ProductSalesChart';
import RecentOrderTable from '@/components/Dashboard/RecentOrderTable/RecentOrderTable';
import TopSellingProductTable from '@/components/Dashboard/TopSellingProductTable/TopSellingProductTable';
import TrendSection from '@/components/Dashboard/TrendSection/TrendSection';
import { Add, Calendar, Element3 } from 'iconsax-reactjs';

const page = () => {
  return (
    <div className={styles.mainContainer}>
      <div className={styles.headerGroup}>
        <div className={styles.titleTextContainer}>
          <h6>Dashboard Overview</h6>
          <p>Here is the summary of overall data</p>
        </div>

        <div className={styles.buttonGroup}>
          <button className={styles.calendarButton}>
            <Calendar size={24} />
            August 2024
          </button>

          <div className={styles.buttonSubGroup}>
            <button className={styles.widgetButton}>
              <Element3 size={24} />
              <p>Manage Widget</p>
            </button>

            <button className={styles.addButton}>
              <Add size={24} />
            </button>
          </div>
        </div>
      </div>

      <div className={styles.contentGroup}>
        <div className={styles.trendSection}>
          <TrendSection />
        </div>

        <div className={styles.productSalesChart}>
          <ProductSalesChart />
        </div>

        <div className={styles.topSellingProductTable}>
          <TopSellingProductTable />
        </div>

        <div className={styles.recentOrderTable}>
          <RecentOrderTable />
        </div>
      </div>
    </div>
  );
};

export default page;
