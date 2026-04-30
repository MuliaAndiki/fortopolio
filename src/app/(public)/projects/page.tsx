import ProjectHeroSection from '@/components/pages/public/projects/hero-section';
import MainLayout from '@/core/layouts/Main.Layout';

export default function Project() {
  const raw = {
    title: 'Project screen',
    desc: 'Project Initial screen',
  };
  return (
    <MainLayout>
      <ProjectHeroSection desc={raw.desc} title={raw.title} />
    </MainLayout>
  );
}
