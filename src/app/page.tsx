import HeroSection from '@/components/pages/public/hero-section';
import { SidebarLayout } from '@/core/layouts/sidebar.layout';

export default function Home() {
  return (
    <SidebarLayout>
      <HeroSection />
    </SidebarLayout>
  );
}
