'use client';

import styles from '@/app/dashboard/products/styles.module.scss';
import ButtonIcon from '@/components/ui/ButtonIcon/ButtonIcon';
import { InputAdornment, TextField } from '@mui/material';
import {
  Add,
  ArrangeVertical,
  Filter,
  RowVertical,
  SearchNormal1,
} from 'iconsax-reactjs';
import { useState } from 'react';

const buttonList = [
  { label: 'Published' },
  { label: 'Draft' },
  { label: 'Hidden' },
];

const ProductsPage = () => {
  const [activeButton, setActiveButton] = useState(buttonList[0].label);

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
              New Product
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
    </div>
  );
};

export default ProductsPage;
