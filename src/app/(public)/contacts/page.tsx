import ContactHeroSection from '@/components/pages/public/contact/hero-section';
import MainLayout from '@/core/layouts/Main.Layout';

export default function Contact() {
  const data = {
    title: 'THE CONTACT',
    desc: 'Hubungi untuk kolaborasi proyek, riset AI/IoT, atau pertukaran ide seputar pengembangan perangkat lunak.',
  };
  return (
    <MainLayout>
      <ContactHeroSection desc={data.desc} title={data.title} />
    </MainLayout>
  );
}

