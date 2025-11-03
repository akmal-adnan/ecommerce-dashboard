'use client';

import DATA from '@/data/overviewData';
import { getStatusColor } from '@/utils/statusHelpers';
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from '@mui/material';
import { Filter } from 'iconsax-reactjs';
import styles from './styles.module.scss';

const RecentOrderTable = () => {
  const orderData = DATA.RecentOrders;

  return (
    <div className={styles.mainContainer}>
      <div className={styles.titleContainer}>
        <p className={styles.titleText}>Recent Orders</p>
        <Filter size={24} />
      </div>

      <div className={styles.tableMainContainer}>
        <TableContainer
          className={styles.tableContainer}
          sx={{ maxHeight: '500px' }}
        >
          <Table stickyHeader>
            <TableHead>
              <TableRow>
                <TableCell
                  align="left"
                  sx={{
                    backgroundColor: '#f5f5f5',
                    fontWeight: 600,
                    color: '#000',
                  }}
                >
                  Order ID
                </TableCell>
                <TableCell
                  align="left"
                  sx={{
                    backgroundColor: '#f5f5f5',
                    fontWeight: 600,
                    color: '#000',
                  }}
                >
                  Customer
                </TableCell>
                <TableCell
                  align="left"
                  sx={{
                    backgroundColor: '#f5f5f5',
                    fontWeight: 600,
                    color: '#000',
                  }}
                >
                  Product
                </TableCell>
                <TableCell
                  align="left"
                  sx={{
                    backgroundColor: '#f5f5f5',
                    fontWeight: 600,
                    color: '#000',
                  }}
                >
                  Date
                </TableCell>
                <TableCell
                  align="center"
                  sx={{
                    backgroundColor: '#f5f5f5',
                    fontWeight: 600,
                    color: '#000',
                  }}
                >
                  Status
                </TableCell>
                <TableCell
                  align="right"
                  sx={{
                    backgroundColor: '#f5f5f5',
                    fontWeight: 600,
                    color: '#000',
                  }}
                >
                  Total
                </TableCell>
              </TableRow>
            </TableHead>

            <TableBody>
              {orderData.map((order, index) => (
                <TableRow key={index} hover>
                  <TableCell sx={{ borderBottom: 'none' }}>
                    <p className={styles.textCell}>{order.orderId}</p>
                  </TableCell>

                  <TableCell sx={{ borderBottom: 'none' }}>
                    <p className={styles.textCell}>{order.customerName}</p>
                  </TableCell>

                  <TableCell sx={{ borderBottom: 'none' }}>
                    <p className={styles.textCell}>{order.productName}</p>
                  </TableCell>

                  <TableCell sx={{ borderBottom: 'none' }}>
                    <p className={styles.textCell}>{order.orderDate}</p>
                  </TableCell>

                  <TableCell align="center" sx={{ borderBottom: 'none' }}>
                    <span
                      className={styles.statusBadge}
                      style={{ color: getStatusColor(order.status) }}
                    >
                      {order.status}
                    </span>
                  </TableCell>

                  <TableCell align="right" sx={{ borderBottom: 'none' }}>
                    <p className={styles.textCell}>${order.total.toFixed(2)}</p>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </div>
    </div>
  );
};

export default RecentOrderTable;
