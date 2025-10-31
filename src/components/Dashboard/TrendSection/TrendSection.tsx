import styles from '@/components/Dashboard/TrendSection/styles.module.scss';
import { Revenue } from '@/data/overviewData';
import TrendBox from './TrendBox/TrendBox';

const TrendSection = () => {
  const data = Revenue.dashboardStats;

  return (
    <div className={styles.mainContainer}>
      <TrendBox
        title="Total Revenue"
        valueMain={`$ ${data.totalRevenue.value.toLocaleString()}`}
        subValue={data.totalRevenue.change.percentage}
        trendStatus={data.totalRevenue.change.status}
      />

      <TrendBox
        title="Total Order"
        valueMain={data.totalOrders.value.toLocaleString()}
        subValue={data.totalOrders.change.percentage}
        trendStatus={data.totalOrders.change.status}
      />

      <TrendBox
        title="Avg, Order Value"
        valueMain={`$ ${data.averageOrderValue.value.toLocaleString()}`}
        subValue={data.averageOrderValue.change.percentage}
        trendStatus={data.averageOrderValue.change.status}
      />

      <TrendBox
        title="Total Customer"
        valueMain={data.totalCustomers.value.toLocaleString()}
        subValue={data.totalCustomers.change.percentage}
        trendStatus={data.totalCustomers.change.status}
      />
    </div>
  );
};

export default TrendSection;
