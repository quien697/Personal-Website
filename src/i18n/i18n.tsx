import i18n from 'i18next'
import { initReactI18next } from 'react-i18next';
import en from '@/locales/en/translation.json';
import zh_tw from '@/locales/zh_tw/translation.json';

const resources = {
  en: {
    translation: en,
  },
  zh_tw: {
    translation: zh_tw,
  },
}

i18n
.use(initReactI18next)
.init({
  resources,
  lng: "en",
  fallbackLng: "en",
  interpolation: {
    escapeValue: false,
  },
})

export default i18n