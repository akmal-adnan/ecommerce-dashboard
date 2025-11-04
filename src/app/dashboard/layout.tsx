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
      <main style={{ backgroundColor: 'var(--bg-pale)' }}>{children}</main>
    </div>
  );
}
