import styles from '@/app/dashboard/styles.module.scss';
import Header from '@/components/ui/Header/Header';
import Sidebar from '@/components/ui/Sidebar/Sidebar';

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      <Header />
      <Sidebar />
      <main className={styles.mainContainer}>{children}</main>
    </div>
  );
}
