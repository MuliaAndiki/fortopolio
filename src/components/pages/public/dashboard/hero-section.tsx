import InitialTemplateScreen from '@/components/templates/InitTemplate';
import { TemplateInitailProps } from '@/types/app';

const DashboardHeroSection: React.FC<TemplateInitailProps> = ({ desc, title }) => {
  return <InitialTemplateScreen desc={desc} title={title} />;
};

export default DashboardHeroSection;
