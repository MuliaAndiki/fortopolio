import AboutHeroSection from '@/components/pages/public/about/hero-section';
import { SidebarLayout } from '@/core/layouts/sidebar.layout';

export default function About() {
  const raw = {
    title: 'About Screen',
    desc: 'Initial Screen About ',
  };
  return (
    <SidebarLayout>
      <AboutHeroSection desc={raw.desc} title={raw.title} />
    </SidebarLayout>
  );
}
