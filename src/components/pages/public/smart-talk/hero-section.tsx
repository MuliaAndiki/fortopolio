import InitialTemplateScreen from '@/components/templates/InitTemplate';

interface SmartTalkHeroSectionProps {
  title: string;
  desc: string;
}

const SmartTalkHeroSection: React.FC<SmartTalkHeroSectionProps> = ({ desc, title }) => {
  return <InitialTemplateScreen desc={desc} title={title} />;
};

export default SmartTalkHeroSection;
