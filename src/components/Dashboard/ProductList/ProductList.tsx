'use client';

import ProductCard from '@/components/Dashboard/ProductList/ProductCard/ProductCard';
import styles from '@/components/Dashboard/ProductList/styles.module.scss';
import { Product } from '@/types/product';

type ProductListProps = {
  productData: Product[];
};

const ProductList = ({ productData }: ProductListProps) => {
  return (
    <div className={styles.productListContainer}>
      {productData.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
};

export default ProductList;
