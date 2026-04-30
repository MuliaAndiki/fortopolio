import ChatRoomHeroSection from '@/components/pages/public/chat-room/hero-section';
import MainLayout from '@/core/layouts/Main.Layout';

export default function ChatRoom() {
  const raw = {
    title: 'Chat room',
    desc: 'initial schreen',
  };
  return (
    <MainLayout>
      <ChatRoomHeroSection desc={raw.desc} title={raw.title} />
    </MainLayout>
  );
}
