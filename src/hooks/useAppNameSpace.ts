import { useTranslate } from './useLanguage';
export function useAppNameSpace() {
  const { t } = useTranslate();
  return { t };
}
