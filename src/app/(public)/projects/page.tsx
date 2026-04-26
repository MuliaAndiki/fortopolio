import ProjectHeroSection from '@/components/pages/public/projects/hero-section';
import { SidebarLayout } from '@/core/layouts/sidebar.layout';

export default function Project() {
  const raw = {
    title: 'Project screen',
    desc: 'Project Initial screen',
  };
  return (
    <SidebarLayout>
      <ProjectHeroSection desc={raw.desc} title={raw.title} />
    </SidebarLayout>
  );
}
