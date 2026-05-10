import AboutHeroSection from '@/components/pages/public/about/hero-section';
import MainLayout from '@/core/layouts/Main.Layout';

export default function About() {
  const data = {
    title: 'THE DOSSIER',
    desc: 'Full-stack enthusiast, 6th-semester CS student, and UI/UX advocate based in Aceh, Indonesia.',
  };
  return (
    <MainLayout>
      <AboutHeroSection desc={data.desc} title={data.title} />
    </MainLayout>
  );
}

