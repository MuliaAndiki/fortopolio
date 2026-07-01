import AboutHeroSection from '@/components/pages/public/about/hero-section';
import MainLayout from '@/core/layouts/Main.Layout';

export default function About() {
  const data = {
    title: 'THE DOSSIER',
    desc: 'Software Engineer — mahasiswa Informatika Semester 6 USK dengan fokus Frontend, Backend, AI, dan IoT.',
  };
  return (
    <MainLayout>
      <AboutHeroSection desc={data.desc} title={data.title} />
    </MainLayout>
  );
}
