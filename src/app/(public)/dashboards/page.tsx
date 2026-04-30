import DashboardHeroSection from '@/components/pages/public/dashboard/hero-section';
import MainLayout from '@/core/layouts/Main.Layout';

export default function Dashboard() {
  const raw = {
    title: 'Dashboard initial',
    desc: 'Dashboard Initial',
  };
  return (
    <MainLayout>
      <DashboardHeroSection desc={raw.desc} title={raw.title} />
    </MainLayout>
  );
}
