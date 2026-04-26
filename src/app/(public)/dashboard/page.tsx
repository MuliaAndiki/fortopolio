import DashboardHeroSection from '@/components/pages/public/dashboard/hero-section';
import { SidebarLayout } from '@/core/layouts/sidebar.layout';

export default function Dashboard() {
  const raw = {
    title: 'Dashboard initial',
    desc: 'Dashboard Initial',
  };
  return (
    <SidebarLayout>
      <DashboardHeroSection desc={raw.desc} title={raw.title} />
    </SidebarLayout>
  );
}
