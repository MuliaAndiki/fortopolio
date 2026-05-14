import AchievementsHeroSection from '@/components/pages/public/achievements/hero-section';
import MainLayout from '@/core/layouts/Main.Layout';

export default function Achievements() {
  const data = {
    title: 'MILESTONES',
    desc: 'Tracing the journey from Natural Sciences to Software Engineering excellence.',
  };
  return (
    <MainLayout>
      <AchievementsHeroSection desc={data.desc} title={data.title} />
    </MainLayout>
  );
}
