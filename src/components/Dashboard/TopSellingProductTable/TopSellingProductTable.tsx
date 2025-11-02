'use client';

import DATA from '@/data/overviewData';
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from '@mui/material';
import { Filter, Gallery } from 'iconsax-reactjs';
import styles from './styles.module.scss';

const TopSellingProductTable = () => {
  const productData = DATA.TopSellingProducts;

  return (
    <div className={styles.mainContainer}>
      <div className={styles.titleContainer}>
        <p className={styles.titleText}>Top Selling Products</p>
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
                  Product Name
                </TableCell>
                <TableCell
                  align="right"
                  sx={{
                    backgroundColor: '#f5f5f5',
                    fontWeight: 600,
                    color: '#000',
                  }}
                >
                  Unit Sold
                </TableCell>
                <TableCell
                  align="right"
                  sx={{
                    backgroundColor: '#f5f5f5',
                    fontWeight: 600,
                    color: '#000',
                  }}
                >
                  Revenue
                </TableCell>
              </TableRow>
            </TableHead>

            <TableBody>
              {productData.map((item, index) => (
                <TableRow key={index} hover>
                  <TableCell sx={{ borderBottom: 'none' }}>
                    <div className={styles.productNameContainer}>
                      <div className={styles.imageContainer}>
                        <Gallery size={24} />
                      </div>
                      <p className={styles.textCell}>{item.name}</p>
                    </div>
                  </TableCell>

                  <TableCell align="right" sx={{ borderBottom: 'none' }}>
                    <p className={styles.textCell}>{item.unitsSold}</p>
                  </TableCell>
                  <TableCell align="right" sx={{ borderBottom: 'none' }}>
                    <p className={styles.textCell}>{item.revenue}</p>
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

export default TopSellingProductTable;
