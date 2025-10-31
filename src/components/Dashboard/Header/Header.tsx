'use client';

import styles from '@/components/Dashboard/Header/styles.module.scss';
import { useDrawerStore } from '@/hooks/useDrawerStore';
import { HamburgerMenu, Notification, SearchNormal1 } from 'iconsax-reactjs';
import Image from 'next/image';

const Header = () => {
  const { openDrawer } = useDrawerStore();

  return (
    <>
      <header className={styles.headerContainer}>
        <nav className={styles.navigationStyle}>
          <button className={styles.menuButton} onClick={openDrawer}>
            <HamburgerMenu size={24} />
          </button>

          <div className={styles.headerGroup}>
            <button className={styles.menuButton}>
              <SearchNormal1 size={24} />
            </button>

            <button className={styles.menuButton}>
              <Notification size={24} />
            </button>

            <div className={styles.imageContainer}>
              <Image
                className={styles.imageStyle}
                src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&q=80&w=380"
                alt="User"
                fill
              />
            </div>
          </div>
        </nav>
      </header>
    </>
  );
};

export default Header;
