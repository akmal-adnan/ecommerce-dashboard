'use client';

import ProductCard from '@/components/Dashboard/ProductList/ProductCard/ProductCard';
import styles from '@/components/Dashboard/ProductList/styles.module.scss';
import { useGetProducts } from '@/hooks/apiQuery/useGetProducts';

type ProductListProps = {
  limit?: number;
  skip?: number;
};

const ProductList = ({ limit = 30, skip = 0 }: ProductListProps) => {
  const { data, isLoading, isError, error } = useGetProducts({ limit, skip });

  if (isLoading) {
    return (
      <div className={styles.loadingContainer}>
        <p>Loading products...</p>
      </div>
    );
  }

  if (isError) {
    return (
      <div className={styles.errorContainer}>
        <p>Error loading products: {error?.message}</p>
      </div>
    );
  }

  if (!data || data.products.length === 0) {
    return (
      <div className={styles.emptyContainer}>
        <p>No products found</p>
      </div>
    );
  }

  return (
    <div className={styles.productListContainer}>
      {data.products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
};

export default ProductList;
