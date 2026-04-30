import AchievementsHeroSection from '@/components/pages/public/achievements/hero-section';
import MainLayout from '@/core/layouts/Main.Layout';

export default function Achievements() {
  const raw = {
    title: 'Achievements Screen',
    desc: 'Initial Screen Achievements ',
  };
  return (
    <MainLayout>
      <AchievementsHeroSection desc={raw.desc} title={raw.title} />
    </MainLayout>
  );
}
