import ContactHeroSection from '@/components/pages/public/contact/hero-section';
import MainLayout from '@/core/layouts/Main.Layout';

export default function Contact() {
  const data = {
    title: 'THE CONTACT',
    desc: 'Establish a direct communication channel. Open for collaborations and artifacts exchange.',
  };
  return (
    <MainLayout>
      <ContactHeroSection desc={data.desc} title={data.title} />
    </MainLayout>
  );
}

