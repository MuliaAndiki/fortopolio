import ChatRoomHeroSection from '@/components/pages/public/chat-room/hero-section';
import { SidebarLayout } from '@/core/layouts/sidebar.layout';

export default function ChatRoom() {
  const raw = {
    title: 'Chat room',
    desc: 'initial schreen',
  };
  return (
    <SidebarLayout>
      <ChatRoomHeroSection desc={raw.desc} title={raw.title} />
    </SidebarLayout>
  );
}
