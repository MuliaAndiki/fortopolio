import DashboardHeroSection from '@/components/pages/public/dashboard/hero-section';
import MainLayout from '@/core/layouts/Main.Layout';

export default function Dashboard() {
  const data = {
    title: 'THE ANALYTICS',
    desc: 'Real-time telemetry and operational statistics from the development front.',
  };
  return (
    <MainLayout>
      <DashboardHeroSection desc={data.desc} title={data.title} />
    </MainLayout>
  );
}
