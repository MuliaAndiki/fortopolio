import SmartTalkHeroSection from '@/components/pages/public/smart-talk/hero-section';
import MainLayout from '@/core/layouts/Main.Layout';

export default function SmartTalk() {
  const data = {
    title: 'SMART TALKS',
    desc: 'Deep dives into engineering, soft skills, and the art of focused creation.',
  };
  return (
    <MainLayout>
      <SmartTalkHeroSection desc={data.desc} title={data.title} />
    </MainLayout>
  );
}

