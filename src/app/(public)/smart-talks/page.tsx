import SmartTalkHeroSection from '@/components/pages/public/smart-talk/hero-section';
import { SidebarLayout } from '@/core/layouts/sidebar.layout';
export default function SmartTalk() {
  const raw = {
    title: 'Smart Talk screen',
    desc: 'Smart Talk Initial screen',
  };
  return (
    <SidebarLayout>
      <SmartTalkHeroSection desc={raw.desc} title={raw.title} />
    </SidebarLayout>
  );
}
