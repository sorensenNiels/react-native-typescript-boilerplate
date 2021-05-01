import resources from '@I18n/locales';
import i18n, {LanguageDetectorAsyncModule} from 'i18next';
import {initReactI18next} from 'react-i18next';

const languageDetector: LanguageDetectorAsyncModule = {
  type: 'languageDetector',
  async: true,
  detect: (cb: Function) => cb('en'),
  init: () => {},
  cacheUserLanguage: () => {}
};

i18n
  .use(languageDetector)
  .use(initReactI18next)
  .init({
    fallbackLng: 'en',
    debug: true,
    resources,
    ns: ['common'],
    defaultNS: 'common'
  });

export default i18n;
