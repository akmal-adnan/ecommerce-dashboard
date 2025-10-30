'use client';

import Logo from '@/assets/icons/Logo';
import styles from '@/components/Dashboard/Sidebar/styles.module.scss';
import { useDrawerStore } from '@/hooks/useDrawerStore';
import {
  Box,
  Box1,
  Element4,
  Messages3,
  ReceiptText,
  User,
} from 'iconsax-reactjs';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useMemo } from 'react';

const NavLinks = [
  { label: 'Dashboard', href: '/dashboard', icon: <Element4 size="20" /> },
  {
    label: 'Orders',
    href: '/dashboard/orders',
    icon: <ReceiptText size="20" />,
  },
  { label: 'Products', href: '/dashboard/products', icon: <Box size="20" /> },
  {
    label: 'Inventory',
    href: '/dashboard/inventory',
    icon: <Box1 size="20" />,
  },
  {
    label: 'Message',
    href: '/dashboard/message',
    icon: <Messages3 size="20" />,
  },
  { label: 'Customer', href: '/dashboard/customer', icon: <User size="20" /> },
];

export default function Sidebar() {
  const { isDrawerOpen, closeDrawer } = useDrawerStore();
  const pathname = usePathname();

  const styleActive = useMemo(
    () => (isDrawerOpen ? styles.active : ''),
    [isDrawerOpen]
  );

  return (
    <div>
      <div
        onClick={closeDrawer}
        className={`${styles.mobileBackdrop} ${styleActive}`}
      />

      <div className={`${styles.mobileMenu} ${styleActive}`}>
        <div className={styles.logoContainer}>
          <Logo />
        </div>

        <div className={styles.linkContainer}>
          {NavLinks.map(({ label, href, icon }) => {
            const isActive = pathname === href;
            return (
              <Link
                key={href}
                href={href}
                className={`${styles.linkStyle} ${isActive ? styles.activeLink : ''}`}
              >
                <span>{icon}</span>
                {label}
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
}
