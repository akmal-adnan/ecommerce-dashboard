import styles from '@/components/Dashboard/TrendSection/TrendBox/styles.module.scss';
import { TrendDown, TrendUp } from 'iconsax-reactjs';

type Props = {
  title: string;
  valueMain: string;
  subValue: number;
  trendStatus: number;
};

const TrendBox = ({ title, valueMain, subValue, trendStatus }: Props) => {
  return (
    <div className={styles.boxContainer}>
      <p className={styles.titleText}>{title}</p>

      <h5 className={styles.valueText}>{valueMain}</h5>

      <div className={styles.trendGroup}>
        {trendStatus ? (
          <div className={styles.trendContainer}>
            <TrendUp size={16} className={styles.trendUpIcon} />
            <p className={styles.trendText}>{subValue}%</p>
          </div>
        ) : (
          <div className={`${styles.trendContainer} ${styles.trendDownColor}`}>
            <TrendDown
              size={16}
              className={`${styles.trendUpIcon} ${styles.trendDownTextColor}`}
            />
            <p className={`${styles.trendText} ${styles.trendDownTextColor}`}>
              {subValue}%
            </p>
          </div>
        )}

        <p className={styles.textSubs}>Than last month</p>
      </div>
    </div>
  );
};

export default TrendBox;
