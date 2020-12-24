import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import en from './locales/en.json';
import tw from './locales/zh-TW.json';


const resources = {
  en: {
    translation: en,
  },
  'zh-TW': {
    translation: tw,
  },
};

i18n.use(initReactI18next).init({
  resources,
  lng: 'zh-TW',
  fallbackLng: 'zh-TW',
  interpolation: {
    escapeValue: false,
  },
})

export default i18n;