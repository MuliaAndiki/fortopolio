import SmartTalkHeroSection from '@/components/pages/public/smart-talk/hero-section';
import MainLayout from '@/core/layouts/Main.Layout';

export default function SmartTalk() {
  const data = {
    title: 'SMART TALKS',
    desc: 'Catatan teknis seputar Computer Vision, Full Stack Development, dan integrasi API dari proyek nyata.',
  };
  return (
    <MainLayout>
      <SmartTalkHeroSection desc={data.desc} title={data.title} />
    </MainLayout>
  );
}

