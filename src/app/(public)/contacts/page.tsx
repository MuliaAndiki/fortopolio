import ContactHeroSection from '@/components/pages/public/contact/hero-section';
import MainLayout from '@/core/layouts/Main.Layout';

export default function Contact() {
  const raw = {
    title: 'contact screen',
    desc: 'initial contact screen',
  };
  return (
    <MainLayout>
      <ContactHeroSection desc={raw.desc} title={raw.title} />
    </MainLayout>
  );
}
