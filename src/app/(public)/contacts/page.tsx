import ContactHeroSection from '@/components/pages/public/contact/hero-section';
import { SidebarLayout } from '@/core/layouts/sidebar.layout';

export default function Contact() {
  const raw = {
    title: 'contact screen',
    desc: 'initial contact screen',
  };
  return (
    <SidebarLayout>
      <ContactHeroSection desc={raw.desc} title={raw.title} />
    </SidebarLayout>
  );
}
