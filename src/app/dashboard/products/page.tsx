'use client';

import styles from '@/app/dashboard/products/styles.module.scss';
import ProductList from '@/components/Dashboard/ProductList/ProductList';
import ButtonIcon from '@/components/ui/ButtonIcon/ButtonIcon';
import { useGetProducts } from '@/hooks/apiQuery/useGetProducts';
import { usePagination } from '@/hooks/usePagination';
import { InputAdornment, Pagination, Skeleton, TextField } from '@mui/material';
import {
  Add,
  ArrangeVertical,
  Filter,
  RowVertical,
  SearchNormal1,
} from 'iconsax-reactjs';
import { useMemo, useState } from 'react';

const buttonList = [
  { label: 'Published' },
  { label: 'Draft' },
  { label: 'Hidden' },
];

const limit = 30;

const ProductsPage = () => {
  const [activeButton, setActiveButton] = useState(buttonList[0].label);
  const { page, skip, handlePageChange } = usePagination({
    limit,
  });

  const { data, isLoading } = useGetProducts({ limit, skip });

  const totalPages = useMemo(() => {
    if (!data?.total) return 0;
    return Math.ceil(data.total / limit);
  }, [data?.total]);

  return (
    <div className={styles.mainContainer}>
      <div className={styles.headerGroup}>
        <div className={styles.titleTextContainer}>
          <h6>Products List</h6>
          <p>View, manage, and update your product.</p>
        </div>

        <div className={styles.searchGroupContainer}>
          <TextField
            className={styles.inputStyle}
            name="search-product"
            id="input-search-product"
            variant="outlined"
            placeholder="Search Product"
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <SearchNormal1 size="24" />
                </InputAdornment>
              ),
            }}
          />

          <div className={styles.buttonGroup}>
            <div className={styles.buttonSubGroup}>
              <ButtonIcon>
                <Filter size={24} />
              </ButtonIcon>

              <ButtonIcon>
                <RowVertical size={24} />
              </ButtonIcon>
            </div>

            <button className={styles.newProductButton}>
              <Add size={24} />
              <p className={styles.newProductButtonText}>New Product</p>
            </button>
          </div>
        </div>
      </div>

      <div className={styles.buttonListGroup}>
        <div className={styles.buttonListContainer}>
          {buttonList.map((item, index) => {
            return (
              <button
                key={index}
                className={`${styles.buttonListStyle} ${activeButton === item.label ? styles.buttonListActive : ''}`}
                onClick={() => setActiveButton(item.label)}
              >
                {item.label}
              </button>
            );
          })}
        </div>

        <ButtonIcon className={styles.lastAddedButton}>
          <ArrangeVertical size={24} />
          <p className={styles.lastAddedText}>Last Added</p>
        </ButtonIcon>
      </div>

      {isLoading && (
        <div className={styles.skeletonProductListContainer}>
          {Array.from({ length: 30 }).map((_, index) => (
            <Skeleton
              key={index}
              variant="rectangular"
              animation="wave"
              className={styles.skeletonProductCard}
            />
          ))}
        </div>
      )}

      {data && <ProductList productData={data.products} />}

      {totalPages > 1 && (
        <Pagination
          count={totalPages}
          page={page}
          onChange={handlePageChange}
          shape="rounded"
          className={styles.paginationContainer}
          sx={{
            '& .MuiPagination-ul': {
              gap: '4px',
            },

            '& .MuiPaginationItem-root': {
              color: 'var(--text-bold)',
              fontWeight: 'var(--font-medium)',
            },
            '& .MuiPaginationItem-root.Mui-selected': {
              backgroundColor: 'var(--bg-primary-normal)',
              color: 'var(--bg-white)',
              fontWeight: 'var(--font-semi-bold)',
            },
            '& .MuiPaginationItem-root.Mui-selected:hover': {
              backgroundColor: 'var(--bg-primary-bold)',
            },

            '& .MuiPaginationItem-root:hover': {
              backgroundColor: 'var(--bg-primary-pale)',
            },
          }}
        />
      )}
    </div>
  );
};

export default ProductsPage;
