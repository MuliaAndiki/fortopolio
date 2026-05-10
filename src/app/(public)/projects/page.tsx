import ProjectHeroSection from '@/components/pages/public/projects/hero-section';
import MainLayout from '@/core/layouts/Main.Layout';

export default function Project() {
  const data = {
    title: 'SELECTED WORKS',
    desc: 'A collection of digital artifacts, from IoT dashboards to smart learning platforms.',
  };
  return (
    <MainLayout>
      <ProjectHeroSection desc={data.desc} title={data.title} />
    </MainLayout>
  );
}

