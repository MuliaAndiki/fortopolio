import ProjectHeroSection from '@/components/pages/public/projects/hero-section';
import MainLayout from '@/core/layouts/Main.Layout';

export default function Project() {
  const data = {
    title: 'SELECTED WORKS',
    desc: 'Koleksi proyek dari platform pembelajaran 3D, Computer Vision, IoT/PWA, hingga sistem transaksi digital.',
  };
  return (
    <MainLayout>
      <ProjectHeroSection desc={data.desc} title={data.title} />
    </MainLayout>
  );
}
