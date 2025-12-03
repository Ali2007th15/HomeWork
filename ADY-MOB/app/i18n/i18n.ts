import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import en from "./locales/en.json";
import ru from "./locales/ru.json";
import az from "./locales/az.json";

i18n
  .use(initReactI18next)
  .init({
    compatibilityJSON: "v4",

    // Язык по умолчанию
    lng: "en",

    // Запасной язык (если ключа нет в переводе)
    fallbackLng: "en",

    resources: {
      en: { translation: en },
      ru: { translation: ru },
      az: { translation: az }
    },

    interpolation: {
      escapeValue: false
    }
  });

export default i18n;
