import Header from '@/components/Dashboard/Header/Header';
import Sidebar from '@/components/Dashboard/Sidebar/Sidebar';

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      <Header />
      <Sidebar />
      <main>{children}</main>
    </div>
  );
}
