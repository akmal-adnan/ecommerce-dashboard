'use client';
import styles from '@/components/Dashboard/ProductSalesChart/styles.module.scss';
import DATA from '@/data/overviewData';
import { useEffect, useState } from 'react';

import {
  CartesianGrid,
  Legend,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from 'recharts';

const ProductSalesChart = () => {
  const [isSmallScreen, setIsSmallScreen] = useState(false);

  useEffect(() => {
    const handleResize = () => setIsSmallScreen(window.innerWidth < 570);
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const formatMonth = (month: string) => {
    if (isSmallScreen) return month.charAt(0);
    return month;
  };

  return (
    <div className={styles.mainContainer}>
      <div className={styles.titleText}>Product Sales</div>
      <ResponsiveContainer width="100%" height={267}>
        <LineChart
          data={DATA.ChartsData}
          margin={{ top: 20, right: 10, left: -10, bottom: 0 }}
        >
          <CartesianGrid stroke="#f0f0f0" horizontal={false} />
          <XAxis
            dataKey="month"
            tick={{ fill: '#8c8c8c', fontSize: '12px' }}
            tickLine={false}
            axisLine={false}
            tickFormatter={formatMonth}
          />
          <YAxis
            tick={{ fill: '#8c8c8c', fontSize: '12px' }}
            tickLine={false}
            axisLine={false}
            domain={[200, 1300]}
          />
          <Tooltip
            contentStyle={{
              backgroundColor: '#fff',
              border: '1px solid #e5e7eb',
              borderRadius: '8px',
              boxShadow: '0 4px 12px rgba(0,0,0,0.05)',
            }}
          />
          <Legend
            verticalAlign="top"
            align="left"
            iconType="circle"
            iconSize={10}
            wrapperStyle={{ top: -10, left: 2, padding: 10 }}
          />

          <Line
            type="monotone"
            dataKey="unitsSold"
            stroke="#003df6"
            strokeWidth={3}
            dot={false}
            activeDot={{ r: 6 }}
            name="Unit Sold"
          />
          <Line
            type="monotone"
            dataKey="inventoryAvailable"
            stroke="#faad14"
            strokeWidth={3}
            dot={false}
            activeDot={{ r: 6 }}
            name="Inventory Available"
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default ProductSalesChart;
