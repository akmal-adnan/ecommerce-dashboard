'use client';

import { Product } from '@/types/product';
import Image from 'next/image';
import styles from './styles.module.scss';

interface ProductCardProps {
  product: Product;
  onViewProduct?: (id: number) => void;
}

const ProductCard = ({ product, onViewProduct }: ProductCardProps) => {
  const handleViewProduct = () => {
    if (onViewProduct) {
      onViewProduct(product.id);
    }
  };

  return (
    <div className={styles.cardContainer}>
      <div>
        <div className={styles.imageContainer}>
          {product.thumbnail ? (
            <Image
              src={product.thumbnail}
              alt={product.title}
              width={200}
              height={200}
            />
          ) : (
            <p className={styles.imagePlaceholderText}>Image here</p>
          )}
        </div>

        <div className={styles.categoryContainer}>
          <span className={styles.categoryLabel}>{product.category}</span>
          <span className={styles.skuLabel}>{product.sku}</span>
        </div>

        <h3 className={styles.productTitle}>{product.title}</h3>
      </div>

      <div style={{ display: 'flex', flexDirection: 'column' }}>
        <div className={styles.priceStockContainer}>
          <span className={styles.price}>${product.price.toFixed(2)}</span>
          <div className={styles.stockContainer}>
            <span className={styles.stockLabel}>Stock</span>
            <span className={styles.stockValue}>{product.stock}</span>
          </div>
        </div>

        <button className={styles.viewButton} onClick={handleViewProduct}>
          View Product
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
