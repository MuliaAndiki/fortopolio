import AchievementsHeroSection from '@/components/pages/public/achievements/hero-section';
import { SidebarLayout } from '@/core/layouts/sidebar.layout';

export default function Achievements() {
  const raw = {
    title: 'Achievements Screen',
    desc: 'Initial Screen Achievements ',
  };
  return (
    <SidebarLayout>
      <AchievementsHeroSection desc={raw.desc} title={raw.title} />
    </SidebarLayout>
  );
}
