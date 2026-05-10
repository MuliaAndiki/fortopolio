import ChatRoomHeroSection from '@/components/pages/public/chat-room/hero-section';
import MainLayout from '@/core/layouts/Main.Layout';

export default function ChatRoom() {
  const data = {
    title: 'THE_TERMINAL',
    desc: 'Bypass the firewall. Leave your mark on the global guestbook.',
  };
  return (
    <MainLayout>
      <ChatRoomHeroSection desc={data.desc} title={data.title} />
    </MainLayout>
  );
}

