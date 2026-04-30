import SmartTalkHeroSection from '@/components/pages/public/smart-talk/hero-section';
import MainLayout from '@/core/layouts/Main.Layout';
export default function SmartTalk() {
  const raw = {
    title: 'Smart Talk screen',
    desc: 'Smart Talk Initial screen',
  };
  return (
    <MainLayout>
      <SmartTalkHeroSection desc={raw.desc} title={raw.title} />
    </MainLayout>
  );
}
