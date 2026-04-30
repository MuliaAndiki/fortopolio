import AboutHeroSection from '@/components/pages/public/about/hero-section';
import MainLayout from '@/core/layouts/Main.Layout';

export default function About() {
  const raw = {
    title: 'About Screen',
    desc: 'Initial Screen About ',
  };
  return (
    <MainLayout>
      <AboutHeroSection desc={raw.desc} title={raw.title} />
    </MainLayout>
  );
}
