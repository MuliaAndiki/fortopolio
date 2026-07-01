import AchievementsHeroSection from '@/components/pages/public/achievements/hero-section';
import MainLayout from '@/core/layouts/Main.Layout';

export default function Achievements() {
  const data = {
    title: 'MILESTONES',
    desc: 'Perjalanan dari mahasiswa Informatika hingga Top 180 Nasional Innovillage dan kontribusi organisasi kemahasiswaan.',
  };
  return (
    <MainLayout>
      <AchievementsHeroSection desc={data.desc} title={data.title} />
    </MainLayout>
  );
}
